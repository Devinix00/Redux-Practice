import React from "react";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <React.Fragment>
      <Breadcrumb />

      <Outlet />
    </React.Fragment>
  );
}

export default Layout;
