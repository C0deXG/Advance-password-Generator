'use strict'

const password = document.getElementById('pass')

function getPasslength(){
    const length = document.querySelector('.length').value
    return Number(length)
}

function getPassProperties(){
    const ids = ['lower', 'upper', 'number', 'special']
    const properties = {}
    for(const id of ids){
        const element = document.getElementById(id);
        properties[id] = element.checked
    }

    return properties
}

function getLowerCaseChars(Lowercase = true){
    const start = Lowercase ? 97 : 65;
    let chars = [];

    for (let i = start; i < start + 26; i++) {
        chars.push(String.fromCharCode(i))
        
    }

    return chars
}

function getNumber(){
    const nums = []
    for (let i = 0; i < 10; i++) {
        nums.push(i);
        
    }
    return nums
}

const lowerCaseChars = getLowerCaseChars();
const upperCaseChars = getLowerCaseChars(false);
const numbers = getNumber()
const specialChars = ['!','@','#','$','%','^','&','*','()','_','+','-','=','[]','{}','|',';',':',',','.','<>','?']
function generatePassword(){
    length = getPasslength();
    const properties = getPassProperties();
   
    const characters = [];

    if(properties.lower) characters.push(...lowerCaseChars)
    if(properties.upper) characters.push(...upperCaseChars)
    if(properties.number) characters.push(...numbers)
    if(properties.special) characters.push(...specialChars)
    
    if(characters.length === 0){
        return alert('You must select at least one set of characters')
    }

    if(characters.length >= 0 & length <= 0){
        return alert('You must select enter a length and greator then 0')
    }

    let pwd = [];

    for(let i = 0; i < length; i++){
        const randomIdx = Math.floor(Math.random() * characters.length);
        const char = characters[randomIdx];
        pwd.push(char)

    }
    const passText = pwd.join(' ')

    password.textContent = passText
    password.classList.add('text-m', 'p-12')
}

const btn = document.querySelector('.clear')
btn.addEventListener('click', function(e){
    e.preventDefault()
    generatePassword()
})

