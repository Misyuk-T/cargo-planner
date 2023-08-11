import { getShipment } from "@/action/shipments";

import { ShipmentBlock } from "@/components";

const ShipmentItem = ({ shipment }) => {
  return (
    <div>
      <ShipmentBlock shipment={shipment} />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const shipment = await getShipment(params.id);
  return { props: { shipment } };
};

export default ShipmentItem;
