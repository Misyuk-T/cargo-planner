import "reset-css";
import "@fontsource/roboto/latin.css";

import { getAllShipments } from "@/action/shipments";

import { Sidebar, Search } from "@/components";

import "src/styles/global.scss";
import styles from "src/styles/app.module.scss";

let appPropsCache;

const App = ({ Component, pageProps, shipments }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navigationBox}>
        <Sidebar shipments={shipments} />

        <div className={styles.pageContainer}>
          <Search shipments={shipments} />
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

App.getInitialProps = async () => {
  if (appPropsCache) {
    return { ...appPropsCache };
  }

  const shipments = await getAllShipments();

  const props = {
    shipments,
  };

  appPropsCache = { ...props };

  return {
    ...props,
  };
};

export default App;
