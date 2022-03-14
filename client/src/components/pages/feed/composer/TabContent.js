import React, { useRef, useState } from 'react'
import Avatar from '../../../Avatar';
import BasicOptions from './options/BasicOptions';
import ExtendedOptions from './options/ExtendedOptions';
import HiddenOptions from './options/HiddenOptions';
import MoreOptions from './options/MoreOptions';
import SubOptions from './options/SubOptions';

function TabContent({ setOverlay, setNewContent }) {

	const [publishButton, setPublishButton] = useState(false);

	const openPublishMode = () => {
		setOverlay(true);
		setNewContent(true);
	}

	const enablePublishMode = (e) => {
		e.target.value.length >= 1 ?
		setPublishButton(true) :
		setPublishButton(false);
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
							onInput={enablePublishMode}
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
			<MoreOptions publishButton={publishButton} />
      
    </div>
  );
}

export default TabContent