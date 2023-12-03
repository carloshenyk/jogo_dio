const pianoTelcas = document.querySelectorAll(".piano-teclas .tecla");
let audio = new Audio("src/audios/a.wav");
let mapeaTecla = [];
const volume = document.querySelector(".volume input");
const teclaCheck = document.querySelector(".teclas-check input");

const plaTune = (tecla) => {
    audio.src = `src/audios/${tecla}.wav`;
    audio.play();
    const clickkedKey = document.querySelector(`[data-tecla="${tecla}"]`)
    clickkedKey.classList.add("active");
    setTimeout(()=>{
        clickkedKey.classList.remove("active");
    }, 150);
};

pianoTelcas.forEach((tecla) =>{
    tecla.addEventListener("click", ()=> plaTune(tecla.dataset.tecla));
    mapeaTecla.push(tecla.dataset.tecla);
});

document.addEventListener("keydown", (e) =>{
    if(mapeaTecla.includes(e.key)){
        plaTune(e.key);
    }
});
const handleVolume = (e) =>{
    audio.volume = e.target.value;
}
volume.addEventListener("input", handleVolume)

const showHideKeys = () =>{
    pianoTelcas.forEach(tecla => tecla.classList.toggle("hide"))
}

teclaCheck.addEventListener("click", showHideKeys)