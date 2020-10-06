let circle = document.querySelector('#circle');
window.addEventListener('mousemove', function(details) {
    let xValue = details.clientX;
    let yValue = details.clientY;
    setTimeout(function() {
        circle.style.top = yValue + 'px';
        circle.style.left = xValue + 'px';
    }, 50);

});
var tl = gsap.timeline();
tl
gsap.from('#wrapper', {
    duration: 3,
    scale: .7,
    ease: 'Expo.easeInOut',
    opacity: 0

})
gsap.from('#whitestrip', {
    duration: 2,
    width: 0,
    ease: 'Expo.easeInOut',

}, '-=2.5')
gsap.from('#blackcard', {
    duration: 1.5,
    x: 50,
    ease: 'export.easeInOut',
    opacity: 0
}, '-=1')
gsap.from('linelem', {
    duration: 1.5,
    x: 50,
    ease: 'export.easeInOut',
    opacity: 0
}, '-=1')