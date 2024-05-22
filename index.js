const myBox = document.getElementById('myBox');
const moveAmaunt = 10;
let x = 0, y = 0;


document.addEventListener('keydown', event =>{
    myBox.textContent = '🤩';
    myBox.style.backgroundColor = 'tomato';
});
document.addEventListener('keyup', event =>{
    myBox.textContent = '😎';
    myBox.style.backgroundColor = 'lightblue';
});

document.addEventListener('keydown', event =>{
    if(event.key.startsWith('Arrow')){

        event.preventDefault();

        switch(event.key){

            case 'ArrowUp': y -= moveAmaunt    ;break;
            case 'ArrowDown': y += moveAmaunt  ;break;
            case 'ArrowLeft': x -= moveAmaunt  ;break;
            case 'ArrowRight': x += moveAmaunt ;break;

        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});