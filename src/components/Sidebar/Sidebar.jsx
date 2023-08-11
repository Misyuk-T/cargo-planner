import Image from "next/image";
import Link from "@/components/Link/Link";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ shipments }) => {
  return (
    <div className={styles.sidebar}>
      <div>
        <Image
          src="/Logo.svg"
          className={styles.logo}
          alt="logo"
          width={212}
          height={42}
        />
        <h2 className={styles.sidebarTitle}>Shipment List</h2>
      </div>

      <nav>
        <ul className={styles.navigationList}>
          {shipments.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`/shipment/${item.id}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
