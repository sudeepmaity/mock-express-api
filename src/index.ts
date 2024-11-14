import express, { Request, Response } from "express";

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000; // Custom port, default to 4000

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Mock data
/*
const items = [
  {
    id: 1,
    name: "Item 1",
    email: "smaity1@gmail.com",
    description: "This is item 1",
  },
  {
    id: 2,
    name: "Item 2",
    email: "smaity2@yahoo.com",
    description: "This is item 2",
  },
  {
    id: 3,
    name: "Item 3",
    email: "smaity3@deloitte.com",
    description: "This is item 3",
  },
  {
    id: 4,
    name: "Item 4",
    email: "smaity4@ollion.com",
    description: "This is item 4",
  },
];*/
interface FileRowData {
  fileNumber: string;
  accountNumber: string;
  propertyAddress: string;
  county: string;
  propertyType: string;
  gross: number;
  net: number;
}

//const items: FileRowData[] = [];

const items: FileRowData[] = [
  {
    fileNumber: "12345",
    accountNumber: "400762",
    propertyAddress: "123 Main St, City, FL",
    county: "Miami",
    propertyType: "Residential",
    gross: 100000,
    net: 90000,
  },
  {
    fileNumber: "12346",
    accountNumber: "400763",
    propertyAddress: "456 Oak Ave, Townsville, CA",
    county: "Orange",
    propertyType: "Commercial",
    gross: 250000,
    net: 230000,
  },
  {
    fileNumber: "12347",
    accountNumber: "400764",
    propertyAddress: "789 Pine Rd, Lakeview, TX",
    county: "Harris",
    propertyType: "Residential",
    gross: 175000,
    net: 160000,
  },
  {
    fileNumber: "12348",
    accountNumber: "400765",
    propertyAddress: "101 Maple St, Springfield, IL",
    county: "Sangamon",
    propertyType: "Agricultural",
    gross: 300000,
    net: 280000,
  },
  {
    fileNumber: "12349",
    accountNumber: "400766",
    propertyAddress: "202 Birch Blvd, Highland, NY",
    county: "Ulster",
    propertyType: "Residential",
    gross: 120000,
    net: 110000,
  },
  {
    fileNumber: "12350",
    accountNumber: "400767",
    propertyAddress: "303 Cedar Ln, Rivertown, AZ",
    county: "Maricopa",
    propertyType: "Industrial",
    gross: 500000,
    net: 470000,
  },
  {
    fileNumber: "12351",
    accountNumber: "400768",
    propertyAddress: "404 Elm Dr, Metrocity, GA",
    county: "Fulton",
    propertyType: "Mixed-Use",
    gross: 350000,
    net: 325000,
  },
  {
    fileNumber: "12352",
    accountNumber: "400769",
    propertyAddress: "505 Willow Way, Countryside, CO",
    county: "Denver",
    propertyType: "Residential",
    gross: 90000,
    net: 85000,
  },
  {
    fileNumber: "12353",
    accountNumber: "400770",
    propertyAddress: "606 Fir Ct, Mountainview, NV",
    county: "Clark",
    propertyType: "Commercial",
    gross: 210000,
    net: 200000,
  },
  {
    fileNumber: "12354",
    accountNumber: "400771",
    propertyAddress: "707 Redwood Ln, Palm Grove, FL",
    county: "Palm Beach",
    propertyType: "Residential",
    gross: 150000,
    net: 140000,
  },
];

// GET endpoint to fetch items
app.get("/api/items", (req: Request, res: Response) => {
  res.json(items);
});

// POST endpoint to add a new item
app.post("/api/items", (req: Request, res: Response) => {
  const newItem = req.body;
  newItem.id = items.length + 1;
  items.push(newItem);
  res.status(201).json({ message: "Item created", item: newItem });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Mock API is running on http://localhost:${PORT}`);
});
