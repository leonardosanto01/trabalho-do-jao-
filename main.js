function tocaSom (id) {
    const elemento = document.querySelector(id);
    //console.log(elemento);
    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeteclas = document.querySelectorAll('.tecla');

listaDeteclas.forEach(tecla => {
    //template string
    const id = `#som_${tecla.classList[1]}`;
    // função anônima ultilizada para poder passar um parâmetro para função tocaSom(), para esse atributo onclick, sem executá-la imediatamente.
    tecla.onclick = () => tocaSom(id);
    tecla.onkeydown = (e) => {
        //console.log(e)
        if(e.code === 'Space' || e.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = (e) => {
        //console.log(e)
        if(e.code === 'Space' || e.code === 'Enter'){
            tecla.classList.remove('ativa');
        }
    }
})
