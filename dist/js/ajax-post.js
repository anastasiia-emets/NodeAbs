document.getElementById('postData').addEventListener('submit', postData);

 function postData(event){
            event.preventDefault();
            let input_name = document.getElementById('name').value;
            let input_surname= document.getElementById('email').value;
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers : new Headers(),
                body:JSON.stringify({tittle:input_name, body:input_surname})
            }).then((res) => res.json())
            .then((data) =>  alert("Succesfull send"))
            .catch((err)=> alert("Error"))
        }