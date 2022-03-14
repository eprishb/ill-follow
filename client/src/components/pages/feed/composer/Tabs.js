import React from 'react'
import Icon from '../../../misc/icon/Icon';

function Tabs() {
	return (
    <div className="tabs is-boxed is-fullwidth">
      <ul>
        <li className="is-active">
          <a>
            <span className="icon is-small">
              <Icon icon="edit-3" />
            </span>
            <span>Publish</span>
          </a>
        </li>
        <li>
          <a className="modal-trigger" data-modal="albums-help-modal">
            <span className="icon is-small">
              <Icon icon="image" />
            </span>
            <span>Albums</span>
          </a>
        </li>
        <li>
          <a className="modal-trigger" data-modal="videos-help-modal">
            <span className="icon is-small">
              <Icon icon="video" />
            </span>
            <span>Video</span>
          </a>
        </li>
        <li className="close-wrap">
          <span className="close-publish">
            <Icon icon="x" />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Tabs