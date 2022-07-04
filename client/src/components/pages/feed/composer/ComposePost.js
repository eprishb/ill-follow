import React, { forwardRef } from "react";

const ComposePost = forwardRef((props, ref) => {
  return (
    <textarea
      ref={ref}
      id="composeModal"
      className="form-control rounded"
      rows="1"
      placeholder="Write something here..."
      value={props?.content}
      onChange={props?.updateContent}
      // onInput={props.enablePublish}
      onClick={props?.handleShow}
      style={{ border: "none" }}
    ></textarea>
  );
});

export default ComposePost;
