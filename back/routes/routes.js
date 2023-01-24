import express from "express";
import { createProduct, deleteProduct, getAllproducts, getProduct, updateProduct } from "../controllers/ProductController.js";
const router = express.Router();

router.get('/',getAllproducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;