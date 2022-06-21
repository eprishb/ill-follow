import React, { forwardRef } from "react";

const ComposePost = forwardRef((props, ref) => {
  return (
    // <textarea
    //   ref={ref}
    //   id="composeModal"
    //   className="form-control rounded"
    //   rows="3"
    //   placeholder="Write something here..."
    //   value={props?.content}
    //   // onChange={props?.setContent(props?.content)}
    //   // onInput={props.enablePublish}
    //   style={{ border: "none" }}
    // ></textarea>
    <form className="post-text ms-3 w-100" onClick={props?.handleShow}>
      <input
        type="text"
        className="form-control rounded"
        placeholder="Write something here..."
        style={{ border: "none" }}
      />
    </form>
  );
});

export default ComposePost;
