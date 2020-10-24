export const reducer = (state, action) => {
  switch (action.type) {
    case "MOVE":
      return {
        isplay: state.isplay,
        move: state.move?false:true,
      };
    case "_play":
      return {
        play:true,
        song_id:action.id
      }
    default:
        return null
  }
};
