import React, { useState, useEffect } from "react";

const useHover = (ref) => {
  if (typeof ref === "undefined") {
    console.error('error');
  }
  const [state, setState] = useState(false);

  useEffect(() => {
    const onMouseEnter = () => setState(true);
    const onMouseLeave = () => setState(false);
    if(!ref.current){
      return null
    }
    if (ref && ref.current) {
      ref.current.addEventListener("mouseenter", onMouseEnter);
      ref.current.addEventListener("mouseleave", onMouseLeave);
    }
    const { current } = ref;

    return () => {
      if (current) {
        current.removeEventListener("mouseenter", onMouseEnter);
        current.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [ref]);

  return state;
};

export default useHover;
