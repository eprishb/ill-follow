import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

// Bootstrap
import { Row, Col, Container, Dropdown } from "react-bootstrap";
// End Bootstrap

import { Link } from "react-router-dom";

import Card from "../../components/Card";
import CreatePost from "../../components/pages/feed/CreatePost";
import CustomToggle from "../../components/dropdowns";
import FeedPost from "../../components/pages/feed/posts/FeedPost";

//image
import user01 from "../../assets/images/user/01.jpg";
import user2 from "../../assets/images/user/02.jpg";
import s1 from "../../assets/images/page-img/s1.jpg";
import s2 from "../../assets/images/page-img/s2.jpg";
import s3 from "../../assets/images/page-img/s3.jpg";
import s4 from "../../assets/images/page-img/s4.jpg";
import s5 from "../../assets/images/page-img/s5.jpg";
import img42 from "../../assets/images/page-img/42.png";
import img9 from "../../assets/images/small/img-1.jpg";
import img10 from "../../assets/images/small/img-2.jpg";
import loader from "../../assets/images/page-img/page-load-loader.gif";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("api/posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [user._id]);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={8} className="row m-0 p-0">
            <Col sm={12}>
              <CreatePost
                id="post-modal-data"
                className="card-block card-stretch card-height"
              />
            </Col>
            {posts.map((post) => (
              <Col sm={12} key={post._id}>
                <FeedPost post={post} />
              </Col>
            ))}
          </Col>
          <div className="col-sm-12 text-center">
            <img src={loader} alt="loader" style={{ height: "100px" }} />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Index;
