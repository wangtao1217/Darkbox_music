import { useRef, useEffect } from "react";
import { on, off } from "./util";

const useClickAway = (element, callBack, events) => {
  const savedCallback = useRef(callBack);
  useEffect(() => {
    savedCallback.current = callBack;
  }, [savedCallback]);

  useEffect(() => {
    let handler = (event) => {
      const { current: el } = element;
      console.log(el)
      el && !el.contains(event.target) && savedCallback.current(event)&&console.log('ee');
};

    for (let event_name of events) {
      on(document, event_name, handler);
    }
    return () => {
      for (let event_name of events) {
        off(document, event_name, handler);
      }
    };
  }, [events, element]);
};

export default useClickAway;
