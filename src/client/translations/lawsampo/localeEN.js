export default {
  languageLabel: 'English',
  html: {
    title: 'LawSampo – Finnish Legislation and Case Law on the Semantic Web',
    description: 'LawSampo is a semantic portal which provides ready-to-use tooling for exploring and analyzing legal documents'
  },
  appTitle: {
    short: 'LawSampo',
    long: 'LawSampo',
    subheading: `
      Finnish Legislation and Case Law on the Semantic Web
    `
  },
  appDescription: `

  `,
  selectPerspective: 'Select an application perspective to search and browse the data:',
  selectPerspectiveExternal: 'Other applications based on LawSampo data:',
  mainPageImageLicence: 'Image used under license from Shutterstock.com',
  backendErrorText: 'One of the backend services is not available at the moment. Please try again later.',
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
    filters: 'Filters',
    activeFilters: 'Active filters:',
    defaultMissingValueLabel: 'Unknown',
    removeAllFilters: 'Remove all',
    narrowDownBy: 'Narrow down by',
    filterOptions: 'Filter options',
    filterByName: 'Filter by name',
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
    facetSearchFieldPlaceholder: 'Search...',
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
    content: 'contents',
    table: 'table',
    map: 'map',
    by_year: 'by year',
    network: 'network',
    export: 'export',
    statutes: 'Statutes',
    cases: 'Case Law',
    history: 'history',
    current: 'current version'
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
      label: 'Life Events',
      mainPageLabel: 'Life Events',
      facetResultsType: '',
      shortDescription: 'For legal documents based on life events and topics',
      longDescription: `
      <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      General
      </h3>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Life Events view provides an iterative search functionality which allows you
      to focus the search incrementally.
      </p>
      <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Instructions
      </h3>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      You first have to select the initial search parameters from the lefthand side.
      You can use either free text search or select one of the predefined main categories.
      First search results are shown after the selection and user interface swithes to
      mode designed to help you to focus the search by selecting additional categories or
      keywords.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      If you started with a text search, you can add a category information after initial
      information. On the other hand, if you already have selected a category, you can use
      the suggested keywords to specify the search. Results are updated after every change.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Positive keywords are selected using "+" icon and negative ones with a "-" icon. Documents
      containing positive keywords are included in the results whereas content associated with
      negative keywords are excluded from the results. Number after each keyword represents the
      weight of the keyword in the current result set.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Since suggested keywords only show 25 of the "best" keywords at a time, is is possible
      that specific keywords are not available after they have been removed from the search parameters.
      History of ten most recently removed keywords can be access by clicking the icon (three dots)
      which appears after active keywords.
      </p>
      `,
      inputPlaceHolder: '',
      facetBar: {
        searchTitle: 'Search',
        searchTitleInfo: 'Search can be initiated either with a keyword or by selecting a main category.',
        query: 'Text query',
        mainCategory: 'or select a main category:',
        suggestedCategories: 'Suggested categories',
        suggestedCategoriesInfo: 'These categories are dynamically selected based on the current state of the search.',
        suggestedKeywords: 'Suggested keywords',
        suggestedKeywordsInfo: 'These keywords are dynamically selected based on the current state of the search. Keywords can be added and removed using plus and minus actions.',
        addToSelected: 'Add to selected',
        selected: 'Selected',
        suggested: 'Suggested',
        clear: 'Clear'
      },
      initialResults: 'Select search parameters first from the left to see results.',
      removedKeywords: 'Removed keywords',
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        statute: {
          label: 'Statute',
          description: `
            Statute
          `
        },
        case: {
          label: 'Court decision',
          description: `
          Court decision
          `
        },
        prefLabel: {
          label: 'Section',
          description: `
            Section
          `
        },
        text: {
          label: 'Text',
          description: `
            Text
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
      shortDescription: 'Faceted search for consolidated statutes',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to the statutes of the Finnish
          consolidated legislation. The facets provide selections to filter the
          result set, which is shown on the table view. See <a href="/instructions">instructions</a>
          for filtering the results using the facets. The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view shows all statutes in the result set.
            One table row corresponds to one statute.
          </li>
          <li>
            <strong>EXPORT</strong> tab contains a link to open the SPARQL query used to generate the result
            table view into YASGUI query editor. This is intended for software developers.
          </li>
        </ul>
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
          description: 'Statute Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Statute',
          description: `
            Name of the statute
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
          textFacetInputPlaceholder: 'Search...',
          description: `
            Search statutes based on their textual contents
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
          label: 'Subject keyword (automatically identified)',
          description: `
            Subject keyword identified automatically from the statute contents
          `
        },
        situationCategory: {
          label: 'Life situation / topic (automatically identified)',
          description: `
            Life situation or topic identified automatically from the statute contents
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
            Enforcement date of the newest statute version
          `
        },
        euDirective: {
          label: 'EU directive',
          missingValueLabel: 'No directive',
          description: `
            Referenced EU directive
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
        },
        finlexLink: {
          label: 'Link to Finlex service',
          description: `
            Link to the statute in Finlex
          `
        },
        smurLink: {
          label: 'Link to Säädösmuutosten hakemisto',
          description: `
          Link to the statute in Säädösmuutosten hakemisto
        `
        }
      }
    },
    statutesHistory: {
      label: 'Statute history',
      mainPageLabel: 'Statute history',
      facetResultsType: 'statutes',
      shortDescription: 'Inspect statute version history',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        In this view, you can examine the statute version history of Finnish legislation.
        </p>
        <p>
        NB! The feature is still incomplete, and the legislative history is currently available for only a few statutes.
        Therefore, the result list on this page shows only those statutes for which the legislative history is available.
        At this time, filters cannot be used. The 'by year' tab is also not available.
        </p>
        <p>
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
        <li>
            <strong>TABLE</STRONG> view shows all statutes in the result set. One table row corresponds to one statute.
        </li>
        <li>
          <strong>EXPORT</strong> tab contains a link to open the SPARQL query used to generate the result
          table view into YASGUI query editor. This is intended for software developers.
        </li>
      </ul>
      `,
      instancePage: {
        label: 'Statute',
        description: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          This page shows the section-by-section version history of a single statute, the consolidated version of the statute, and the statute's metadata.
          <br/>
          NB! The feature is incomplete and the change history of the statute may contain errors.
          <br/>
          The view includes four tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            The <strong>HISTORY</STRONG> tab shows the section-by-section version history of the statute.
          </li>
          <li>
            The <strong>CURRENT VERSION</STRONG> tab shows the current consolidated version of the statute.
          </li>
          <li>
            The <strong>TABLE</STRONG> tab shows the metadata of the statute.
          </li>
          <li>
            The <strong>EXPORT</strong> tab contains a link to open the SPARQL query used to get the statute information
            into YASGUI query editor. This is intended for software developers.
          </li>
        </ul>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Statute Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Statute',
          description: `Name of the statute
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
          textFacetInputPlaceholder: 'Search...',
          description: `
            Search statutes based on their textual contents
          `
        },
        text: {
          label: 'Teksti',
          description: `
            Teksti
          `
        },
        identifier: {
          label: 'TunnIdentifieriste',
          description: `
          Identifier
          `
        },
        firstLevel: {
          label: 'Sections',
          description: `
            Sections
          `
        },
        subjectCategory: {
          label: 'Subject keyword (automatically identified)',
          description: `
            Subject keyword identified automatically from the statute contents
          `
        },
        situationCategory: {
          label: 'Life situation / topic (automatically identified)',
          description: `
          Life situation or topic identified automatically from the statute contents
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
          label: 'Voimaantulo',
          description: `
            Säädöksen uusimman version voimaantulopäivämäärä
          `
        },
        euDirective: {
          label: 'EU-direktiivi',
          missingValueLabel: 'ei direktiiviä',
          description: `
            Säädöksen viittaama EU-direktiivi
          `
        },
        statuteHistory: {
          label: 'Säädöshistoria',
          description: `
            Näytä vain säädökset, joille on saatavissa historiatiedot
          `
        },
        finlexLink: {
          label: 'Linkki Finlex-palveluun',
          description: `
            Linkki säädökseen Finlex-palvelussa
          `
        },
        smurLink: {
          label: 'Linkki Säädösmuutosten hakemistoon',
          description: `
            Linkki säädökseen Säädösmuutosten hakemistossa
          `
        },
        heLink: {
          label: 'Linkki hallituksen esitykseen',
          description: `
            Linkki hallituksen esitykseen (eduskunta.fi)
          `
        },
        lakitutkaLink: {
          label: 'Linkki Lakitutkaan',
          description: `
            Linkki hallituksen esitykseen Lakitutkassa
          `
        },
        wordcloud: {
          label: 'Sanapilvi',
          description: `
            Sanapilvi
          `
        },
        contentHTML: {
          label: 'Säädöksen sisältö',
          description: `
            Säädöksen sisältö
          `
        },
        contentHTMLAnnotated: {
          label: 'Säädöksen kontekstuaalinen sisältö',
          description: `
            Säädöksen kontekstuaalinen sisältö
          `
        }
      }
    },
    sections: {
      label: 'Sections',
      mainPageLabel: 'Legislation: Sections',
      facetResultsType: 'sections',
      shortDescription: 'Faceted search for sections of consolidated statutes',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to the sections of the Finnish
          consolidated legislation. The facets provide selections to filter the
          result set, which is shown on the table tab. See <a href="/instructions">instructions</a>
          for filtering the results using the facets. The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
        <li>
          <strong>TABLE</STRONG> tab shows all sections in the result set.
          One table row corresponds to one section.
        </li>
        <li>
          <strong>EXPORT</strong> tab contains a link to open the SPARQL query used to generate the result
          table tab into YASGUI query editor. This is intended for software developers.
        </li>
        </ul>
      `,
      instancePage: {
        label: 'Section',
        description: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          This landing page provides the content and metadata of a single statute
          of Finnish consolidated legislation. The information is based on the
          Semantic Finlex data.
          The view contains three tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>CONTENTS</STRONG> tab shows the contents of the statute on
            a contextual reader. Contextual information and links are shown when
            taking the cursor to highlighted entities.
          </li>
          <li>
            <strong>TABLE</STRONG> tab shows the metadata of the statute and
            a link to the statute in Finlex.
          </li>
          <li>
            <strong>EXPORT</strong> tab contains a link to open the statute
            query in YASGUI. This is intended for software developers.
          </li>
        </ul>
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
          textFacetInputPlaceholder: 'Search...',
          description: `
            Search sections based on their textual contents
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
          label: 'Subject keyword (automatically identified)',
          description: `
            Subject keyword identified automatically from the section contents
          `
        },
        situationCategory: {
          label: 'Life situation / topic (automatically identified)',
          description: `
            Life situation or topic identified automatically from the section contents
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
        statuteEnforcementDate: {
          label: 'Statute enforcement date',
          description: `
            Enforcement date of the newest statute version
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
    caselaw: {
      label: 'Case Law',
      mainPageLabel: 'Case Law',
      facetResultsType: 'court decisions',
      shortDescription: 'Faceted search for court decisions',
      longDescription: `
      <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      General
      </h3>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The Case law view contains published court decisions of the Supreme court and Supreme Administrative court of Finland
      from 1980 until 2019. In this view the user can browse and study the decisions.
      </p>
      <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      User manual
      </h3>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The Case Law view consists of two parts: the result set and facets. The facets are on the left hand side of the page and they can be used to
      scale the results set to find what the user is looking for. The results set is divided into three different tabs: Table, By Year, and Export. These tabs
      show the results in different formats. The table view shows the results as a list whereas the By Year tab shows a yearly distribution of the
      court decisions.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      In the <b>Table tab</b> the results are shown as a list that can be scaled down using the facets. The facets contain options to target different court decisions.
      The facets can be opened using the small arrow in the right hand side of the facet. This opens the facet and shows it's options (e.g., "Subject keyword")
      or text search field (e.g., "Free text search"). There is also a text search field to scale down the number of options in the facets with multiple choices.
      Some facets also contain a hierarchy for options (e.g., "Decision date") to help the user. These hierarchies can be browsed by clicking the arrow on the
      left hand side of the option.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Some of the options contain also a pie chart option to view the distribution of the values of the options in the data. In order to view the value distribution
      of the data, the user can click the pie chart icon located next to the arrow that can be used to open the facet. The pie chart icon is only available when the
      facet has been opened. By clicking the pie chart icon, the user is shown a pie chart on a white background. The user can see the legend on the top right corner
      of the view and the pie chart in the center. By hovering over the pie chart the user will get the legend for each piece of the pie. By clicking outside the
      view, the user can close the view.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      In the <b>By Year tab</b>, the user can look at the distribution of court decisions by year. By taking the mouse cursor on top of the line, the user will get the number of
      court decisions at the time. In this view the user can also use the facets to scale down the number of court decisions by year similarly to Table tab.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      In the <b>Export tab</b> the user can export the data into an external Yasgui application by clicking the button for that. Also here the resultset can be scaled down using the
      facets on the left hand side of the view.
      </p>

      `,
      instancePage: {
        label: 'Court decision',
        description: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          This landing page provides the content and metadata of a single court decision
          of Finnish Supreme Court or Supreme Administrative Court. The information is based on the
          Semantic Finlex data.
          The view contains three tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>CONTENTS</STRONG> tab shows the contents of the court decision on
            a contextual reader. Contextual information and links are shown when
            taking the cursor to highlighted entities.
          </li>
          <li>
            <strong>TABLE</STRONG> tab shows the metadata of the court decision and
            a link to the court decision in Finlex.
          </li>
          <li>
            <strong>EXPORT</strong> tab contains a link to open the court decision
            query in YASGUI.
          </li>
        </ul>

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
          textFacetInputPlaceholder: 'Search...',
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
        ecli: {
          label: 'ECLI identifier',
          description: 'ECLI identifier'
        },

        typeOfSourceData: {
          label: 'Type of source data',
          description: `
            Type of source data
          `
        },
        typeOftheMatter: {
          label: 'Procedural law',
          description: `
            Procedural law e.g., type of the matter
          `
        },
        subjectCategory: {
          label: 'Subject keyword (automatically identified)',
          description: `
            Subject keyword
          `
        },
        situationCategory: {
          label: 'Life situation / topic (automatically identified)',
          description: `
            Life situation / topic
          `
        },
        decisionDate: {
          label: 'Decision date',
          description: `
            Judgement date
          `
        },
        similarCourtDecicions: {
          label: 'Similar court decisions',
          description: `
            Textually similar court decisions
          `
        },
        referencedStatute: {
          label: 'Referenced consolidated statute',
          description: `
            Referenced statute
          `
        },
        language: {
          label: 'Language version',
          description: `
            Language version
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
        },
        finlexLink: {
          label: 'Link to Finlex service',
          description: `
            Link to Finlex service
          `
        }
      }
    },
    caselawfinder: {
      label: 'Case Law Finder',
      mainPageLabel: 'Case Law Finder',
      shortDescription: 'Document-based search for court decisions'
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
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Data sources
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The below table lists the data sources which have been used in creating the LawSampo data service.
    </p>
  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Using the LawSampo Portal
    </h1>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      General Idea
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The LawSampo Portal enables you to search and explore the legislative data originating from Semantic Finlex.
      In addition, the portal is equipped with ready-to-use tools for Digital Humanities research using the
      <a href="https://seco.cs.aalto.fi/publications/2020/hyvonen-sampos-dhn-2020.pdf" target='_blank' rel='noopener noreferrer'>
      "Sampo" model</a> where the portal is used as follows:
    </p>
    <ol class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
    <li class="MuiTypography-gutterBottom">
        On the front page of the portal different perspectives to the data are given as a selection: the statutes of
        consolidated legislation, the sections of consolidated legislation, case law, case law finder (external service), and
        contextual legislation search.
        The idea is to provide access to the underlying data (knowledge graph)
        through multiple use cases while the data remains the same.
      </li>
      <li class="MuiTypography-gutterBottom">
        In the perspectives of statutes, sections, and caselaw, the faceted search can be used for filtering out a subset
        of objects of the view, the “target group” of interest. For example, statutes of a given time period can be selected.
        By default the perspectives display all results from the corresponding class (Statute, Section, Case Law).
        This default result set can be narrowed down by using the filters.
      </li>
      <li class="MuiTypography-gutterBottom">
        Finally, visualization tools can be applied to study the target group. For example, it is possible
        to see on the temporal distribution of the court decisions of the case law.
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
      If you want to inspect the full raw data for any individual statute or other entity, click on the link of the entity.
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
      two different directives in the EU directive facet returns results that
      make references to either of them.
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
