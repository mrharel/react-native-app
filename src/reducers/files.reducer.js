import { FILE_ADD, SET_SELECTED_FILE } from '../actions/files.action';
//const pdfFile = require('../../example.pdf');

const getInitialState = () => {

  return {
    files: [
      {
        fileName: "example.pdf",
        fileSize: 12345,
        //fileData: require('../../example.pdf'),
        fileData: null,
        uploadedAt: Date.now(),
        filePath: "https://today.duke.edu/showcase/mmedia/pdf/kristof611.pdf",
        fileType: "pdf",
      },
    ],
    error: null,
    selectedFileIndex: null,
  }
};


export default (state = getInitialState(), action) => {
  switch (action.type) {
    case FILE_ADD:
      return {
        ...state,
        files: [
          ...state.files,
          action.fileData,
        ]
      };

    case SET_SELECTED_FILE:
      return {
        ...state,
        selectedFileIndex: action.fileIndex,
      };
    default:
      return state;
  }
};