var express = require('express');
var router = express.Router();
const controllers = require('../controller/controller')
const {check} = require('express-validator')
const {validarId} = require ('../middlewares/validarId')


/* GET users listing. */
router.get('/', controllers.user);
router.get('/verProductos', controllers.seeProducts)
router.get("/verUnProducto/:id", validarId, controllers.seeOneProduct)


/* POST users listing. */
router.post('/crearProducto', [
    check("name").not().isEmpty().withMessage("Debe ingresar un nombre"),
    check("description").not().isEmpty().withMessage("Debe ingresar una descripción"),
    check("price").not().isEmpty().withMessage("Debe ingresar un precio").isNumeric().withMessage("El precio debe ser un número")
] , controllers.newProduct)

/* PUT */
router.put('/editarProducto/:id', validarId,[
    check("name").not().isEmpty().withMessage("Debe ingresar un nombre"),
    check("description").not().isEmpty().withMessage("Debe ingresar una descripción"),
    check("price").not().isEmpty().withMessage("Debe ingresar un precio").isNumeric().withMessage("El precio debe ser un número")
] , controllers.editProduct)

/* DELETE */

router.delete('/eliminarProducto/:id', validarId, controllers.eliminarProducto)

/* API externa*/

router.get('/clima/:lat/:lon', controllers.consultaApiExterna)


module.exports = router;
