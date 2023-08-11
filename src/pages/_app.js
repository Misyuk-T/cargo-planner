import "reset-css";
import "src/styles/global.scss";
import "@fontsource/roboto/latin.css";

import { Header } from "@/components";

const App = ({ Component, pageProps }) => {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
