const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    // generare tot (numBox) quadratini
    
    const numBox = 100;
    const wrapper = document.getElementById('wrapper');
    
    // ciclo for per stampare i quadratini
    for(let i = 0; i < numBox; i++){
        let box = drawBox();
        console.log(box);
        wrapper.append(box);
    }
    
})

// disegno un quadrato
function drawBox(){
    const box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('click', function(){
        box.classList.add('active');

    })
    return box;
}

