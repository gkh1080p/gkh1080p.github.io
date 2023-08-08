(function () {
    // console.log(111)
    // 前段对话
    const li_1 = document.querySelector('.li-1')
    const li_2 = document.querySelector('.li-2')
    const li_3 = document.querySelector('.li-3')
    const li_4 = document.querySelector('.li-4')
    const li_5 = document.querySelector('.li-5')
    const li_6 = document.querySelector('.li-6')
    const li_7 = document.querySelector('.li-7')
    const li_8 = document.querySelector('.li-8')
    const li_9 = document.querySelector('.li-9')
    const li_10 = document.querySelector('.li-10')
    const li_11 = document.querySelector('.li-11')
    const li_12 = document.querySelector('.li-12')
    const li_13 = document.querySelector('.li-13')



    const list_data = [li_1, li_2, li_3, li_4, li_5, li_6, li_7, li_8, li_9, li_10, li_11, li_12,li_13]
    //通过添加一个类来改变初始位置，方案作废
    // list_data.forEach((e)=>{
    //     e.classList.add('mg-left-no')
    // })

    //文字高亮
    const text_1 = document.querySelector('.otto-1')
    const text_2 = document.querySelector('.otto-2')
    const text_3 = document.querySelector('.otto-3')
    const text_4 = document.querySelector('.otto-4')
    const text_5 = document.querySelector('.otto-5')

    const text_data = [text_1, text_2, text_3, text_4, text_5]
    window.addEventListener('scroll', (e) => {


        list_data.forEach(e => {
            if (e.getBoundingClientRect().top < 700) {
                // e.classList.remove('mg-left-no')
                // e.classList.add('mg-left')
                e.style.marginLeft = 0
                e.style.marginRight = 0
                // console.log(111)
            }
        })
        text_data.forEach(e => {
            if (e.getBoundingClientRect().top < 700) {
                e.classList.add('glowing-text')

            }
        })


        // console.log(li_1.getBoundingClientRect().top)


    })
})()



   
