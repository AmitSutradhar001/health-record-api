import { Router } from "express";
import {
  allhealth,
  createhealth,
  edithealth,
  deletehealth,
  singleHealth,
} from "../controllers/healthControllers.js";

const healthRoutes = Router();

healthRoutes.get("/", allhealth); // Retrieve a list of all health records.
healthRoutes.post("/", createhealth); // Create a new health record.
healthRoutes.put("/:id", edithealth); // Update a health record.
healthRoutes.get("/:id", singleHealth); //Retrieve a specific health record by its ID.
healthRoutes.delete("/:id", deletehealth); // Delete a health record.

export default healthRoutes;
