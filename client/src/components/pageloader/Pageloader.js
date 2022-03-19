import React, { forwardRef } from "react";
import classNames from "classnames";

const Pageloader = forwardRef((props, ref) => {
  return (
    <div>
      <div
        ref={ref}
        className={ classNames(
					"pageloader", {
						"is-active": props.plActive
				})}
      ></div>
      <div className={ classNames(
				"infraloader", {
				"is-active" : props.ilActive
				})}
			></div>
    </div>
  );
});

export default Pageloader;
