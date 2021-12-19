class ValidateCPF {

    constructor(cpf) {

        this.cpf = cpf
        this.cpf.addEventListener("keyup", () => this.validate())

    }

    validate() {

        const cpfChars = this.cpf.value.split("")
        const onlyNumbers = cpfChars.filter(value => !isNaN(value))
        const isComplete = onlyNumbers.length >= 11

        if(!isComplete) return

        const firstNineNumbers = onlyNumbers.slice(0, -2)

        const removeDuplicates = onlyNumbers.filter((value, pos) => onlyNumbers.indexOf(value) == pos)
        const areAllTheSame = removeDuplicates.length == 1

        if(areAllTheSame) return this.showMessage("INVÁLIDO, NÚMEROS IGUAIS", ["invalid"])
            
        const firstCheckDigit = this.getCheckDigit(firstNineNumbers, 10)
        firstNineNumbers.push(firstCheckDigit)
        const secondCheckDigit = this.getCheckDigit(firstNineNumbers, 11)
        firstNineNumbers.push(secondCheckDigit)

        const verifiedCPF = firstNineNumbers.join("")
        const cpfInformed = onlyNumbers.join("")

        verifiedCPF === cpfInformed ?
            this.showMessage("CPF VÁLIDO", ["valid"]) :
            this.showMessage("CPF INVÁLIDO", ["invalid"])

    }

    getCheckDigit(firstNineNumbers, subtr) {

        const multiplyCpfNumbersWithVector = firstNineNumbers.map((value, pos) => value * (subtr - pos))
        const sumNumbers = multiplyCpfNumbersWithVector.reduce((value, acc) => value + acc, 0)
        const restOfDivisionByEleven = sumNumbers % 11
        const checkDigit = (restOfDivisionByEleven < 2) ? 0 : (11 - restOfDivisionByEleven)
    
        return checkDigit
    
    }
    
    showMessage(msg, classes) {
    
        cpf.classList.remove("valid", "invalid")
        classes.forEach(className => cpf.classList.add(className))

        console.clear()
        console.log(msg)
    
    }

}