type DnSpecialDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: DnSpecialDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  facult_id: XmlElem<number>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnSpecialDocument = XmlDocument & {
  TopElem: DnSpecialDocumentTopElem;
};
