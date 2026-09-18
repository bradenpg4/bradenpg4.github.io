//shows exercise 1 and hides exercise 2
document.getElementById("exercise-1").onclick = (e) => {
    e.preventDefault();
    document.getElementById("missing-points").classList.remove("hidden");
    document.getElementById("semester-counter").classList.add("hidden");
};

//shows exercise 2 and hides exercise 1
document.getElementById("exercise-2").onclick = (e) => {
    e.preventDefault();
    document.getElementById("missing-points").classList.add("hidden");
    document.getElementById("semester-counter").classList.remove("hidden");
};

//toggle the navigation
document.querySelector("#toggle-nav").onclick = (e) => {
    document.querySelector("#main-nav ul").classList.toggle("hide-small");

    if(e.target.innerHTML == "▼"){
        e.target.innerHTML = "▲";
    } else {
        e.target.innerHTML = "▼";
    }
}

//when you enter the number of days you will miss
//show how much of your grade you will lose
document.getElementById("txt-missed-days").onkeyup = (e) => {
    const missedDays = parseInt(e.target.value);
    const pointsMessage = document.getElementById("points-message");
    const attendanceMessage = document.getElementById("attendance-message");
    const pointsLost = missedDays / 25 * 7;

    if(isNaN(missedDays) || missedDays < 0){
        pointsMessage.innerHTML = "";
        attendanceMessage.innerHTML = "";
    } else {
        pointsMessage.innerHTML = `You will lose ${pointsLost.toFixed(1)}% for skipping ${missedDays} day(s).`;

        if(missedDays == 0){
            attendanceMessage.innerHTML = "Perfect attendance is a great goal!";
        } else if(missedDays <= 2){
            attendanceMessage.innerHTML = "A couple of missed classes is manageable, but try to keep up.";
        } else if(missedDays <= 5){
            attendanceMessage.innerHTML = "Make sure you get notes and complete any work you miss.";
        } else if(missedDays <= 8){
            attendanceMessage.innerHTML = "You are missing valuable class time.";
        } else {
            attendanceMessage.innerHTML = "That is a lot of class to miss. Try to make attendance a priority.";
        }
    }
};

//calculate how many days are left until December 4th
const today = new Date();
const lastDayOfClass = new Date(today.getFullYear(), 11, 4);
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const daysLeft = Math.ceil((lastDayOfClass - today) / millisecondsPerDay);
const daysLeftMessage = document.getElementById("days-left");
const semesterMessage = document.getElementById("semester-message");

if(daysLeft < 0){
    daysLeftMessage.innerHTML = "The semester has ended.";
    semesterMessage.innerHTML = "Great job making it through the semester!";
} else {
    daysLeftMessage.innerHTML = `You have ${daysLeft} days left in the semester.`;

    if(daysLeft > 90){
        semesterMessage.innerHTML = "Not time to start counting down yet.";
    } else if(daysLeft > 45){
        semesterMessage.innerHTML = "You are making progress. Keep up the good work!";
    } else if(daysLeft > 14){
        semesterMessage.innerHTML = "The finish line is getting closer!";
    } else if(daysLeft > 0){
        semesterMessage.innerHTML = "Final stretch! You have got this!";
    } else {
        semesterMessage.innerHTML = "It is the last day of class. Finish strong!";
    }
}