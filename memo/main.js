let memos = localStorage.getItem('memo') ? JSON.parse(localStorage.getItem('memo')) : [];
const memoForm = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const memoList = document.querySelector('.memoList');


btn.addEventListener('click',(e)=>{
    e.preventDefault(); // 새로고침 방지
    memos.push(input.value);
    showMemo(input.value);
    saveMemo();
    input.value=''; 
})

function showMemo(text){
    const li = document.createElement('li');
    li.textContent=text;
    const delbtn = document.createElement('button');
    delbtn.innerText="Delete";
    memoList.appendChild(li);
    li.appendChild(delbtn);

    delbtn.addEventListener('click',delMemo)
}

function delMemo(e){    
    const delLi = e.target.parentElement;
    delLi.remove();
    localStorage.removeItem(memos)

}

const saveMemo= ()=>{
     localStorage.setItem('memo', JSON.stringify(memos));

}