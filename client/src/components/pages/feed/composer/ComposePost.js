import React, { forwardRef, useLayoutEffect, useState } from "react";

const ComposePost = forwardRef((props, ref) => {
  const value = props?.content;
  const enablePublish = props?.enablePublishMode;
  const handleShow = props?.handleShow;
  const readOnly = !ref ? "readonly" : false;
  const [rows, setRows] = useState(1);

  const updateContent = (event) => {
    props?.setContent(ref.current.value);
  };

  useLayoutEffect(() => {
    if (ref) {
      if (parseInt(Math.max(ref.current.scrollHeight)) > 200) return;
      ref.current.style.height = "inherit";
      ref.current.style.height = `${Math.max(ref.current.scrollHeight)}px`;
    }
  }, [ref, value]);

  return (
    <textarea
      ref={ref}
      id="composeModal"
      className="form-control rounded"
      placeholder="Write something here..."
      readOnly={readOnly}
      value={value}
      onChange={ref && updateContent}
      onInput={enablePublish}
      onClick={handleShow}
      style={{ border: "none" }}
    ></textarea>
  );
});

export default ComposePost;
