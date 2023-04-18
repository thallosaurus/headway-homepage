import dataurl from './assets/data.json?url';
export async function fetchArtists() {
    try {

        let data = await fetch(dataurl);
        let j = await data.json();
        // console.log(j);
        return j.artists;
    } catch (e) {
        alert("Konnte Datenbank nicht abrufen");
    }
}