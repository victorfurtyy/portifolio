// DESBLOQUEIO
document.querySelector('#unlock').onpointerup = () => {
    unlockPhone()
};

function unlockPhone() {
    document.querySelector('#unlock').style = `transform: translateY(2em);opacity: 0`
    document.querySelector('.lock p').style = `transform: translateY(2em);opacity: 0`
    
    setTimeout(() => {
        document.querySelector('.lockscreen').style = `top: -100vh`
    }, 200);

    setTimeout(() => {
        document.querySelector('.app-gallery').style = 'width: 100%;';
        document.querySelector('.caret').style = 'margin-top: 0';
        document.querySelector('.phone').style = 'margin-top: 0';
    },200)
}
// DESBLOQUEIO




// RELÓGIO
const clock = document.querySelector('#clock')

clock.innerText = Date().slice(16,21)

setInterval(() => {
    clock.innerText = Date().slice(16,21)
}, 2000)

// RELÓGIO




// OPEN APP

const appScreen = document.querySelector('.open-app')
const homeButton = document.querySelector('.home-button')

var lastgrid;

function openApp(app, gridApp) {
    appScreen.src = `./appPages/${app}.html`

    switch (gridApp) {
        case 1:
            lastgrid = `top: ${4}em;left: ${2.5}em`
            appScreen.style = lastgrid;
            break
        case 2:
            lastgrid = `top: ${4}em;left: ${7.6}em`
            appScreen.style = lastgrid;
            break
        case 3:
            lastgrid = `top: ${4}em;left: ${12.2}em`
            appScreen.style = lastgrid;
            break
        case 4:
            lastgrid = `top: ${4}em;left: ${17}em`
            appScreen.style = lastgrid;
            break
        case 5:
            lastgrid = `top: ${12}em;left: ${2.5}em`
            appScreen.style = lastgrid;
            break
        case 6:
            lastgrid = `top: ${12}em;left: ${7.6}em`
            appScreen.style = lastgrid;
            break
        case 7:
            lastgrid = `top: ${12}em;left: ${12.2}em`
            appScreen.style = lastgrid;
            break
        case 8:
            lastgrid = `top: ${12}em;left: ${17}em`
            appScreen.style = lastgrid;
            break
    }

    appScreen.onload = () => {
        homeButton.style = 'opacity:1'
    
        appScreen.style = `top: calc(${document.querySelector('.notification-bar').offsetHeight}px - 2px);left: 0;opacity: 1;width: 100%;height: calc(100% - ${document.querySelector('.notification-bar').offsetHeight}px + 2px);`
    }
}


function backHome() {
    homeButton.style = 'opacity:0'
    appScreen.style = `${lastgrid};width: 0%;height: 0vh;opacity:0;`
    setTimeout(() => {
        appScreen.style = 'width: 0%;height: 0vh;opacity:0;'
    }, 500);
    
    setTimeout(() => {
        appScreen.src = ``
        appScreen.onload = () => {}
    }, 300);

}

// OPEN APP




// HOME BUTTON

homeButton.onpointerdown = () => {
    let span = document.createElement('span')
    span.classList.add('buble')
    homeButton.append(span)
}
homeButton.onpointerup = () => {
    setTimeout(() => {
        homeButton.lastChild.style = 'animation:none;width:6em;opacity:0';
        setTimeout(() => {
            homeButton.lastChild.remove()
        }, 200);
    }, 200);
    backHome()
}

// HOME BUTTON