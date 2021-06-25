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

        var tipos = {
            'water': '#9bf6ff',
            'electric': '#fdffb6',
            'grass': '#caffbf', 
            'poison': '#e0aaff',
            'ghost': '#907ad6',
            'fire': '#ffadad',
            'normal': '#ffe8d6',
            'fighting' :'#e56b6f'

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

document.getElementById("btn").onclick = loadpk;


/*if(data['types'].length == 1){
            if(tipo == 'water'){
                cor.style.backgroundColor = '#9bf6ff';
            } else if(tipo == 'electric'){
                cor.style.backgroundColor = '#fdffb6';
            } else if(tipo == 'fire'){
                cor.style.backgroundColor = '#ffadad';
            } else if(tipo == 'grass'){
                cor.style.backgroundColor = '#caffbf';
            } else if(tipo == 'normal'){
                cor.style.backgroundColor = '#ffe8d6';
            } else if(tipo == 'fighting'){
                cor.style.backgroundColor = '#e56b6f';
            } else if(tipo == 'bug'){
                cor.style.backgroundColor = '#b5c99a';
            } else if(tipo == 'poison'){
                cor.style.backgroundColor = '#e0aaff';
            } else if(tipo == 'psychic'){
                cor.style.backgroundColor = '#ff87ab';
            } else if(tipo == 'rock'){
                cor.style.backgroundColor = '#bcb8b1';
            } else if(tipo == 'ground'){
                cor.style.backgroundColor = '#f19c79';
            } else if(tipo == 'ghost'){
                cor.style.backgroundColor = '#907ad6';
            } else if(tipo == 'ice'){
                cor.style.backgroundColor = '#c4fff9';
            } else if(tipo == 'flying'){
                cor.style.backgroundColor = '#fff9ec';
            } else if(tipo == 'dragon'){
                cor.style.backgroundColor = '#68d8d6';
            } else if(tipo == 'dark'){
                cor.style.backgroundColor = '#4f518c';
            } else if(tipo == 'steel'){
                cor.style.backgroundColor = '#e5d9f2';
            } else if(tipo == 'fairy'){
                cor.style.backgroundColor = '#f7aef8';
            } 
        }*/