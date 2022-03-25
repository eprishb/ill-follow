import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import classNames from 'classnames';
import Sidebar from '../components/navigation/sidebar/Sidebar';
import Toolbar from '../components/navigation/toolbar/Toolbar';
import Feed from '../pages/Feed';
import ProfileMain from '../pages/ProfileMain';

function DefaultWrapper () {
  const mainfeed = useRef(null);
  const [shadowDom, setShadowDom] = useState(true);
  const [trueDom, setTrueDom] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [overlay, setOverlay] = useState(false);
  
  function toggleSidebar() {
    setSidebarOpen((open) => !open);
  }

  useEffect(() => {
    if (!mainfeed.current) return;

    const shadowDomTimeout = setTimeout(() => {
      setShadowDom(false);
      setTrueDom(true);
      clearTimeout(shadowDomTimeout);
    }, 2500);
  }, []);

  return (
    <div>
      <div
        className={classNames("app-overlay", "is-sidebar-v1", {
          "is-active": overlay,
        })}
      ></div>
      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <div
        className={classNames("view-wrapper", "is-sidebar-v1", {
          "is-fold": !sidebarOpen,
        })}
      >
				<Toolbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <Routes>
          <Route
            index
            element={
              <Feed
                ref={mainfeed}
                shadowDom={shadowDom}
                trueDom={trueDom}
                setOverlay={setOverlay}
              />
            }
          />
          <Route
            path="timeline"
            element={
              <Feed ref={mainfeed} shadowDom={shadowDom} trueDom={trueDom} />
            }
          />
          <Route path="profile/:username" element={<ProfileMain />} />
        </Routes>
      </div>
    </div>
  );
}

export default DefaultWrapper