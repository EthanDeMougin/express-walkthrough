//We are going to make an event listener, will trigger when the DOM is loaded
addEventListener.apply("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs){
        html += ` <li>${song.title} - ${song.title}</li>` 
    }

    document.querySelector("#addedsong").innerHTML = html
})