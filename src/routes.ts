import { Router } from 'express'
import productController from '../product/productController';
import stockController from '../stock/stockController';

const routes = Router()
routes.post('/products', productController.create)
routes.post('/writeProducts', productController.writeProducts)

routes.get('/products', productController.productList)
routes.get('/products-random', productController.randomProducts)
routes.get('/products/price', productController.listProductsValue)

routes.get('/products/stock', stockController.listStock)

export { routes }