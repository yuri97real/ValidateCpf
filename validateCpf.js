const cpf = document.querySelector("#cpf")
const helper = document.querySelector(".help-box-result")

cpf.addEventListener("keyup", e => {

    const vetCpf = cpf.value.split("")
    const onlyNumbers = vetCpf.filter(value => !isNaN(value))
    const isComplete = onlyNumbers.length == 11

    if(!isComplete) return

    const firstNineNumbers = onlyNumbers.slice(0, -2)

    const removeDuplicates = onlyNumbers.filter((value, pos) => onlyNumbers.indexOf(value) == pos)
    const areAllTheSame = removeDuplicates.length == 1

    if(!areAllTheSame) {
        
        const firstCheckDigit = getCheckDigit(firstNineNumbers, 10)
        firstNineNumbers.push(firstCheckDigit)
        const secondCheckDigit = getCheckDigit(firstNineNumbers, 11)
        firstNineNumbers.push(secondCheckDigit)

        validateCpf(firstNineNumbers, onlyNumbers);

    } else {
        showMessageResult("INVÁLIDO, NÚMEROS IGUAIS", ["invalid"])
    }

})

function getCheckDigit(firstNineNumbers, subtr) {

    const multiplyCpfNumbersWithVector = firstNineNumbers.map((value, pos) => value * (subtr - pos))
    const sumNumbers = multiplyCpfNumbersWithVector.reduce((value, acc) => value + acc, 0)
    const restOfDivisionByEleven = sumNumbers % 11
    const checkDigit = (restOfDivisionByEleven < 2) ? 0 : (11 - restOfDivisionByEleven)

    return checkDigit

}

function validateCpf(validCpf, cpfInformed) {

    validCpf.join("") === cpfInformed.join("") ?
        showMessageResult("CPF VÁLIDO", ["valid"]) : showMessageResult("CPF INVÁLIDO", ["invalid"])

}

function showMessageResult(msg, classes) {

    cpf.classList.remove("valid", "invalid")

    helper.innerText = msg

    classes.forEach(className => cpf.classList.add(className))

}