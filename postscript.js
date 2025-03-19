//collect objects 
const openObj = document.querySelector('.openMenu');
const closeObj = document.querySelector('.closeMenu');
const DisplayArea = document.querySelector('.NaviMenu');

//function to open + close
openObj.addEventListener('click', function(){
    DisplayArea.classList.remove('hideme');
    console.log('Open up');
});

closeObj.addEventListener('click', function(){
    DisplayArea.classList.add('hideme');
});