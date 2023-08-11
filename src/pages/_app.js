import "reset-css";
import "src/styles/global.scss";
import "@fontsource/roboto/latin.css";

import { Header, Sidebar } from "@/components";
import { getAllShipments } from "@/action/shipments";

let appPropsCache;

const App = ({ Component, pageProps, shipments }) => {
  console.log(shipments, "shipments");

  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Component {...pageProps} />
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
