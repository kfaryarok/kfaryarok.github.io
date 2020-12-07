const url = 'https://kfaryarok.github.io/data/events.json';
var events;
fetch(url)
  .then(response => response.text())
  .then(result => events = JSON.parse(result));

const checkboxes = [
  "physics", "chemistry", "biology", "philosophy", "arabic", "environment", "social", "history5",
  "computer", "health", "electronics", "music", "classical", "agriculture", "arts", "theater"
];

var classNum = -1;
const originalSubjects = [
  "מתמטיקה",
  "אנגלית",
  "היסטוריה",
  "הבעה ולשון",
  "ספרות",
  "תנ\"ך"
];
var classSubjects = [...originalSubjects];

var subjects = [...classSubjects];

function generateTable() {
  var eventsList = events.events;
  document.getElementById("tb").innerHTML = ""; // clear table
  eventsList.filter(predicate).forEach(e => {
    var name = e.name;
    if (e.type == "bagrut") {
      name += " - <b>בגרות</b>";
    } else if (e.type == "matkonet") {
      name += " - <b>מתכונת</b>";
    }
    document.getElementById("tb").innerHTML = document.getElementById("tb").innerHTML + `<tr><td>${e.date}</td><td>${name}</td></tr>`;
  });
}

function predicate(e) {
  return e.classes.includes(classNum) && (subjects.includes(e.name) || e.type == "activity");
}

function classPicked() {
  classNum = parseInt(document.getElementById("classPicker").value);
  if (classNum == 11) {
    classSubjects.push("רוסית");
  } else {
    classSubjects = [...originalSubjects];
  }
}

function modifySubjects() {
  subjects = [...classSubjects];
  for (var checkbox of checkboxes) {
    var ch = $(`#${checkbox}`);
    if (ch.is(':checked')) {
      subjects.push(ch.next().text().trim());
    }
  }
}

function click() {
  if (classNum == -1) classPicked();
  modifySubjects();
  generateTable();
  console.log("Generated table, date updated " + events.updated);
}

document.getElementsByTagName("button")[0].onclick = click;