let x = 100

try {

    if (x <= 100) {

        console.log("Número válido")
   
    } else {

        // criando e lançando um objeto do tipo Error
        throw {
        "name": "NumeroInvalido",
        "meessage":"Qualquer numero maior que 100 é invalido"
    }
}

} catch (error) {

    console.log(error)


}