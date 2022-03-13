import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '../../../Avatar';
import Icon from '../../../misc/icon/Icon';

function NavDropMedia({ data, user }) {
	return (
    <div className="media">
      <figure className="media-left">
        {data.controlType === "account-dropdown" ?
          <Link to={`profile/${user.username}`} className="account-item">
						<Avatar />
						<div className="media-right">
							<i data-feather="check"></i>
						</div>
          </Link>
        : 
				<Avatar />
        }
      </figure>
      <div className="media-content">
				{
					data.controlType === "account-dropdown" ?
					<div>
						<h3>{user.username}</h3>
						<small>Main account</small>
					</div>
					:
					<div>
						<span>
							<a href="#">David Kim</a> commented on <a href="#">your post</a>.
						</span>
						<span className="time">30 minutes ago</span>
					</div>
				}
      </div>
      <div className="media-right">
        <div className="added-icon">
          <Icon icon="message-square" />
        </div>
      </div>
    </div>
  );
}

export default NavDropMedia