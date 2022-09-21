let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newalpha = "";

function shift(n) {
    for (let i = 0; i < alphabet.length; i++) {
        let offset = (i + n) % alphabet.length;
        newalpha += alphabet[offset];
    }
}

function encode(message) {
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++) {
        let index = alphabet.indexOf(message[i]);
        result += newalpha[index];
    }
    return result;
}

function decode(message) {
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++) {
        let index = newalpha.indexOf(message[i]);
        result += alphabet[index];
    }
    return result;
}

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    let secretMessage = document.getElementById('secretMessage2').value.toUpperCase();
    let keyword = +document.getElementById('key2').value;
    shift(keyword)
    let res = encode(secretMessage);
    console.log('res = ', res)

    let original_table = document.getElementById('original-table2');
    let cipher_table = document.getElementById('cipher-table2');
    let key_table = document.getElementById('key-table2');
    original_table.innerHTML = secretMessage;
    cipher_table.innerHTML = res;
    key_table.innerHTML = keyword;
})

let btn2_1 = document.getElementById('btn2-1');
btn2_1.addEventListener('click', () => {
    let message = document.getElementById('secretMessage2').value.toUpperCase();
    let keyword = +document.getElementById('key2').value;
    shift(keyword);
    let res = decode(message);

    let original_table = document.getElementById('original-table2');
    let cipher_table = document.getElementById('cipher-table2');
    let key_table = document.getElementById('key-table2');
    original_table.innerHTML = res;
    cipher_table.innerHTML = message;
    key_table.innerHTML = keyword;
})