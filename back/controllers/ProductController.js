// importing model

import ProductsModel from "../models/ProductModel.js";

// CRUD METHODS

//show all registers

export const getAllproducts = async (req, res) => {
    try {
        const products = await ProductsModel.findAll()
        res.json(products);
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//show a register
export const getProduct = async (req, res) => {
    try {
        const product = ProductsModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(product[0]);
    } catch (error) {
        res.json( {message: error.message} ) 
    }
}

//create a register
export const createProduct = async (req, res) => {
    try {
        await ProductsModel.create(req.body);
        res.json({
            "message":"register created successfully"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }
}

//update a register
export const updateProduct = async (req, res) => {
    try {
        await ProductsModel.update(req.body, {
            where: { id:req.params.id}
        })
        res.json({
            "message":"register created successfully"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//delete a register

export const deleteProduct = async (req, res) => {
    try {
        await ProductsModel.destroy({
            where: { id:req.params.id }
        })
    } catch(error){
        res.json( {message: error.message} ) 
    }
}