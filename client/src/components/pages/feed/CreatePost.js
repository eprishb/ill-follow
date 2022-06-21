import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../context/AuthContext";
import Avatar from "../../Avatar";
import Card from "../../Card";
import CustomToggle from "../../dropdowns";

// Bootstrap
import { Dropdown, Modal } from "react-bootstrap";
// End Bootstrap

//image
import user1 from "../../../assets/images/user/1.jpg";
import img1 from "../../../assets/images/small/07.png";
import img2 from "../../../assets/images/small/08.png";
import img3 from "../../../assets/images/small/09.png";
import img4 from "../../../assets/images/small/10.png";
import img5 from "../../../assets/images/small/11.png";
import img6 from "../../../assets/images/small/12.png";
import img7 from "../../../assets/images/small/13.png";
import img8 from "../../../assets/images/small/14.png";
import BasicOptions from "./composer/options/BasicOptions";
import Publish from "./buttons/Publish";
import ComposePost from "./composer/ComposePost";

function CreatePost() {
  const { user } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ref = useRef();
  const [content, setContent] = useState("");
  console.log(content);

  const [file, setFile] = useState(null);

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
          <div className="post-text ms-3 w-100 ">
            <ComposePost handleShow={handleShow} />
          </div>
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
        <Modal.Header className="d-flex justify-content-between" closeButton>
          <Modal.Title id="post-modalLabel">Create Post</Modal.Title>
          {/* <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            <i className="ri-close-fill"></i>
          </button> */}
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center">
            <div className="user-img">
              <Avatar />
            </div>
            <div
              className="post-text ms-3 w-100 "
              data-bs-toggle="modal"
              data-bs-target="#post-modal"
            >
              {console.log("render")}
              {/* <ComposePost
                ref={ref}
                content={content}
                setContent={setContent}
              /> */}
            </div>
            <div>
              {file && (
                <div>
                  <img src={URL.createObjectURL(file)} alt="" />
                  <span onClick={() => setFile(null)}>X</span>
                </div>
              )}
            </div>
          </div>
          <hr />
          <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
            <li className="col-md-6 mb-3">
              <div className="bg-soft-primary rounded p-2 pointer me-3">
                <Link to="#"></Link>
                <img src={img1} alt="icon" className="img-fluid" /> Photo/Video
              </div>
            </li>
            <li className="col-md-6 mb-3">
              <div className="bg-soft-primary rounded p-2 pointer me-3">
                <Link to="#"></Link>
                <img src={img2} alt="icon" className="img-fluid" /> Tag Friend
              </div>
            </li>
            <li className="col-md-6 mb-3">
              <div className="bg-soft-primary rounded p-2 pointer me-3">
                <Link to="#"></Link>
                <img src={img3} alt="icon" className="img-fluid" />{" "}
                Feeling/Activity
              </div>
            </li>
            <li className="col-md-6 mb-3">
              <div className="bg-soft-primary rounded p-2 pointer me-3">
                <Link to="#"></Link>
                <img src={img4} alt="icon" className="img-fluid" /> Check in
              </div>
            </li>
            <li className="col-md-6 mb-3">
              <div className="bg-soft-primary rounded p-2 pointer me-3">
                <Link to="#"></Link>
                <img src={img5} alt="icon" className="img-fluid" /> Live Video
              </div>
            </li>
            <li className="col-md-6 mb-3">
              <div className="bg-soft-primary rounded p-2 pointer me-3">
                <Link to="#"></Link>
                <img src={img6} alt="icon" className="img-fluid" /> Gif
              </div>
            </li>
            <li className="col-md-6 mb-3">
              <div className="bg-soft-primary rounded p-2 pointer me-3">
                <Link to="#"></Link>
                <img src={img7} alt="icon" className="img-fluid" /> Watch Party
              </div>
            </li>
            <li className="col-md-6 mb-3">
              <div className="bg-soft-primary rounded p-2 pointer me-3">
                <Link to="#"></Link>
                <img src={img8} alt="icon" className="img-fluid" /> Play with
                Friends
              </div>
            </li>
          </ul>
          <hr />
          <div className="other-option">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="user-img me-3">
                  <img
                    src={user1}
                    alt="user1"
                    className="avatar-60 rounded-circle img-fluid"
                  />
                </div>
                <h6>Your Story</h6>
              </div>
              <div className="card-post-toolbar">
                <Dropdown>
                  <Dropdown.Toggle as={CustomToggle} role="button">
                    <span className="btn btn-primary">Friend</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className=" m-0 p-0">
                    <Dropdown.Item className=" p-3" to="#">
                      <div className="d-flex align-items-top">
                        <i className="ri-save-line h4"></i>
                        <div className="data ms-2">
                          <h6>Public</h6>
                          <p className="mb-0">Anyone on or off Facebook</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="p-3" to="#">
                      <div className="d-flex align-items-top">
                        <i className="ri-close-circle-line h4"></i>
                        <div className="data ms-2">
                          <h6>Friends</h6>
                          <p className="mb-0">Your Friend on facebook</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className=" p-3" to="#">
                      <div className="d-flex align-items-top">
                        <i className="ri-user-unfollow-line h4"></i>
                        <div className="data ms-2">
                          <h6>Friends except</h6>
                          <p className="mb-0">Don't show to some friends</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className=" p-3" to="#">
                      <div className="d-flex align-items-top">
                        <i className="ri-notification-line h4"></i>
                        <div className="data ms-2">
                          <h6>Only Me</h6>
                          <p className="mb-0">Only me</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          {/* <Publish file={file} publishButton={publishButton} /> */}
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default CreatePost;
