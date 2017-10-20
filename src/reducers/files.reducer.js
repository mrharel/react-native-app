import { FILE_ADD, SET_SELECTED_FILE } from '../actions/files.action';
const initialState = {
  files: [],
  error: null,
  selectedFileIndex: null,
};

export default (state = initialState, action) => {
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