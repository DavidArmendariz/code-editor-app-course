export default interface FileViewerStructure {
  id: string;
  name: string;
  extension?: string;
  children?: FileViewerStructure[];
}
