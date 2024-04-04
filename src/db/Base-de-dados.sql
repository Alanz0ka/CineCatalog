-- Criando a base de dados
CREATE DATABASE IF NOT EXISTS CineCatalog;

-- Selecionando a base de dados
USE CineCatalog;

-- Criando as tabelas
CREATE TABLE Usuarios (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100),
    Email VARCHAR(100),
    Senha_hash VARCHAR(255) -- Armazena a senha criptografada
);

CREATE TABLE Titulos (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Tipo VARCHAR(20),
    Titulo VARCHAR(100),
    Diretor VARCHAR(100),
    Elenco VARCHAR(255),
    Genero VARCHAR(50)
);

CREATE TABLE Avaliacoes (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario INT,
    ID_Titulo INT,
    Classificacao DECIMAL(3,1),
    Critica TEXT,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID),
    FOREIGN KEY (ID_Titulo) REFERENCES Titulos(ID)
);

CREATE TABLE Listas_Assistir (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario INT,
    ID_Titulo INT,
    Assistido BOOLEAN,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID),
    FOREIGN KEY (ID_Titulo) REFERENCES Titulos(ID)
);