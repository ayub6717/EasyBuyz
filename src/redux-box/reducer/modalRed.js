const initialState = {
    isOpen: false,
    content: null,
  };
  
  const modalRed = (state = initialState, action) => {
    switch (action.type) {
      case 'OPEN_MODAL':
        return {
          isOpen: true,
          content: action.payload,
        };
      case 'CLOSE_MODAL':
        return {
          isOpen: false,
          content: null,
        };
      default:
        return state;
    }
  };
  
  export default modalRed;
  