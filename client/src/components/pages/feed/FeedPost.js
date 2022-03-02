import React from "react";

function FeedPost() {
  return (
    <div id="feed-post-1" className="card is-post">
      <div className="content-wrap">
        <div className="card-heading">
          <div className="user-block">
            <div className="image">
              <img
                src="https://via.placeholder.com/300x300"
                data-demo-src="assets/img/avatars/dan.jpg"
                data-user-popover="1"
                alt=""
              />
            </div>
            <div className="user-info">
              <a href="#">Dan Walker</a>
              <span className="time">July 26 2018, 01:03pm</span>
            </div>
          </div>
          {/* {{> feed-post-dropdown}} */}
        </div>

        <div className="card-body">
          <div className="post-text">
            <p>
              Yesterday with
              <a href="#">@Karen Miller</a> and
              <a href="#">@Marvin Stemperd</a> at the
              <a href="#">#Rock'n'Rolla</a> concert in LA. Was totally
              fantastic! People were really excited about this one!
            </p>
          </div>
          <div className="post-image">
            <a
              data-fancybox="post1"
              data-lightbox-type="comments"
              data-thumb="assets/img/demo/unsplash/1.jpg"
              href="https://via.placeholder.com/1600x900"
              data-demo-href="assets/img/demo/unsplash/1.jpg"
            >
              <img
                src="https://via.placeholder.com/1600x900"
                data-demo-src="assets/img/demo/unsplash/1.jpg"
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
              data-demo-src="assets/img/avatars/dan.jpg"
              data-user-popover="1"
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
              data-demo-src="assets/img/avatars/edward.jpeg"
              data-user-popover="5"
              alt=""
            />
            <img
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/milly.jpg"
              data-user-popover="7"
              alt=""
            />
          </div>
          <div className="likers-text">
            <p>
              <a href="#">Milly</a>,<a href="#">David</a>
            </p>
            <p>and 23 more liked this</p>
          </div>
          <div className="social-count">
            <div className="likes-count">
              <i data-feather="heart"></i>
              <span>27</span>
            </div>
            <div className="shares-count">
              <i data-feather="link-2"></i>
              <span>9</span>
            </div>
            <div className="comments-count">
              <i data-feather="message-circle"></i>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="comments-wrap is-hidden">
        <div className="comments-heading">
          <h4>
            Comments
            <small>(8)</small>
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
                  data-demo-src="assets/img/avatars/dan.jpg"
                  data-user-popover="1"
                  alt=""
                />
              </div>
            </div>
            <div className="media-content">
              <a href="#">Dan Walker</a>
              <span className="time">28 minutes ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                consequat.
              </p>
              <div className="controls">
                <div className="like-count">
                  <i data-feather="thumbs-up"></i>
                  <span>4</span>
                </div>
                <div className="reply">
                  <a href="#">Reply</a>
                </div>
                <div className="edit">
                  <a href="#">Edit</a>
                </div>
              </div>

              <div className="media is-comment">
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/david.jpg"
                      data-user-popover="4"
                      alt=""
                    />
                  </div>
                </div>
                <div className="media-content">
                  <a href="#">David Kim</a>
                  <span className="time">15 minutes ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="controls">
                    <div className="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>0</span>
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
            <div className="media-right">{/* {{> comment-dropdown}} */}</div>
          </div>

          <div className="media is-comment">
            <div className="media-left">
              <div className="image">
                <img
                  src="https://via.placeholder.com/300x300"
                  data-demo-src="assets/img/avatars/rolf.jpg"
                  data-user-popover="13"
                  alt=""
                />
              </div>
            </div>
            <div className="media-content">
              <a href="#">Rolf Krupp</a>
              <span className="time">9 hours ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua.
                Exercitation ullamco laboris consequat.
              </p>
              <div className="controls">
                <div className="like-count">
                  <i data-feather="thumbs-up"></i>
                  <span>2</span>
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
                      data-demo-src="assets/img/avatars/elise.jpg"
                      data-user-popover="6"
                      alt=""
                    />
                  </div>
                </div>
                <div className="media-content">
                  <a href="#">Elise Walker</a>
                  <span className="time">8 hours ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="controls">
                    <div className="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>0</span>
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

              <div className="media is-comment">
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/rolf.jpg"
                      data-user-popover="13"
                      alt=""
                    />
                  </div>
                </div>
                <div className="media-content">
                  <a href="#">Rolf Krupp</a>
                  <span className="time">7 hours ago</span>
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

              <div className="media is-comment">
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/elise.jpg"
                      data-user-popover="6"
                      alt=""
                    />
                  </div>
                </div>
                <div className="media-content">
                  <a href="#">Elise Walker</a>
                  <span className="time">6 hours ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="controls">
                    <div className="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>0</span>
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
            <div className="media-right">{/* {{> comment-dropdown}} */}</div>
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
              <span className="time">10 hours ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="controls">
                <div className="like-count">
                  <i data-feather="thumbs-up"></i>
                  <span>5</span>
                </div>
                <div className="reply">
                  <a href="#">Reply</a>
                </div>
              </div>
            </div>
            <div className="media-right">{/* {{> comment-dropdown}} */}</div>
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
  );
}

export default FeedPost;
