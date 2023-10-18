// Je recupere la div de ma liste de pokemon
const list = document.querySelector('#list');

// Je requête l'api pour la liste des pokemons
fetch('https://pokeapi.co/api/v2/pokemon')
// Je transforme ma réponse en json
.then(res => res.json())
// Je travaille sur les données recu
.then(data => {
    // Je parcours data.results
    data.results.map(p => {
        // Pour chaque pokemon je split l'url pour récupérer leurs index
        const index = p.url.split('/')[6];
        // Je créer une balise a pour chaque pokemon
        const a = document.createElement('a')
        // J'ajoute le lien avec le parametre du pokemon
        a.href = `./detail.html?id=${index}`
        // Je creer une balise img
        const img = document.createElement('img')
        // J'ajoute la source de mon image avec l'index du pokemon
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/0c328e64c6916ec31f9c9ae3a362b0eb9dca66cb/sprites/pokemon/other/dream-world/${index}.svg`
        // J'ajoute mon image a la balise a
        a.appendChild(img)
        // J'ajoute ma balise a à ma liste
        list.appendChild(a)
    })
})
.catch(err => console.error(err))