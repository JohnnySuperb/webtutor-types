
declare namespace ms_tools {
  function get_url_from_catalog(sCatalogNameiID: string): any;
  function view_open_doc(sCatalogNameiIDTopElem: string): any;
  function view_delete_doc(_catalog_name: string): any;
  function raise_system_event(_code: string, _system_eventID: any, _objectDocID: any, _objectDoc: any): any;
  function raise_system_event_env(oSystemEventIDoc: any): any;
  function notes_verify_password(_clear_password: any, _hash_password: any): any;
  function set_ui_lng(_ui_lng_id: any): any;
  function get_const(_ui_lng_id: any): any;
  function eval_column_const(_ui_lng_id: any): any;
  function eval_column_name(sCodeListElem: any): any;
  function obtain_ui_lngs(): any;
  function compare_versions(_version: any, _cur_version: any): any;
  function verify_disp_object_blocks(_doc_source: any): any;
  function delete_resource(oResource: any): any;
  function init_view(oSourceTarget: any): any;
  function get_log_email_errors(dtLastDate: any): any;
  function get_border_panel_object(oBorderPanel: any): any;
  function open_dlg_global_settings(sSelTab: any): any;
  function check_doc_screen_access(TopElem: any): any;
  function check_access_block_rights(sAccessBlocksRightoUser: any): any;
  function obtain_shared_list_elem(sListPathParam: string, sPrimaryKeyParam: string, oListElemParam: any): any;
  function delete_shared_list_elem(sListPathParam: string, sPrimaryKeyParam: string, oListElemParam: any): any;
  function save_cached_doc(doc: any): any;
  function trigger_onsavedoc(Doc: any): any;
  function check_std(teObject: any): any;
  function list_edit_open_select(oListo: any ,oTarget: any): any;
  function get_columns_array_by_field(fldChild: any, arrColumns: any): any;
  function server_tenancy_on_init(TopElem: any, sTenancyName: any): any;
  function server_tenancy_on_app_init(TopElem: any): any;
  function server_tenancy_init(sTenancyName: any): any;
  function set_next_coding(teObjectTarget: any): any;
  function ask_options_activate_objects_to_persons(sTypearrValues: any): any;
  function ask_options_activate_qualifications_to_persons(bAssignment: any): any;
  function activate_objects_to_persons(sTaskIDsType: any, sObjectIDs: any, sPersonIDs: any, o: any): any;
  function assign_qualifications_to_objects(sTaskIDsType: any, sObjectIDs: any): any;
  function activate_to_objects(sTaskIDsTypesObjectIDs: any, o: any): any;
  function check_task(sTaskIDoRetTarget: any, Request: any): any;
  function init_task(o: any,iDelay: any): any;
  function init_task_data(teTaskInfo: any, iDelay: any): any;
  function start_task(sTaskIDsMethodNameoMethod: any): any;
  function start_task_data(sTaskIDsMethodNameoMethod: any): any;
  function get_task(sTaskID: any): any;
  function get_task_data(sTaskID: any): any;
  function set_task(sTaskIDteTaskInfo: any): any;
  function set_task_data(sTaskIDteTaskInfo: any): any;
  function get_tasks(sTaskList: any): any;
  function get_tasks_data(sTaskList: any): any;
  function set_task_field(sTaskIDsFieldNamesFieldValue: any): any;
  function set_task_field_data(sTaskIDsFieldNamesFieldValue: any): any;
  function remove_task(sTaskID: any): any;
  function remove_task_data(sTaskID: any): any;
  function set_message_task(sTaskIDo: any): any;
  function return_message_task(sTaskIDo: any): any;
  function show_massage_task(oTaskInfo: any): any;
  function start_task_progress(sMethodNameoMethodo: any): any;
  function recover_task_progress(): any;
  function set_progress_info(sTaskIDo: any): any;
  function return_progress_info(sTaskIDo: any): any;
  function catalog_resave(sTaskIDsCatalogNamebDataFlag: any, bIDFlag: any): any;
  function check_access_blocks_by_catalog_name(sAccessBlockssCatalogNamesCan: any): any;
  function check_cur_user_access_blocks_by_catalog_name(sCatalogNamesCan: any): any;
  function check_cur_user_access_blocks(sAccessBlocsCan: any): any;
  function check_cur_user_access_applications_by_catalog_name(sCatalogNamecurUser: any, oContentAccess: any, sCanElem: any): any;
  function get_admin_init_server_data(): any;
  function enable_logs_server(): any;
  function validate_blog_entry_comments(oObject: any): any;
  function prepare_client_update(): any;
  function prepare_client_update_core(): any;
  function exec_amgr_code(sScript: any): any;
  function navigate_view(sFramesUrl: any): any;
  function navigate_list(sUrlsType: any): any;
  function get_view_url(sCatalogNamesUrlQuery: any): any;
  function get_task_result_num(sResult: any): any;
  function get_callback_tasks(teRaram: any): any;
  function check_content_access(oContentAccesssCatalogNameiObjectIDsAccessType: any): any;
  function save_doc_screen(TopElem: any): any;
  function set_view_templates(TopElem: any): any;
  function get_field_path(fld: any): any;
  function create_package_objects(fldPackage: any): any;
  function disp_block(sBlockName: any): any;
  function create_resource_admin(sUrlteSourceScreen: any): any;
  function navigate_access_block(sIDsTypesScreenType: any): any;
  function get_access_block_items(fldAccessBlock: any): any;
  function set_cur_user_content_first_catalog_url(sTabBlockTypeiObjectID: any): any;
  function binary_load_from_url(fldTarget: any, sUrl: any): any;
  function run_view_action(TopElem: any, oScreensGridItemName: any): any;
  function convert_exec_code(fldExecTarget: any, fldUrlTarget: any, fldTextTarget: any): any;
  function foreign_elem_title(fldSource: any, sFieldNamesDefauldText: any): any;
  function calculate_statistic_rec_obj(iStatisticRecIDiObjectIDiPersonID: any): any;
  function evaluate_remote_collection_obj(oRemoteCollectioniObjectIDiPersonIDoCollection: any,iStartPos: any, iPageSize: any): any;
  function eval_menu_remote_action(oList: any, ListElemAction: any, oScreen: any): any;
  function eval_remote_action(oRemoteActionIDofldTopElemoScreensDispType: any): any;
  function get_remote_actions_by_cur_application(sCatalogName: any): any;
  function get_element_property(oElem: any, sPropertyName: any, sAltPropertyName: any): any;
  function disp_application_view_configuration(teApplicationsViewConfigurationIDsElemType: any, oMenuElem: any, bNoTab: any, bOnlyUrl: any): any;
  function disp_application_complex_block(sBlockIDbNoTab: any, bOnlyUrl: any): any;
  function update_access_blocks_doc_types(fldAccessBlocks: any): any;
}
