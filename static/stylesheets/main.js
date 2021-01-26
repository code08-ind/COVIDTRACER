let dates = document.getElementById("dates");

function validate() {
    let date = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let hours = date.getHours();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getYear();
    let minutes = date.getMinutes();
    let dayName = days[date.getDay()];
    let time = `${day}.0${month + 1}.${year - 100} (${dayName})`
    dates.innerHTML = time;
    console.log(time);
}