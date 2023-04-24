import stockSchema from './stockSchema'
import { stockType  } from './stockType'
import { writeFile, readFile } from 'fs/promises'

export class stockService {

    async getProductStock(){
        const pList = await readFile('products.json', 'utf-8')
        const pJson = JSON.parse(pList)
        let sList = pJson.map(x => {
            let s = {
                name: x.name,
                price: x.price,
                quantity: x.quantity,
                stockValue: x.price * x.quantity
            }
            return s
        })

        return sList
    }

}