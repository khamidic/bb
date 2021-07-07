let menuTrigger = document.querySelector('.js-h-menu-trigger');
let header = document.querySelector('.js-header');

let isOpened = false;
menuTrigger.addEventListener('click', () => {
    if(!isOpened) {
        anime({
            targets: header,
            height: '420px',
            duration: 700,
            easing: 'cubicBezier(0.65, 0, 0.35, 1)',
            complete: function() {
                isOpened = !isOpened;
            }
        });
    }
    else {
        anime({
            targets: header,
            height: '102px',
            duration: 700,
            easing: 'cubicBezier(0.65, 0, 0.35, 1)',
            complete: function() {
                isOpened = !isOpened;
            }
        });
    }
});

let hMainNavigation = document.querySelector('.js-navigation--h-menu');
hMainNavigation.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        anime({
            targets: header,
            height: '102px',
            duration: 700,
            delay: 800,
            easing: 'cubicBezier(0.65, 0, 0.35, 1)',
            complete: function() {
                isOpened = !isOpened;
            }
        });
    })
});

let changeAppFeaturesBlockMarginTop = () => {
    let sectionHeadingApp = document.querySelector('.js-heading-app');
    let appFeaturesBlock = document.querySelector('.js-app-features');
    let appFeaturesBlockMarginTop = parseInt(getComputedStyle(appFeaturesBlock).marginTop, 10);
    let heightPercentage = 0.7;
    appFeaturesBlock.style.marginTop = sectionHeadingApp.offsetHeight * heightPercentage + appFeaturesBlockMarginTop + 'px';
};

window.onload = () => {
    try {
        changeAppFeaturesBlockMarginTop();
    } catch (e) {
        console.log(e);
    }
    let coverBlocks = Array.from(document.querySelectorAll('.js-cover-block__el'));
    let timeline = anime.timeline();
    timeline.add({
        targets: coverBlocks,
        scaleY: [1, 0],
        duration: 1200,
        delay: function(el, i) {
            return i * 500;
        },
        easing: 'cubicBezier(0.25, 1, 0.5, 1)'
    }, '+=300')
};

window.onresize = () => {
    changeAppFeaturesBlockMarginTop()
};
