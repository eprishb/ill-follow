import React, { useEffect, useState } from "react";
import axios from "axios";

function TimelinePost({ username }) {
	const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/profile/" + username);
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="profile-post">
        <div className="time is-hidden-mobile">
          <div className="img-container">
            <img
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/jenna.png"
              alt=""
            />
          </div>
        </div>
        <div className="card is-post">
          <div className="content-wrap">
            <div className="card-heading">
              <div className="user-block">
                <div className="image">
                  <img
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/jenna.png"
                    data-user-popover="0"
                    alt=""
                  />
                </div>
                <div className="user-info">
                  <a href="#">{username}</a>
                  <span className="time">October 17 2018, 11:03am</span>
                </div>
              </div>

              {/* {{> feed-post-dropdown}} */}
            </div>

            <div className="card-body">
              <div className="post-text">
                <p>
                  Today i visited this amazing little fashion store in Church
                  street. Everything is handmade, from skirts to bags. Their
                  products really have an outstanding quality. If you don't know
                  them already, well it's time to make your move!
                </p>
              </div>
              <div className="post-image">
                <a
                  data-fancybox="profile-post1"
                  data-lightbox-type="comments"
                  data-thumb="assets/img/demo/unsplash/8.jpg"
                  href="https://via.placeholder.com/1600x900"
                  data-demo-href="assets/img/demo/unsplash/8.jpg"
                >
                  <img
                    src="https://via.placeholder.com/1600x900"
                    data-demo-src="assets/img/demo/unsplash/8.jpg"
                    alt=""
                  />
                </a>
                {/* {{> feed-post-actions}} */}
              </div>
            </div>

            <div className="card-footer">
              <div className="likers-group">
                <img
                  src="https://via.placeholder.com/300x300"
                  data-demo-src="assets/img/avatars/milly.jpg"
                  data-user-popover="7"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/300x300"
                  data-demo-src="assets/img/avatars/david.jpg"
                  data-user-popover="4"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/300x300"
                  data-demo-src="assets/img/avatars/nelly.png"
                  data-user-popover="9"
                  alt=""
                />
              </div>
              <div className="likers-text">
                <p>
                  <a href="#">Milly</a>,<a href="#">David</a>
                </p>
                <p>and 1 more liked this</p>
              </div>
              <div className="social-count">
                <div className="likes-count">
                  <i data-feather="heart"></i>
                  <span>32</span>
                </div>
                <div className="shares-count">
                  <i data-feather="link-2"></i>
                  <span>4</span>
                </div>
                <div className="comments-count">
                  <i data-feather="message-circle"></i>
                  <span>5</span>
                </div>
              </div>
            </div>
          </div>

          <div className="comments-wrap is-hidden">
            <div className="comments-heading">
              <h4>
                Comments
                <small>(5)</small>
              </h4>
              <div className="close-comments">
                <i data-feather="x"></i>
              </div>
            </div>

            <div className="comments-body has-slimscroll">
              <div className="media is-comment">
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/bobby.jpg"
                      data-user-popover="8"
                      alt=""
                    />
                  </div>
                </div>
                <div className="media-content">
                  <a href="#">Bobby Brown</a>
                  <span className="time">1 hour ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris consequat.
                  </p>
                  <div className="controls">
                    <div className="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>1</span>
                    </div>
                    <div className="reply">
                      <a href="#">Reply</a>
                    </div>
                  </div>
                  <div className="media is-comment">
                    <div className="media-left">
                      <div className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="assets/img/avatars/daniel.jpg"
                          data-user-popover="3"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="media-content">
                      <a href="#">Daniel Wellington</a>
                      <span className="time">3 minutes ago</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempo incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <div className="controls">
                        <div className="like-count">
                          <i data-feather="thumbs-up"></i>
                          <span>4</span>
                        </div>
                        <div className="reply">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="media-right">
                      {/* {{> comment-dropdown}} */}
                    </div>
                  </div>
                </div>
                <div className="media-right">
                  {/* {{> comment-dropdown}} */}
                </div>
              </div>

              <div className="media is-comment">
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/mike.jpg"
                      data-user-popover="12"
                      alt=""
                    />
                  </div>
                </div>
                <div className="media-content">
                  <a href="#">Mike Lasalle</a>
                  <span className="time">Yesterday</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="controls">
                    <div className="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>3</span>
                    </div>
                    <div className="reply">
                      <a href="#">Reply</a>
                    </div>
                  </div>
                  <div className="media is-comment">
                    <div className="media-left">
                      <div className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="assets/img/avatars/lana.jpeg"
                          data-user-popover="10"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="media-content">
                      <a href="#">Lana Henrikssen</a>
                      <span className="time">3 minutes ago</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempo incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <div className="controls">
                        <div className="like-count">
                          <i data-feather="thumbs-up"></i>
                          <span>4</span>
                        </div>
                        <div className="reply">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="media-right">
                      {/* {{> comment-dropdown}} */}
                    </div>
                  </div>
                </div>
                <div className="media-right">
                  {/* {{> comment-dropdown}} */}
                </div>
              </div>

              <div className="media is-comment">
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/nelly.png"
                      data-user-popover="9"
                      alt=""
                    />
                  </div>
                </div>
                <div className="media-content">
                  <a href="#">Nelly Schwartz</a>
                  <span className="time">2 days ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="controls">
                    <div className="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>1</span>
                    </div>
                    <div className="reply">
                      <a href="#">Reply</a>
                    </div>
                  </div>
                </div>
                <div className="media-right">
                  {/* {{> comment-dropdown}} */}
                </div>
              </div>
            </div>

            <div className="card-footer">
              <div className="media post-comment has-emojis">
                <div className="media-content">
                  <div className="field">
                    <p className="control">
                      <textarea
                        className="textarea comment-textarea"
                        rows="5"
                        placeholder="Write a comment..."
                      ></textarea>
                    </p>
                  </div>
                  <div className="actions">
                    <div className="image is-32x32">
                      <img
                        className="is-rounded"
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="assets/img/avatars/jenna.png"
                        data-user-popover="0"
                        alt=""
                      />
                    </div>
                    <div className="toolbar">
                      <div className="action is-auto">
                        <i data-feather="at-sign"></i>
                      </div>
                      <div className="action is-emoji">
                        <i data-feather="smile"></i>
                      </div>
                      <div className="action is-upload">
                        <i data-feather="camera"></i>
                        <input type="file" />
                      </div>
                      <a className="button is-solid primary-button raised">
                        Post Comment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelinePost;
