// Esta aplicação WEB será desenvolvida com o auxílo da biblioteca/modulo 'express'
//Express é um framework que possibilita a construção de aplicativos web
//Para não reivientar a roda.. vamos instalar o Expresss.
//No terminal executar o comando : npm instal express
// NO formato CommonJs --> const express = require ("express");

import express from "express";

const host = "0.0.0.0"; //todas as interfdaces de rede do computador
const porta = 3000; //identifica a nossa aplicação como sendo a 3000
const app = express();//aaplicação servidora web que se comunica utilizando o protocolo HTTP
function paginaInicial(req, res) {
    res.send(`<h1>Primeiros passos para desenvolvimento web com Node/JS</h1>"
        <h3>Pagina Inicial</h3>`);
}
// ----> A funçao paginaInicial não é chamada, ela é passada por parametro.

app.get("/", paginaInicial); //http://localhost:3000


app.listen(porta, host, () => { //arrow function
    console.log("Servidor em execução htpp://" + host + ":" + porta);
});