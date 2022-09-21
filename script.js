function generateKey(str, key) {
    key = key.split("");
    if (str.length === key.length)
        return key.join("");
    else {
        let temp = key.length;
        for (let i = 0; i < (str.length - temp); i++) {
            key.push(key[i % ((key).length)])
        }
    }
    return key.join("");
}


function cipherText(str, key) {
    let cipher_text = "";
    for (let i = 0; i < str.length; i++) {
        let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;
        x += 'A'.charCodeAt(0);
        cipher_text += String.fromCharCode(x);
    }
    return cipher_text;
}

function originalText(cipher_text, key) {
    let orig_text = "";
    for (let i = 0; i < cipher_text.length; i++) {
        let x = (cipher_text[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;
        x += 'A'.charCodeAt(0);
        orig_text += String.fromCharCode(x);
    }
    return orig_text;
}


let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    let secretMessage = document.getElementById('secretMessage').value.toUpperCase();
    let keyword = document.getElementById('key').value.toUpperCase();

    let key = generateKey(secretMessage, keyword);

    let cipher_text = cipherText(secretMessage, key);

    let original_table = document.getElementById('original-table');
    let cipher_table = document.getElementById('cipher-table');
    let key_table = document.getElementById('key-table');
    original_table.innerHTML = originalText(cipher_text, key);
    cipher_table.innerHTML = cipher_text;
    key_table.innerHTML = key;
})


let btn1_2 = document.getElementById('btn1-2');
btn1_2.addEventListener('click', () => {
    let message = document.getElementById('secretMessage').value.toUpperCase();
    let keyword = document.getElementById('key').value.toUpperCase();

    let key = generateKey(message, keyword);

    let cipher_text = cipherText(message, key);
    console.log('message (шифроване) = ', message);
    console.log('message (розшифровано) = ', originalText(message, key));


    let original_table = document.getElementById('original-table');
    let cipher_table = document.getElementById('cipher-table');
    let key_table = document.getElementById('key-table');
    original_table.innerHTML = originalText(message, key);
    cipher_table.innerHTML = cipher_text;
    key_table.innerHTML = key;
})


