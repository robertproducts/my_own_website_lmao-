var now = new Date();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var dob = new Date(2006, 3, 10);
var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
var age;
age = today.getFullYear() - dob.getFullYear();
if (today < dobnow) {
  age = age-1
};

const age_span = document.getElementById("age");
const year_span = document.getElementById("year");
age_span.innerHTML = "Возраст: <strong>"+String(age)+" лет</strong>";
year_span.innerHTML = "<strong>"+String(today.getFullYear())+"</strong>"

function funny() {
    alert("АНЕКДОТ!\n— Слушай, не знаю, что делать. Тараканы совсем замучали. Всюду шастают — покоя нет…\n— Так ты купи мелок для тараканов!…\n— А что, помогает?\n— Конечно! Видишь — вон сидят в углу, рисуют…")
}