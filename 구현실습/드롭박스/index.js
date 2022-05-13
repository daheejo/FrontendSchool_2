const selectBox = document.querySelector('.select-box');
const dropbox = document.querySelector('.dropbox');
const dropboxOpt = document.querySelectorAll('li');
const OptText = document.querySelectorAll('.dropbox-opt');

selectBox.addEventListener('click',function (){
    dropbox.classList.toggle('on')
})

selectBox.addEventListener('blur', function(){ //focus가 해제되는 것이 blur
    dropbox.classList.remove('on');
})

dropboxOpt.forEach(opt => {
    opt.addEventListener('click',function(e){
        const optText = e.currentTarget.textContent.trim();
        selectBox.textContent = optText;
        // dropbox.classList.remove('on'); 하수 방법
    })
});

