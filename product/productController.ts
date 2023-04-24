import {Request, Response} from 'express'
import  {productService}  from './productService'

class productController {

    async create(req: Request, res: Response){
        const product = await new productService().create(req.body)

        return res.status(201).json(product)
    }

    async writeProducts(req: Request, res: Response){
        var pList = await new productService().writeProducts()

        return res.status(201).json(pList)
    }

    async listProductsValue(req: Request, res:Response){
        const priceList = await new productService().productsValue()

        return res.status(200).json(priceList)
    }

    async productList(req: Request, res: Response){
        const pList = await new productService().products()

        return res.status(200).json(pList)
    }

    async randomProducts(req: Request, res: Response){
        const pList = await new productService().getRandomProducts()

        return res.status(200).json(pList)
    }
}

export default new productController()