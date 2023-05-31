(function () {
    let open = document.querySelector('.open')
    let son_2 = document.querySelector('.son_2')
    let temp = document.querySelector('.temp')
    let al = document.querySelector('.open a')
    let secret = document.querySelector('.secret')
    son_2.addEventListener('click', function () {
        open.style.display = 'none'
        temp.style.display = 'block'
    })
    al.addEventListener('click', function () {
        let k = 5
        let time = document.querySelector('.secret .son_2')
        secret.style.display = 'block'
        open.style.display = 'none'
        let ks = setInterval(function () {
            k--
            time.innerHTML = `${k}秒后关闭`
            if (k === 0) {
                clearInterval(ks)
                secret.style.display = 'none'
                open.style.display = 'block'
            }
        }, 1000)
    })
})()