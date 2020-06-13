document.addEventListener("DOMContentLoaded", function() {
            let request = new XMLHttpRequest();
            request.onload = function() {
                let div = document.querySelector('div');
                let info = JSON.parse(request.responseText);
                for (let i = 0; i < 30; i++){
                    let divName = document.createElement('div');
                    divName.textContent = 'Name:' + info[i].name;
                    div.appendChild(divName);
                    let divEmail = document.createElement('div');
                    divEmail.textContent = 'Email: ' + info[i].email;
                    div.appendChild(divEmail);
                    let divBody = document.createElement('div');
                    divBody.textContent = 'Body: ' + info[i].body;
                    div.appendChild(divBody);


                }
            }
            request.open('GET', 'https://jsonplaceholder.typicode.com/comments');
            request.send();
        })
