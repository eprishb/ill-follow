import React, { useContext } from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// default router
import DefaultRouter from "./default-router";

//layoutpages
import Default from "../layouts/dashboard/default";
import WithoutLeftSidebar from "../layouts/dashboard/without-leftsidebar";
import WithoutRightSidebar from "../layouts/dashboard/without-rightsidebar";
import Layout1 from "../layouts/dashboard/layout-1";
import Simple from "../layouts/dashboard/simple";

const IndexRouters = () => {

	const { user } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path="without-leftsidebar/" element={<WithoutLeftSidebar />}></Route>
        <Route
          path="without-rightsidebar/"
          element={<WithoutRightSidebar />}
        ></Route>
        <Route path="auth/" element={<Simple user={user} />}></Route>
        <Route path="errors/" element={<Simple />}></Route>
        <Route path="extra-pages/" element={<Simple />}></Route>
        <Route path="dashboards/" element={<Layout1 />}>
					<DefaultRouter />
				</Route>
        <Route path="/" element={user ? <Default /> : <Navigate to="auth/" />}></Route>
      </Routes>
    </>
  );
};

export default IndexRouters;
