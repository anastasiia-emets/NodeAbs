document.querySelector('.greetings__input_name').addEventListener('submit', postData);

function postData(event) {
    event.preventDefault();
    let inputName = document.getElementById('name').value;
    let inputSurname = document.getElementById('email').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ tittle: inputName, body: inputSurname })
    }).then((res) => res.json())
        .then((data) => alert("Succesfull send"))
        .catch((err) => alert("Error"))
}