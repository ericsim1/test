document.getElementById('submitButton').addEventListener('click', function() {
    const message = document.getElementById('inputField').value;
    document.getElementById('output').innerText = `입력한 메시지: ${message}`;
});
