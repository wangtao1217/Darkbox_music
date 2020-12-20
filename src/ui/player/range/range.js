import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import { Back, Thumb, Container } from "./styled";

export default ({ value, min, max, children, seek }) => {
  const get_ref = useRef(null);
  const [cur_w, setCur_w] = useState(value);
  const [cur_v, setCur_v] = useState(value);

  const MouseDown = useCallback(
    (node) => {
      const { left } = get_ref.current.getBoundingClientRect();
      setCur_w(node.clientX - left);
    },
    [seek, cur_w]
  );

  const MouseMove = (node) => {
    const { left, right } = get_ref.current.getBoundingClientRect();
    if (node.clientX - left > 0 && node.clientX - right < 0) {
      setCur_w(node.clientX - left);
    }
  };
  const HandleMove = (w) => {
    const handleRelease = (e) => {
      seek((cur_w * max) / get_ref.current.getBoundingClientRect().width);

      document.removeEventListener("mousemove", MouseMove);
      document.removeEventListener("mouseup", handleRelease);
    };

    document.addEventListener("mousemove", MouseMove);
    document.addEventListener("mouseup", handleRelease);
  };
  useEffect(() => {
    setCur_w(
      () =>
        (cur_v / (max - min)) * get_ref.current.getBoundingClientRect().width
    );
  }, [cur_v]);

  const cur_time = useMemo(() => {
    setCur_v(Math.round(value));
  }, [value]);
  return (
    <>
      <Container>
        <Back
          ref={ref => get_ref.current = ref}
          onMouseDown={(e) => {
            MouseDown(e);
            HandleMove(e);
          }}
        >
          <Thumb w={cur_w}>{children}</Thumb>
        </Back>
      </Container>
    </>
  );
};
