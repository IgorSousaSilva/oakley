const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");
const slides = document.querySelectorAll(".slide")



let slideAtual = 0

setaAvancar.addEventListener('click', ()=> {
    if(slideAtual === slides.length -1){
        return
    }

     
   esconderSlideAberto()
   mostrarProximoSlide()
   mostrarOuEsconderSetas()
   
    
})

setaVoltar.addEventListener('click', ()=> {
    if(slideAtual === 0){
        return
    }

     
   esconderSlideAberto()
   mostrarSlideAnterior()
   mostrarOuEsconderSetas()
   
    
})


function esconderSlideAberto() {


    const esconderSlide = document.querySelector(".mostrar")
   esconderSlide.classList.remove('mostrar')

}

function mostrarProximoSlide() {
     slideAtual++
     slides[slideAtual].classList.add('mostrar')
}

function mostrarSlideAnterior() {
    slideAtual--
    slides[slideAtual].classList.add('mostrar')
}

function mostrarOuEsconderSetas() {
    const naoEhMeuPrimeiroSlide = slideAtual !== 0

    if(naoEhMeuPrimeiroSlide) {
        setaVoltar.classList.remove('opacidade')
    }else{
        setaVoltar.classList.add('opacidade')
    }

    const chegouNoUltimoSlide = slideAtual === slides.length -1 

    if(chegouNoUltimoSlide){
        setaAvancar.classList.add('opacidade')
    }else{
        setaAvancar.classList.remove('opacidade')
    }
}


