function makeBubble(){
    var clutter = ""
for(var i=1; i<71; i++){
    clutter+= ` <div class="bubble">${Math.floor(Math.random()*9)}</div>`

}
document.querySelector('#pbtm').innerHTML = clutter

}
var timer =60
var score =0
var hitrn=0


function increaseScore(){
    score+= 10;
    document.querySelector("#scoreval").textContent = score
}

function makeHit(){
    hitrn = Math.floor(Math.random()*9)

    document.querySelector("#madehit").textContent = hitrn
}

function runTimer(){
   var timeInterval = setInterval(()=>{
        if(timer>0){
            timer --;
            document.querySelector('#timerval').textContent = timer
        }
        else{
            clearInterval(timeInterval)
            document.querySelector("#pbtm").innerHTML=`<h1> Game over </h1>`
        }
    
    
    },1000)}

document.querySelector("#pbtm").addEventListener("click", function (dets){
   var clickedNum = Number(dets.target.textContent)
   if(clickedNum == hitrn){
    increaseScore()
    makeBubble()
    makeHit()
   }
})

// function main(){
//     makeBubble()
//     makeHit()
//     //runTimer()
// }
runTimer()
makeHit()
makeBubble()
//increaseScore()

