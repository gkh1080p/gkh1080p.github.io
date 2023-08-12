
(function () {

    const old = new Date('2023-3-8 14:17:00')

    function fn() {
        const now = new Date()
        const data_ms = now - old
        const data = data_ms / 1000
        const d = parseInt(data / 60 / 60 / 24)
        const h = parseInt(data / 60 / 60 % 24)
        const m = parseInt(data / 60 % 60)
        const s = parseInt(data % 60)
        document.querySelector('.time-data').innerHTML = `
        ${d}天${h}小时${m}分钟${s}秒
    `
    }
    fn()
    setInterval(fn, 1000)

})()
