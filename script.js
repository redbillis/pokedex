// fetch("https://pokeapi.co/api/v2/pokemon/raikou")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Could not fetch resource.`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.weight))
//   .catch((error) => console.error(error));

// Fetch data async function
async function fetchData() {
  try {
    // grab the value from the input
    const pokemonSearch = document
      .getElementById("pokemon-search")
      .value.toLowerCase();

    // get the html elements
    const pokemonId = document.getElementById("pokemon-id");
    const pokemonName = document.getElementById("pokemon-name");
    const pokemonTypes = document.getElementById("pokemom-type");
    const pokemonAbilities = document.getElementById("pokemon-abilities");
    const pokemonImage = document.getElementById("pokemon-sprite");

    // fetch the data
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`
    );

    if (!response.ok) {
      throw new Error(`Could not fetch resource.`);
    }

    // parse the data
    const data = await response.json();
    const pokemonDataName = data.name;
    const pokemonDataTypes = data.types.map((type) => type.type.name);
    const pokemonDataAbilities = data.abilities.map(
      (ability) => ability.ability.name
    );
    const pokemonSprite = data.sprites.front_default;

    // display the data
    pokemonId.innerHTML = `ID: ${data.id}`;
    pokemonName.innerHTML = `Name: ${
      pokemonDataName.charAt(0).toUpperCase() + pokemonDataName.slice(1)
    }`;

    const typesHTML = pokemonDataTypes
      .map((type) => `<li>${type}</li>`)
      .join("");
    pokemonTypes.innerHTML = `Type: <ul><li>${typesHTML}</li></ul>`;

    const abilitiesHTML = pokemonDataAbilities
      .map((ability) => `<li>${ability}</li>`)
      .join("");
    pokemonAbilities.innerHTML = `Abilities: <ul><li>${abilitiesHTML}</li></ul>`;

    pokemonImage.src = pokemonSprite;
    pokemonImage.style.display = "block";

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
