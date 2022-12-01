const {Product} = require ("../models/products")

const validarId = async (req, res, next) =>{
    try {
        const item = await Product.findById (req.params.id)
        if (item !== null) {
            next()
        } else {
            res.status(500).json({msg:"el ID es invalido"})
        }
    } catch (error) {
        res.status(500).json({error})
    }

    
}

module.exports = {validarId}
