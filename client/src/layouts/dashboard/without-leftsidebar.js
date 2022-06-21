import React from "react";

//header
import Header from "../../components/partials/dashboard/HeaderStyle/header";

//sidebar
import RightSidebar from "../../components/partials/dashboard/SidebarStyle/rightsidebar";

//footer
import Footer from "../../components/partials/dashboard/FooterStyle/footer";

//default
import WithoutLeftSidebarRouter from "../../router/without-leftsidebar-router";

// share-offcanvas
import ShareOffcanvas from "../../components/share-offcanvas";

//settingoffCanvas
import SettingOffCanvas from "../../components/setting/SettingOffCanvas";

const WithoutLeftSidebar = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <RightSidebar />
        <div id="content-page" className="content-page">
          <WithoutLeftSidebarRouter />
        </div>
      </div>
      <Footer />
      <SettingOffCanvas name={true} />
      <ShareOffcanvas />
    </>
  );
};

export default WithoutLeftSidebar;
