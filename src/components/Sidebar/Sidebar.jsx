import { useEffect, useState } from "react";
import CN from "classnames";
import Image from "next/image";

import debounce from "@/helpers/debounce";

import Link from "@/components/Link/Link";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ shipments }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);

  const handleMenuToggle = (e) => {
    e.preventDefault();
    setIsMenuOpen((prevState) => !prevState);

    if (!isTransitionEnabled) {
      setIsTransitionEnabled(true);
    }
  };

  const handleMenuClose = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleResize = debounce(() => {
    setIsTransitionEnabled(false);
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <Image
          src="/Logo.svg"
          className={styles.logo}
          alt="logo"
          width={151}
          height={30}
        />

        <button
          onClick={handleMenuToggle}
          type="button"
          className={CN(styles.burgerBtn, {
            [styles.active]: isMenuOpen,
          })}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={CN(styles.navigationBox, {
          [styles.active]: isMenuOpen,
          [styles.transition]: isTransitionEnabled,
        })}
      >
        <h2 className={styles.sidebarTitle}>Shipment List</h2>

        <nav>
          <ul className={CN(styles.navigationList)}>
            {shipments.map((item) => {
              return (
                <li key={item.id} onClick={handleMenuClose}>
                  <Link to={`/shipment/${item.id}`}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
