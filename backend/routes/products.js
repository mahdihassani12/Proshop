import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductDetails,
} from "../controllers/productsController.js";

router.get("/", getProducts);
router.get("/:id", getProductDetails);

export default router;
