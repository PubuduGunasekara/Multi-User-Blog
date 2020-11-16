import { useEffect } from "react";
import Router from "next/router";
import { isAuth } from "../../actions/auth.action";
import React from "react";
/**
 * completed!
 */
const Admin = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push(`/admin-panel/user-signin`);
    } else if (isAuth() && isAuth().role !== 1) {
      Router.push(`/admin-panel/moderator`);
    }
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Admin;
