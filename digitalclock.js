const hours = document.querySelector('.h');
const minutes = document.querySelector('.m');
const seconds = document.querySelector('.s');
setInterval(function () {
    const now = new Date()
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
}, 1000)
const alarm=document.querySelector(".alarm-label");
const val=document.querySelector(".alarm").value;
console.log(val);
localStorage.setItem('alarm',`${val}`);
