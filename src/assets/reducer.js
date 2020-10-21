export const reducer = (state, action) => {
  switch (action.type) {
    case "MOVE":
      return {
        isplay: state.isplay,
        move: state.move?false:true,
      };
    default:
        return null
  }
};
