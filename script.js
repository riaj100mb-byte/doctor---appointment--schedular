document.getElementById("appointmentForm")
.addEventListener("submit", function(e){
e.preventDefault();
let name=document.getElementById("name").value;
let doctor=document.getElementById("doctor").value;
let date=document.getElementById("date").value;
document.getElementById("result").innerHTML =
"<h3>Appointment Booked Successfully!</h3>"+
"<p>Name: "+name+"</p>"+
"<p>Doctor: "+doctor+"</p>"+
"<p>Date: "+date+"</p>";
});