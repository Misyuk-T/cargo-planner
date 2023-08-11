import styles from "./Sidebar.module.scss";
import Link from "@/components/Link/Link";
import Image from "next/image";

const Sidebar = () => {
  console.log("sidebar");

  return (
    <div className={styles.sidebar}>
      <Image
        className={styles.logo}
        src="/Logo.svg"
        alt="logo"
        width={212}
        height={42}
      />
      <h2 className={styles.sidebarTitle}>Shipment List</h2>
      <nav>
        <ul className={styles.navigationList}>
          <li>
            <Link to="/">Amazon</Link>
          </li>
          <li>
            <Link to="/">American Express</Link>
          </li>
          <li>
            <Link to="/">Airbnb</Link>
          </li>
          <li>
            <Link to="/">Apple</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
