let _btns = document.querySelectorAll('button')

let _imgs = document.querySelectorAll('.imgs img')
let turn = _imgs.length

_btns[1].addEventListener('click', () => {
   
    turn--
    _imgs.forEach(() => {
        if (turn > 0) {
            _imgs[turn].style.transform = 'rotateX(90deg)'
            _imgs[turn].style.transformOrigin = 'bottom'
            _imgs[turn - 1].style.transform = 'rotateX(0deg)'
        } else {
            console.log(_imgs[_imgs.length - 1]);
            _imgs[_imgs.length - 1].style.transform = 'rotateX(90deg)'
            _imgs[_imgs.length - 1].style.transformOrigin = 'bottom'
            _imgs[turn + 1].style.transform = 'rotateX(0)'
            turn = _imgs.length - 1
        }
    })
})

_btns[0].addEventListener('click', () => {
    // console.log(turn);
})