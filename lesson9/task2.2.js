let arrNames = ['Igor', 'Nastya', 'Valera', 'Sasha'];

function getParams(param1, param2, param3){
    console.log(param1);
    console.log(param2);
    console.log(param3);
}

getParams(...arrNames);
