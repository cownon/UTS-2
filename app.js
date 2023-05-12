var listMenu = document.querySelectorAll('.list')
var listBox = document.querySelectorAll('.box')

var check = 0

function show(index) {
    listBox[index].classList.remove('hide');
}

function hide(index) {
    listBox[index].classList.add('hide');
}

listBox.forEach(item => {
    item.classList.add('hide')
})

listMenu.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        listBox.forEach(item => {
            item.classList.add('hide')
        })
        show(index)
        check = 1

    })
    item.addEventListener('mouseleave', function() {
        if (check === 1 && !listBox[index].classList.contains('hide')) {
            listBox[index].addEventListener('mouseleave', function() {
                check = 0
                hide(index)
            })
        }
        else 
            hide(index)
    })
})
