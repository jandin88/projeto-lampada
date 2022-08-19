let div = document.createElement('div')
div.setAttribute('align','center')
document.body.appendChild(div)

let divt = document.createElement('div')
divt.setAttribute('align','center')
document.body.appendChild(divt)


let acender = document.createElement('input')
acender.setAttribute('type','button')
acender.setAttribute('value','acender')
acender.setAttribute('onclick','acenderLuz()')
acender.setAttribute('id','acender')
div.appendChild(acender)


let apagar = document.createElement('input')
apagar.setAttribute('type','button')
apagar.setAttribute('value','apagar')
apagar.setAttribute('onclick','apagarLuz()')
apagar.setAttribute('id','apagar')
div.appendChild(apagar)

let reset = document.createElement('input')
reset.setAttribute('type','button')
reset.setAttribute('value','reset')
reset.setAttribute('onclick','resetLuz()')
reset.setAttribute('id','reset')
div.appendChild(reset)


//img
let img = document.createElement('img')
img.setAttribute('id','img')
img.setAttribute('src','img/images(1).jpeg')
img.setAttribute('onclick','quebrar()')
document.body.style.background='black'
divt.appendChild(img)



function lampq(){
    return img.src.indexOf('images(3)')>-1
}
function acenderLuz(){
    if(!lampq()){
    img.setAttribute('src','img/images(2).jpeg')
    document.body.style.background='#FFC90C'
    divt.appendChild(img)}
}


function apagarLuz(){
    if(!lampq()){
        img.setAttribute('src','img/images(1).jpeg')
        document.body.style.background='black'
        divt.appendChild(img)
    }
}

function resetLuz(){
    img.setAttribute('src','img/images(1).jpeg')
    document.body.style.background='black'
    divt.appendChild(img)
}
//função quebrar
//queria fazer algo tipo caso essa função excutada

function quebrar(){
    img.setAttribute('src','img/images(3).jpeg')
    document.body.style.background='black'
    divt.appendChild(img)
}