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

  const WrapEvent = (userEvent, proxyEvent) => {
    return (event) => {
      try {
        proxyEvent && proxyEvent(event);
      } finally {
        userEvent && userEvent(event);
      }
    };

   
  };
  const onTimeUpdate = () => {
    const el = ref.current;
    if (!el) {
      return;
    }
    setState({ time: el.currentTime });
  };


  const Event = {
    play: () => {
      let el = ref.current;

      if (!el) return null;

      console.log("successful..");

      const promise = el.play();

      el.play();

      setState({ playing: true });
    },
    Pause: () => {
      let el = ref.current;

      if (!el) return null;

      el.pause();
      setState({ playing: false });
    },
    seek: (time) => {
      const el = ref.current;
      if (!el) return;
console.log(time)
      el.currentTime = time;
      // setState({ time: el.currentTime });
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
      onTimeUpdate: WrapEvent(props.onTimeUpdate, onTimeUpdate),
      ...props,
      ref,
    });
  } else {
    element = React.createElement("audio", {
      controls: false,
      onTimeUpdate: WrapEvent(props.onTimeUpdate, onTimeUpdate),
      ...props,
      ref,
    });
  }
// console.log(state)
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
