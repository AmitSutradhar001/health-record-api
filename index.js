import express from "express";
import healthRoutes from "./routes/healthRoutes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/health-records", healthRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
