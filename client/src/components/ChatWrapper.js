import React from 'react'

function ChatWrapper() {
	return (
		<div className="chat-wrapper">
			<div className="chat-inner">

        {/* <ChatNav /> */}

        <div id="chat-sidebar" className="users-sidebar">
            <div className="header-item">
                <img className="light-image" src="assets/img/logo/friendkit-bold.svg" alt="" />
                <img className="dark-image" src="assets/img/logo/friendkit-white.svg" alt="" />
            </div>
            <div className="conversations-list has-slimscroll-xs">
                {/* {{> conversations-list}} */}
            </div>
            <div className="footer-item">
                <div className="add-button modal-trigger" data-modal="add-conversation-modal"><i data-feather="user"></i></div>
            </div>
        </div>

        <div id="chat-body" className="chat-body is-opened">
            {/* {{> dan-conversation}} */}

            {/* {{> stella-conversation}} */}

            {/* {{> daniel-conversation}} */}

            {/* {{> david-conversation}} */}

            {/* {{> edward-conversation}} */}

            {/* {{> elise-conversation}} */}

            {/* {{> nelly-conversation}} */}

            {/* {{> milly-conversation}} */}

            <div className="chat-action">
                <div className="chat-action-inner">
                    <div className="control">
                        <textarea className="textarea comment-textarea" rows="1"></textarea>
                    </div>
                </div>
            </div>

        </div>

        <div id="chat-panel" className="chat-panel is-opened">
            <div className="panel-inner">
                <div className="panel-header">
                    <h3>Details</h3>
                    <div className="panel-close">
                        <i data-feather="x"></i>
                    </div>
                </div>

                {/* {{> dan-details}} */}

                {/* {{> stella-details}} */}

                {/* {{> daniel-details}} */}

                {/* {{> david-details}} */}

                {/* {{> edward-details}} */}

                {/* {{> elise-details}} */}

                {/* {{> nelly-details}} */}

                {/* {{> milly-details}} */}

            </div>
        </div>
    </div>
</div>

// {{> add-conversation-modal}}
	)
}

export default ChatWrapper