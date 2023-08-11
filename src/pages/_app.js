import "reset-css";
import "src/styles/global.scss";

import "@fontsource/roboto/latin.css";

const App = ({ Component, pageProps }) => {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  );
};

export default App;
