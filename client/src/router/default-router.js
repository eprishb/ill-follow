import React from "react";
import Index from "../views/dashboard/index";
import { Routes, Route } from "react-router-dom";

//app
import UserProfile from "../views/dashboard/app/user-profile";
import UserPrivacySetting from "../views/dashboard/app/user-privacy-setting";
import FriendProfile from "../views/dashboard/app/friend-profile";
import ProfileBadges from "../views/dashboard/app/profile-badges";
import ProfileForums from "../views/dashboard/app/profile-forum";
import Chat from "../views/dashboard/app/chat";
import Notification from "../views/dashboard/app/notification";
import File from "../views/dashboard/app/file";
import FriendRequest from "../views/dashboard/app/friend-request";
import Todo from "../views/dashboard/app/todo";
import UserAccountSetting from "../views/dashboard/app/user-account-setting";
import UserProfileEdit from "../views/dashboard/app/user-profile-edit";

//TransitionGroup
import { TransitionGroup, CSSTransition } from "react-transition-group";

// extrapages
import Faq from "../views/dashboard/extrapages/faq";
import PrivacyPolicy from "../views/dashboard/extrapages/privacy-policy";
import TermsofService from "../views/dashboard/extrapages/terms-of-service";
import BlankPage from "../views/dashboard/extrapages/blankpage";

// error page
import Error404 from "../views/dashboard/errors/error404";

const DefaultRouter = () => {
  return (
    <TransitionGroup>
      <CSSTransition classNames="fadeUp" timeout={300}>
        <Routes>
          <Route index path="/" element={<Index />} />

          {/* app */}
          <Route path="profile/" element={<UserProfile />} />
          <Route
            path="user-privacy-setting/"
            element={<UserPrivacySetting />}
          />
          <Route path="friend-profile/" element={<FriendProfile />} />
          <Route path="profile-badges/" element={<ProfileBadges />} />
          <Route path="profile-forum/" element={<ProfileForums />} />
          <Route path="chat/" element={<Chat />} />
          <Route path="notification/" element={<Notification />} />
          <Route path="file/" element={<File />} />
          <Route path="friend-request/" element={<FriendRequest />} />
          <Route path="todo/" element={<Todo />} />
          <Route
            path="user-account-setting/"
            element={<UserAccountSetting />}
          />
          <Route path="user-profile-edit/" element={<UserProfileEdit />} />

          {/* extrapages */}
          <Route path="pages-faq/" element={<Faq />} />
          <Route
            path="privacy-policy/"
            element={<PrivacyPolicy />}
          />
          <Route
            path="terms-of-service/"
            element={<TermsofService />}
          />
          <Route path="blankpage/" element={<BlankPage />} />
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default DefaultRouter;
