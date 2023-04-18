import dataurl from './assets/data.json?url';
export async function fetchArtists() {
    let data = await fetch(dataurl);
    return data.json();
}