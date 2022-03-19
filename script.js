const text = document.querySelector('.text-welcome-motion')
var typed2 = new Typed(text, {
    strings: ['', 'Eu sou o Pedro ^2000', ' Sou Desenvolvedor Full-Stack ^2000'],
    typeSpeed: 200,
    loop: true,
    backSpeed: 100,
    smartBackspace: true,
    cursorChar: '',
});

function calcIdade() {
    let info_idade = document.querySelector('.info-idade')
    let date = new Date()
    let anoNascimento = 2001
    let anoAtual = date.getUTCFullYear()
    let idade = anoAtual - anoNascimento
    info_idade.textContent = `Idade: ${idade} anos`
}
calcIdade()