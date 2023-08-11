import Image from "next/image";

import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/Logo.svg" alt="logo" width={212} height={42} />
      <input type="text" />
    </header>
  );
};

export default Header;
