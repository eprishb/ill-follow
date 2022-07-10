import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../context/AuthContext";
import Avatar from "../../Avatar";
import Card from "../../Card";

// Bootstrap
import { Modal } from "react-bootstrap";
// End Bootstrap

//image
import BasicOptions from "./composer/options/BasicOptions";
import ExtendedOptions from "./composer/options/ExtendedOptions";
import Publish from "./buttons/Publish";
import ComposePost from "./composer/ComposePost";
import HiddenOptions from "./composer/options/HiddenOptions";

function CreatePost() {
  const { user } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ref = useRef();
  const [content, setContent] = useState("");

  const [files, setFiles] = useState(null);
  const [input, setInput] = useState("");

  const [publishButton, setPublishButton] = useState(false);
  const enablePublishMode = (e) => {
    e.target.value.length >= 1
      ? setPublishButton(true)
      : setPublishButton(false);
  };

  return (
    <Card>
      <Card.Header>
        <div className="header-title">
          <h4 className="card-title">Create Post</h4>
        </div>
      </Card.Header>
      <Card.Body>
        <div className="d-flex align-items-center">
          <div className="user-img">
            <Avatar />
          </div>
          <form className="post-text ms-3 w-100">
            <ComposePost
              content={content}
              files={files}
              handleShow={handleShow}
              setFiles={setFiles}
            />
          </form>
        </div>
        <hr />
        <BasicOptions
          show={show}
          showModal={handleShow}
          closeModal={handleClose}
        />
      </Card.Body>
      <Modal
        size="lg"
        className=" fade"
        id="post-modal"
        onHide={handleClose}
        show={show}
      >
        <Modal.Header className="d-flex justify-content-between">
          <Modal.Title id="post-modalLabel">Create Post</Modal.Title>
          <Link to="#" className="lh-1" onClick={handleClose}>
            <span className="material-symbols-outlined">close</span>
          </Link>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center">
            <div className="user-img">
              <Avatar />
            </div>
            <form
              className="post-text ms-3 w-100 "
              data-bs-toggle="modal"
              data-bs-target="#post-modal"
            >
              <ComposePost
                ref={ref}
                content={content}
                files={files}
                setContent={setContent}
                setFiles={setFiles}
                enablePublishMode={enablePublishMode}
              />
            </form>
          </div>
          <hr />
          {input && (
            <div className="d-flex position-relative align-items-center justify-content-end mb-3">
              <input
                type="text"
                placeholder={input}
                className="form-control ps-5"
              />
              <div
                className="position-absolute p-2"
                onClick={() => setInput("")}
              >
                <span className="material-symbols-outlined fs-5 lh-base">
                  close
                </span>
              </div>
            </div>
          )}
          <ExtendedOptions setFiles={setFiles} setInput={setInput} />
          <hr />
          <HiddenOptions />
          <Publish
            files={files}
            content={content}
            publishButton={publishButton}
          />
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default CreatePost;
