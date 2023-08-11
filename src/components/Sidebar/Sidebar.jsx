import Link from "@/components/Link/Link";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
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
