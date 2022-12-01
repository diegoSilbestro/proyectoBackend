const { Product } = require("../models/products");
const { validationResult } = require("express-validator");

const controllers = {
    index (req,res) {
        res.render('index', { title: 'Express' });
    },
    user (req,res) { 
        res.json({
            name: 'Diego',
            apellido: 'Silbestro'
          })
    },
    newProduct: async (req, res) => {
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                const product = new Product (req.body);
                await product.save();
                res.status(201).json(product);
            } else {
                res.status(501).json({err})
            }
            
        } catch (error) {
            res.status(501).json({
                msg: 'El producto no se pudo guardar', error
            })
        }
    },
    seeProducts: async (req, res) => {
        const products = await Product.find();
        res.json({products})
    },
    seeOneProduct: async(req, res) =>{
        const product = await Product.findById(req.params.id);
        res.status(200).json({product})
    },
    editProduct: async (req,res) =>{
        try {
            const err =validationResult(req);
            if (err.isEmpty()) {
                await Product.findByIdAndUpdate(req.params.id, req.body)
                res.status(201).json({msg: "Se actualizó el producto"})
            } else {
                res.status(501).json({err})
            }
        } catch (error) {
            res.status(501).json({error})
        }
    },
    eliminarProducto: async (req,res) =>{
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(204).json({msg: 'El siguiente producto fue eliminado', product})
    }
}

module.exports = controllers;