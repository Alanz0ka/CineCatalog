class Titulos{
    constructor(){
        this.id = null,
        this.tipo = "",
        this.titulo = "",
        this.diretor = "",
        this.elenco = "",
        this.genero = ""
    }

    // Getters

    getId(){
        return this.id;
    }

    getTipo(){
        return this.tipo;
    }

    getTitulo(){
        return this.titulo;
    }

    getDiretor(){
        return this.diretor;
    }

    getElenco(){
        return this.elenco;
    }

    getGenero(){
        return this.genero;
    }
    
    // Setters
    
    setId(novo){
        this.id = novo;
    }

    
    setTipo(novo){
        this.tipo = novo;
    }

    
    setTitulo(novo){
        this.titulo = novo;
    }

    
    setDiretor(novo){
        this.diretor = novo
    }

    
    setElenco(novo){
        this.elenco = novo;
    }

    
    setGenero(novo){
        this.genero = novo;
    }
}