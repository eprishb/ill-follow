import React, { forwardRef } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import Feed from '../pages/Feed';
import ProfileMain from '../pages/ProfileMain';
import Sidebar from '../components/navigation/sidebar/Sidebar'

const DefaultWrapper = forwardRef((props, ref) => {
	return (
    <>
      <div className="app-overlay is-sidebar-v1"></div>
      <Sidebar />
      <div className="view-wrapper is-sidebar-v1 is-fold">
        <Outlet />
      </div>
    </>
  );
})

export default DefaultWrapper