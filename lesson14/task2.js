document.querySelector('button').addEventListener('click', function(){
    let names = ['iliakan', 'remy', 'jeresig'];
    let promises = names.map(name => fetch(` https://api.github.com/users/${name}`));

    Promise.all(promises)
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(users => users.forEach(user => console.log(user.name)))
})
