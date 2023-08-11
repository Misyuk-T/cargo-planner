import NextLink from "next/link";
import CN from "classnames";

import styles from "./Link.module.scss";

const Link = ({ to, className = "", children }) => {
  return (
    <NextLink href={to} className={CN(styles.link, className)}>
      {children}
    </NextLink>
  );
};

export default Link;
