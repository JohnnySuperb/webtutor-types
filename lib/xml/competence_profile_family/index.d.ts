interface CompetenceProfileFamilyDocumentCompetenceProfile {
  competence_profile_id: XmlElem<number>;
}

type CompetenceProfileFamilyDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: CompetenceProfileFamilyDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  competence_profiles: XmlMultiElem<CompetenceProfileFamilyDocumentCompetenceProfile>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type CompetenceProfileFamilyDocument = XmlDocument & {
  TopElem: CompetenceProfileFamilyDocumentTopElem;
};
