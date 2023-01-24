//Importing connection to database
import db from "../database/db.js";
//importing sequelize
import { DataTypes } from "sequelize";

const ProductsModel = db.define('inventory', {
    productName: { type: DataTypes.STRING},
    price: { type: DataTypes.NUMBER}
});

export default ProductsModel;