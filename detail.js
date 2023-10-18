// Je récupère les parametres de mon url
let params = new URLSearchParams(window.location.search);
// Je récupère l'id particulierement
let index = params.get("id");

// Je récupère ma balise h3 par son id
const numero = document.querySelector('#numero');
// Je récupère ma balise img par son id
const front = document.querySelector('#front');
// Je récupère ma balise img par son id
const back = document.querySelector('#back');
// Je récupère ma balise h3 par son id
const title = document.querySelector('#title');
const pictures = document.querySelector('.pictures');

const COLORS = {
    normal: '#a8a878',
    grass: '#78c850',
    ground: '#e0c068',
    fighting: '#c03028',
    rock: '#b8a038',
    steel: '#b8b8d0',
    fire: '#f08030',
    electric: '#f8d030',
    flying: '#a890f0',
    psychic: '#f85888',
    bug: '#a8b820',
    dragon: '#7038f8',
    water: '#6890f0',
    ice: '#98d8d8',
    poison: '#a040a0',
    dark: '#705848',
    ghost: '#705898',
    fairy: '#ffaec9'
}

// Je requête l'API pour le pokémon sélectionné
fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    .then(res => res.json())
    .then(pokemon => {
        console.log(pokemon)
        // Je modifie le text de mon numero
        numero.textContent = `# ${index}`;
        // Je modifie la source de mon image front
        front.src = pokemon.sprites.front_default
        // Je modifie la source de mon image back
        back.src = pokemon.sprites.back_default
        // Je modifie le text de mon title
        title.textContent = pokemon.name;
        if (pokemon.types.length > 1) {
            pictures.style.background = "linear-gradient(to bottom right," + COLORS[pokemon.types[0].type.name] + ", " + COLORS[pokemon.types[1].type.name]+ ")";
        } else {
            pictures.style.backgroundColor = COLORS[pokemon.types[0].type.name]
        }
    })
    .catch(err => console.error(err))