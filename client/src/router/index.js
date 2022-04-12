import React, { useContext } from "react";
import { Routes, Route } from "react-router";
import { Navigate, useMatch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

//layoutpages
import Default from "../layouts/dashboard/default";
import Layout1 from "../layouts/dashboard/layout-1";
import Simple from "../layouts/dashboard/simple";
import Error404 from "../views/dashboard/errors/error404";

const IndexRouters = () => {

  return (
    <>
      <Routes>
        <Route path="/*" element={<Default />}></Route>
        <Route path="dashboards/*" element={<Layout1 />}></Route>
        <Route path="auth/*" element={<Simple path="auth" />}></Route>
        <Route path="extra-pages/*" element={<Simple path="extra-pages" />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </>
  );
};

export default IndexRouters;
