

// -----------DETAILS WINDOW--------------------


const detailWindowOne = document.getElementById("details-one");
const detailWindowTwo = document.getElementById("details-two");
const closeBtnOne = document.getElementById("close-details");
const closeBtnTwo = document.getElementById("close-details-two");
const openBtnOne = document.getElementById("icon-img-one");
const openBtnTwo = document.getElementById("icon-img-two");

openBtnOne.addEventListener("click", () => {
    detailWindowOne.style.display = "flex";
    if (detailWindowTwo.style.display = "flex") {
        detailWindowTwo.style.display = "none";
    }
})
openBtnTwo.addEventListener("click", () => {
    detailWindowTwo.style.display = "flex";
    if (detailWindowOne.style.display = "flex") {
        detailWindowOne.style.display = "none";
    }
})
closeBtnOne.addEventListener("click", () => {
    detailWindowOne.style.display = "none";
})
closeBtnTwo.addEventListener("click", () => {
    detailWindowTwo.style.display = "none";
})




// --------------HAMBURGUER MENU----------------




const hamburguerMenu = document.getElementById("hamburguer-menu")
const nav = document.getElementById("nav")

hamburguerMenu.addEventListener("click", () => {
    visibilidadeNav();
});
window.addEventListener("resize", () => {
    visibilidadeNav();
});


function visibilidadeNav() {
    if (window.innerWidth <= 500) {
        if (nav.style.display == "none") {
            nav.style.display = "flex";
        } else {
            nav.style.display = "none";
        }
    } else {
        nav.style.display = "flex";
    }
}

visibilidadeNav();





// -------------TASK-LIST---------------





const input = document.getElementById("input")
const submitBtn = document.getElementById("submit-btn")
const itensContent = document.getElementById("itens-content")

var cont = 1;

submitBtn.addEventListener("click", () => {
    
    const value = input.value

    if(value == '' || value == null){

        input.style.backgroundColor = "#ff757e";
        input.setAttribute('placeholder','Esse campo precisa ser preenchido');

    }else if(value != '' || value != null){

        input.style.backgroundColor = "#1d1d1d";
        input.setAttribute('placeholder', '');

        itensContent.innerHTML += `
        <div class="item" id="${cont}">
            <figure class="item-btn">
                <img id="img-${cont}" onclick="riskTask(${cont})" src="assets/imgs/dry-clean.png" alt="">
            </figure>
            <p id="p-${cont}" class="overflow">${value}</p>
            <div class="delete-btn" onclick="deleteTask(${cont})">
                <figure>
                    <img src="assets/imgs/excluir (1).png" alt="">
                </figure>
                <p>Delete</p>
            </div>
        </div>
        `
        input.value = ''
        input.focus()
        cont++
    }

})

window.addEventListener("keyup", function(event){   
    if(event.keyCode === 13){
        event.preventDefault();
        submitBtn.click();
    }
})

function deleteTask(id){
    const task = document.getElementById(id)
    task.remove()
}

function riskTask(id){
    const task = document.getElementById(id)
    const p = document.getElementById(`p-${id}`)
    const imgSource = document.getElementById(`img-${id}`)

    if(p.style.textDecoration == "line-through"){
        p.style.textDecoration = "none"
        task.style.filter = "none"
        imgSource.src = "assets/imgs/dry-clean.png"
    }else{
        p.style.textDecoration = "line-through"
        task.style.filter = "brightness(0.5)"
        imgSource.src = "assets/imgs/checked (1).png"
    }

}















