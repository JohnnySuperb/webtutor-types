interface LearningTaskResultDocumentFile extends FileListBaseFile {
  is_expert: XmlElem<boolean>;
}

type LearningTaskResultDocumentTopElem = XmlTopElem & { Doc: LearningTaskResultDocument } & 
PersonFillingBase &
AdminAccessBase &
CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  learning_task_id: XmlElem<number>;
  learning_task_name: XmlElem<string>;
  person_id: XmlElem<number>;
  status_id: XmlElem<string, typeof common.learning_task_status_types>;
  answer: XmlElem<string>;
  expert_id: XmlElem<number>;
  event_id: XmlElem<number>;
  expert_comment: XmlElem<string>;
  mark: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  plan_start_date: XmlElem<Date>;
  plan_end_date: XmlElem<Date>;
  education_plan_id: XmlElem<number>;
  active_learning_id: XmlElem<number>;
  duration: XmlElem<number>;
  expired: XmlElem<boolean>;
  start_execution_date: XmlElem<Date>;
  finish_execution_date: XmlElem<Date>;
  files: XmlMultiElem<LearningTaskResultDocumentFile>;
  AddFile(): unknown;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type LearningTaskResultDocument = XmlDocument & {
  TopElem: LearningTaskResultDocumentTopElem;
};
