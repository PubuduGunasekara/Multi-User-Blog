import { useEffect } from "react";
import Router from "next/router";
import { isAuth } from "../../actions/auth.action";
import React from "react";
/**
 * completed!
 */
const Private = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push(`/admin-panel/user-signin`);
    }
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Private;
