const events = JSON.parse("{\"updated\":\"2020-11-21\",\"events\":[{\"date\":\"22/11/2020\",\"type\":\"activity\",\"name\":\"סדנאות הכנה לצו ראשון\",\"classes\":[1,2,3,4,5,6,7,8,9,10,11,12,13]},{\"date\":\"25/11/2020\",\"type\":\"test\",\"name\":\"מתמטיקה\",\"classes\":[1,2,3,4,5,6,7,8,9,10,11,12,13]},{\"date\":\"29/11/2020\",\"type\":\"test\",\"name\":\"אלקטרוניקה\",\"classes\":[2,4,5,6,7,8,9,10,11,12,13]},{\"date\":\"01/12/2020\",\"type\":\"test\",\"name\":\"ספרות\",\"classes\":[1,2,4,5,6,7,9,10,13]},{\"date\":\"01/12/2020\",\"type\":\"test\",\"name\":\"רוסית\",\"classes\":[11]},{\"date\":\"03/12/2020\",\"type\":\"test\",\"name\":\"ספרות\",\"classes\":[8,12]},{\"date\":\"08/12/2020\",\"type\":\"test\",\"name\":\"היסטוריה\",\"classes\":[1,2,3,4,5,6,7,8,9,10,11,12,13]},{\"date\":\"10/12/2020\",\"type\":\"test\",\"name\":\"אנגלית\",\"classes\":[1,2,3,4,5,6,7,8,9,10,11,12,13]},{\"date\":\"11-19/12/2020\",\"type\":\"activity\",\"name\":\"חופשת חנוכה\",\"classes\":[1,2,3,4,5,6,7,8,9,10,11,12,13]},{\"date\":\"23/12/2020\",\"type\":\"matkonet\",\"name\":\"אנגלית\",\"classes\":[4,5]},{\"date\":\"28/12/2020\",\"type\":\"matkonet\",\"name\":\"היסטוריה\",\"classes\":[1,2,3,4,5,6,7,8,9,10,11,12,13]},{\"date\":\"10/02/2021\",\"type\":\"bagrut\",\"name\":\"אנגלית\",\"classes\":[4,5]},{\"date\":\"16/02/2021\",\"type\":\"bagrut\",\"name\":\"היסטוריה\",\"classes\":[1,2,3,4,5,6,7,8,9,10,11,12,13]}]}");

const checkboxes = [
  "physics", "chemistry", "biology", "philosophy", "arabic", "environment", "social",
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
      name += " בגרות";
    } else if (e.type == "matkonet") {
      name += " מתכונת";
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