import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// auth
import ConfirmMail from "../views/dashboard/auth/confirm-mail";
import LockScreen from "../views/dashboard/auth/lock-screen";
import Recoverpw from "../views/dashboard/auth/recoverpw";
import SignIn from "../views/dashboard/auth/sign-in";
import SignUp from "../views/dashboard/auth/sign-up";

// errors
import Error404 from "../views/dashboard/errors/error404";
import Error500 from "../views/dashboard/errors/error500";

//extrpages
import Maintenance from "../views/dashboard/extrapages/maintenance";
import ComingSoon from "../views/dashboard/extrapages/comingsoon";

const SimpleRouter = ({ user }) => {

  return (
    <>
      <Routes>
        {/* auth */}
        <Route
          path="auth/confirm-mail/"
          element={<ConfirmMail />}
        />
        <Route
					path="auth/lock-screen/"
					element={<LockScreen />}
				/>
        <Route
					path="auth/recoverpw/"
					element={<Recoverpw />}
				/>
        <Route
					path="auth/sign-in/"
					element={<SignIn />}
				/>
        <Route
					path="auth/sign-up/"
					element={<SignUp />}
				/>

        {/* error */}
        <Route path="errors/error404/" element={<Error404 />} />
        <Route path="errors/error500/" element={<Error500 />} />

        {/* extra-pages */}
        <Route
          path="extra-pages/pages-maintenance/"
          element={<Maintenance />}
        />
        <Route path="extra-pages/pages-comingsoon/" element={<ComingSoon />} />
      </Routes>
    </>
  );
};

export default SimpleRouter;
