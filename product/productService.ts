import productSchema from './productSchema';
import { productType } from './productType';
import { writeFile, readFile } from 'fs/promises'

export class productService{

    async create(data: productType){
        const p = await productSchema.create(data)
        //await writeFile('products.json', JSON.stringify(p, null, 2))
        return p
    }

    async writeProducts(){
        try{
            const pList = await this.products()
            await writeFile('products.json', JSON.stringify(pList, null, 2))
            return pList
        }catch(err){
            console.log(err) 
        }
    }

    async productsValue(){
        try{
            const pList = await readFile('products.json', 'utf-8')
            const pListJson = JSON.parse(pList)
            const valores = pListJson.map(produto => produto.price)
            return valores
        }catch(err){
            console.log(err)
        }
        
    }

    async products(){
        const pList = await productSchema.find()
        return pList
    }

    async productsLimit10(){
        const pList = await productSchema.find().limit(10)
        console.log(pList)
        return pList
    }

    async getRandomProducts(){
        const pList = await this.productsLimit10()
        let randomList:any = []
        
        while(randomList.length < 4){
            let randomValue = Math.floor(Math.random() * 10)
            if(!randomList.includes(pList[randomValue])){
                randomList.push(pList[randomValue])
            }
        }

        return randomList
    }
}