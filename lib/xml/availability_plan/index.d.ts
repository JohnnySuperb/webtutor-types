interface AvailabilityPlanDocumentPeriod {
  id: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  comment: XmlElem<string>;
}

type AvailabilityPlanDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: AvailabilityPlanDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  catalog_name: XmlElem<string>;
  object_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  start_hour: XmlElem<number>;
  finish_hour: XmlElem<number>;
  periods: XmlMultiElem<AvailabilityPlanDocumentPeriod>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
}

type AvailabilityPlanDocument = XmlDocument & {
  TopElem: AvailabilityPlanDocumentTopElem;
};
