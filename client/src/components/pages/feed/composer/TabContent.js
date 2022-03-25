import React, { useRef, useState } from 'react'
import Avatar from '../../../Avatar';
import Icon from '../../../misc/icon/Icon';
import BasicOptions from './options/BasicOptions';
import ExtendedOptions from './options/ExtendedOptions';
import HiddenOptions from './options/HiddenOptions';
import MoreOptions from './options/MoreOptions';
import SubOptions from './options/SubOptions';

function TabContent({ setOverlay, setNewContent, setComposeOptions, composeOptions }) {

	const desc = useRef();
	const [file, setFile] = useState(null);
	const [publishButton, setPublishButton] = useState(false);
	const [composeFriends, setComposeFriends] = useState(false);
	const [suboptionType, setSuboptionType] = useState(null)

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
              ref={desc}
              className="textarea"
              rows="3"
              placeholder="Write something about you..."
              onClick={openPublishMode}
              onInput={enablePublishMode}
            ></textarea>
          </div>
        </div>

        <div id="feed-upload" className="feed-upload">
          {file && (
            <div className="upload-wrap">
              <img src={URL.createObjectURL(file)} alt="" />
              <span className="remove-file" onClick={() => setFile(null)}>
                <Icon icon="x" />
              </span>
            </div>
          )}
        </div>

        <div id="options-summary" className="options-summary"></div>
        <SubOptions
					suboptionType={suboptionType}
					setSuboptionType={setSuboptionType}
					/>
      </div>

      <ExtendedOptions
				composeOptions={composeOptions}
				setFile={setFile}
				setSuboptionType={setSuboptionType}
			/>
      <BasicOptions
        openPublishMode={openPublishMode}
        composeOptions={composeOptions}
        setFile={setFile}
        setComposeOptions={setComposeOptions}
      />
      <HiddenOptions
				composeFriends={composeFriends}
			/>
      <MoreOptions
        file={file}
        desc={desc}
        publishButton={publishButton}
        composeFriends={composeFriends}
        setComposeFriends={setComposeFriends}
      />
    </div>
  );
}

export default TabContent