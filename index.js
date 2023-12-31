let starTime = 1704045601

let updateTime = function(){

    let currDate = Date.now()
    currDate = currDate/1000
    let hours = document.getElementById("hours")
    let min = document.getElementById("minutes")
    let sec = document.getElementById("seconds")
    let hourDiff = Math.floor((currDate-starTime)/3600)
    let minDiff = Math.floor((currDate-starTime)/60)
    let secDiff = Math.floor((currDate-starTime))
    hours.innerText = hourDiff
    min.innerText = minDiff
    sec.innerText = secDiff



}

setInterval(updateTime ,1000)