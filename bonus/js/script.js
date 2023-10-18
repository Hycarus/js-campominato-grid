const btn = document.querySelector('button');
const selector = document.querySelector('select');
selector.addEventListener('change', function(){
    btn.addEventListener('click', function(){
        // generare tot (numBox) quadratini
        let numBox = selector.value;
        const wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = '';
        // ciclo for per stampare i quadratini
        for(let i = 0; i < numBox; i++){
            let box = drawBox(i, numBox);
            console.log(box);
            wrapper.append(box);
        }
    })
})


// disegno un quadrato
function drawBox(indexBox, numCell){
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `calc(100% / ${Math.sqrt(numCell)})`;
    box.style.height = box.style.width;
    box.innerHTML = indexBox + 1;
    box.style.color = 'white';
    box.addEventListener('click', function(){
        box.classList.add('active');
        box.style.color = 'black';
        console.log(indexBox + 1)
    })
    return box;
}

