import React from "react";
import Index from "../views/dashboard/index";
import { Routes, Route } from "react-router-dom";

//app
import userProfile from "../views/dashboard/app/user-profile";
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

// icon
import Remixicon from "../views/dashboard/icons/icon-remixicon";
import Lineawesome from "../views/dashboard/icons/icon-lineawesome";
import Fontawesome from "../views/dashboard/icons/icon-fontawesome-5";

// Form
import FormElement from "../views/dashboard/form/form-element";
import FormValidation from "../views/dashboard/form/form-validation";
// import FormSwitch from "../views/dashboard/form/form-Routes";
import FormWizard from "../views/dashboard/form/form-wizard";
import FormWizardValidate from "../views/dashboard/form/form-wizard-validate";
import FormWizardVertical from "../views/dashboard/form/form-wizard-vertical";
import FormCheckbox from "../views/dashboard/form/form-checkbox";
import FormRadio from "../views/dashboard/form/form-radio";

// table
import DataTable from "../views/dashboard/table/data-table";
import TableBasic from "../views/dashboard/table/tables-basic";
import TableEditable from "../views/dashboard/table/table-editable";

//TransitionGroup
import { TransitionGroup, CSSTransition } from "react-transition-group";

// blog pages
import BlogGrid from "../views/dashboard/blog/bloggrid";
import BlogList from "../views/dashboard/blog/bloglist";
import BlogDetail from "../views/dashboard/blog/blogdetail";

// Email
import Email from "../views/dashboard/email/email";
import EmailCompose from "../views/dashboard/email/email-compose";

//ui-kit
import UiAlerts from "../views/dashboard/ui-kit/ui-alerts";
import UiBadges from "../views/dashboard/ui-kit/ui-badges";
import UiBreadcrumbs from "../views/dashboard/ui-kit/ui-breadcrumb";
import UiButtons from "../views/dashboard/ui-kit/ui-buttons";
import UiCards from "../views/dashboard/ui-kit/ui-cards";
import UiCarousels from "../views/dashboard/ui-kit/ui-carousel";
import UiColors from "../views/dashboard/ui-kit/ui-color";
import UiDropdowns from "../views/dashboard/ui-kit/ui-dropdowns";
import UiEmbedVideos from "../views/dashboard/ui-kit/ui-embed-video";
import UiGrids from "../views/dashboard/ui-kit/ui-grid";
import UiImages from "../views/dashboard/ui-kit/ui-images";
import UiListGroups from "../views/dashboard/ui-kit/ui-list-groups";
import UiModals from "../views/dashboard/ui-kit/ui-modal";
import UiNotifications from "../views/dashboard/ui-kit/ui-notifications";
import UiOffcanvas from "../views/dashboard/ui-kit/ui-offcanvas";
import UiPaginations from "../views/dashboard/ui-kit/ui-pagination";
import UiPopovers from "../views/dashboard/ui-kit/ui-popovers";
import UiProgressbars from "../views/dashboard/ui-kit/ui-progressbars";
import UiTabs from "../views/dashboard/ui-kit/ui-tabs";
import UiTooltips from "../views/dashboard/ui-kit/ui-tooltips";
import UiTypographys from "../views/dashboard/ui-kit/ui-typography";

// extrapages
import Pricing from "../views/dashboard/extrapages/pricing";
import Pricing1 from "../views/dashboard/extrapages/pricing1";
import Timeline from "../views/dashboard/extrapages/timeline";
import Invoice from "../views/dashboard/extrapages/invoice";
import Faq from "../views/dashboard/extrapages/faq";
import PrivacyPolicy from "../views/dashboard/extrapages/privacy-policy";
import TermsofService from "../views/dashboard/extrapages/terms-of-service";
import BlankPage from "../views/dashboard/extrapages/blankpage";

const DefaultRouter = () => {
  return (
    <TransitionGroup>
      <CSSTransition classNames="fadeUp" timeout={300}>
        <Routes>
          <Route path="/" exact element={<Index />} />

          {/* app */}
          <Route path="app/profile/" element={<userProfile />} />
          <Route
            path="app/user-privacy-setting/"
            element={<UserPrivacySetting />}
          />
          <Route
            path="app/friend-profile/"
            element={<FriendProfile />}
          />
          <Route
            path="app/profile-badges/"
            element={<ProfileBadges />}
          />
          <Route
            path="app/profile-forum/"
            element={<ProfileForums />}
          />
          <Route path="app/chat/" element={<Chat />} />
          <Route
            path="app/notification/"
            element={<Notification />}
          />
          <Route path="app/file/" element={<File />} />
          <Route
            path="app/friend-request/"
            element={<FriendRequest />}
          />
          <Route path="app/todo/" element={<Todo />} />
          <Route
            path="app/user-account-setting/"
            element={<UserAccountSetting />}
          />
          <Route
            path="app/user-profile-edit/"
            element={<UserProfileEdit />}
          />

          {/* icon */}
          <Route
            path="icon/fontawesome-5/"
            element={<Fontawesome />}
          />
          <Route path="icon/remixicon/" element={<Remixicon />} />
          <Route path="icon/lineawesome/" element={<Lineawesome />} />

          {/* Form */}
          <Route
            path="form/form-element/"
            element={<FormElement />}
          />
          <Route
            path="form/form-validation/"
            element={<FormValidation />}
          />
          {/* <Route path="form/form-Routes/" element={<FormSwitch />} /> */}
          <Route path="form/form-wizard/" element={<FormWizard />} />
          <Route
            path="form/form-wizard-validate/"
            element={<FormWizardValidate />}
          />
          <Route
            path="form/form-wizard-vertical/"
            element={<FormWizardVertical />}
          />
          <Route
            path="form/form-checkbox/"
            element={<FormCheckbox />}
          />
          <Route path="form/form-radio/" element={<FormRadio />} />

          {/* table */}
          <Route path="table/data-table/" element={<DataTable />} />
          <Route
            path="table/tables-basic/"
            element={<TableBasic />}
          />
          <Route
            path="table/table-editable/"
            element={<TableEditable />}
          />

          {/* blog */}
          <Route path="blog/blog-grid/" element={<BlogGrid />} />
          <Route path="blog/blog-list/" element={<BlogList />} />
          <Route path="blog/blog-detail/" element={<BlogDetail />} />

          {/* Email */}
          <Route path="Email/email/" element={<Email />} />
          <Route
            path="Email/email-compose/"
            element={<EmailCompose />}
          />

          {/*ui kit*/}
          <Route path="ui-kit/ui-alerts/" element={<UiAlerts />} />
          <Route path="ui-kit/ui-badges/" element={<UiBadges />} />
          <Route
            path="ui-kit/ui-breadcrumb/"
            element={<UiBreadcrumbs />}
          />
          <Route path="ui-kit/ui-buttons/" element={<UiButtons />} />
          <Route path="ui-kit/ui-cards/" element={<UiCards />} />
          <Route
            path="ui-kit/ui-carousel/"
            element={<UiCarousels />}
          />
          <Route path="ui-kit/ui-color/" element={<UiColors />} />
          <Route
            path="ui-kit/ui-dropdowns/"
            element={<UiDropdowns />}
          />
          <Route
            path="ui-kit/ui-embed-video/"
            element={<UiEmbedVideos />}
          />
          <Route path="ui-kit/ui-grid/" element={<UiGrids />} />
          <Route path="ui-kit/ui-images/" element={<UiImages />} />
          <Route
            path="ui-kit/ui-list-groups/"
            element={<UiListGroups />}
          />
          <Route path="ui-kit/ui-modal/" element={<UiModals />} />
          <Route
            path="ui-kit/ui-notifications/"
            element={<UiNotifications />}
          />
          <Route
            path="ui-kit/ui-offcanvas/"
            element={<UiOffcanvas />}
          />
          <Route
            path="ui-kit/ui-pagination/"
            element={<UiPaginations />}
          />
          <Route
            path="ui-kit/ui-popovers/"
            element={<UiPopovers />}
          />
          <Route
            path="ui-kit/ui-progressbars/"
            element={<UiProgressbars />}
          />
          <Route path="ui-kit/ui-tabs/" element={<UiTabs />} />
          <Route
            path="ui-kit/ui-tooltips/"
            element={<UiTooltips />}
          />
          <Route
            path="ui-kit/ui-typography/"
            element={<UiTypographys />}
          />

          {/* extrapages */}
          <Route
            path="extrapages/pages-pricing/"
            element={<Pricing />}
          />
          <Route
            path="extrapages/pages-pricing-one/"
            element={<Pricing1 />}
          />
          <Route
            path="extrapages/pages-timeline/"
            element={<Timeline />}
          />
          <Route
            path="extrapages/pages-invoice/"
            element={<Invoice />}
          />
          <Route path="extrapages/pages-faq/" element={<Faq />} />
          <Route
            path="extrapages/privacy-policy/"
            element={<PrivacyPolicy />}
          />
          <Route
            path="extrapages/terms-of-service/"
            element={<TermsofService />}
          />
          <Route
            path="extrapages/blankpage/"
            element={<BlankPage />}
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default DefaultRouter;
