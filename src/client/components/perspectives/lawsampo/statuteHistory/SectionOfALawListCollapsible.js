import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import Collapse from '@mui/material/Collapse'
import ObjectListItem from '../../../facet_results/ObjectListItem'
import { Button } from '@mui/material'

const useStyles = makeStyles(theme => ({
  valueList: {
    paddingLeft: 20,
    maxHeight: props => props.maxHeight,
    overflow: 'auto'
  },
  valueListNoBullets: {
    listStyle: 'none',
    paddingLeft: 0,
    maxHeight: props => props.maxHeight,
    overflow: 'auto'
  },
  numberedList: {
    maxHeight: 200,
    overflow: 'auto'
  },
  dateContainer: {
    width: 180,
    display: 'inline-block'
  },
  linkButton: {
    padding: 0,
    margin: 0,
    fontWeight: 'normal',
    whiteSpace: 'nowrap',
    minWidth: 'auto',
    textTransform: 'none'
  }
}))

const SectionOfALawListCollapsible = props => {
  const classes = useStyles(props)
  const { data, collapsible, selectedSection, setSelectedSection } = props

  const renderItem = ({ collapsed, itemData, isFirstValue = false }) => {
    if (isFirstValue && itemData.prefLabel === '') {
      itemData = {
        ...itemData,
        prefLabel: `${itemData.sectionNumber} §`
      }
    }
    return (
      <>
        <ObjectListItem
          data={itemData}
          makeLink={false}
          externalLink={false}
        />
        {collapsed && <span> ...</span>}
      </>
    )
  }

  const renderSectionLink = ({ section }) => {
    const chapterNumber = section.chapterNumber ? `chapter_${section.chapterNumber}_` : ''
    const sectionInfo = {
      key: `${chapterNumber}section_${section.sectionNumber}`,
      chapterNumber: section.chapterNumber,
      sectionNumber: section.sectionNumber,
      prefLabel: section.prefLabel
    }

    const color = selectedSection && selectedSection.key === sectionInfo.key ? 'secondary' : 'inherit'

    return (
      <Button className={classes.linkButton} variant='text' color={color} onClick={() => setSelectedSection(sectionInfo)}>
        {section.sectionNumber} § {section.prefLabel}
      </Button>
    )
  }

  const renderThreeLevelSectionListing = data => {
    let firstLevel = Array.isArray(data) ? data : [data]
    firstLevel = firstLevel.sort((a, b) => a.integer - b.integer || a.id - b.id)
    return (
      <ul className={classes.valueListNoBullets}>
        {firstLevel.map((firstLevelItem, index) => {
          let secondLevel = Array.isArray(firstLevelItem.secondLevel) ? firstLevelItem.secondLevel : [firstLevelItem.secondLevel]
          secondLevel = secondLevel.sort((a, b) => a.integer - b.integer || a.id - b.id)
          return (
            <li key={index}>
              {firstLevelItem.prefLabel}
              <ul>
                {secondLevel.map((secondLevelItem, index) => {
                  let sections = Array.isArray(secondLevelItem.section) ? secondLevelItem.section : [secondLevelItem.section]
                  sections = sections.sort((a, b) => a.sectionNumberInt - b.sectionNumberInt || a.sectionNumber - b.sectionNumber)
                  return (
                    <li key={index}>
                      {secondLevelItem.prefLabel}
                      <ul>
                        {sections.map((section, index) =>
                          <li key={index}>
                            {renderSectionLink({ section })}
                          </li>
                        )}
                      </ul>
                    </li>
                  )
                }
                )}
              </ul>
            </li>
          )
        })}
      </ul>
    )
  }

  const renderTwoLevelSectionListing = (data, orphanSections) => {
    let firstLevel = Array.isArray(data) ? data : [data]
    firstLevel = firstLevel.sort((a, b) => a.integer - b.integer || a.id - b.id)
    return (
      <ul className={classes.valueListNoBullets}>
        {firstLevel.map((firstLevelItem, index) => {
          let sections = Array.isArray(firstLevelItem.section) ? firstLevelItem.section : [firstLevelItem.section]
          sections = sections.sort((a, b) => a.sectionNumberInt - b.sectionNumberInt || a.sectionNumber - b.sectionNumber)
          return (
            <li key={index}>
              {firstLevelItem.prefLabel}
              <ul>
                {sections.map((section, index) =>
                  <li key={index}>
                    {renderSectionLink({ section })}
                  </li>
                )}
              </ul>
            </li>
          )
        })}
        {orphanSections && orphanSections.length > 0 &&
          <li key='ei_lukua'>
            Pykälät ilman lukua
            <ul>
              {orphanSections.map((section, index) =>
                <li key={index}>
                  {renderSectionLink({ section })}
                </li>
              )}
            </ul>
          </li>}
      </ul>
    )
  }

  const renderSectionListing = data => {
    let firstLevel = Array.isArray(data) ? data : [data]
    const orphanSections = []
    let hasChapters = false
    // check for mixed chapters and sections
    firstLevel.forEach(item => {
      if (item.section) {
        hasChapters = true
      }
    })
    if (hasChapters) {
      firstLevel = firstLevel.filter(item => {
        if (!item.section) {
          orphanSections.push(item)
          return false
        }
        return true
      })
      return renderTwoLevelSectionListing(firstLevel, orphanSections)
    }
    firstLevel = firstLevel.sort((a, b) => a.sectionNumberInt - b.sectionNumberInt || a.sectionNumber - b.sectionNumber)
    return (
      <ul className={classes.valueList}>
        {firstLevel.map((section, index) =>
          <li key={index}>
            {renderSectionLink({ section })}
          </li>
        )}
      </ul>
    )
  }

  if (data == null || data === '-') {
    return '-'
  } else if (Array.isArray(data)) {
    if (collapsible) {
      return (
        <>
          {!props.expanded && renderItem({ collapsed: true, itemData: data.sort((a, b) => a.integer - b.integer)[0], isFirstValue: true })}
          <Collapse in={props.expanded} timeout='auto' unmountOnExit>
            {props.hasParts && renderThreeLevelSectionListing(data)}
            {!props.hasParts && props.hasChapters && renderTwoLevelSectionListing(data)}
            {!props.hasParts && !props.hasChapters && renderSectionListing(data)}
          </Collapse>
        </>
      )
    } else {
      return (
        <>
          {props.hasParts && renderThreeLevelSectionListing(data)}
          {!props.hasParts && props.hasChapters && renderTwoLevelSectionListing(data)}
          {!props.hasParts && !props.hasChapters && renderSectionListing(data)}
        </>
      )
    }
  } else {
    return renderItem({ collapsed: false, itemData: data, isFirstValue: true })
  }
}

SectionOfALawListCollapsible.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
  expanded: PropTypes.bool.isRequired,
  columnId: PropTypes.string,
  linkAsButton: PropTypes.bool,
  showSource: PropTypes.bool
}

export default SectionOfALawListCollapsible
