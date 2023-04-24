import {Request, Response} from 'express'
import  {stockService}  from './stockService'

class productController {

    async listStock(req: Request, res: Response){
        const stockList = await new stockService().getProductStock()

        return res.status(200).json(stockList)
    }
}

export default new productController()