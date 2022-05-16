new Promise(

    function(resolve){

        let a = 50;
        let b = 60;

        //forçando um erro na promise (variavel c não foi declarada)

        //resolve a função
        resolve(a + c)
    }
).then(
    function(res){
        console.log("Resultado:", res)

    } 

).catch(
    (erro) => {
        console.log("Erro:", erro)

    }


).finally(
    console.log("Finaliza a eecução")

)