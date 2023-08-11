import { useEffect, useState } from "react";
import CN from "classnames";

import styles from "./ShipmentBlock.module.scss";

const validateInputValue = (values) => {
  return values.every((value) => {
    const pattern = /^\d*\.?\d{0,2}$/;
    return pattern.test(value) && value !== "";
  });
};

const getSplitedValues = (values) =>
  values.split(",").map((value) => value.trim());

const ShipmentBlock = ({ shipment }) => {
  const [inputValue, setInputValue] = useState(shipment.boxes);
  const [inputError, setInputError] = useState("");
  const [requiredShips, setRequiredShips] = useState(0);

  const handleCargoCalculate = (values) => {
    const totalNumber = values.reduce((acc, item) => {
      return acc + parseFloat(item);
    }, 0);
    const requiredShips = Math.ceil(totalNumber / 10);

    setRequiredShips(requiredShips);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const inputValues = getSplitedValues(inputValue);
    const isValidInput = validateInputValue(inputValues);

    if (isValidInput) {
      setInputError("");
      handleCargoCalculate(inputValues);
    } else {
      setInputError("Please enter valid numeric values separated by commas.");
    }

    setInputValue(inputValue);
  };

  useEffect(() => {
    if (shipment.boxes) {
      const inputValues = getSplitedValues(shipment.boxes);
      handleCargoCalculate(inputValues);

      setInputValue(shipment.boxes);
    }
  }, [shipment.boxes]);

  return (
    <div className={styles.shipmentBlock}>
      <div className={styles.shipmentContent}>
        <div className={styles.contactInformation}>
          <h3>{shipment.name}</h3>
          <p>{shipment.email}</p>
        </div>

        <div className={styles.cargoInputBox}>
          <p>Cargo boxes</p>
          <input
            type="text"
            className={CN(styles.cargoInput, {
              [styles.error]: inputError,
            })}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Calculate cargo boxes..."
          />
          {inputError && <p className={styles.errorText}>{inputError}</p>}
        </div>

        <div className={styles.cargoOutput}>
          <p>Number of required cargo bays</p>
          <span>{requiredShips}</span>
        </div>
      </div>
    </div>
  );
};

export default ShipmentBlock;
