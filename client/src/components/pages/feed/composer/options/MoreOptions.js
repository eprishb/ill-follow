import React from 'react'
import Icon from '../../../../misc/icon/Icon';

function MoreOptions() {
	return (
    <div className="more-wrap">
      <button
        id="show-compose-friends"
        type="button"
        className="button is-more"
        aria-haspopup="true"
      >
        <Icon icon="more-vertical" />
        <span>View More</span>
      </button>
      <button
        id="publish-button"
        type="submit"
        className={`button is-solid accent-button is-fullwidth is-disabled`}
      >
        Publish
      </button>
    </div>
  );
}

export default MoreOptions