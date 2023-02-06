import { Suspense, lazy, LazyExoticComponent } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";

import SidebarLayout from "./layouts/SidebarLayout";
import BaseLayout from "./layouts/BaseLayout";

import SuspenseLoader from "./components/SuspenseLoader";

const Loader =
  (Component: LazyExoticComponent<() => JSX.Element>) => (props: any) =>
    (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );

// Pages

const Metas = Loader(lazy(() => import("./pages/metas")));
const NewDrop = Loader(lazy(() => import("./pages/drops/DropForm")));
const Overview = Loader(lazy(() => import("./pages/overview")));
const Home = Loader(lazy(() => import("./pages/home")));

// Dashboards

const Tasks = Loader(lazy(() => import("./pages/dashboards/Tasks")));

// Applications

const Messenger = Loader(lazy(() => import("./pages/applications/Messenger")));
const Transactions = Loader(lazy(() => import("./pages/applications/Transactions")));
const UserProfile = Loader(lazy(() => import("./pages/applications/Users/profile")));
const UserSettings = Loader(lazy(() => import("./pages/applications/Users/settings")));

// Components

const Buttons = Loader(lazy(() => import("./pages/Components/Buttons")));
const Modals = Loader(lazy(() => import("./pages/Components/Modals")));
const Accordions = Loader(lazy(() => import("./pages/Components/Accordions")));
const Tabs = Loader(lazy(() => import("./pages/Components/Tabs")));
const Badges = Loader(lazy(() => import("./pages/Components/Badges")));
const Tooltips = Loader(lazy(() => import("./pages/Components/Tooltips")));
const Avatars = Loader(lazy(() => import("./pages/Components/Avatars")));
const Cards = Loader(lazy(() => import("./pages/Components/Cards")));
const Forms = Loader(lazy(() => import("./pages/Components/Forms")));

// Status

const Status404 = Loader(lazy(() => import("./pages/Status/Status404")));
const Status500 = Loader(lazy(() => import("./pages/Status/Status500")));
const StatusComingSoon = Loader(lazy(() => import("./pages/Status/ComingSoon")));
const StatusMaintenance = Loader(lazy(() => import("./pages/Status/Maintenance")));

const routes: RouteObject[] = [
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="overview" replace />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "status",
        children: [
          {
            path: "",
            element: <Navigate to="404" replace />,
          },
          {
            path: "404",
            element: <Status404 />,
          },
          {
            path: "500",
            element: <Status500 />,
          },
          {
            path: "maintenance",
            element: <StatusMaintenance />,
          },
          {
            path: "coming-soon",
            element: <StatusComingSoon />,
          },
        ],
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  {
    path: "dashboards",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="tasks" replace />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "messenger",
        element: <Messenger />,
      },
    ],
  },
  {
    path: "home",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home/newdrop",
        element: <NewDrop />,
      },
      {
        path: "/home/metas",
        element: <Metas />,
      },
    ],
  },
  {
    path: "management",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="transactions" replace />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "profile",
        children: [
          {
            path: "",
            element: <Navigate to="details" replace />,
          },
          {
            path: "details",
            element: <UserProfile />,
          },
          {
            path: "settings",
            element: <UserSettings />,
          },
        ],
      },
    ],
  },
  {
    path: "/components",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="buttons" replace />,
      },
      {
        path: "buttons",
        element: <Buttons />,
      },
      {
        path: "modals",
        element: <Modals />,
      },
      {
        path: "accordions",
        element: <Accordions />,
      },
      {
        path: "tabs",
        element: <Tabs />,
      },
      {
        path: "badges",
        element: <Badges />,
      },
      {
        path: "tooltips",
        element: <Tooltips />,
      },
      {
        path: "avatars",
        element: <Avatars />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
    ],
  },
];

export default routes;
