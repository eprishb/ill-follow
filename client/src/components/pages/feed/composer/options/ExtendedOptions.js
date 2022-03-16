import React from 'react'
import Icon from '../../../../misc/icon/Icon';

function ExtendedOptions({ setFile }) {
	return (
    <div id="extended-options" className="compose-options is-hidden">
      <div className="columns is-multiline is-full">
        <div className="column is-6 is-narrower">
          <div className="compose-option is-centered">
            <Icon icon="camera" />
            <span>Photo/Video</span>
            <input
              id="feed-upload-input-1"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </div>
        <div className="column is-6 is-narrower">
          <div
            id="extended-show-activities"
            className="compose-option is-centered"
          >
            <img
              src="https://friendkit.cssninja.io/assets/img/icons/emoji/emoji-1.svg"
              alt=""
            />
            <span>Mood/Activity</span>
          </div>
        </div>
        <div className="column is-6 is-narrower">
          <div id="open-tag-suboption" className="compose-option is-centered">
            <Icon icon="tag" />
            <span>Tag friends</span>
          </div>
        </div>
        <div className="column is-6 is-narrower">
          <div
            id="open-location-suboption"
            className="compose-option is-centered"
          >
            <Icon icon="map-pin" />
            <span>Post location</span>
          </div>
        </div>
        <div className="column is-6 is-narrower">
          <div id="open-link-suboption" className="compose-option is-centered">
            <Icon icon="link-2" />
            <span>Share link</span>
          </div>
        </div>
        <div className="column is-6 is-narrower">
          <div id="open-gif-suboption" className="compose-option is-centered">
            <Icon icon="image" />
            <span>Post GIF</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtendedOptions