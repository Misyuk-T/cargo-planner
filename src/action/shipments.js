import axios from "src/configs/axios";

export const getShipment = async (id) => {
  try {
    const response = await axios.get(`/api/shipments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting shipment:", error);
    throw new Error("Failed to get project");
  }
};

export const getAllShipments = async () => {
  try {
    const response = await axios.get("/api/shipments");
    console.log(response, "response");

    return response.data;
  } catch (error) {
    console.error("Error getting shipments:", error);
    throw new Error("Failed to get projects");
  }
};
