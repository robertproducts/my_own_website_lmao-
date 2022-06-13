var now = new Date();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var dob = new Date(2006, 3, 10);
var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
var age;
age = today.getFullYear() - dob.getFullYear();
if (today < dobnow) {
  age = age-1
};

const year_span = document.getElementById("year");
year_span.innerHTML = "<strong>"+String(today.getFullYear())+"</strong>"