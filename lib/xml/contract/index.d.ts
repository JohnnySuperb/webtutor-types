type ContractDocumentTopElem = XmlTopElem &
CostCurrencyBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ContractDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  date: XmlElem<Date>;
  number: XmlElem<string>;
  contract_type_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  education_org_id: XmlElem<number>;
  legal_entity_name: XmlElem<string>;
  legal_entity_code: XmlElem<string>;
  files_count(): number;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type ContractDocument = XmlDocument & {
  TopElem: ContractDocumentTopElem;
};
