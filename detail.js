// Je récupère les parametres de mon url
let params = new URLSearchParams(window.location.search);
// Je récupère l'id particulierement
let index = params.get("id");

// Je récupère ma balise h3 par son id
const numero = document.querySelector('#numero')
// Je récupère ma balise img par son id
const front = document.querySelector('#front')
// Je récupère ma balise img par son id
const back = document.querySelector('#back')
// Je récupère ma balise h3 par son id
const title = document.querySelector('#title')

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
})
.catch(err => console.error(err))