 document.querySelector('button').addEventListener('click', function(){
        let promise = fetch('https://todoappexamplejs.herokuapp.com/items/117', {
            method: 'PUT',
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
                body: JSON.stringify({title: 'alex'})

        })
        promise.then(response => {
            if (!response.ok) { throw response }
            return response.json()
        })
        .then(data => {console.log(data, 'success')})
        .catch(err => {
            console.log(err)
            err.text().then(errorMessage => console.log('ошибка'))
        })
        .finally(error => {console.log('finally')
        })
    })
