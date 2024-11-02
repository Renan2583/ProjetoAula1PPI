// Esta aplicação WEB será desenvolvida com o auxílo da biblioteca/modulo 'express'
//Express é um framework que possibilita a construção de aplicativos web
//Para não reivientar a roda.. vamos instalar o Expresss.
//No terminal executar o comando : npm instal express
// NO formato CommonJs --> const express = require ("express");

// Esta aplicação WEB será desenvolvida com o auxílo da biblioteca/modulo 'express'
//Express é um framework que possibilita a construção de aplicativos web
//Para não reivientar a roda.. vamos instalar o Expresss.
//No terminal executar o comando : npm instal express
// NO formato CommonJs --> const express = require ("express");

import express from "express";

const host = "0.0.0.0"; //todas as interfdaces de rede do computador

const porta = 3000; //identifica a nossa aplicação como sendo a 3000

const app = express(); //aaplicação servidora web que se comunica utilizando o protocolo HTTP

function paginaInicial(req, res) {
  res.send(`
            <h1>Primeiros passos para desenvolvimento web com Node/JS</h1>
            <h2>Desenvolvido por Renan Coimbra</h2>
        `); // ----> A funçao paginaInicial não é chamada, ela é passada por parametro.
}
app.get("/", paginaInicial); //http://localhost:3000

function mostrarSobre(req, res) {
  res.write(`<html>`);
  res.write(`<head>
            <meta charset="UTF-8">
            <title>Sobre</title>
                </head>
        <body>`);
  res.write("<h1>Sobre</h1>");
  res.write("<p>Somos uma equipe iniciante de desenvolvimento </p>");
  res.write("<p>Estamos aprendendo a programar em JavaScript </p>");
  res.write("<p>Faça uma doação neste email: renanvcoimbra@hotmail.com </p>");
  res.write(`</body>`);
  res.write(`</html>`);
  res.end();
}
app.get("/sobre", mostrarSobre); //http://localhost:3000/sobre

//Implementar uma rota que seja capaz de receber parametros na URL
//A requisição deverá informar o valor a ser depositado por meio da URL
//Exemplo http://localhost:3000/depositar?valor=10

function depositar(req, res) {
  const valor = req.query.valor;
  if (valor) {
    res.write(`<html>
                   <head>
                    <title>Deposito realizado</title>
                    </head>
                    <body>
                    <h1>Deposito Realizado </h1>
                    <h1>Valor depositado: R$${valor}</h1>
                    <h1>Obrigado </h1>
                    </body>
                    </html>`);
    res.end();
  } else {
    res.write("<h1>Nenhum valor informado !</h1>");
    res.end();
  }
}
app.get("/depositar", depositar);//http://localhost:3000/depositar

function tabuada(req, res) {
    const numero = parseInt(req.query.numero);
    if (numero > 0) {
        for (let i = 0; i < 11; i++){
            const resultado = numero * i;
            res.write(`<p>${numero} x ${i} = ${resultado}</p>`);
        }
        res.end();
    } else {
        res.write("<h1>Comando incorreto !</h1>");
        res.end();
    }
    

}
app.get("/tabuada", tabuada);//http://localhost:3000/tabuada?numero=10

app.listen(porta, host, () => {
  //arrow function
  console.log("Servidor em execução http://" + host + ":" + porta);
});
