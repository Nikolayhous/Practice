window.onload = () => {
    window.onscroll = function(e) {
        let winY = window.scrollY;
        if (winy > 300) {
            //progress bar
            progressBar();

            scrollbarAnimation();

            winY = null;
        }
    };


const scrollBtn = document.querySelector('.isShowBtn')
Window.onscroll = () => {
    if(window.scrollY > 700) {
        scrollBtn.classList.remove('isShowBtn_hide');
    } else if(window.scrollY < 700) {
        scrollBtn.classList.add('isShowBtn_hide')
    }
};

scrollBtn.onclick = () => {
    Window.scrollTo(0, 0);
};

};

console.log('webpack starterkit');