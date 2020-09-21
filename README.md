# Validador de CPF

Esse script valida números de cpf, independente de haver caracteres numéricos ou não, ou seja, funciona com ou sem máscara de input.
Ex:. Assim "12345678900" ou assim "123.456.789-00"
Mas se for usar uma máscara, eu também desenvolvi uma. Dá uma conferida, https://github.com/yuri97real/FormCPF
Obs:. A receita federal pode mudar o cálculo usado para validação, isso já aconteceu. Portanto, ao implementar esse código em seu projeto, minha sugestão é que mostre apenas um lembrete amigável para o usuário. Não o impeça de fazer um cadastro mesmo que o script acuse erro. 
Ps. Já aconteceu comigo, de um sistema antigo negar meu cpf.