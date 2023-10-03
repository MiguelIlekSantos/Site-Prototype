
function num(max) {
    return Math.floor(Math.random() * max);
}


for (let i = 0; i < 20; i++) {
    const aniContent = document.getElementById("ani-content")
    aniContent.innerHTML += `<div class="part" style="--i:` + num(10) + `"></div>`
}