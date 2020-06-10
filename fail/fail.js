document.addEventListener("DOMContentLoaded", function() {
            let request = new XMLHttpRequest();
            request.onload = function() {
            let info = JSON.parse(request.responseText);
                let content = info.title;
                let div = document.querySelector('div');
                div.textContent = content;
            }
            request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
            request.send();
})
