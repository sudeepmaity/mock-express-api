import express, { Request, Response } from "express";

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000; // Custom port, default to 4000

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Mock data
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
