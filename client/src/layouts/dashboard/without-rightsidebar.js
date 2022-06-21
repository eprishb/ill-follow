import React from "react";

//header
import Header from "../../components/partials/dashboard/HeaderStyle/header";

//sidebar
import Sidebar from "../../components/partials/dashboard/SidebarStyle/sidebar";

//footer
import Footer from "../../components/partials/dashboard/FooterStyle/footer";

//default
import WithoutRightSidebarRouter from "../../router/without-rightsidebar-router";

// share-offcanvas
import ShareOffcanvas from "../../components/share-offcanvas";

const WithoutRightSidebar = () => {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Header />
        <div id="content-page" className="content-page">
          <WithoutRightSidebarRouter />
        </div>
      </div>
      <Footer />
      <ShareOffcanvas />
    </>
  );
};

export default WithoutRightSidebar;
