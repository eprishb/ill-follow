import React, { useContext, useState, useEffect } from "react";
import { Link } from  'react-router-dom'
import axios from 'axios';
import { format } from 'timeago.js'
import FeedPostActions from "../buttons/FeedPostActions";
import { AuthContext } from "../../../../context/AuthContext";
import Icon from "../../../misc/icon/Icon";

function FeedPost({ post }) {
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState({});
	const {user:currentUser} = useContext(AuthContext)

	useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

	const likeHandler = () => {
		try {
			axios.put("/api/posts/"+post._id+"/like", { userId: currentUser._id })
		} catch(err) {

		}
		setLike(isLiked ? like-1: like+1);
		setIsLiked(!isLiked);
	}

  return (
    <div id="feed-post-1" className="card is-post">
      <div className="content-wrap">
        <div className="card-heading">
          <div className="user-block">
            <div className="image">
							<Link to={`/profile/${user.username}`}>
								<img
									src={
										user.profilePicture ||
										"https://randomuser.me/api/portraits/women/91.jpg"
									}
									data-demo-src="assets/img/avatars/dan.jpg"
									data-user-popover="1"
									alt=""
								/>
							</Link>
            </div>
            <div className="user-info">
              <a href="#">{user.username}</a>
              <span className="time">{format(post.createdAt)}</span>
            </div>
          </div>
          {/* {{> feed-post-dropdown}} */}
        </div>

        <div className="card-body">
          <div className="post-text">
            <p>{post?.desc}</p>
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
                src={post?.img}
                data-demo-src="assets/img/demo/unsplash/1.jpg"
                alt=""
              />
            </a>
            <FeedPostActions likeHandler={likeHandler} isLiked={isLiked} />
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
            <p>and {like} more liked this</p>
          </div>
          <div className="social-count">
            <div className="likes-count">
              <Icon icon="heart" />
              <span>{like}</span>
            </div>
            <div className="shares-count">
               <Icon icon="link-2" />
              <span>{post.share}</span>
            </div>
            <div className="comments-count">
               <Icon icon="message-circle" />
              <span>{post.comment}</span>
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
             <Icon icon="x" />
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
                   <Icon icon="thumbs-up" />
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
                       <Icon icon="thumbs-up" />
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
                   <Icon icon="thumbs-up" />
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
                       <Icon icon="thumbs-up" />
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
                       <Icon icon="thumbs-up" />
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
                       <Icon icon="thumbs-up" />
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
                   <Icon icon="thumbs-up" />
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
                     <Icon icon="at-sign" />
                  </div>
                  <div className="action is-emoji">
                     <Icon icon="smile" />
                  </div>
                  <div className="action is-upload">
                     <Icon icon="camera" />
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
