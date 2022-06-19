import React, { forwardRef } from "react";

const ComposePost = forwardRef((props, ref) => {
  console.log(props?.setContent);
  return (
    <textarea
      ref={ref}
      id="composeModal"
      className="form-control rounded"
      rows="3"
      placeholder="Write something here..."
      value={props?.content}
      // onChange={props?.setContent(props?.content)}
      // onInput={props.enablePublish}
      style={{ border: "none" }}
    ></textarea>
  );
});

export default ComposePost;
