import HeaderComponent from "./HeaderComponents/Header";
import FooterComponent from "./Footer";
import Head from "next/head";

/**this file represents all the childs.
 * completed!
 */
const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </div>
    </div>
  );
};
export default Layout;
