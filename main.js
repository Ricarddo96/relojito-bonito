

let dateDom = document.querySelector(".day__data");
let hourDom = document.querySelector(".hour__data");

let myDate = () => {

    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds()

    let dateArray = [day, month, year, hour, min, sec]
    
    let mapArray = dateArray.map((num) => {
        return num < 10 ? `0${num}` : num;
    });
    
    dateDom.innerHTML = `${mapArray[0]} / ${mapArray[1]} / ${mapArray[2]}`
    hourDom.innerHTML = `${mapArray[3]} : ${mapArray[4]} : ${mapArray[5]}`
}

myDate();

setInterval(myDate, 1000);

