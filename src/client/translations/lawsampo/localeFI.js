export default {
  languageLabel: 'Suomi',
  html: {
    title: 'Lakisampo – Lainsäädäntö ja oikeuskäytäntö semanttisessa webissä',
    description: 'Lakisampo-portaali tarjoaa työkaluja oikeudellisten aineistojen hakuun ja analysointiin'
  },
  appTitle: {
    short: 'Lakisampo',
    long: 'Lakisampo',
    subheading: `
      Lainsäädäntö ja oikeuskäytäntö semanttisessa webissä
    `
  },
  appDescription: `

  `,
  selectPerspective: 'Valitse näkymä aineiston hakua ja tutkimista varten:',
  selectPerspectiveExternal: 'Muut Lakisammon aineistoa hyödyntävät sovellukset:',
  mainPageImageLicence: 'Etusivun kuva: Shutterstock.com',
  backendErrorText: 'Yksi Lakisampo-portaalin taustapalveluista ei ole tällä hetkellä saatavilla. Ole hyvä ja yritä myöhemmin uudestaan.',
  topBar: {
    feedback: 'palaute',
    info: {
      info: 'Tietoa',
      blog: 'Projektin kotisivu',
      blogUrl: 'https://seco.cs.aalto.fi/projects/lakisampo/',
      aboutThePortal: 'Tietoa portaalista'
    },
    searchBarPlaceHolder: 'Etsi koko aineistosta',
    searchBarPlaceHolderShort: 'Haku',
    instructions: 'ohjeet',
    instructionsUrl: 'https://seco.cs.aalto.fi/projects/lakisampo/lakisammon-ohje.pdf'
  },
  facetBar: {
    results: 'Tulokset',
    filters: 'Suodattimet',
    activeFilters: 'Aktiiviset suodattimet:',
    defaultMissingValueLabel: 'Tieto puuttuu',
    removeAllFilters: 'Poista kaikki',
    narrowDownBy: 'Rajoita',
    filterOptions: 'Asetukset',
    filterByName: 'Hae nimellä',
    selectionOptions: 'Asetukset',
    selectAlsoSubconcepts: 'Hae myös alakäsitteillä',
    doNotSelectSubconcepts: 'Älä hae alakäsitteillä',
    sortingOptions: 'Järjestys',
    sortAlphabetically: 'Järjestä nimen mukaan',
    sortByNumberOfSearchResults: 'Järjestä hakutuloksien lukumäärän mukaan',
    useDisjunction: 'Käytä TAI-operaattoria valintojen välillä',
    useConjuction: 'Käytä JA-operaattoria valintojen välillä',
    minYear: 'Min year',
    maxYear: 'Max year',
    min: 'Min',
    max: 'Max',
    facetSearchFieldPlaceholder: 'Hae...',
    applyFacetSelection: 'päivitä',
    pieChart: {
      tooltip: 'Piirakkakaavio'
    },
    barChart: {
      tooltip: 'Pylväsdiagrammi',
      language: {
        title: 'Language',
        xaxisTitle: 'Language',
        yaxisTitle: 'Manuscript count',
        seriesTitle: 'Manuscript count'
      }
    },
    lineChart: {
      tooltip: 'Viivakaavio',
      statuteYear: {
        title: 'Säädöksiä vuosittain',
        xaxisTitle: 'Vuosi',
        yaxisTitle: 'Säädösten lukumäärä',
        seriesTitle: 'Säädösten lukumäärä'
      }
    }
  },
  tabs: {
    content: 'sisältö',
    table: 'tiedot',
    map: 'kartta',
    by_year: 'vuosijakauma',
    network: 'verkosto',
    export: 'avaa yasgui-sovelluksessa',
    statutes: 'Lainsäädäntö',
    cases: 'Oikeustapaukset',
    history: 'historia',
    current: 'ajantasainen versio'
  },
  table: {
    rowsPerPage: 'Riviä sivulla',
    of: 'of'
  },
  exportToYasgui: 'avaa tuloskysely yasgui-editorissa',
  openInLinkedDataBrowser: 'avaa linkitetyn datan selaimessa',
  resultsAsCSV: 'lataa tulokset CSV taulukkona',
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
    `,
    repetition: `
    `
  },
  perspectives: {
    situations: {
      label: 'Elämän aihepiirit',
      mainPageLabel: 'Elämän aihepiirit',
      facetResultsType: '',
      shortDescription: 'Hae pykäliä ja oikeustapauksia elämän aihepiirien avulla',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Elämäntilanteet-näkymä tarjoaa mahdollisuuden etsiä sopivia dokumentteja asteittain tarkentuvan haun avulla.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Valitse ensin alustavat hakuehdot vasemmasta sarakkeet. Voit käyttää tekstihakua tai valita yleisen
        pääkatetorian palautettaville tuloksille. Hakuehtojen jälkeen järjestelmä tekee ensimmäisen haun
        ja näyttää siihen liittyvät tulokset. "Hakuehdot" näkymä sulkeutuu ja käyttöön avautuu tulosten
        tarkentamiseen liittyvät "Suositellut kategoriat" ja "Suositellut asiasanat" toiminnot.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Jos teit alussa tekstihaun, voit valita sekä tarkentavat kategorian että asiasanoja.
        Muussa tapauksessa hauan tarkentaminen onnistuu vain asiasanojen avulla. Tarkentavat tiedot
        päivittyvät jokaisen asiasana- tai kategoriamuutoksen jälkeen.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Asiasanojen valinta tapahtuu klikkaamalla joko "+" tai "-" ikonia ja lopuksi "Lisää valitut" painiketta.
        "+"-ikonilla valitut asiasanat esiintyvät tulosdokumenteissa ja punaisella "-"-ikonilla valittuja
        asiasanoja sisältävät dokumentit rajataan pois tuloksista. Asiasanojen jäljessä olevat numero
        kertoo kyseisen termin painoarvon nykyisessä tulosjoukossa.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Koska suositelluissa asiasanoissa näytetään vain 25 parasta/osuvinta valintaa, on mahdollista
        tietty asiasana ei ole enää valittavissa hakuehdoista poistamisen jälkeen. Klikkaamalla valittujen
        asiasanojen jälkeen näkyvää ikonia (kolme pistettä), saat näkyvin kymmenen viimeksi poistettua
        uniikkia asiasanaa.
        </p>
      `,
      inputPlaceHolder: '',
      facetBar: {
        searchTitle: 'Hakuehdot',
        searchTitleInfo: 'Haku voidaan käynnistää joko avainsanahaulla tai valitsemalla sopiva pääkategoria.',
        query: 'Tekstihaku',
        mainCategory: 'tai valitse pääkategoria:',
        suggestedCategories: 'Suositellut kategoriat',
        suggestedCategoriesInfo: 'Suositellut kategoriat valitaan dynaamisesti haun sisällön mukaan.',
        suggestedKeywords: 'Asiasanat',
        suggestedKeywordsInfo: 'Suositellut asiasant valitaan dynaamisesti haun sisällön mukaan.',
        addToSelected: 'Lisää valittuihin',
        selected: 'Valitut',
        suggested: 'Suositellut',
        clear: 'Tyhjennä'
      },
      initialResults: 'Valitse ensin hakuehdot vasemmalta.',
      removedKeywords: 'Poistetut avainsanat',
      properties: {
        uri: {
          label: 'URI-tunniste',
          description: 'Uniform Resource Identifier -tunniste'
        },
        statute: {
          label: 'Säädös',
          description: `
            Säädös
          `
        },
        case: {
          label: 'Oikeustapaus',
          description: `
          Oikeustapaus
          `
        },
        prefLabel: {
          label: 'Pykälä',
          description: `
            Pykälä
          `
        },
        text: {
          label: 'Teksti',
          description: `
            Teksti
          `
        },
        abstract: {
          label: 'Tiivistelmä',
          description: `
            Tiivistelmä
          `
        },
        court: {
          label: 'Tuomioistuin',
          description: `
            Tuomioistuimen nimi
          `
        },
        decisionDate: {
          label: 'Päätöksen päivämäärä',
          description: `
            Tuomion päivämäärä
          `
        },
        enforcementDate: {
          label: 'Voimaantulo',
          description: `
            Voimaantulopäivämäärä
          `
        }
      }
    },
    statutes: {
      label: 'Lainsäädäntö',
      mainPageLabel: 'Lainsäädäntö',
      facetResultsType: 'säädöstä',
      shortDescription: 'Hae lakeja, asetuksia ja päätöksiä',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tässä näkymässä voit tutkia Suomen ajantasaista lainsäädäntöä ja voimassa olevia alkuperäisiä säädöksiä.
          Vasemmalla olevien suodattimien avulla voit rajoittaa oikealla puolella näkyvää tulosjoukkoa.
          Ohjeet suodattimien käyttöön löytyy <a href="/instructions">ohjeet</a>-sivulta.
        <br />
          Tulosnäkymä voidaan valita näkymän välilehdiltä:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
        <li>
          <strong>TIEDOT</STRONG>-välilehti näyttää kaikki tulosjoukon säädökset taulukkona, jossa yksi rivi vastaa yhtä säädöstä.
          Säädösten tiedot näkyvät tulostaulukossa sarakkeittain, säädöksen nimen toimiessa linkkinä säädöksen tietosivulle.
          Säädöksen sisältämät pykälät näkyvät listana Pykälät-sarakkeessa.
        </li>
        <li>
          <strong>AVAA YASGUI-SOVELLUKSESSA</strong>-välilehti sisältää linkin
          tulosjoukon palauttavan kyselyn avaamiseen YASGUI-sovelluksessa. Tämä välilehti on tarkoitettu sovelluskehittäjille. Avattavaa tulosjoukkoa voi rajata myös tässä näkymässä käyttämällä
          vasemmalla olevien valikkojen arvoja.
        </li>
      </ul>
      `,
      instancePage: {
        label: 'Säädös',
        description: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tämä sivu näyttää yhden ajantasaisen lainsäädännön säädöksen sisällön ja metatiedot.
          Säädösten tiedot perustuvat Semanttisen Finlexin aineistoon.
          Näkymä sisältää kolme välilehteä:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>SISÄLTÖ</STRONG>-välilehti näyttää säädöksen tekstisisällön kontekstuaalisessa
            lukijassa, joka näyttää käsitteiden selityksiä ja linkkejä viedessäsi
            kursorin niiden kohdalle.
          </li>
          <li>
            <strong>TIEDOT</STRONG>-välilehti näyttää säädöksen metatiedot
            ja linkin säädökseen Finlexissä.
          </li>
          <li>
            <strong>AVAA YASGUI-SOVELLUKSESSA</strong>-välilehti sisältää linkin
            säädöksen tiedot palauttavan kyselyn avaamiseen YASGUI-sovelluksessa. Tämä välilehti on tarkoitettu sovelluskehittäjille.
          </li>
        </ul>
        `
      },
      properties: {
        uri: {
          label: 'URI-tunniste',
          description: 'Säädöksen Uniform Resource Identifier -tunniste'
        },
        prefLabel: {
          label: 'Säädös',
          description: `Säädöksen nimi
          `
        },
        statute: {
          label: 'Laws and acts',
          description: `
            Laws and acts
          `
        },
        jenaText: {
          label: 'Vapaatekstihaku',
          textFacetInputPlaceholder: 'Hae...',
          description: `
            Hae säädöksiä niiden tekstisisältöjen perusteella
          `
        },
        text: {
          label: 'Teksti',
          description: `
            Teksti
          `
        },
        identifier: {
          label: 'Tunniste',
          description: `
            Säädöksen tunniste
          `
        },
        firstLevel: {
          label: 'Pykälät',
          description: `
            Pykälät
          `
        },
        subjectCategory: {
          label: 'Aihe (autom. tunnistettu)',
          description: `
            Säädöksen sisällön perusteella automaattisesti tunnistettu aihe
          `
        },
        situationCategory: {
          label: 'Elämän aihepiiri (autom. tunnistettu)',
          description: `
            Säädöksen sisällön perusteella automaattisesti tunnistettu säädökseen liittyvä elämäntilanne
          `
        },
        documentType: {
          label: 'Dokumenttiluokka',
          description: `
            Dokumenttiluokka
          `
        },
        statuteType: {
          label: 'Säädöksen tyyppi',
          description: `
            Säädöksen tyyppi
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
    statutesHistory: {
      label: 'Säädöshistoria',
      mainPageLabel: 'Säädöshistoria',
      facetResultsType: 'säädöstä',
      shortDescription: 'Tarkastele säädösten muutoshistoriaa\n (HUOM! Keskeneräinen ominaisuus, nähtävissä vain muutamalle säädökselle)',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tässä näkymässä voit tarkastella Suomen lainsäädännön muutoshistoriaa.
        </p>
        <p>
        HUOM!
         Ominaisuus on vielä keskeneräinen ja säädöshistoria on toistaiseksi saatavilla vain muutamalle säädökselle. 
         Tämän sivun tuloslistassa näytetään vain ne säädökset, joille säädöshistoria on saatavilla. 
         Tulosten suodattamiseen ei toistaiseksi voi käyttää suodattimia. Myöskään vuosinäkymä-välilehti ei ole käytössä.
        </p>
        <p>
          Tulosnäkymä voidaan valita näkymän välilehdiltä:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
        <li>
          <strong>TIEDOT</STRONG>-välilehti näyttää kaikki tulosjoukon säädökset taulukkona, jossa yksi rivi vastaa yhtä säädöstä.
          Säädösten tiedot näkyvät tulostaulukossa sarakkeittain, säädöksen nimen toimiessa linkkinä säädöksen tietosivulle.
        </li>
        <li>
          <strong>AVAA YASGUI-SOVELLUKSESSA</strong>-välilehti sisältää linkin
          tulosjoukon palauttavan kyselyn avaamiseen YASGUI-sovelluksessa. Tämä välilehti on tarkoitettu sovelluskehittäjille. Avattavaa tulosjoukkoa voi rajata myös tässä näkymässä käyttämällä
          vasemmalla olevien valikkojen arvoja.
        </li>
      </ul>
      `,
      instancePage: {
        label: 'Säädös',
        description: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tämä sivu näyttää yhden säädöksen pykäläkohtaisen versiohistorian, säädöksen ajantasaisen sisällön sekä säädöksen metatiedot.
          </p>
          <p>
          <strong>HUOM! Ominaisuus on keskeneräinen ja säädöksen muutoshistoriassa saattaa olla virheitä ja puutteita.</strong>
          </p>
          <p>
          Näkymä sisältää neljä välilehteä:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>HISTORIA</STRONG>-välilehti näyttää säädöksen muutoshistorian pykäläkohtaisesti.
          </li>
          <li>
            <strong>AJANTASAINEN VERSIO</STRONG>-välilehti näyttää säädöksen ajantasaisen version tekstin.
          </li>
          <li>
            <strong>TIEDOT</STRONG>-välilehti näyttää säädöksen metatiedot.
          </li>
          <li>
            <strong>AVAA YASGUI-SOVELLUKSESSA</strong>-välilehti sisältää linkin
            säädöksen tiedot palauttavan kyselyn avaamiseen YASGUI-sovelluksessa. Tämä välilehti on tarkoitettu sovelluskehittäjille.
          </li>
        </ul>
        `
      },
      properties: {
        uri: {
          label: 'URI-tunniste',
          description: 'Säädöksen Uniform Resource Identifier -tunniste'
        },
        prefLabel: {
          label: 'Säädös',
          description: `Säädöksen nimi
          `
        },
        statute: {
          label: 'Laws and acts',
          description: `
            Laws and acts
          `
        },
        jenaText: {
          label: 'Vapaatekstihaku',
          textFacetInputPlaceholder: 'Hae...',
          description: `
            Hae säädöksiä niiden tekstisisältöjen perusteella
          `
        },
        text: {
          label: 'Teksti',
          description: `
            Teksti
          `
        },
        identifier: {
          label: 'Tunniste',
          description: `
            Säädöksen tunniste
          `
        },
        firstLevel: {
          label: 'Pykälät',
          description: `
            Pykälät
          `
        },
        subjectCategory: {
          label: 'Aihe (autom. tunnistettu)',
          description: `
            Säädöksen sisällön perusteella automaattisesti tunnistettu aihe
          `
        },
        situationCategory: {
          label: 'Elämän aihepiiri (autom. tunnistettu)',
          description: `
            Säädöksen sisällön perusteella automaattisesti tunnistettu säädökseen liittyvä elämäntilanne
          `
        },
        documentType: {
          label: 'Dokumenttiluokka',
          description: `
            Dokumenttiluokka
          `
        },
        statuteType: {
          label: 'Säädöksen tyyppi',
          description: `
            Säädöksen tyyppi
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
            Säädökset, joille on saatavissa historiatiedot
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
      label: 'Pykälät',
      mainPageLabel: 'Pykälät',
      facetResultsType: 'pykälää',
      shortDescription: 'Hae yksittäisiä lainsäädännön pykäliä',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tässä näkymässä voit tutkia Suomen ajantasaisen lainsäädännön ja voimassa olevien alkuperäisten säädösten pykäliä.
          Vasemmalla olevien suodattimien avulla voit rajoittaa oikealla puolella näkyvää tulosjoukkoa.
          Ohjeet suodattimien käyttöön löytyy <a href="/instructions">ohjeet</a>-sivulta.
        <br />
          Tulosnäkymä voidaan valita näkymän välilehdiltä:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
        <li>
          <strong>TIEDOT</STRONG>-välilehti näyttää kaikki tulosjoukon pykälät taulukkona, jossa yksi rivi vastaa yhtä pykälää.
          Pykälien tiedot näkyvät tulostaulukossa sarakkeittain.
          Säädöksen nimi toimii linkkinä säädöksen tietosivulle ja Pykälä-sarakkeen arvot toimivat linkkeinä tietyn pykälän tekstiin säädöksen sivulla.
        </li>
        <li>
          <strong>AVAA YASGUI-SOVELLUKSESSA</strong>-välilehti sisältää linkin
          tulosjoukon palauttavan kyselyn avaamiseen YASGUI-sovelluksessa. Tämä välilehti on tarkoitettu sovelluskehittäjille. Avattavaa tulosjoukkoa voi rajata myös tässä näkymässä käyttämällä
          vasemmalla olevien valikkojen arvoja.
        </li>
        </ul>
      `,
      instancePage: {
        label: 'Pykälä',
        description: `
        `
      },
      properties: {
        uri: {
          label: 'URI-tunniste',
          description: 'Uniform Resource Identifier -tunniste'
        },
        prefLabel: {
          label: 'Pykälä',
          description: `
          `
        },
        statute: {
          label: 'Säädös',
          description: `Säädös, johon pykälä kuuluu
          `
        },
        jenaText: {
          label: 'Vapaatekstihaku',
          textFacetInputPlaceholder: 'Hae...',
          description: `
            Hae pykäliä niiden tekstisisältöjen perusteella
          `
        },
        text: {
          label: 'Teksti',
          description: `
            Teksti
          `
        },
        identifier: {
          label: 'Tunniste',
          description: `
            Tunniste
          `
        },
        section: {
          label: 'Pykälä',
          description: `
            Pykälä
          `
        },
        subjectCategory: {
          label: 'Aihe (autom. tunnistettu)',
          description: `
            Pykälän sisällön perusteella automaattisesti tunnistettu aihe
          `
        },
        situationCategory: {
          label: 'Elämän aihepiiri (autom. tunnistettu)',
          description: `
            Pykälän sisällön perusteella automaattisesti tunnistettu pykälään liittyvä elämäntilanne
          `
        },
        documentType: {
          label: 'Dokumenttiluokka',
          description: `
            Dokumenttiluokka
          `
        },
        statuteType: {
          label: 'Säädöksen tyyppi',
          description: `
            Säädöksen tyyppi
          `
        },
        statuteEnforcementDate: {
          label: 'Säädöksen voimaantulo',
          description: `
            Säädöksen uusimman version voimaantulopäivämäärä
          `
        },
        sectionEnforcementDate: {
          label: 'Pykälän voimaantulo',
          description: `
            Pykälän voimaantulopäivämäärä
          `
        },
        euDirective: {
          label: 'EU-direktiivi',
          description: `
            EU-direktiivi
          `
        },
        contentHTML: {
          label: 'Pykälän sisältö',
          description: `
            Sisältö
          `
        },
        contentHTMLAnnotated: {
          label: 'Pykälän kontekstuaalinen sisältö',
          description: `
            Kontekstuaalinen sisältö
          `
        }
      }
    },
    caselaw: {
      label: 'Oikeuskäytäntö',
      mainPageLabel: 'Oikeuskäytäntö',
      facetResultsType: 'oikeustapausta',
      shortDescription: 'Hae oikeustapauksia',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Oikeuskäytäntö-näkymässä voi selata Korkeimman hallinto-oikeuden tai Korkeimman oikeuden julkaisemia päätöksiä vuosien 1980-2019 välillä.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Näkymä koostuu tulosjoukosta ja valikoista, joilla voi rajata tulosjoukkoa. Näkymässä vasemmalla on rajauksia varten erilaisia valikoita, joissa on arvoja joiden
        perusteella voidaan rajata tulosjoukkoa. Tulosjoukkoa voi tarkastella kolmella eri välilehdellä: Taulukko, Vuosijakauma, ja Avaa YASGUI-sovelluksessa.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Tulosjoukko esitetään oikealla <b>Taulukko-välilehdellä</b>. Suodattaaksesi tulosjoukkoa
        valitse vasemman puolisista valikoista tulosjoukon ominaisuuksia, joita haluat tuloksen sisältävän. Valikot
        avautuvat klikkaamalla valikon oikeassa reunassa olevaa väkästä. Tämän jälkeen valikkoon avautuu valikko,
        johon voi kirjoittaa haluamansa hakutermin, jolla hakea tuloksia tuloslistaukseen (esim. "Vapaatekstihaku") tai rajatakseen valikon
        arvoja (esim. "Aihe"), jos valikossa on useampia vaihtoehtoja. Jos valikko sisältää useita vaihtoehtoja, niitä klikkaamalla
        voi rajata tulosjoukkoa niihin tapauksiin, jotka sisältävät ominaisuuden. Osa valikkojen vaihtoehdoista on porrastettu tai
        niillä on hierarkia (esim. "Antopäivä"), jolloin vaihtoehtoja voi selata myös klikkaamalla vaihtoehdon edessä olevaa nuolta, jolloin
        sen alle avautuu lista tarkempia vaihtoehtoja.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Osalla vasemman reunan valikoista sisältää myös mahdollisuuden tarkastella aineiston vaihtoehtojen jakaumaa. Tarkastellakseen valikon arvojen
        jakaumaa, käyttäjä voi klikata valikon aukaisevan/sulkevan nuolen vierestä löytyvää piirakkaa. Tämän jälkeen näytöllä avautuu piirakkakaavio
        arvojakaumasta ja kuvan oikeassa yläkulmassa näkyvät selitteet. Samat selitteet näkee myös viemällä hiiren piirakan palan kohdalle.
        Piirakan saa suljettua klikkaamalla piirakan ulkopuolelle.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        <b>Vuosijakauma -välilehdessä</b> käyttäjä voi tarkastella oikeustapausten jakaumaa antovuoden perusteella. Viemällä hiiren kuvaajan janan päälle,
        käyttäjä voi saada arvot näkyviin janalla tiettynä ajanhetkenä.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        <b>Avaa YASGUI-sovelluksessa -välilehdellä</b> voi avata tulokset YASGUI-sovelluksessa klikkaamalla sille tehtyä painiketta. Tämä välilehti on tarkoitettu sovelluskehittäjille. Avattavaa tulosjoukkoa voi rajata myös tässä näkymässä käyttämällä
        vasemmalla olevien valikkojen arvoja.
        </p>
     `,
      instancePage: {
        label: 'Oikeustapaus',
        description: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tämä sivu näyttää yhden oikeustapauksen sisällön ja metatiedot.
          Oikeustapauksen tiedot perustuvat Semanttisen Finlexin aineistoon.
          Näkymä sisältää kolme välilehteä:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>SISÄLTÖ</STRONG>-välilehti näyttää oikeustapauksen tekstisisällön kontekstuaalisessa
            lukijassa, joka näyttää käsitteiden selityksiä ja linkkejä viedessäsi
            kursorin niiden kohdalle.
          </li>
          <li>
            <strong>TIEDOT</STRONG>-välilehti näyttää oikeustapauksen metatiedot
            ja linkin oikeustapaukseen Finlexissä.
          </li>
          <li>
            <strong>AVAA YASGUI-SOVELLUKSESSA</strong>-välilehti sisältää linkin
            oikeustapauksen tiedot palauttavan kyselyn avaamiseen YASGUI-sovelluksessa. Tämä välilehti on tarkoitettu sovelluskehittäjille.
          </li>
        </ul>

        `
      },
      courtDecisionsByYear: {
        title: 'Oikeustapaukset vuosittain',
        xaxisTitle: 'Vuosi',
        yaxisTitle: 'Oikeustapausten lukumäärä',
        seriesTitle: 'Oikeustapausten lukumäärä'
      },
      properties: {
        uri: {
          label: 'URI-tunniste',
          description: 'Uniform Resource Identifier -tunniste'
        },
        ecli: {
          label: 'Tunniste',
          description: 'ECLI-tunniste'
        },
        prefLabel: {
          label: 'Oikeustapaus',
          description: `
            Oikeustapaus
          `
        },
        jenaText: {
          label: 'Vapaatekstihaku',
          textFacetInputPlaceholder: 'Hae...',
          description: `
            Vapaatekstihaku
          `
        },
        abstract: {
          label: 'Tiivistelmä',
          description: `
            Tiivistelmä
          `
        },
        court: {
          label: 'Tuomioistuin',
          description: `
            Tuomioistuimen nimi
          `
        },
        judge: {
          label: 'Tuomari',
          description: `
            Tuomarin nimi
          `
        },
        typeOfSourceData: {
          label: 'Aineiston tyyppi',
          description: `
            Aineiston tyyppi
          `
        },
        typeOftheMatter: {
          label: 'Prosessilaji',
          description: `
            Oikeustapauksen tyyppi eli prosessilaji
          `
        },
        subjectCategory: {
          label: 'Aihe (autom. tunnistettu)',
          description: `
            Aihe
          `
        },
        situationCategory: {
          label: 'Elämän aihepiiri (autom. tunnistettu)',
          description: `
            Elämäntilanne
          `
        },
        decisionDate: {
          label: 'Antopäivä',
          description: `
            Tuomion antamispäivämäärä
          `
        },
        referencedStatute: {
          label: 'Viitattu ajantasainen säädös',
          description: `
            Viitattu ajantasainen säädös
          `
        },
        similarCourtDecicions: {
          label: 'Samankaltaisia oikeustapauksia',
          description: `
            Samankaltaisia oikeustapauksia
          `
        },
        language: {
          label: 'Rajoita sisällön kieltä',
          description: `
            Sisällön kieli
          `
        },
        contentHTML: {
          label: 'Oikeustapauksen sisältö',
          description: `
            Oikeustapauksen sisältö
          `
        },
        contentHTMLAnnotated: {
          label: 'Oikeustapauksen kontekstuaalinen sisältö',
          description: `
            Oikeustapauksen kontekstuaalinen sisältö
          `
        },
        finlexLink: {
          label: 'Linkki Finlex-palveluun',
          description: `
            Linkki Finlex-palveluun
          `
        }
      }
    },
    caselawfinder: {
      label: 'Haku dokumentilla',
      mainPageLabel: 'Haku dokumentilla',
      shortDescription: 'Hae oikeustapauksia tekstikuvauksen avulla'
    }
  },
  aboutThePortalPartOne: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Tietoa Lakisammosta
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      <a href="https://seco.cs.aalto.fi/projects/lakisampo/lakisammon-ohje.pdf">Lakisampo-portaalin käyttöohje</a>
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      <a href="https://seco.cs.aalto.fi/projects/lakisampo/">Lakisampo-projektin kotisivu</a>
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Lähtödata
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The below table lists the data sources which have been used in creating the LawSampo data service.
    </p>
  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Lakisampo-portaalin käyttäminen
    </h1>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Yleistä
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Lakisampo-portaalissa voit hakea ja tutkia Semanttiseen Finlexiin pohjautuvaa lainsäädäntöaineistoa.
      Lisäksi portaalissa on valmiit työkalut "Digital Humanities"-tutkimukseen käyttäen
      <a href="https://seco.cs.aalto.fi/publications/2020/hyvonen-sampos-dhn-2020.pdf" target='_blank' rel='noopener noreferrer'>Sampo-mallia</a>,
      jossa portaalia voi käyttää seuraavasti:
    </p>
    <ol class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
    <li class="MuiTypography-gutterBottom">
        Portaalin etusivulla voit valita eri näkymistä aineistoon:
        Lainsäädäntö (hae lakeja, asetuksia ja päätöksiä),
        Pykälät (hae yksittäisiä pykäliä),
        Oikeuskäytäntö (hae oikeustapauksia),
        Haku tekstillä (Hae oikeustapauksia tekstikuvauksen avulla),
        Elämäntilanteet (Hae pykäliä ja oikeustapauksia elämäntilanteiden ja aiheiden avulla).
        Ideana on tarjota pääsy Lakisammon dataan (tietämysverkkoon) erilaisissa käyttötapauksissa datan pysyessä samana.
      </li>
      <li class="MuiTypography-gutterBottom">
        Lainsäädännön, pykälien ja oikeuskäytännön näkymissä voit käyttää fasettihakua tutkiaksesi sinua kiinnostavaa osajoukkoa näkymän entiteeteistä.
        Esimerkiksi voit tutkia tietyn ajanjakson säädöksiä. Oletuksena näkymät näyttävät kaikki kyseiseen näkymään kuuluvat tulokset (säädöset, pykälät tai oikeustapaukset).
        Tätä oletuksena näkyvää tulosjoukkoa voi rajata suodattimilla.
      </li>
      <li class="MuiTypography-gutterBottom">
        Lopuksi voit käyttää visualisointityökaluja tutkiaksesi tulosjoukkoa tarkemmin.
        Esimerkiksi voit katsoa oikeustapausten ajallista jakaumaa graafisesti.
      </li>
    </ol>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Näkymien Vie-välilehdeltä voit klikata "avaa tuloskysely YASGUI-editorissa" päästäksesi katsomaan tulosjoukon palauttavaa kyselyä ja tuloksia
      <a href="https://yasgui.triply.cc" target='_blank' rel='noopener noreferrer'>YASGUI</a>-SPARQL-editorissa.
      Voit käyttää YASGUI:n työkaluja tulosten tarkasteluun, tai ladata tulokset tiedostona,
      esimerkiksi CSV-formaatissa ladataksesi tulokset taulukkolaskentaohjelmalla.
  </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Jos haluat tutkia kaikkea tietämysverkon tietoa, joka liittyy yhteen  säädökseen tai muuhun entiteettiin, klikkaa entiteettiä.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Yksittäisen suodattimen käyttö fasettihaussa
    </h2>
    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Arvojen valinta suodattimen sisällä
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Kaikki suodattimen mahdolliset arvot näytetään listana tai hierarkkisena puurakenteena.
      Tulosten määrä näytetään suluissa jokaisen arvon perässä.
      Kun arvo on valittu, tulokset päivitetään automaattisesti.
      Tyhjään tulosjoukkoon johtavat valinnat estetään päivittämällä kaikkien suodattimien
      mahdolliset valinnat, kun yhdessä suodattimessa on tehty valinta.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Suodattimien arvoista voi valita useita, jolloin tulosjoukko muodostetaan yhdistämällä molempien valintojen tulokset yhteen.
      Voit esimerkiksi valita EU-direktiivi-fasetista kaksi eri direktiiviä, jolloin tuloksina näytetään kaikki säädökset, jotka viittaavat jompaankumpaan.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Suodattimen valitut arvot näkyvät suodattimien yläpuolella olevassa "Aktiiviset suodattimet" -osiossa.
      Poistaaksesi valinnan, klikkaa x-merkkiä aktiivisen suodattimen oikealla puolella.
      Voit myös poistaa valinnan klikkaamalla valintaa itse suodattimessa.
      Aktiiviset suodattimet -osio näkyy vain jos suodattimissa on valittu arvoja.
    </p>
    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Arvojen etsiminen suodattimen sisällä
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Voit etsiä arvoja suodattimen sisällä käyttämällä suodattimen hakukenttää.
      Kaikki suodattimen mahdolliset arvot ovat näkyvissä kokoajan.
      Ne arvot, joihin hakulauseke täsmää, näkyvät alleviivattuna.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Ohjeet hakemiseksi suodattimen sisällä:
    </p>
    <ol class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li class="MuiTypography-gutterBottom">
        Syötä hakulauseke hakukenttään. Jos se tuottaa tuloksia, näkyy
        hakukentän oikealla puolella numero kertomassa tulosten määrän.
      </li>
      <li class="MuiTypography-gutterBottom">
        Klikkaa " <  > " -nuolia hakukentän oikealla puolella hypätäksesi
        tulosten välillä. Kun klikkaat nuolta, listan ylimpänä näkyy eri hakuosuma.
        Ne arvot, joihin hakulauseke täsmää, näkyvät alleviivattuna.
      </li>
      <li class="MuiTypography-gutterBottom">
        Klikkaa arvoa aktivoidaksesi sen suodattimeen.
        Tulokset (ja muut suodattimet) päivittyvät automaattisesti.
      </li>
    </ol>
    <p></p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Useiden suodattimien käyttö samaan aikaan
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Fasettihaun tehokkuus pääsee oikeuksiinsa kun useissa suodattimissa on tehty
      valintoja samaan aikaaan. Kuten monissa verkon kauppapaikoissa, loogista JA-operaattoria
      käytetään valintojen välillä.
    </p>
    <p></p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Fasettihaussa voit tehdä valintoja suodattimissa missä järjestyksessä tahansa ja
      tulosten määrä muissa suodattimissa päivitetään automaattisesti.
      Tällä tavalla käyttäjä ei päädy tyhjään tulosjoukkoon valintoja tehdessä.
    </p>
  `,
  feedback: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Palaute
    </h1>
    `
}
