type StatementComponentDocumentTopElem = XmlTopElem & { Doc: StatementComponentDocument } & {
  id: XmlElem<number>;
  path: XmlElem<string>;
  property_name: XmlElem<string>;
  component_id: XmlElem<string>;
  statement_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
}

type StatementComponentDocument = XmlDocument & {
  TopElem: StatementComponentDocumentTopElem;
};
