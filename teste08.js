let cpf = "11111111111"

try {

    if(cpf.length != 11){


        let erroCPF = {
            "name": "CPFTamnnhoInválido",
            "message": "O tamanho do CPF deve ser igual a 11"

        } 
        
        throw erroCPF

    } else {

console.log("O Tamanho do CPF é válido")
        }
    } catch (erro){

    }
