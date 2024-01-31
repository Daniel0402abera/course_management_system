const initialState = {
    openDialog: false,
    selectedCourse: null,
  };
  
  const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "OPEN_DIALOG":
        return {
          ...state,
          openDialog: true,
          selectedCourse: action.payload,
        };
      case "CLOSE_DIALOG":
        return {
          ...state,
          openDialog: false,
          selectedCourse: null,
        };
      default:
        return state;
    }
  };
  
  export default coursesReducer;
  