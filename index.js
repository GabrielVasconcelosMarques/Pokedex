function loadpk(){
    let input = document.getElementById('number').value;
    let url = `https://pokeapi.co/api/v2/pokemon/${input}`;
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.clear();
        console.log(data);
        document.getElementById("nome").innerHTML = data['name'];
        document.getElementById("numero").innerHTML = data['id'];

        let img = data['sprites']['front_default'];
        document.getElementById("pic").setAttribute('src', img);

        let tipo = data['types']['0']['type']['name'];
        document.getElementById("tipo").innerHTML = tipo;

        // alterando cor de fundo de acordo com o tipo do pokemon
        let cor = document.getElementById("container");

        var golpes = {
            'Golpe_1': data['moves']['0']['move']['name'],
            'Golpe_2': data['moves']['1']['move']['name'],
            'Golpe_3': data['moves']['2']['move']['name'],

        }

        
        //document.getElementById("btn1").innerHTML = golpes['Golpe_1'];
        document.querySelector("#btn1").setAttribute("value", `${golpes['Golpe_1']}`);
        document.querySelector("#btn2").setAttribute("value", `${golpes['Golpe_2']}`);
        document.querySelector("#btn3").setAttribute("value", `${golpes['Golpe_3']}`);
        

        var tipos = {
            'water': '#9bf6ff',
            'electric': '#fdffb6',
            'grass': '#caffbf', 
            'poison': '#e0aaff',
            'ghost': '#907ad6',
            'fire': '#ffadad',
            'normal': '#ffe8d6',
            'fighting' :'#e56b6f',
            'bug' : '#b5c99a',
            'psychic': '#ff87ab',
            'rock' : '#bcb8b1',
            'ground' : '#f19c79',
            'ice' : '#c4fff9',
            'flying' : '#fff9ec',
            'dragon' : '#68d8d6',
            'dark' : '#4f518c',
            'steel' : '#e5d9f2',
            'fairy' : '#f7aef8'
        };

        if(data['types'].length == 1){
            cor.style.background = `linear-gradient(${tipos[tipo]}, ${tipos[tipo]})`;
            console.log(cor);
        }

        // caso o pokemon tenha mais de um tipo, mostrar os 2 tipos
        else if(data['types'].length == 2){
            let tipo2 = data['types']['1']['type']['name'];
            document.getElementById("tipo").innerHTML = tipo+" / "+tipo2;
 
            cor.style.background = `linear-gradient(${tipos[tipo]}, ${tipos[tipo2]})`;
            console.log(cor);
        }


        // retorna quantos tipos o pokemon tem
        console.log(data['types'].length);

        
    })
    .catch((err) => {
        console.log(err);
    });
}


function loadpk_golpe(golpe){

    let url = `https://pokeapi.co/api/v2/move/${golpe}`;
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.clear();
        console.log(data);
        document.getElementById("ataque").innerHTML = data['power'];
        
    })
    .catch((err) => {
        console.log(err);
    });
}

document.getElementById("btn").onclick = loadpk;


