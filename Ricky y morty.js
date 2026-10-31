import promptSync from 'prompt-sync';
const prompt = promptSync();

const num = prompt("Introduce numero de personaje (max: 826): ");

if (isNaN(num) || num < 1 || num > 826) {
    console.log("Algo ha salido mal. Introduce un numero entre 1 y 826");
} else {
    const response = await fetch('https://rickandmortyapi.com/api/character/' + num);
    const character = await response.json();

    const episodios = character.episode;
    const urlEpisodio = episodios[Math.floor(Math.random() * episodios.length)];

    const response2 = await fetch(urlEpisodio);
    const episode = await response2.json();

    console.log("------------ DATOS DE PERSONAJE ------------");
    console.log("Personaje: " + character.name);
    console.log("Estatus: " + character.status);
    console.log("Episodio aleatorio: " + urlEpisodio);

    console.log("\n");

    console.log("------------ DATOS DE EPISODIO ------------");
    console.log("Nombre de episodio aleatorio: " + episode.name);
    console.log("Fecha de estreno: " + episode.air_date);
}