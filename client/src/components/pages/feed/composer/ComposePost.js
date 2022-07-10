import React, { forwardRef, useLayoutEffect, useState } from "react";

import { Image } from "react-bootstrap";

const ComposePost = forwardRef((props, ref) => {
  const value = props?.content;
  const enablePublish = props?.enablePublishMode;
  const handleShow = props?.handleShow;
  const readOnly = !ref ? "readonly" : false;

  const updateContent = () => {
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
    <div>
      <textarea
        ref={ref}
        id="composeModal"
        className={`form-control rounded
					${readOnly ? "form-control-plaintext" : ""}
				`}
        placeholder="Write something here..."
        readOnly={readOnly}
        value={value}
        onChange={ref && updateContent}
        onInput={enablePublish}
        onClick={handleShow}
        style={{ border: "none" }}
      ></textarea>
      {props?.files && (
        <div>
          <span onClick={() => props?.setFiles(null)}>X</span>
          <Image fluid src={URL.createObjectURL(props?.files[0])} alt="" />
        </div>
      )}
    </div>
  );
});

export default ComposePost;
