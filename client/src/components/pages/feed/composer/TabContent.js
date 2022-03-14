import React, { useRef, useState } from 'react'
import Avatar from '../../../Avatar';
import BasicOptions from './options/BasicOptions';
import ExtendedOptions from './options/ExtendedOptions';
import HiddenOptions from './options/HiddenOptions';
import MoreOptions from './options/MoreOptions';
import SubOptions from './options/SubOptions';

function TabContent({ setOverlay, setNewContent }) {

	const openPublishMode = () => {
		setOverlay((active) => !active);
		setNewContent((active) => !active);
	}

	return (
    <div className="tab-content">
      <div className="compose">
        <div className="compose-form">
          <Avatar />
          <div className="control">
            <textarea
              id="publish"
              className="textarea"
              rows="3"
              placeholder="Write something about you..."
							onClick={openPublishMode}
            ></textarea>
          </div>
        </div>

        <div id="feed-upload" className="feed-upload"></div>

        <div id="options-summary" className="options-summary"></div>
				<SubOptions />
      </div>

			<ExtendedOptions />
			<BasicOptions />
      <HiddenOptions />
			<MoreOptions />
      
    </div>
  );
}

export default TabContent