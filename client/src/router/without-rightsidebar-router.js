import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../views/dashboard/index";

const WithoutRightSidebarRouter = () => {
  return (
    <>
      <Routes>
        <Route path="without-rightsidebar/" element={<Index />} />
      </Routes>
    </>
  );
};

export default WithoutRightSidebarRouter;
