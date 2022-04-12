import React, { useContext } from "react";
import { Routes, Route, Navigate, useMatch, useLocation } from "react-router-dom";

// auth
import ConfirmMail from "../views/dashboard/auth/confirm-mail";
import LockScreen from "../views/dashboard/auth/lock-screen";
import Recoverpw from "../views/dashboard/auth/recoverpw";
import SignIn from "../views/dashboard/auth/sign-in";
import SignUp from "../views/dashboard/auth/sign-up";

// errors
import Error404 from "../views/dashboard/errors/error404";
import Error500 from "../views/dashboard/errors/error500";

//extrapages
import Maintenance from "../views/dashboard/extrapages/maintenance";
import ComingSoon from "../views/dashboard/extrapages/comingsoon";

const SimpleRouter = ({ path }) => {

  return path === "auth" ? (
    <Routes>
      {/* auth */}
      <Route path="confirm-mail/" element={<ConfirmMail />} />
      <Route path="lock-screen/" element={<LockScreen />} />
      <Route path="recoverpw/" element={<Recoverpw />} />
      <Route path="sign-in/" element={<SignIn />} />
      <Route path="sign-up/" element={<SignUp />} />

      {/* not found */}
      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  ) : path === "extra-pages" ? (
        <Routes>
          {/* extra-pages */}
          <Route path="pages-maintenance/" element={<Maintenance />} />
          <Route path="pages-comingsoon/" element={<ComingSoon />} />
          {/* not found */}
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
  ) : <Route path="*" element={<Error404 />}></Route> ;
};

export default SimpleRouter;
