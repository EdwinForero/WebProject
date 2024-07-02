function encryptText() {
    const input = document.getElementById('inputText').value;
    const message = document.getElementById('message');
    const outputDiv = document.getElementById('output');
    const outputText = document.getElementById('outputText');
    
    if (!/^[a-z ]*$/.test(input)) {
        message.textContent = 'Only lowercase letters and spaces are allowed.';
        outputDiv.style.display = 'none';
        return;
    }
    
    message.textContent = '';
    let encryptedText = '';
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + 3) % 26) + 97;
        }
        encryptedText += String.fromCharCode(charCode);
    }
    outputText.textContent = encryptedText;
    outputDiv.style.display = 'block';
}

function decryptText() {
    const input = document.getElementById('inputText').value;
    const message = document.getElementById('message');
    const outputDiv = document.getElementById('output');
    const outputText = document.getElementById('outputText');
    
    if (!/^[a-z ]*$/.test(input)) {
        message.textContent = 'Only lowercase letters and spaces are allowed.';
        outputDiv.style.display = 'none';
        return;
    }
    
    message.textContent = '';
    let decryptedText = '';
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 - 3 + 26) % 26) + 97;
        }
        decryptedText += String.fromCharCode(charCode);
    }
    outputText.textContent = decryptedText;
    outputDiv.style.display = 'block';
}

function hideOutput() {
    document.getElementById('output').style.display = 'none';
}
