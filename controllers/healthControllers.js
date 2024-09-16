import { Health } from "../data/mongoDB.js";

// Get all tasks
export const allhealth = async (req, res) => {
  try {
    const healthRecords = await Health.find();
    res.status(200).json(healthRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new task
export const createhealth = async (req, res) => {
  try {
    const healthRecord = new Health(req.body);
    await healthRecord.save();
    res
      .status(201)
      .json({ message: "Health record created successfully", healthRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Edit health
export const edithealth = async (req, res) => {
  try {
    const healthRecord = await Health.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!healthRecord) {
      return res.status(404).json({ message: "Health record not found" });
    }
    res
      .status(200)
      .json({ message: "Health record updated successfully", healthRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Single health by ID
export const singleHealth = async (req, res) => {
  try {
    const healthRecord = await Health.findById(req.params.id);
    if (!healthRecord) {
      return res.status(404).json({ message: "Health record not found" });
    }
    res.status(200).json(healthRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a task
export const deletehealth = async (req, res) => {
  try {
    const healthRecord = await Health.findByIdAndDelete(req.params.id);
    if (!healthRecord) {
      return res.status(404).json({ message: "Health record not found" });
    }
    res.status(200).json({ message: "Health record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
