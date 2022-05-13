const selectBox = document.querySelector('.select-box');
const dropbox = document.querySelector('.dropbox');
const dropboxOpt = document.querySelectorAll('li');
const OptText = document.querySelectorAll('.dropbox-opt');

selectBox.addEventListener('click',function (){
    dropbox.classList.toggle('on');
    selectBox.classList.toggle('polygon-up');
})

selectBox.addEventListener('blur', function(){ //focus가 해제되는 것이 blur
    dropbox.classList.remove('on');
    selectBox.classList.remove('polygon-up');
})

dropboxOpt.forEach(opt => {
    opt.addEventListener('mousedown',function(e){
        const optTextTarget = e.currentTarget.textContent.trim();
        selectBox.textContent = optTextTarget;
        // dropbox.classList.remove('on'); 하수 방법
    })
});

