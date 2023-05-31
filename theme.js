let theme = localStorage.getItem('theme');

if(theme == null) {
    setTheme('blue');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for(let i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        console.log('Option click: ', mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
    if(mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    } else if(mode == 'blue') {
        document.getElementById('theme-style').href = 'blue-mode.css'
    } else if(mode == 'green') {
        document.getElementById('theme-style').href = 'green-mode.css'
    } else if(mode == 'purple') {
        document.getElementById('theme-style').href = 'purple-mode.css'
    }
    localStorage.setItem('theme', mode);
}

const divs = document.querySelectorAll('.main-container');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    divs.forEach(div => {
        const divTop = box.getBoundingClientRect().top;

        if(divTop < triggerBottom) {
            div.classList.add('show');
        } else {
            div.classList.remove('show');
        }
    })
}
