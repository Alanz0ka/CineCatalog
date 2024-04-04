class Usuarios{
    constructor(){
        this.id = null,
        this.nome = "",
        this.email = "",
        this.senha = ""
    }

    getID(){
        return this.id;
    }

    setID(novo){
        this.id = novo;
    }

    getNome(){
        return this.nome;
    }

    setNome(novo){
        this.nome = novo;
    }

    getEmail(){
        return this.email;
    }

    setEmail(novo){
        this.email = novo;
    }

    setSenha(novo){
        this.senha = novo;
    }
}