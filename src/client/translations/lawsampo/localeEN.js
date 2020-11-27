export default {
  languageLabel: 'English',
  appTitle: {
    short: 'lawsampo',
    long: 'LawSampo',
    subheading: `
      Finnish Legislation and Case Law on the Semantic Web
    `
  },
  appDescription: `
   
  `,
  selectPerspective: 'Select an application perspective to search and browse the data:',
  mainPageImageLicence: 'Image used under license from Shutterstock.com',
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      blog: 'Project homepage',
      blogUrl: 'https://seco.cs.aalto.fi/projects/lakisampo/',
      aboutThePortal: 'About the Portal'
    },
    searchBarPlaceHolder: 'Search all content',
    searchBarPlaceHolderShort: 'Search',
    instructions: 'instructions'
  },
  facetBar: {
    results: 'Results',
    activeFilters: 'Active filters:',
    removeAllFilters: 'Remove all',
    narrowDownBy: 'Narrow down by',
    filterOptions: 'Filter options',
    filterByName: 'Filter by name',
    filterByBoundingBox: 'Filter by bounding box',
    selectionOptions: 'Selection options',
    selectAlsoSubconcepts: 'Automatically select all subconcepts',
    doNotSelectSubconcepts: 'Do not select subconcepts',
    sortingOptions: 'Sorting options',
    sortAlphabetically: 'Sort alphabetically',
    sortByNumberOfSearchResults: 'Sort by number of search results',
    useDisjunction: 'Use logical OR between selections',
    useConjuction: 'Use logical AND between selections',
    minYear: 'Min year',
    maxYear: 'Max year',
    min: 'Min',
    max: 'Max',
    applyFacetSelection: 'apply',
    pieChart: {
      tooltip: 'Pie chart'
    },
    barChart: {
      tooltip: 'Bar chart',
      language: {
        title: 'Language',
        xaxisTitle: 'Language',
        yaxisTitle: 'Manuscript count',
        seriesTitle: 'Manuscript count'
      }
    },
    lineChart: {
      tooltip: 'Line chart',
      statuteYear: {
        title: 'Statutes by year',
        xaxisTitle: 'Year',
        yaxisTitle: 'Number of statutes',
        seriesTitle: 'Number of statutes'
      }
    }
  },
  tabs: {
    table: 'table',
    map: 'map',
    by_year: 'by year',
    network: 'network',
    export: 'export',
    statutes: 'Lait ja säädökset',
    cases: 'Oikeustapaukset'
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  exportToYasgui: 'open the result table query in yasgui sparql editor',
  openInLinkedDataBrowser: 'open in linked data browser',
  resultsAsCSV: 'download the search results as a CSV table',
  facets: {
    dateFacet: {
      invalidDate: 'Epäkelpo päivämäärä.',
      toBeforeFrom: 'Alkupäivämäärän täytyy olla ennen loppupäivämäärää.',
      minDate: 'Aikaisin sallittu päivämäärä on {minDate}',
      maxDate: 'Myöhäisin sallittu päivämäärä on {maxDate}',
      cancel: 'Peruuta',
      fromLabel: 'Alku',
      toLabel: 'Loppu'
    },
    textFacet: {
      inputLabel: 'Etsi nimellä'
    },
    sliderFacet: {
      invalidStartOrEnd: 'Min value must be smaller than max value. The smallest value can be {min} and the largest value can be {max}.'
    }
  },
  leafletMap: {
    basemaps: {
      mapbox: {
        'light-v10': 'Mapbox Light'
      },
      googleRoadmap: 'Google Maps',
      topographicalMapNLS: 'Topographical map (National Land Survey of Finland)',
      backgroundMapNLS: 'Background map (National Land Survey of Finland)'
    },
    externalLayers: {
      arkeologiset_kohteet_alue: 'Register of Archaeological Sites, areas',
      arkeologiset_kohteet_piste: 'Register of Archaeological Sites, points',
      karelianMaps: 'Karelian maps, 1:100 000 topographic (SeCo)',
      senateAtlas: 'Senate atlas, 1:21 000 topographic (SeCo)',
      'kotus:pitajat': 'Finnish parishes in 1938 (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueet': 'Dialectical regions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueosat': 'Dialectical subregions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-lansi-ita': 'Border between western and eastern dialects in Finland (Institute for the Languages of Finland)'
    },
    mapModeButtons: {
      markers: 'Markers',
      heatmap: 'Heatmap'
    },
    wrongZoomLevel: 'The map zoom level has to at least 11',
    wrongZoomLevelFHA: 'The map zoom level has to be at least 13 in order to show this layer',
    tooManyResults: 'More than 3000 results, please use clustered map or heatmap'
  },
  deckGlMap: {
    arcColouring: 'Arc colouring:',
    showMoreInformation: 'Click to show more information.',
    manuscriptMigrations: {
      legendTitle: 'Arc colouring',
      legendFrom: 'Manuscript production place',
      legendTo: 'Last known location',
      from: 'Production place:',
      to: 'Last known location:',
      listHeadingSingleInstance: 'Manuscript:',
      listHeadingMultipleInstances: 'Manuscripts:'
    }
  },
  instancePageGeneral: {
    introduction: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        This landing page provides a human-readable summary of the data points that link
        to this {entity}. The data included in this summary reflect only those data points
        used in the MMM Portal. Click the Open in Linked Data Browser on button on the
        Export tab to view the complete set of classes and properties linked to this record.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        To cite this record, use its url. You can use also use the url to return directly
        to the record at any time.
      </p>
    `,
    repetition: `
      <h6 class="MuiTypography-root MuiTypography-h6">
        Repetition of data
      </h6>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        The same or similar data may appear within a single data field multiple times.
        This repetition occurs due to the merging of multiple records from different datasets
        to create the MMM record.
      </p>
    `
  },
  perspectives: {
    situations: {
      label: 'Elämäntilanteet',
      facetResultsType: 'situations',
      shortDescription: 'Data provided by...',
      longDescription: 'Data provided by...',
      inputPlaceHolder: '',
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Label',
          description: `
            Preferred label
          `
        },
        abstract: {
          label: 'Abstract',
          description: `
            Abstract
          `
        },
        court: {
          label: 'Court',
          description: `
            Name of the court
          `
        },
        decisionDate: {
          label: 'Decision date',
          description: `
            Judgement date
          `
        },
        enforcementDate: {
          label: 'Enforcement date',
          description: `
            Enforcement date
          `
        }
      }
    },
    statutes: {
      label: 'Statutes',
      mainPageLabel: 'Legislation: Statutes',
      facetResultsType: 'statutes',
      shortDescription: 'Faceted search for statutes',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to...
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          And...
        </p>
      `,
      instancePage: {
        label: 'Statute',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            This landing page provides a...
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Statute',
          description: `
            Preferred label
          `
        },
        statute: {
          label: 'Laws and acts',
          description: `
            Laws and acts
          `
        },
        jenaText: {
          label: 'Free text search',
          description: `
            Free text search
          `
        },
        text: {
          label: 'Text',
          description: `
            Text
          `
        },
        identifier: {
          label: 'Identifier',
          description: `
            Identifier
          `
        },
        section: {
          label: 'Section',
          description: `
            Section
          `
        },
        subjectCategory: {
          label: 'Subject',
          description: `
            Subject
          `
        },
        situationCategory: {
          label: 'Life situation',
          description: `
            Life situation
          `
        },
        documentType: {
          label: 'Document type',
          description: `
            Document type
          `
        },
        statuteType: {
          label: 'Type',
          description: `
            Type
          `
        },
        enforcementDate: {
          label: 'Enforcement date',
          description: `
            Enforcement date
          `
        },
        euDirective: {
          label: 'EU directive',
          description: `
            EU directive
          `
        },
        contentHTML: {
          label: 'Content (HTML)',
          description: `
            Content (HTML)
          `
        },
        contentHTMLAnnotated: {
          label: 'Annotated content (HTML)',
          description: `
            Annotated content (HTML)
          `
        }
      }
    },
    sections: {
      label: 'Sections',
      mainPageLabel: 'Legislation: Sections',
      facetResultsType: 'sections',
      shortDescription: 'Faceted search for sections',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to...
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          And...
        </p>
      `,
      instancePage: {
        label: 'Section',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            This landing page provides a...
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Section',
          description: `
            Preferred label
          `
        },
        statute: {
          label: 'Statute',
          description: `
            Laws and acts
          `
        },
        jenaText: {
          label: 'Free text search',
          description: `
            Free text search
          `
        },
        text: {
          label: 'Text',
          description: `
            Text
          `
        },
        identifier: {
          label: 'Identifier',
          description: `
            Identifier
          `
        },
        section: {
          label: 'Section',
          description: `
            Section
          `
        },
        subjectCategory: {
          label: 'Subject',
          description: `
            Subject
          `
        },
        situationCategory: {
          label: 'Life situation',
          description: `
            Life situation
          `
        },
        documentType: {
          label: 'Document type',
          description: `
            Document type
          `
        },
        statuteType: {
          label: 'Statute type',
          description: `
            Statute type
          `
        },
        enforcementDate: {
          label: 'Enforcement date',
          description: `
            Enforcement date
          `
        },
        euDirective: {
          label: 'EU directive',
          description: `
            EU directive
          `
        },
        contentHTML: {
          label: 'Content (HTML)',
          description: `
            Content (HTML)
          `
        },
        contentHTMLAnnotated: {
          label: 'Annotated content (HTML)',
          description: `
            Annotated content (HTML)
          `
        }
      }
    },
    legislation: {
      label: 'Legislation',
      facetResultsType: 'sections',
      shortDescription: 'Faceted search for consolidated legislation',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to...
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          And...
        </p>
      `,
      instancePage: {
        label: 'Legislation',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            This landing page provides a...
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Label',
          description: `
            Preferred label
          `
        },
        statute: {
          label: 'Laws and acts',
          description: `
            Laws and acts
          `
        },
        jenaText: {
          label: 'Free text search',
          description: `
            Free text search
          `
        },
        text: {
          label: 'Text',
          description: `
            Text
          `
        },
        identifier: {
          label: 'Identifier',
          description: `
            Identifier
          `
        },
        section: {
          label: 'Section',
          description: `
            Section
          `
        },
        subjectCategory: {
          label: 'Subject',
          description: `
            Subject
          `
        },
        situationCategory: {
          label: 'Life situation',
          description: `
            Life situation
          `
        },
        documentType: {
          label: 'Document type',
          description: `
            Document type
          `
        },
        statuteType: {
          label: 'Statute type',
          description: `
            Statute type
          `
        },
        enforcementDate: {
          label: 'Enforcemnt date',
          description: `
            Enforcement date
          `
        },
        euDirective: {
          label: 'EU directive',
          description: `
            EU directive
          `
        }
      }
    },
    caselaw: {
      label: 'Case Law',
      mainPageLabel: 'Case Law',
      facetResultsType: 'court decisions',
      shortDescription: 'Faceted search for court decisions',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to...
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          And...
        </p>
      `,
      instancePage: {
        label: 'Court decision',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            The MMM data model follows the
            <a href='https://www.ifla.org/publications/node/11240' target='_blank' rel='noopener noreferrer'>FRBRoo</a>
            definition of a work, which refers to
            “distinct concepts or combinations of concepts identified in artistic and
            intellectual expressions.” Works contain title and author information.
            This definition is not shared by the Bibale or Oxford Libraries’ conception
            of the term, which both define their internal “work” concept more closely to
            the FRBRoo conception of an Expression. The SDBM does not have a work concept
            at all, recording only the titles of the texts as given in its various sources,
            without normalizing that data or linking it directly to author information.
            Works were generated within the MMM dataset by manually creating links across
            the three datasets’ various conceptions of the relationship between authors
            and their creations. This process was not able to reconcile every work
            contained within the combined dataset.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Court decision',
          description: `
            Court decision
          `
        },
        jenaText: {
          label: 'Free text search',
          description: `
            Free text search
          `
        },
        abstract: {
          label: 'Abstract',
          description: `
            Abstract
          `
        },
        court: {
          label: 'Court',
          description: `
            Name of the court
          `
        },
        judge: {
          label: 'Judge',
          description: `
            Name(s) of the judge(s)
          `
        },
        typeOftheMatter: {
          label: 'Type of the matter',
          description: `
            Type of the matter
          `
        },
        subjectCategory: {
          label: 'Subject',
          description: `
            Subject
          `
        },
        situationCategory: {
          label: 'Life situation',
          description: `
            Life situation
          `
        },
        decisionDate: {
          label: 'Decision date',
          description: `
            Judgement date
          `
        },
        referencedStatute: {
          label: 'Referenced statute',
          description: `
            Referenced statute
          `
        },
        contentHTML: {
          label: 'Content (HTML)',
          description: `
            Content (HTML)
          `
        },
        contentHTMLAnnotated: {
          label: 'Annotated content (HTML)',
          description: `
            Annotated content (HTML)
          `
        }
      }
    },
    caselawfinder: {
      label: 'Case Law Finder',
      mainPageLabel: 'Case Law Finder',
      shortDescription: 'Document-based search for court decisions'
    },
    situations: {
      label: 'Contextual search',
      mainPageLabel: 'Contextual Search',
      shortDescription: 'Contextual search for legislation and court decisions'
    }
  },
  aboutThePortalPartOne: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      About the Portal
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      LawSampo system consists of two components. 1) The LawSampo portal with its different application perspectives 
      is targeted for human end-users for searching and exploring Finnish legislation and case law. 
      2) The portal is based on the Linked Open  Data service Semantic Finlex that publishes data of the national 
      Finlex service of the Ministry of Justice in Finland. The data service can be used freely for 
      application development and is available at the Finnish Linked Data service LDF.fi.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      LawSampo is a living laboratory prototype on the Web. It has been developed by the Semantic Computing Research 
      Group (SeCo) at various research projects with the Ministry of Justice and Edita Publishing Ltd in Aalto University 
      and Helsinki Centre for Digital Humanities (HELDIG) at the University of Helsinki in collaboration.
    </p>
  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Using the MMM Portal
    </h1>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      General Idea
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The MMM Portal enables you to search and browse through most of the data assembled by 
      the MMM project from the three source databases. In addition, the portal is equipped 
      with ready-to-use tools for Digital Humanities research using the 
      <a href="https://seco.cs.aalto.fi/publications/2020/hyvonen-sampos-dhn-2020.pdf" target='_blank' rel='noopener noreferrer'>
      "Sampo" model</a> where the portal is used as follows:
    </p>
    <ol class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
    <li class="MuiTypography-gutterBottom">
        On the front page of the portal different perspectives to the data are given as a selection, here Manuscripts, 
        Works, Events, Actors, and Places. The idea is to provide access to the underlying data (knowledge graph) 
        through multiple use cases while the underlying data remains the same.
      </li>
      <li class="MuiTypography-gutterBottom">
        After selecting a perspective, faceted search  can be used for filtering out a subset of objects of the view, 
        the “target group” of interest. For example, manuscripts by a given author in a time period can be selected. 
        By default each perspective displays all results from the corresponding class (Manuscripts, Works, Events, Actors, 
        or Places). This default result set can be narrowed down by using the filters.
      </li>
      <li class="MuiTypography-gutterBottom">
        Finally, data analysis and visualization tools can be applied to study the target group. For example, it is possible 
        to see on maps how the manuscripts have moved from the place of production to their last known location ("Migrations" 
        tab on the Manuscripts perspective). Map-based visualizations are available also in the Actors and Places perspectives.
      </li>
    </ol>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Using the "Export" tab in a perspective and then the button "Open SPARQL query in YASGUI" the SPARQL query corresponding to 
      the facet selections made is shown in the 
      <a href="https://yasgui.triply.cc" target='_blank' rel='noopener noreferrer'>
      YASGUI</a> SPARQL querying interface with the results. Additional YASGUI tools for studying the results and downloading 
      the data are available there. For example, the results of the query can be downloaded in CSV format for additional 
      spreadsheet computing. 
  </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      If you want to inspect the full raw data for any individual manuscript or other entity, click on the link of the entity.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using a Single Filter in Faceted Search
    </h2>
    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Selecting values within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      All possible values for a filter are displayed either as a list or as a hierarchical 
      tree (if available). The number of results is shown in brackets for each value. 
      Once a value is selected, the results are automatically updated. To prevent further 
      selections that do not return any results, also the possible values for all other 
      filters are updated at the same time.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Multiple values can be selected within a single filter. Selecting multiple values
      generates results that contain <strong>any</strong> of the selected values. For example, selecting
      both <i>Saint Augustine</i> and <i>Saint Jerome</i> as an Author returns results that
      include either <i>Saint Augustine</i> <strong>OR</strong> <i>Saint Jerome</i> as an Author.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Selected values of a filter appear in the Active filters section at the top of the list
      of filters. To deselect a filter, click the X mark next to it within the Active filters
      section. You can also deselect a filter value by unchecking the checkmark in the
      filter’s value list. The Active filters section only appears if there are filter
      values currently selected.
    </p>
    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Searching categories within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Category selections within a filter can be searched by using the search field at the 
      top of each filter. All possible values of a filter remain visible at all times. 
      The values of the filter that match the search term are indicated by a purple underline. 
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Steps for searching within filters:
    </p>
    <ol class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li class="MuiTypography-gutterBottom">
        Type search term into search field. If there are matches, a number
        will appear to the right of the search field, indicating the number
        of filter values that match the search term.
      </li>
      <li class="MuiTypography-gutterBottom">
        Click the arrows " <  > " to the right of the search field to cycle through 
        the results. As you click the arrow, a different filter value will appear 
        at the top of the list. Matched filters are underlined in purple.
      </li>
      <li class="MuiTypography-gutterBottom">
        Click the checkmark next to a filter value to activate it. 
        The results (and also other filters) are automatically updated. 
      </li>
    </ol>
    <p></p>      
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using Multiple Filters Simultaneously
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The effectiveness of faceted search is realized when multiple filters are
      applied at the same time. As in many e-commerce sites, a logical AND is
      always used between the filters. 
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      For example selecting <i>Saint Augustine </i>
      and <i>Saint Jerome</i> as an Author and <i>Sir Thomas Phillipps</i> and
      <i> Thomas Thorpe</i> as an Owner, the results are narrowed down as follows:
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Author: <i>Saint Augustine</i> <strong>OR</strong> Author: <i>Saint Jerome</i>)
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
        <strong>AND</strong>
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Owner: <i>Sir Thomas Phillipps</i> <strong>OR</strong> Owner: <i>Thomas Thorpe</i>)
    </p>
    <p></p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      In faceted search you can make selections in filters in any order, and the hit 
      counts in the other filters are automatically updated. In this way you never end 
      up in "no hits" dead ends.
    </p>
  `,
  feedback: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Feedback
    </h1>
    `
}
