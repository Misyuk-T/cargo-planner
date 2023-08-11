import ReactSearchBox from "react-search-box";
import { useRouter } from "next/router";

import Image from "next/image";

import styles from "./Search.module.scss";

const Search = ({ shipments }) => {
  const router = useRouter();

  const formattedData = shipments.map(({ name, id }) => {
    return {
      key: id,
      value: name,
    };
  });

  const handleChange = (value) => {
    router.push(`/shipment/${value.item.key}`);
  };

  return (
    <div className={styles.inputWrapper}>
      <ReactSearchBox
        placeholder="Search"
        data={formattedData}
        inputFontColor="#00000"
        inputFontSize="16px"
        iconBoxSize="50px"
        leftIcon={
          <Image src="/Zoom.svg" width={20} height={20} alt="search-icon" />
        }
        onSelect={handleChange}
      />
    </div>
  );
};

export default Search;
