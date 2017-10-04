

window.onload = function (){
    displayTime();
};

function displayTime(){
    var now = new Date,
        day = now.getDay(),
        month = now.getMonth(),
        date = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds(),
        timer = [(hour < 10 ? '0' + hour : hour),
            (minutes < 10 ? '0' + minutes : minutes),
            (seconds < 10 ? '0' + seconds : seconds)]
                .join(":");
        days = ["Sunday", "Monday", "Tuesday",
                "Wednesday", "Thursday", "Friday",
                "Saturday"];
        months = ["Jan", "Feb", "Mar",
                "Apr", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct",
                "Nov", "Dec"];

    document.getElementById("time").innerHTML = timer;
    document.getElementById("day").innerHTML = days[day];
    document.getElementById("date").innerHTML = date + " "+ months[month] + " " + year;
    setInterval(displayTime, 1000);
}