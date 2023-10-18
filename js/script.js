const btn = document.querySelector('button');






// disegno un quadrato
function drawBox(){
    const box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('click', function(){
        box.classList.add('active');

    })
    return box;
}

