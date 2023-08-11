import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "shipments.json");

const handler = async (req, res) => {
  try {
    const dbData = await JSON.parse(fs.readFileSync(dbPath, "utf8"));

    res.status(200).json(dbData.shipments);
  } catch (error) {
    res.status(500).json({ error: "Server error while fetch all shipments" });
  }
};

export default handler;
