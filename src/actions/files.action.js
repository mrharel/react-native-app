export const FILE_ADD = 'file-add';
export const SET_SELECTED_FILE = 'set-selected-file';

export const fileAddAction = ({
  fileName,
  fileData,
  uploadedAt,
  fileSize,
  filePath,
  fileType,
}) => ({
  type: FILE_ADD,
  fileData: {
    fileName,
    fileData,
    uploadedAt,
    fileSize,
    filePath,
    fileType,
  },
});

export const setSelectedFileAction = (fileIndex) => ({
  type: SET_SELECTED_FILE,
  fileIndex,
});
