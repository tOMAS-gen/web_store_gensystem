import { Router } from "express"
import { getContacto, getIndex, getProductos, getQuienesSomos } from "../controllers/page.js"
import { get404 } from "../controllers/error.js"

const router = Router()

// inicio
router.get("/", getIndex)
// quienes somos
router.get("/quienes-somos", getQuienesSomos)
// contacto
router.get("/contacto", getContacto)
// productos
router.get("/productos", getProductos)
// error
router.use(get404)

export default router