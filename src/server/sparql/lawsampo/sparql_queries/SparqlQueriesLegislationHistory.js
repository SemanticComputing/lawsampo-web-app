const getSectionLabel = labelVar => {
  return `
    BIND(
      COALESCE(
        IF(STRSTARTS(?section_prefLabel_, "osa"), "", 1/0),
        IF(STRSTARTS(?section_prefLabel_, "luku"), "", 1/0),
        IF(STRSTARTS(?section_prefLabel_, "pykälä"), "", 1/0),
        ?section_prefLabel_
      ) as ${labelVar}
    )
`
}

const sectionBlock = `
  UNION
  {
    ?id lss:section ?firstLevel__secondLevel__section__id .
    ?firstLevel__secondLevel__section__id lss:part_number ?firstLevel__id ;
                                          lss:part_number_int ?firstLevel__integer ;
                                          lss:chapter_number ?firstLevel__secondLevel__id ;
                                          lss:chapter_number_int ?firstLevel__secondLevel__integer ;
                                          lss:section_number ?firstLevel__secondLevel__section__sectionNumber ;
                                          lss:section_number_int ?firstLevel__secondLevel__section__sectionNumberInt ;
                                          skos:prefLabel ?section_prefLabel_ .
    BIND(CONCAT("Osa ", ?firstLevel__id) as ?firstLevel__prefLabel)
    BIND(CONCAT(?firstLevel__secondLevel__id, " luku") as ?firstLevel__secondLevel__prefLabel)
    ${getSectionLabel('?firstLevel__secondLevel__section__prefLabel')}
    BIND(?firstLevel__secondLevel__id as ?firstLevel__secondLevel__section__chapterNumber)
    BIND(CONCAT("/statutes/page/", REPLACE(STR(?id), "http://ldf.fi/lawsampo/", "")) AS ?firstLevel__secondLevel__section__dataProviderUrl)
    BIND(true as ?hasParts)
    BIND(true as ?hasChapters)
  }
  UNION
  {
    ?id lss:section ?firstLevel__section__id .
    ?firstLevel__section__id lss:chapter_number ?firstLevel__id ;
                             lss:chapter_number_int ?firstLevel__integer ;
                             lss:section_number ?firstLevel__section__sectionNumber ;
                             lss:section_number_int ?firstLevel__section__sectionNumberInt ;
                             skos:prefLabel ?section_prefLabel_ .
    BIND(CONCAT(?firstLevel__id, " luku") as ?firstLevel__prefLabel)
    ${getSectionLabel('?firstLevel__section__prefLabel')}
    BIND(?firstLevel__id as ?firstLevel__section__chapterNumber)
    BIND(CONCAT("/statutes/page/", REPLACE(STR(?id), "http://ldf.fi/lawsampo/", "")) AS ?firstLevel__section__dataProviderUrl)
    BIND(false as ?hasParts)
    BIND(true as ?hasChapters)
    FILTER NOT EXISTS {
      ?firstLevel__section__id lss:part_number [] .
    }
  }
  UNION
  {
    ?id lss:section ?firstLevel__id .
    ?firstLevel__id lss:section_number_int ?firstLevel__sectionNumberInt ;
                    lss:section_number ?firstLevel__sectionNumber ;
                    skos:prefLabel ?section_prefLabel_ .
    ${getSectionLabel('?firstLevel__prefLabel')}
    BIND(?firstLevel__sectionNumberInt as ?firstLevel__integer)
    BIND(CONCAT("/statutes/page/", REPLACE(STR(?id), "http://ldf.fi/lawsampo/", "")) AS ?firstLevel__dataProviderUrl)
    BIND(false as ?hasParts)
    BIND(false as ?hasChapters)
    FILTER NOT EXISTS {
      VALUES ?prop { lss:part_number lss:chapter_number }
      ?firstLevel__id ?prop [] .
    }
  }
`

export const statutePropertiesFacetResults = `
  {
    ?id skos:prefLabel ?prefLabel__prefLabel .

    # create link for React Router:
    BIND(CONCAT("/statutesHistory/page/", REPLACE(STR(?id), "http://ldf.fi/lawsampo/", "")) AS ?prefLabel__dataProviderUrl)

    # create link to SAHA
    BIND(?id as ?uri__prefLabel)
    BIND(?id as ?uri__dataProviderUrl)
  }
  UNION
  {
    ?id eli:type_document/skos:prefLabel ?statuteType .
    FILTER(lang(?statuteType) = '<LANG>')
  }
  UNION
  {
    ?id lss:sf_identifier ?identifier .
  }
  UNION
  {
    ?id lss:statute_date ?enforcementDate .
  }
  UNION
  {
     ?id eli:transposes ?euDirective__id .
     ?euDirective__id skos:prefLabel ?euDirective__prefLabel .
     BIND(?euDirective__id as ?euDirective__dataProviderUrl)
  }
  ${sectionBlock}
`

export const statutePropertiesInstancePage = `
  {
    ?id skos:prefLabel ?prefLabel__prefLabel .

    # create link to SAHA
    BIND(?id as ?uri__prefLabel)
    BIND(?id as ?uri__dataProviderUrl)
  }
  UNION
  {
    ?id eli:type_document/skos:prefLabel ?statuteType .
    FILTER(lang(?statuteType) = '<LANG>')
  }
  UNION
  {
    ?id lss:statute_date ?enforcementDate .
  }
  UNION
  {
    ?id lss:sf_identifier ?identifier .
  }
  UNION
  {
     ?id eli:transposes ?euDirective__id .
     ?euDirective__id skos:prefLabel ?euDirective__prefLabel .
     BIND(?euDirective__id as ?euDirective__dataProviderUrl)
  }
  UNION
  {
     ?id lss:finlex_url ?finlexLink__id .
     BIND('Finlex' as ?finlexLink__prefLabel)
     BIND(?finlexLink__id as ?finlexLink__dataProviderUrl)
  }
  UNION
  {
     ?id lss:smur_url ?smurLink__id .
     BIND('Säädösmuutosten hakemisto' as ?smurLink__prefLabel)
     BIND(?smurLink__id as ?smurLink__dataProviderUrl)
  }
  UNION
   {
     ?id lss:government_proposal_url ?heLink__id .
     BIND('Hallituksen esitys' as ?heLink__prefLabel)
     BIND(?heLink__id as ?heLink__dataProviderUrl)
  }
  UNION
  {
     ?id lss:lakitutka_url ?lakitutkaLink__id .
     BIND('Lakitutka' as ?lakitutkaLink__prefLabel)
     BIND(?lakitutkaLink__id as ?lakitutkaLink__dataProviderUrl)
  }
  UNION
  {
    ?id lss:situation_category ?situationCategory__id .
    ?situationCategory__id skos:prefLabel ?situationCategory__prefLabel .
  }
  UNION
  {
    ?id dct:subject ?subjectCategory__id .
    ?subjectCategory__id skos:prefLabel ?subjectCategory__prefLabel .
  }
  UNION
  {
    ?id lss:annotated_html ?annotatedHtml_ .
    BIND(REPLACE(?annotatedHtml_, "<html>|</html>|<head />|<body>|</body>", "") as ?contentHTMLAnnotated)
  }
  UNION
  {
    ?id lss:term_reference/skos:relatedMatch? ?referencedTerm__id . # select both directly linked terms and related matches
    ?referencedTerm__id skos:prefLabel ?prefLabel_ .
    OPTIONAL { ?referencedTerm__id dcterms:abstract ?referencedTerm__abstract }
    OPTIONAL { ?referencedTerm__id rdfs:comment ?referencedTerm__description }
    OPTIONAL { ?referencedTerm__id dcterms:hasFormat ?referencedTerm__externalLink }
    OPTIONAL { ?referencedTerm__id lss:count ?referencedTerm__count }
    BIND(?referencedTerm__id as ?referencedTerm__dataProviderUrl)
    BIND(LCASE(?prefLabel_) as ?referencedTerm__prefLabel)
  }
  UNION
  { 
    ?laki lss:ls_statute ?id ;
      eli:id_local ?statuteVersions__identifier ;
      eli:first_date_entry_in_force ?statuteVersions__entryIntoForceDate ;
      lss:finlex_url ?statuteVersions__finlexUrl .

      BIND(REPLACE(STR(?statuteVersions__finlexUrl), "^(.*/)", "") as ?statuteVersions__id)
      BIND(?statuteVersions__id as ?statuteVersions__versionNumber)

      ?laki eli:related_to [
            eli:title ?statuteVersions__he__id ;
            eli:id_local ?statuteVersions__he__number ;
            sfl:year ?statuteVersions__he__year ;
            lss:type ?statuteVersions__he__type
      ] .
  }
  UNION
  {
    ?laki lss:ls_statute ?id ;
          eli:has_part/eli:has_member ?ids_with_versions .
    
    BIND(REPLACE(STR(?ids_with_versions), "^(.*/)", "") as ?statuteVersions__id)
    BIND(?statuteVersions__id as ?statuteVersions__versionNumber)
    
    ?ids_with_versions eli:version ?version .
    BIND(REPLACE(STR(?version), "http://data.finlex.fi/schema/sfl/", "") as ?statuteVersions__version)


    OPTIONAL {
      ?ids_with_versions eli:amended_by/eli:id_local ?statuteVersions__identifier .
      OPTIONAL {
      ?ids_with_versions eli:amended_by [ 
        eli:first_date_entry_in_force ?statuteVersions__entryIntoForceDate ;
        lss:finlex_url ?statuteVersions__finlexUrl ] .
    }
    OPTIONAL {
      ?ids_with_versions eli:amended_by/eli:related_to [
        eli:title ?statuteVersions__he__id ;
        eli:id_local ?statuteVersions__he__number ;
        sfl:year ?statuteVersions__he__year ;
        lss:type ?statuteVersions__he__type
       ] .
    }
  }
  }
  UNION
  {
    ## pykälät ##

    ?laki lss:ls_statute ?id ;
          eli:has_part ?sections__id .
    FILTER EXISTS { ?sections__id a sfl:Section }

    BIND(
      IF(
        CONTAINS(STR(?sections__id), "chp"),
        REPLACE(STR(?sections__id), "^.*chp/([0-9a-zA-Z]+)/sec/([0-9a-zA-Z]+)", "chapter_$1_section_$2"),
        REPLACE(STR(?sections__id), "^.*sec/([0-9a-zA-Z]+)", "section_$1")
      ) as ?sections__idShort
    )
    
    ?sections__id eli:has_member ?sections__sections__id .
    ?sections__sections__id lss:number ?sections__sections__number ;
                            lss:part_of_version ?sections__sections__partOfVersions ;
                            eli:version ?version .

    BIND(REPLACE(STR(?sections__sections__id), "^(.*/)", "") as ?sections__sections__versionNumber)
    BIND(REPLACE(STR(?version), "http://data.finlex.fi/schema/sfl/", "") as ?sections__sections__version)         
    BIND("section" as ?sections__sections__level)
    
    OPTIONAL {
      ?sections__sections__id eli:is_realized_by/eli:is_embodied_by/sfl:text ?sections__sections__content .
    }
    OPTIONAL {
      ?sections__sections__id eli:is_realized_by/eli:title ?sections__sections__title .
    }
  }
  UNION
  {
    ## subsections ##

    ?laki lss:ls_statute ?id ;
          eli:has_part ?sections__id .
    FILTER EXISTS { ?sections__id a sfl:Section }

    ?sections__id eli:has_member ?sections__sections__id .
    ?sections__sections__id eli:has_part ?sections__sections__subsections__id .

    BIND(REPLACE(STR(?sections__sections__subsections__id), "^(.*/)", "") as ?sections__sections__subsections__versionNumber) 
    BIND("subsection" as ?sections__sections__subsections__level) 

    ?sections__sections__subsections__id eli:version ?version ;
                                    lss:part_of_version ?sections__sections__subsections__partOfVersions ;
                                    lss:number ?sections__sections__subsections__number .

    OPTIONAL {
      ?sections__sections__subsections__id lss:number_text ?sections__sections__subsections__numberStr
    }

    BIND(REPLACE(STR(?version), "http://data.finlex.fi/schema/sfl/", "") as ?sections__sections__subsections__version)
    
    OPTIONAL {
      ?sections__sections__subsections__id eli:is_realized_by/eli:is_embodied_by/sfl:text ?sections__sections__subsections__content .
    }

  }
  UNION
  {
    ## paragraphs ##

    ?laki lss:ls_statute ?id ;
          eli:has_part ?sections__id .
    FILTER EXISTS { ?sections__id a sfl:Section }

    ?sections__id eli:has_member ?sections__sections__id .
    ?sections__sections__id eli:has_part ?sections__sections__subsections__id .
    ?sections__sections__subsections__id eli:has_part ?sections__sections__subsections__paragraphs__id .

    BIND(REPLACE(STR(?sections__sections__subsections__paragraphs__id), "^(.*/)", "") as ?sections__sections__subsections__paragraphs__versionNumber)
    BIND("paragraph" as ?sections__sections__subsections__paragraphs__level) 

    ?sections__sections__subsections__paragraphs__id eli:version ?version ;
                                                     lss:part_of_version ?sections__sections__subsections__paragraphs__partOfVersions ;
                                                     lss:number ?sections__sections__subsections__paragraphs__number .
                                            
    BIND(REPLACE(STR(?version), "http://data.finlex.fi/schema/sfl/", "") as ?sections__sections__subsections__paragraphs__version) 

    OPTIONAL {
      ?sections__sections__subsections__paragraphs__id eli:is_realized_by/eli:is_embodied_by/sfl:text ?sections__sections__subsections__paragraphs__content .
    }

    OPTIONAL {
      ?sections__sections__subsections__paragraphs__id lss:number_text ?sections__sections__subsections__paragraphs__numberStr
    }
  }
  UNION
  {
    ## subparagraphs ##

    ?laki lss:ls_statute ?id ;
          eli:has_part ?sections__id .
    FILTER EXISTS { ?sections__id a sfl:Section }

    ?sections__id eli:has_member ?sections__sections__id .
    ?sections__sections__id eli:has_part ?sections__sections__subsections__id .
    ?sections__sections__subsections__id eli:has_part ?sections__sections__subsections__paragraphs__id .
    ?sections__sections__subsections__paragraphs__id eli:has_part ?sections__sections__subsections__paragraphs__subparagraphs__id .

    BIND(REPLACE(STR(?sections__sections__subsections__paragraphs__subparagraphs__id), "^(.*/)", "") as ?sections__sections__subsections__paragraphs__subparagraphs__versionNumber)
    BIND("subparagraph" as ?sections__sections__subsections__paragraphs__subparagraphs__level) 

    ?sections__sections__subsections__paragraphs__subparagraphs__id eli:version ?version ;
                                            lss:part_of_version ?sections__sections__subsections__paragraphs__subparagraphs__partOfVersions ;
                                            eli:is_realized_by/eli:is_embodied_by/sfl:text ?sections__sections__subsections__paragraphs__subparagraphs__content .
                                            
    ?sections__sections__subsections__paragraphs__subparagraphs__id  lss:number ?sections__sections__subsections__paragraphs__subparagraphs__number .
    ?sections__sections__subsections__paragraphs__subparagraphs__id  lss:number_text ?sections__sections__subsections__paragraphs__subparagraphs__numberStr .
    
    BIND(REPLACE(STR(?version), "http://data.finlex.fi/schema/sfl/", "") as ?sections__sections__subsections__paragraphs__subparagraphs__version) 
  
    }

  ${sectionBlock}
`

export const sectionProperties = `
  {
    ?id skos:prefLabel ?prefLabel__id ;
        lss:statute ?statute__id ;
        lss:section_number ?section_number .
    OPTIONAL { ?id lss:chapter_number ?chapter_number }
    BIND(?prefLabel__id as ?prefLabel__prefLabel)

    BIND(IF(BOUND(?chapter_number),
         CONCAT("chapter_", ?chapter_number, "_"),
         ""
        )
     as ?chapter)
    BIND(CONCAT("#", ?chapter, "section_", ?section_number) as ?hash)
    BIND(CONCAT("/statutes/page/", REPLACE(STR(?statute__id), "http://ldf.fi/lawsampo/", ""), ?hash) AS ?prefLabel__dataProviderUrl)

    ?statute__id skos:prefLabel ?statute__prefLabel .
    BIND(CONCAT("/statutes/page/", REPLACE(STR(?statute__id), "http://ldf.fi/lawsampo/", "")) AS ?statute__dataProviderUrl)

    BIND(?id as ?uri__prefLabel)
    BIND(?id as ?uri__dataProviderUrl)
  }
  UNION
  {
    ?id lss:section_statute_date ?statuteEnforcementDate .
  }
  UNION
  {
    ?id lss:section_date ?sectionEnforcementDate .
  }
  UNION
  {
    ?id lss:text ?text .
  }
  UNION
  {
    ?id lss:situation_category ?situationCategory__id .
    ?situationCategory__id skos:prefLabel ?situationCategory__prefLabel .
  }
   UNION
  {
    ?id dct:subject ?subjectCategory__id .
    ?subjectCategory__id skos:prefLabel ?subjectCategory__prefLabel .
  }
  UNION
  {
    ?id eli:transposes ?euDirective__id .
    ?euDirective__id skos:prefLabel ?euDirective__prefLabel .
    BIND(?euDirective__id as ?euDirective__dataProviderUrl)
  }
  UNION
  {
    ?id lss:annotated_html ?annotatedHtml_ .
    BIND(REPLACE(?annotatedHtml_, "<html>|</html>|<head />|<body>|</body>", "") as ?contentHTMLAnnotated)
  }
  UNION
  {
    ?id lss:term_reference ?referencedTerm__id .
    ?referencedTerm__id skos:prefLabel ?referencedTerm__prefLabel .
    OPTIONAL { ?referencedTerm__id dcterms:abstract ?referencedTerm__abstract }
    OPTIONAL { ?referencedTerm__id rdfs:comment ?referencedTerm__description }
    OPTIONAL { ?referencedTerm__id dcterms:hasFormat ?referencedTerm__externalLink }
    BIND(?referencedTerm__id as ?referencedTerm__dataProviderUrl)
  }
`

export const statutesByYearQuery = `
  SELECT ?category (count(?statute) as ?count) WHERE {
    <FILTER>
    ?statute lss:timespan ?category_ ;
       a lss:Statute .
    ?category_ skos:prefLabel ?category .
  }
  GROUP BY ?category
  ORDER BY ?category
`

// https://version.aalto.fi/gitlab/seco/lawsampo-data/-/blob/master/void/lawsampo-void.ttl
export const knowledgeGraphMetadataQuery = `
  SELECT *
  WHERE {
    ?id a sd:Dataset ;
        dct:source/skos:prefLabel ?prefLabel ;
        dct:modified ?modified .
    FILTER(lang(?prefLabel) = '<LANG>')
  }
`
