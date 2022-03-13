import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/navigation/sidebar/Sidebar';
import Toolbar from '../components/navigation/toolbar/Toolbar';
import Feed from '../pages/Feed';
import ProfileMain from '../pages/ProfileMain';

function DefaultWrapper () {
	const mainfeed = useRef(null);
	const [shadowDom, setShadowDom] = useState(true);
	const [trueDom, setTrueDom] = useState(false);
	const [sidebarOpen, setSidebarOpen] = useState(true);

	function toggleSidebar () {
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
    <>
      <div className="app-overlay is-sidebar-v1"></div>
      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <div className={`view-wrapper is-sidebar-v1 ${sidebarOpen ? "" : "is-fold"}`}>
        <div className={`toolbar-v1 is-narrow ${sidebarOpen ? "" : ""}`}>
          <Toolbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        </div>
        <Routes>
          <Route
            index
            element={
              <Feed ref={mainfeed} shadowDom={shadowDom} trueDom={trueDom} />
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
    </>
  );
}

export default DefaultWrapper