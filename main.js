// 头部
var css1 = `
.peppaPig {
    position: relative;
    height: 478px;
    width: 372px;
}

.pig_head {
    z-index: 5;
    border: 6px solid #EE96BD;
    background: #ffb3da;
    border-radius: 86% 50% 50% 50%/ 90% 69% 60% 35%;
    width: 296px;
    height: 200px;
    left: 39px;
    top: 50px;
    transform: rotate(39deg);
}

.ear.left {
    z-index: -1;
    width: 38px;
    height: 70px;
    border: 6px solid #EE96BD;
    border-radius: 50% 50% 50% 50%/ 35% 40% 50% 50%;
    background: #FFB3DA;
    top: 10px;
    left: 207px;
    transform: rotate(16deg);
}

.ear.right {
    z-index: -1;
    width: 38px;
    height: 66px;
    border: 6px solid #EE96BD;
    border-radius: 50% 50% 50% 50%/ 35% 40% 50% 50%;
    background: #FFB3DA;
    top: 37px;
    left: 260px;
    transform: rotate(32deg);
}

.pig_nose {
    z-index: 10;
    height: 75px;
    width: 52px;
    background: #ffb3da;
    border: 6px solid #EE96BD;
    border-radius: 91% 60% 76% 60%/ 80% 62% 70% 68%;
    top: 52px;
    left: 54px;
    transform: rotate(27deg);
}

.cover {
    z-index: 5;
    height: 170px;
    width: 180px;
    background: white;
    transform-origin: left top;
    top: 42px;
    left: 41px;
    transform: rotate(17deg);
}

.pig_nose::after {
    content: '';
    z-index: 3;
    position: absolute;
    background: #D56D9C;
    height: 15px;
    width: 14px;
    border-radius: 50%;
    top: 28px;
    left: 4px;
}

.pig_nose::before {
    content: '';
    z-index: 3;
    position: absolute;
    background: #D56D9C;
    height: 15px;
    width: 14px;
    border-radius: 50%;
    top: 26px;
    left: 24px;
}


.eye {
    background: white;
    border: 6px solid #EE95C1;
}

.eye.left {
    z-index: 10;
    border-radius: 50% 57% 47% 50%/50% 50% 50% 50%;
    height: 38px;
    width: 38px;
    top: 57px;
    left: 146px;
}

.eye.right {
    z-index: 10;
    border-radius: 50% 50% 50% 50%/55% 55% 45% 45%;
    height: 40px;
    width: 40px;
    top: 73px;
    left: 195px;
}

.eye.left::before {
    content: '';
    position: absolute;
    height: 14px;
    width: 14px;
    background: black;
    border-radius: 50%;
    top: 1px;
    left: 1px;
}

.eye.right::before {
    content: '';
    position: absolute;
    height: 14px;
    width: 14px;
    background: black;
    border-radius: 50%;
    top: 4px;
    left: 1px;
}

.nose_under {
    width: 95px;
    height: 5px;
    border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
    border: 6px solid #ef96c2;
    background: #ffb3da;
    transform: rotate(28deg);
    z-index: 9;
    box-sizing: border-box;
    border-top-color: #ffb3da;
    top: 135px;
    left: 45px;
}

.pig_jaw {
    width: 103px;
    height: 100px;
    border-radius: 0% 0% 0% 76%/ 0% 0% 0% 74%;
    border: 6px solid #ef96c2;
    background: #ffb3da;
    transform: rotate(17deg);
    z-index: 3;
    box-sizing: border-box;
    border-top-color: #ffb3da;
    border-right-color: #ffb3da;
    top: 163px;
    left: 113px;
    z-index: 7;
}

.bottom {
    z-index: 10;
    height: 5px;
    width: 10px;
    background: #EE96BD;
    transform: rotate(16deg);
    top: 270px;
    left: 192px;
}

.fixface {
    z-index: 8;
    height: 86px;
    width: 143px;
    background: #ffb3da;
    transform-origin: left top;
    top: 55px;
    left: 99px;
    transform: rotate(18deg);
}

.pig_mouse>.part1 {
    z-index: 8;
    height: 45px;
    width: 95px;
    background: black;
    border: 6px solid #D44B81;
    border-radius: 0% 0% 50% 50%/ 0% 0% 80% 80%;
    top: 188px;
    left: 147px;
    transform: rotate(20deg);
}

.pig_mouse>.part2 {
    z-index: 9;
    height: 27px;
    width: 100px;
    background: #ffb3da;
    border: 6px solid #D44B81;
    border-top-color: transparent;
    border-radius: 0% 0% 50% 50%/ 0% 0% 100% 100%;
    top: 189px;
    left: 148px;
    transform: rotate(20deg);
}

.pig_mouse>.part3 {
    z-index: 10;
    height: 40px;
    width: 120px;
    background: #ffb3da;
    border-radius: 0% 0% 50% 50%/ 0% 0% 100% 100%;
    top: 171px;
    left: 143px;
    transform: rotate(20deg);
}

.flush {
    z-index: 10;
    width: 49px;
    height: 59px;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    background: #ff96ce;
    top: 148px;
    left: 248px;
    transform: rotate(26deg);
}
`
// 身体
css2 = `
.pig_body {
    z-index: 4;
    width: 240px;
    height: 197px;
    border: 6px solid #e33b32;
    border-radius: 50% 50% 50% 50%/ 100% 100% 0% 0%;
    background: #eb5b50;
    top: 207px;
    left: 99px;
}
`
// 脚
css3 = `
.foot {
    z-index: 3;
    height: 70px;
    width: 12px;
    background: #FFBADF;
    border-radius: 100% 100% 100% 100%/ 50% 50% 21% 20%;
}

.foot.left {
    top: 394px;
    left: 176px;
}

.foot.right {
    top: 395px;
    left: 263px;
}

.shoes {
    width: 51px;
    height: 14px;
    border-radius: 58% 187% 180% 50%/ 130% 123% 113% 100%;
    background-color: #000;
    z-index: 3;
}

.shoes.right {
    top: 457px;
    left: 227px;
}

.shoes.left {
    top: 457px;
    left: 138px;
}
`
//阴影
css4 = `
.shadow {
    width: 240px;
    height: 50px;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    background-color: rgba(171, 171, 171, 0.7);
    top: 441px;
    left: 96px;
}
`
//左手
css5 = `
.left_hand>.finger_top {
    width: 10px;
    height: 26px;
    background: #FFBBE0;
    border-radius: 50% 69% 51% 58%/ 50% 55% 88% 81%;
    top: 305px;
    left: 63px;
    transform: rotate(90deg);
}

.left_hand>.finger_middle {
    width: 78px;
    height: 12px;
    border-radius: 100% 100% 100% 17%/ 100% 90% 16% 90%;
    background-color: #ffbadf;
    transform: rotate(-35deg);
    top: 309px;
    left: 50px;
}

.left_hand>.finger_bottom {
    z-index: 5;
    width: 20px;
    height: 9px;
    border-radius: 60% 59% 65% 90%/ 100% 90% 89% 90%;
    background-color: #ffbadf;
    top: 326px;
    left: 67px;
    transform: rotate(98deg);
}
`
//右手
css6 = `
.right_hand>.finger_top {
    z-index: 5;
    width: 11px;
    height: 29px;
    background: #FFBBE0;
    border-radius: 50% 69% 51% 58%/ 50% 55% 88% 81%;
    top: 282px;
    left: 359px;
    transform: rotate(85deg);
}

.right_hand>.finger_middle {
    z-index: 5;
    width: 78px;
    height: 11px;
    border-radius: 100% 100% 15% 17%/ 99% 92% 90% 90%;
    background-color: #ffbadf;
    top: 289px;
    left: 303px;
    transform: rotate(28deg);
}

.right_hand>.finger_bottom {
    width: 25px;
    height: 10px;
    border-radius: 60% 59% 65% 90%/ 100% 90% 89% 90%;
    background-color: #ffbadf;
    z-index: 99;
    top: 305px;
    left: 343px;
    transform: rotate(60deg);
}
`
//尾巴
css7 = `
.tail_1 {
    width: 20px;
    height: 9px;
    background-color: #ffbadf;
    border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
    top: 358px;
    left: 331px;
    transform: rotate(-9deg);
}

.tail_2 {
    width: 23px;
    height: 27px;
    background: #fff;
    border: 8px solid #ffbadf;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    top: 337px;
    left: 339px;
}


.tail_3 {
    width: 20px;
    height: 9px;
    background-color: #ffbadf;
    border-radius: 0% 0% 50% 50%/ 0% 0% 50% 50%;
    top: 360px;
    left: 346px;
    transform: rotate(23deg);
}

.tail_4 {
    width: 26px;
    height: 9px;
    background-color: #ffbadf;
    border-radius: 50% 50% 50% 50%/ 0% 0% 50% 50%;
    top: 356px;
    left: 359px;
    transform: rotate(-45deg);
}
`

function draw(words, current, prefix, content, css) {
    let n = 0
    if (current === 7) { //如果当前的css等于7就退出
        return 
    }

    if (current === 0) {

    } else {
        let xx = current - 1
        prefix = css[xx] + prefix
        content = css[current]
    }

    dom = document.querySelector('.tip')

    dom.innerHTML = words[current]

    let id = setInterval(() => {
        n += 1
        styleTag.innerHTML = prefix + content.substring(0, n) //每隔1ms加一个字符
        if (n >= content.length) {
            clearInterval(id) //如果 n计算的字符数大于了某个内容的长度，就清除定时器，current当前+1 重新进入下一个内容。
            current += 1
            draw(words, current, prefix, content, css)
        }
    }, 1)
}


let current = 0
let css = {
    0: css1,
    1: css2,
    2: css3,
    3: css4,
    4: css5,
    5: css6,
    6: css7
}
let words = ['首先我们来画头部| ω・´)', '接着画身体(*ﾟ∀ﾟ*)', '然后是脚(*ﾟーﾟ)', '脚下阴影也不能忘记(=ﾟωﾟ)=', '然后是左手( ﾟ∀。)', '接着是右手(つд⊂)', '最后画上尾巴，大功告成(*ﾟ∇ﾟ)']
let prefix = ""
content = css[current]
draw(words, current, prefix, content, css)