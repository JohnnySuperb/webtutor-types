declare namespace Screen {
  var Doc: XmlDocument;
  var EditMode: boolean;
  var ExposeItemBySource: string;
  var FocusItem: string;
  var FrameName: string;
  var HolderElem: string;
  var LinkedDocs: string;
  var OptHolderElem: string;
  var Ps: string;

  function AskFileSave(): void;
  function AddExternalEditor(): void;
  function AddLinkedDoc(): void;
  function AskColor(): void;
  function AskDirectory(): void;
  function AskDirectoryPath(): void;
  function AskFileOpen(url?: string, extPattern?: string): string;
  function AskFilesOpen(): void;
  function AskFont(): void;
  function BringWindowToFront(): void;
  function CheckSpelling(): void;
  function Close(): void;
  function FindItemByType(): void;
  function FindItemRec(): void;
  function FindOptItem(): void;
  function FindOptItemByType(): void;
  function FlashWindow(): void;
  function ModalDlg(modalDialog: XmlDocument): void;
  function MsgBox(...args: any): void;
  function Navigate(): void;
  function Print(): void;
  function RemoveLinkedDocByUrl(): void;
  function RunCommand(): void;
  function RunCommandAsync(): void;
  function SaveDoc(): void;
  function SetDoc(): void;
  function SetInitSearch(): void;
  function SetTimer(): void;
  function SetWindowTopmost(): void;
  function ShowErrorMsg(): void;
  function Update(): void;
  function UpdateAsync(): void;
  function UpdateExcpt(): void;
  function WindowClientWidth(): void;
}
