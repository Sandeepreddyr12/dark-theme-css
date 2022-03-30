const darkbutton = document.getElementById('dark');
const lightbutton = document.getElementById('light');
const warmbutton = document.getElementById('warm');
const bodybutton = document.body;

darkbutton.onclick = () => {
    bodybutton.classList.replace('light', 'dark');
};

lightbutton.onclick = () => {
    bodybutton.classList.replace('dark', 'light');
};

warmbutton.onclick = () => {
    if(bodybutton.classList.contains('warm')){
        bodybutton.classList.remove('warm');
        warmbutton.style.cssText =`
        --bg-warm: var(--yellow);
        `
        warmbutton.innerText = 'warm';
    }
    else{
        warmbutton.style.cssText =`
        --bg-warm: var(--grey0);
        `
        bodybutton.classList.add('warm');
        warmbutton.innerText = 'normalize';
    }
}