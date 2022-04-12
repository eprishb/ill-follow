import React from "react";

//router
import { Routes, Route } from "react-router";

//pages
import Groups from "../views/dashboard/app/groups";
import GroupDetail from "../views/dashboard/app/group-detail";
import FriendList from "../views/dashboard/app/friend-list";
import ProfileImages from "../views/dashboard/app/profile-images";
import ProfileVideos from "../views/dashboard/app/profile-videos";
import ProfileEvents from "../views/dashboard/app/profile-events";
import EventDetail from "../views/dashboard/app/event-detail";
import Calendar from "../views/dashboard/app/calendar";
import Birthday from "../views/dashboard/app/birthday";
import Weather from "../views/dashboard/app/weather";
import Music from "../views/dashboard/app/music";
import CatergoryGrid from "../views/dashboard/store/store-category-grid";
import CatergoryList from "../views/dashboard/store/store-category-list";
import StoreDetail from "../views/dashboard/store/store-detail";
import StoreCheckout from "../views/dashboard/store/store-checkout";

//market and profile pages
import Market1 from "../views/dashboard/market-place/market1";
import Market2 from "../views/dashboard/market-place/market2";
import Profile1 from "../views/dashboard/profiles/profile1";
import Profile2 from "../views/dashboard/profiles/profile2";
import Profile3 from "../views/dashboard/profiles/profile3";

const Layout1Router = () => {
  return (
    <>
      <Routes>
        <Route path="/groups/" element={<Groups />}></Route>
        <Route
          path="/group-detail"
          element={<GroupDetail />}
        ></Route>
        <Route path="/friend-list/" element={<FriendList /> } />
        <Route path="/profile-images/" element={<ProfileImages /> } />
        <Route path="/profile-videos/" element={<ProfileVideos /> } />
        <Route path="/profile-events/" element={<ProfileEvents /> } />
        <Route path="/event-detail/" element={<EventDetail /> } />
        <Route path="/calendar/" element={<Calendar /> } />
        <Route path="/birthday/" element={<Birthday /> } />
        <Route path="/weather/" element={<Weather /> } />
        <Route path="/music/" element={<Music /> } />
        <Route
          path="/store/store-category-grid"
          element={<CatergoryGrid />}
        />
        <Route
          path="/store/store-category-list"
          element={<CatergoryList />}
        />
        <Route path="/store/store-detail/" element={<StoreDetail /> } />
        <Route
          path="/store/store-checkout"
          element={<StoreCheckout />}
        />

        <Route path="/market-place/market1/" element={<Market1 /> } />
        <Route path="/market-place/market2/" element={<Market2 /> } />
        <Route path="/profiles/profile1/" element={<Profile1 /> } />
        <Route path="/profiles/profile2/" element={<Profile2 /> } />
        <Route path="/profiles/profile3/" element={<Profile3 /> } />
      </Routes>
    </>
  );
};

export default Layout1Router;
