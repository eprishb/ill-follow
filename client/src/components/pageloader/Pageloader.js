import React, { forwardRef } from "react";

const Pageloader = forwardRef((props, ref) => {
  return (
    <div>
      <div
        ref={ref}
        className={`pageloader ${props.plActive ? "is-active" : ""}`}
      ></div>
      <div className={`infraloader ${props.ilActive ? "is-active" : ""}`}></div>
    </div>
  );
});

export default Pageloader;
