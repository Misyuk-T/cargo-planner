import NextLink from "next/link";
import { usePathname } from "next/navigation";
import CN from "classnames";

import styles from "./Link.module.scss";

const Link = ({ to, className = "", children }) => {
  const currentRoute = usePathname();
  const isActive = currentRoute === to;

  return (
    <NextLink
      href={to}
      className={CN(styles.link, className, { [styles.active]: isActive })}
    >
      {children}
    </NextLink>
  );
};

export default Link;
