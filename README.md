# Validador de CPF

## Descrição

Este projeto é um validador de CPF's, desenvolvido em JavaScript.

## Como usar?

1. Importe o arquivo "validateCpf.js" no seu HTML.
2. Instancie a classe ValidateCPF, passando seu elemento input como parâmetro no construtor.

## Exemplo

No arquivo HTML

    <script src="validateCpf.js"></script>

No arquivo JS

    const cpf = document.querySelector("#cpf")
    new ValidateCPF(cpf)

## Features

- [x] Validar apenas os números do input
- [x] Verificar números repetidos

Dá uma conferida, na <a href="https://github.com/yuri97real/FormCPF">Máscara de Inputs</a> que eu desenvolvi.

## Observações

A receita federal pode mudar o cálculo usado para validação, isso já aconteceu. 

Portanto, ao implementar esse código em seu projeto, minha sugestão é que mostre apenas um lembrete amigável para o usuário. Não o impeça de fazer cadastro mesmo que o script acuse erro.

1. Já aconteceu comigo, de um sistema antigo negar meu cpf.
2. Não esqueça de validar o cpf também no back-end.