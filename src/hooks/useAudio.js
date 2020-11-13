import React, { useRef, useEffect } from "react";

import { useSetState } from "./useSetState";

const useAudio = (elProps) => {
  let element, props;

  if (React.isValidElement(elProps)) {
    element = elProps;
    props = element.props;
  } else {
    props = elProps;
  }

  const [state, setState] = useSetState({
    buffered: [],
    time: 0,
    duration: 0,
    playing: false,
    volumn: 1,
  });

  const ref = useRef(null);

  let lockPlay = false;

  const Event = {
    play: () => {
      let el = ref.current;

      if (!el) return null;

      console.log("successful..");

      // if(!lockPlay){
      const promise = el.play();
     
      el.play();
      // console.log('www')
      // console.log(promise)
      // console.info(el)
      setState({ playing: true });
    },
    Pause: () => {
      let el = ref.current;

      if (!el) return null;

      el.pause();
      setState({ playing: false });
    },
    onTime: () => {
      const el = ref.current;
      if (!el) return;

      setState({ time: el.currentTime });
    },
    onDuration: () => {
      const el = ref.current;
      if (!el) return;

      const { duration } = el;
      setState({ duration });
    },
  };



  if (element) {
    element = React.cloneElement(element, {
      controls: false,
      ...props,
      ref,
    });
  } else {
    element = React.createElement("audio", {
      controls: false,
      ...props,
      ref,
    });
  }

  useEffect(() => {
    Event.play();
  }, [props.src]);
  return [element, state, Event, ref];
};

export default useAudio;





  // const element =   React.createElement("audio");
  // React.createElement("audio", {
  //   controls: false,
  //   Play: Event().Play(),
  //   // ChangeVolumn: Event().ChangeVolumn(),
  // });


    // const controls = {
  //   play: () => setState({ playing: true }),
  //   // pause:,
  // };


   //   const isPromise = typeof promise === "object";
      //   console.log(promise)
      //   if(isPromise){
      //     lockPlay = true
      //     const resetLock = () => {
      //       lockPlay = false
      //     }
      //     promise.then(resetLock, resetLock)
      //   }
      //   return promise
      // }