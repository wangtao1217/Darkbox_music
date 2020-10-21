import React, { useState, useRef, useEffect } from "react";

import { Back, Thumb, Container } from "./styled";

export default (props) => {
  const get_ref = useRef(null);
  const { value, min, max, children } = props;
  const [cur_w, setCur_w] = useState(value);
  const [cur_v, setCur_v] = useState(value);

  useEffect(() => {
    setCur_v(
      Math.round(min) +
        Math.round(
          ((max - min) * cur_w) / get_ref.current.getBoundingClientRect().width
        )
    );
  }, [cur_w, max, min]);

  useEffect(() => {
    setCur_w(
      (cur_v / (max - min)) * get_ref.current.getBoundingClientRect().width
    );
  }, [value, max, min]);

  const MouseDown = (node) => {
    const { left } = get_ref.current.getBoundingClientRect();
    setCur_w(node.clientX - left);
  };

  const MouseMove = (node) => {
    const { left, right } = get_ref.current.getBoundingClientRect();
    if (node.clientX - left > 0 && node.clientX - right < 0) {
      setCur_w(node.clientX - left);
    }
  };

  const HandleMove = (w) => {
    const handleRelease = (e) => {
      document.removeEventListener("mousemove", MouseMove);
      document.removeEventListener("mouseup", handleRelease);
    };

    document.addEventListener("mousemove", MouseMove);
    document.addEventListener("mouseup", handleRelease);
  };

  return (
    <>
      {/* <span>{Math.round(cur_v)}</span> */}
      <Container>
        {/* <span>{min}</span> */}
        <Back
          ref={get_ref}
          onMouseDown={(e) => {
            MouseDown(e);
            HandleMove(e);
          }}
        >
          <Thumb w={cur_w}>{children}</Thumb>
        </Back>
        {/* <span>{max}</span> */}
      </Container>
    </>
  );
};
