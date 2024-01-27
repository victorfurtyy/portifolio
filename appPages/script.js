const splash = document.querySelector('.header-splash');

function splashload() {
    splash.style = 'background: ' + bg + '; height: 110vh;'
    setTimeout(() => {
        splash.style = 'background: ' + bg + ';' + 'transition: 1s; top: 0em; height: 20%; width: 100%;'
        splash.children[0].style = 'width: 30%; left: 20%'
        setTimeout(() => {
            splash.children[1].style = 'transition: 1s;opacity: 1;right: 1%;'
        }, 500);
    }, 3000);
}


const img = document.querySelector('.content img')
var imgSet = 1


img.src = `${src}${imgSet}.png`
imgSet++
setTimeout(() => {
    setInterval(() => {
        if (imgSet > limitImg) {
            imgSet = 1
        }
        img.style = 'opacity:0'
        setTimeout(() => {
            img.src = `${src}${imgSet}.png`
            imgSet++
			img.onload = () => {
                img.style = 'opacity:1'
			}
        }, 400);
    }, 5000);
}, 3000);




splashload()