import { styled } from '@mui/system';
import { TreeItem, TreeView } from '@mui/lab';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FolderIcon from '@mui/icons-material/Folder';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import selectFileViewerData from 'store/selectors/selectFileViewerData/selectFileViewerData';
import FileViewerStructure from 'types/FileViewerStructure';
import ExtensionIcon from '../extension-icon/ExtensionIcon';
import openFile from 'store/thunks/openFile/openFile';

const FileViewer = () => {
  const fileViewerData = useAppSelector(selectFileViewerData);
  const dispatch = useAppDispatch();

  const onSelectNode = (node: FileViewerStructure) => {
    dispatch(openFile(node));
  };

  const renderTree = (node: FileViewerStructure) => {
    const { id: nodeId, name: nodeName, extension } = node;
    return (
      <TreeItem
        sx={{
          padding: '2px',
          color: (theme) => theme.font,
        }}
        key={nodeId}
        nodeId={nodeId}
        label={nodeName}
        onDoubleClick={() => onSelectNode(node)}
        endIcon={<ExtensionIcon extension={extension} />}
      >
        {Array.isArray(node.children) ? node.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    );
  };

  if (!Object.keys(fileViewerData).length) {
    return <EmptyMessageDiv>No files</EmptyMessageDiv>;
  }

  return (
    <TreeView
      sx={{ padding: '0px 10px 10px', height: '100%', width: '100%' }}
      defaultCollapseIcon={<FolderOpenIcon />}
      defaultExpandIcon={<FolderIcon />}
    >
      {renderTree(fileViewerData)}
    </TreeView>
  );
};

const EmptyMessageDiv = styled('div')(({ theme }) => ({
  color: theme.font,
}));

export default FileViewer;
