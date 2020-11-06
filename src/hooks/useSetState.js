import React, { useCallback, useState } from "react";

export const useSetState = (initialState) => {
  const [state, set] = useState(initialState);
  const setState = useCallback(
    (patch) => {
      set((preState) => {
        return Object.assign(
          {},
          preState,
          patch instanceof Function ? patch(preState) : patch
        );
      });
    },
    [set]
  );
  console.log(state);
  return [state, setState];
};
