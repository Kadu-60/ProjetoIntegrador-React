import React from 'react';

const frete = require('frete');

frete()
    .cepOrigem('13467460')
    .peso(1)
    .formato(frete.formatos.caixaPacote)
    .comprimento(16)
    .altura(2)
    .largura(11)
    .diametro(1)
    .maoPropria(frete.maoPropria.nao)
    .valorDeclarado(50)
    .avisoRecebimento(frete.avisoRecebimento.sim)
    .servico(frete.servicos.sedex)
    .precoPrazo('13466321', function (err, results) {
        console.log(err);
        console.log(results);
    });