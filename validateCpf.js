const cpf = document.querySelector("#cpf")

cpf.addEventListener("keyup", e => {
    const vetCpf = cpf.value.split("")
    const onlyNumbers = vetCpf.filter(value => !isNaN(value))
    const isComplete = onlyNumbers.length == 11

    if(isComplete) {
        const firstNineNumbers = onlyNumbers.slice(0, -2)
        const removeDuplicates = onlyNumbers.filter((value, pos) => onlyNumbers.indexOf(value) == pos)
        const areAllTheSame = removeDuplicates.length == 1
        cpf.style.boxShadow = "0px 0px 0px black"

        if(!areAllTheSame) {
            const firstCheckDigit = getCheckDigit(firstNineNumbers, 10)
            firstNineNumbers.push(firstCheckDigit)
            const secondCheckDigit = getCheckDigit(firstNineNumbers, 11)
            firstNineNumbers.push(secondCheckDigit)

            validateCpf(firstNineNumbers, onlyNumbers);

        } else {
            invalidCpf("INVÁLIDO, NÚMEROS IGUAIS")
        }
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
    if(validCpf.join("") === cpfInformed.join("")) {
        console.log("CPF VÁLIDO")
    } else {
        invalidCpf("CPF INVÁLIDO")
    }
}

function invalidCpf(msg) {
    cpf.style.transition = ".5s"
    cpf.style.boxShadow = "0px 0px 10px crimson"
    alert(msg)
    console.log(msg)
}