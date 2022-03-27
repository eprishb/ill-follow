import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../views/dashboard/index";

const WithoutLeftSidebarRouter = () => {
  return (
    <>
      <Routes>
        <Route path="without-leftsidebar/" element={<Index />} />
      </Routes>
    </>
  );
};

export default WithoutLeftSidebarRouter;
