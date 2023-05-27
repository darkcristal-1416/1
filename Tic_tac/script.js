
const body = document.querySelector("body")
const main = document.getElementById("main")

const mainInfo = {
    'height': window.getComputedStyle(main).height,
    'width': window.getComputedStyle(main).width,
    'left': window.getComputedStyle(main).left,
    'top':window.getComputedStyle(main).top
}

const bodyInfo ={
    'height': window.getComputedStyle(body).height,
    'width': window.getComputedStyle(body).width,
    'left': window.getComputedStyle(body).left,
    'top':window.getComputedStyle(body).top
}

function getPx(strings){
    let width = strings.length
    let result=""
    for(let i=0;i<width-2;i++){
        result += strings[i]
    }
    result=result-0
    return result
}

main.style = `left:${getPx(bodyInfo.width) /2 -getPx(mainInfo.width)/2}px; top:${getPx(bodyInfo.height) /2 - getPx(mainInfo.height)/2}px;`;


const mainContent=[
[document.getElementById("00"), document.getElementById("01"), document.getElementById("02")],
[document.getElementById("10"), document.getElementById("11"), document.getElementById("12")],
[document.getElementById("20"), document.getElementById("21"), document.getElementById("22")]
]
const massStan =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

const massResult = [
    [,,],
    [,,],
    [,,]
]
const img_start_button = ""

const img_0 = ""

const img_x = ""


let hod =0

const clickEvent = function(elementId1, elementId2){
    if(massStan[elementId1][elementId2]===0){
        if(hod===0){
            massResult[elementId1][elementId2]=0
            mainContent[elementId1][elementId2].innerHTML=`0`
            hod=1
        }else if(hod===1){
            massResult[elementId1][elementId2]=1
            mainContent[elementId1][elementId2].innerHTML=`x`
            hod=0
        }
        massStan[elementId1][elementId2]=1
    }else{
        alert("Неможна змінити це значення")
    }
}

const restart =function(){
    for(let i=0;i<3;i++){
        for(let x=0;x<3;x++){
            massResult[i][x]=null
            massStan[i][x]=0
            mainContent[i][x].innerHTML=`<img src ="${img_start_button}">`
        }
    }
    hod=0
}


const result = function(){
    if(
        (massResult[0][0]===0 && massResult[0][1]===0 && massResult[0][2]===0) ||
        (massResult[1][0]===0 && massResult[1][1]===0 && massResult[1][2]===0) ||
        (massResult[2][0]===0 && massResult[2][1]===0 && massResult[2][2]===0) ||

        (massResult[0][0]===0 && massResult[1][0]===0 && massResult[2][0]===0) ||
        (massResult[0][1]===0 && massResult[1][1]===0 && massResult[2][1]===0) ||
        (massResult[0][2]===0 && massResult[1][2]===0 && massResult[2][2]===0) ||

        (massResult[0][0]===0 && massResult[1][1]===0 && massResult[2][2]===0) ||
        (massResult[0][2]===0 && massResult[1][1]===0 && massResult[2][0]===0)
    ){
        restart()
        alert("Виграли нулики")
    }else if(
        (massResult[0][0]===1 && massResult[0][1]===1 && massResult[0][2]===1) ||
        (massResult[1][0]===1 && massResult[1][1]===1 && massResult[1][2]===1) ||
        (massResult[2][0]===1 && massResult[2][1]===1 && massResult[2][2]===1) ||

        (massResult[0][0]===1 && massResult[1][0]===1 && massResult[2][0]===1) ||
        (massResult[0][1]===1 && massResult[1][1]===1 && massResult[2][1]===1) ||
        (massResult[0][2]===1 && massResult[1][2]===1 && massResult[2][2]===1) ||

        (massResult[0][0]===1 && massResult[1][1]===1 && massResult[2][2]===1) ||
        (massResult[0][2]===1 && massResult[1][1]===1 && massResult[2][0]===1)
    ){
        restart()
        alert("Виграли хрестики")
    }
}

setInterval(function(){
    result()
},100)

restart()







