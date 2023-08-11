import "reset-css";

import styles from "src/styles/global.module.scss";

const App = ({ Component, pageProps }) => {
  return (
    <div className={styles.container}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
