import React from 'react'
import Icon from '../../../../misc/icon/Icon';

function SubOptions() {

	const handleAutoComplete = (event) => {
		let e = document.createEvent('KeyboardEvent');
		let e_id = event.target.id
		e_id.focus();
		e_id.getAttribute('value');
		e_id.dispatchEvent(new Event(e))
	}

	return (
    <div>
      <div
        id="tag-suboption"
        className="is-autocomplete is-suboption is-hidden"
      >
        <div id="tag-list" className="tag-list"></div>
        <div className="control">
          <input
            id="users-autocpl"
            type="text"
            className="input"
            placeholder="Who are you with?"
          />
          <div className="icon">
            <Icon icon="search" />
          </div>
          <div className="close-icon is-main">
            <Icon icon="x" />
          </div>
        </div>
      </div>

      <div
        id="activities-suboption"
        className="is-autocomplete is-suboption is-hidden"
      >
        <div id="activities-autocpl-wrapper" className="control has-margin">
          <input
            id="activities-autocpl"
            type="text"
            className="input"
            placeholder="What are you doing right now?"
            onKeyUp={handleAutoComplete}
          />
          <div className="icon">
            <Icon icon="search" />
          </div>
          <div className="close-icon is-main">
            <Icon icon="x" />
          </div>
        </div>

        <div
          id="mood-autocpl-wrapper"
          className="is-autocomplete is-activity is-hidden"
        >
          <div className="control has-margin">
            <input
              id="mood-autocpl"
              type="text"
              className="input is-subactivity"
              placeholder="How do you feel?"
              onKeyUp={handleAutoComplete}
            />
            <div className="input-block">Feels</div>
            <div className="close-icon is-subactivity">
              <Icon icon="x" />
            </div>
          </div>
        </div>

        <div
          id="drinking-autocpl-wrapper"
          className="is-autocomplete is-activity is-hidden"
        >
          <div className="control has-margin">
            <input
              id="drinking-autocpl"
              type="text"
              className="input is-subactivity"
              placeholder="What are you drinking?"
              onKeyUp={handleAutoComplete}
            />
            <div className="input-block">Drinks</div>
            <div className="close-icon is-subactivity">
              <Icon icon="x" />
            </div>
          </div>
        </div>

        <div
          id="eating-autocpl-wrapper"
          className="is-autocomplete is-activity is-hidden"
        >
          <div className="control has-margin">
            <input
              id="eating-autocpl"
              type="text"
              className="input is-subactivity"
              placeholder="What are you eating?"
              onKeyUp={handleAutoComplete}
            />
            <div className="input-block">Eats</div>
            <div className="close-icon is-subactivity">
              <Icon icon="x" />
            </div>
          </div>
        </div>

        <div
          id="reading-autocpl-wrapper"
          className="is-autocomplete is-activity is-hidden"
        >
          <div className="control has-margin">
            <input
              id="reading-autocpl"
              type="text"
              className="input is-subactivity"
              placeholder="What are you reading?"
              onKeyUp={handleAutoComplete}
            />
            <div className="input-block">Reads</div>
            <div className="close-icon is-subactivity">
              <Icon icon="x" />
            </div>
          </div>
        </div>

        <div
          id="watching-autocpl-wrapper"
          className="is-autocomplete is-activity is-hidden"
        >
          <div className="control has-margin">
            <input
              id="watching-autocpl"
              type="text"
              className="input is-subactivity"
              placeholder="What are you watching?"
              onKeyUp={handleAutoComplete}
            />
            <div className="input-block">Watches</div>
            <div className="close-icon is-subactivity">
              <Icon icon="x" />
            </div>
          </div>
        </div>

        <div
          id="travel-autocpl-wrapper"
          className="is-autocomplete is-activity is-hidden"
        >
          <div className="control has-margin">
            <input
              id="travel-autocpl"
              type="text"
              className="input is-subactivity"
              placeholder="Where are you going?"
              onKeyUp={handleAutoComplete}
            />
            <div className="input-block">Travels</div>
            <div className="close-icon is-subactivity">
              <Icon icon="x" />
            </div>
          </div>
        </div>
      </div>

      <div
        id="location-suboption"
        className="is-autocomplete is-suboption is-hidden"
      >
        <div
          id="location-autocpl-wrapper"
          className="control is-location-wrapper has-margin"
        >
          <input
            id="location-autocpl"
            type="text"
            className="input"
            placeholder="Where are you now?"
          />
          <div className="icon">
            <Icon icon="map-pin" />
          </div>
          <div className="close-icon is-main">
            <Icon icon="x" />
          </div>
        </div>
      </div>

      <div
        id="link-suboption"
        className="is-autocomplete is-suboption is-hidden"
      >
        <div
          id="link-autocpl-wrapper"
          className="control is-location-wrapper has-margin"
        >
          <input
            id="link-autocpl"
            type="text"
            className="input"
            placeholder="Enter the link URL"
          />
          <div className="icon">
            <Icon icon="link-2" />
          </div>
          <div className="close-icon is-main">
            <Icon icon="x" />
          </div>
        </div>
      </div>

      <div
        id="gif-suboption"
        className="is-autocomplete is-suboption is-hidden"
      >
        <div
          id="gif-autocpl-wrapper"
          className="control is-gif-wrapper has-margin"
        >
          <input
            id="gif-autocpl"
            type="text"
            className="input"
            placeholder="Search a GIF to add"
          />
          <div className="icon">
            <Icon icon="search" />
          </div>
          <div className="close-icon is-main">
            <Icon icon="x" />
          </div>
          <div className="gif-dropdown">
            <div className="inner">
              <div className="gif-block">
                <img
                  src="https://via.placeholder.com/478x344"
                  data-demo-src="assets/img/demo/gif/1.gif"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/478x344"
                  data-demo-src="assets/img/demo/gif/2.gif"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/478x344"
                  data-demo-src="assets/img/demo/gif/3.gif"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/478x344"
                  data-demo-src="assets/img/demo/gif/4.gif"
                  alt=""
                />
              </div>
              <div className="gif-block">
                <img
                  src="https://via.placeholder.com/478x344"
                  data-demo-src="assets/img/demo/gif/5.gif"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/478x344"
                  data-demo-src="assets/img/demo/gif/6.gif"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/478x344"
                  data-demo-src="assets/img/demo/gif/7.gif"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/478x344"
                  data-demo-src="assets/img/demo/gif/8.gif"
                  alt=""
                />
              </div>
              <div className="gif-block">
                <img
                  src="https://via.placeholder.com/478x344"
                  data-demo-src="assets/img/demo/gif/9.gif"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/478x344"
                  data-demo-src="assets/img/demo/gif/10.gif"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/478x344"
                  data-demo-src="assets/img/demo/gif/11.gif"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/478x344"
                  data-demo-src="assets/img/demo/gif/12.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubOptions