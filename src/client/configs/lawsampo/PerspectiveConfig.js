import React from 'react'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
// import AddLocationIcon from '@material-ui/icons/AddLocation'
// import LocationOnIcon from '@material-ui/icons/LocationOn'
// import RedoIcon from '@material-ui/icons/Redo'
import LineChartIcon from '@material-ui/icons/ShowChart'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import sdfImage from '../../img/lawsampo/sdf-tumb.png'
import legislationImage from '../../img/lawsampo/legislation.png'
import caselawImage from '../../img/lawsampo/caselaw.png'

export const perspectiveConfig = [
  {
    id: 'legislation',
    frontPageImage: legislationImage,
    frontPageElement: 'card',
    perspectiveDescHeight: 160,
    defaultActiveFacets: new Set(['prefLabel']),
    tabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'export',
        value: 1,
        icon: <CloudDownloadIcon />
      }
    ],
    instancePageTabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },

      {
        id: 'export',
        value: 1,
        icon: <CloudDownloadIcon />
      }
    ]
  },
  {
    id: 'caselaw',
    frontPageImage: caselawImage,
    frontPageElement: 'card',
    perspectiveDescHeight: 160,
    defaultActiveFacets: new Set(['prefLabel']),
    tabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'by_year',
        value: 1,
        icon: <LineChartIcon />
      },
      {
        id: 'export',
        value: 2,
        icon: <CloudDownloadIcon />
      }
    ],
    instancePageTabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'network',
        value: 1,
        icon: <BubbleChartIcon />
      },
      {
        id: 'export',
        value: 2,
        icon: <CloudDownloadIcon />
      }
    ]
  },
  {
    id: 'caselawfinder',
    frontPageImage: sdfImage,
    frontPageElement: 'card',
    externalUrl: 'https://data.finlex.fi/document-finder'
  }
]
