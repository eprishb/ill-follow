import React from "react";

//router
import { Routes, Route } from "react-router";

//layoutpages
import Default from "../layouts/dashboard/default";
import WithoutLeftSidebar from "../layouts/dashboard/without-leftsidebar";
import WithoutRightSidebar from "../layouts/dashboard/without-rightsidebar";
import Layout1 from "../layouts/dashboard/layout-1";
import Simple from "../layouts/dashboard/simple";
import DefaultRouter from "./default-router";

const IndexRouters = () => {
  return (
    <>
      <Routes>
        <Route path="without-leftsidebar/" element={<WithoutLeftSidebar />}></Route>
        <Route
          path="without-rightsidebar/"
          element={<WithoutRightSidebar />}
        ></Route>
        <Route path="auth/" element={<Simple />}></Route>
        <Route path="errors/" element={<Simple />}></Route>
        <Route path="extra-pages/" element={<Simple />}></Route>
        <Route path="dashboards/" element={<Layout1 />}>
					<DefaultRouter />
				</Route>
        <Route path="/" element={<Default />}></Route>
      </Routes>
    </>
  );
};

export default IndexRouters;
