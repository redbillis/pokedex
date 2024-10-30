// fetch("https://pokeapi.co/api/v2/pokemon/raikou")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Could not fetch resource.`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.weight))
//   .catch((error) => console.error(error));

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemon-name")
      .value.toLowerCase();

    const pokemonImage = document.getElementById("pokemon-sprite");

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error(`Could not fetch resource.`);
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;

    pokemonImage.src = pokemonSprite;
    pokemonImage.style.display = "block";

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
