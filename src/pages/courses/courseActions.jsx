export const setSelectedCourse = (course) => ({
    type: 'SET_SELECTED_COURSE',
    payload: course,
  });
  
  export const openDialog = () => ({
    type: 'OPEN_DIALOG',
  });
  
  export const closeDialog = () => ({
    type: 'CLOSE_DIALOG',
  });
  