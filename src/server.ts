import app from './app'

function main(){
    try{
        app.listen(3000, () => {
            console.log("Servidor iniciado!");
        })
    }catch(err){
        console.error("Starting server error: ", err);
    }
}


main()