class ErroLogin extends Error {

    constructor(name, message){

        super(message)

        this.name = name
    }
}

try{
    let email = "vucenick@email.com"
    let senha = "08388729"
    let emailSistema = "vucenick@email.com"
    let SenhaDoSistema = "08388729"


    if (senha == SenhaDoSistema && email == emailSistema) {


        console.log("Acesso autorizado")


    } else {

        let erroLogin = new ErroLogin("ErroLogin", "Credenciais do usuario estão incorretas")

        throw erroLogin
    }

} catch(erro){

    console.log(erro.name)
    console.log(erro.message)



}