import React, { useRef } from "react";

import { useSetState } from "./useSetState";

const useAudio = (elProps) => {
  let element, props;

  if(React.isValidElement(elProps)){
    element = elProps;
    props = element.props
  }else{
    props = elProps
  }


  const [state, setState] = useSetState({
    buffered: [],
    time: 0,
    duration: 0,
    playing: false,
    volumn: 1,
  });

  const ref = useRef(null);

  const Event = () => {
    return {
      Play: () => {
        setState({ playing: true })},
      Pause: () => setState({ playing: false }),
      // update current time
      onTime: () => {
        const el = ref.current;
        if(!el) return ;

        setState({ time: el.currentTime });
      },
      // update music time
      onDuration: () => {
        const el = ref.current;
        if(!el) return ;

        const { duration } = el
        setState({duration});
      },
    };
  };


  const controls = {
    play: () => setState({playing:true}),
    // pause:,
  };

  if(element){
    element = React.cloneElement(element,{
      controls: false,
      ...props,
      ref,
    })
  }else{
    element = React.createElement('audio',{
      controls: false,
      ...props,
      ref,
      
    })
  }

  // const element =   React.createElement("audio");
  // React.createElement("audio", {
  //   controls: false,
  //   Play: Event().Play(),
  //   // ChangeVolumn: Event().ChangeVolumn(),
  // });

  return [element, state, Event, ref];
};

export default useAudio;
