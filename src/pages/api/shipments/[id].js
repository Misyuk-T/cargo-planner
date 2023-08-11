import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "db.json");

const handler = (req, res) => {
  try {
    const dbData = JSON.parse(fs.readFileSync(dbPath, "utf8"));
    const shipment = dbData.shipments.find((item) => item.id === req.query.id);

    if (!shipment) {
      res.status(404).json({ error: "Shipment not found" });
    } else {
      res.status(200).json(shipment);
    }
  } catch (error) {
    res.status(500).json({ error: "Server error while fetch shipment" });
  }
};

export default handler;
