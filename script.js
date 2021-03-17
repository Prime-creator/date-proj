function getDates(range) {
  let startDate = new Date();
  let endDate = new Date();
  let pastDate = startDate.getDate() - range;
  let del = 1;
  if (range == 0) {
    del = 0;
  }
  let justPastDate = endDate.getDate() - del;
  startDate.setDate(pastDate);
  endDate.setDate(justPastDate);
  let res = new Array();
  res.push(startDate);
  res.push(endDate);
  return res;
}

function dateFormatter(d) {
  var today = new Date(d);
  var dd = today.getDate();

  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  today = mm + "-" + dd + "-" + yyyy;
  console.log(today);
  today = mm + "/" + dd + "/" + yyyy;
  console.log(today);
  today = dd + "-" + mm + "-" + yyyy;
  console.log(today);
  today = dd + "/" + mm + "/" + yyyy;
  console.log(today);
}
function getLastWeek(d) {
  var today = new Date(d);
  var lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );
  return lastWeek;
}
//start of month
function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

console.log("start");

function getInfo(s) {
  let str = s;
  let res = [];

  if (str === "today") {
    res = getDates(0);
  } else if (str === "Last 7 Days") {
    res = getDates(7);
  } else if (str === "Last 14 Days") {
    res = getDates(14);
  } else if (str === "Last 30 Days") {
    res = getDates(30);
  } else if (str === "This Week") {
    console.log("this week");
    let current = new Date();
    let monday = new Date();
    let day = monday.getDay() || 7;
    if (day !== 1)
      // Only manipulate the date if it isn't Mon.
      monday.setHours(-24 * (day - 1));
    res.push(monday);
    res.push(current);
  } else if (str === "Last Week") {
    let current = new Date();
    let monday = new Date();
    let day = monday.getDay() || 7;
    if (day !== 1) monday.setHours(-24 * (day - 1));
    let start = getLastWeek(monday);
    //sunday
    // Only manipulate the date if it isn't Mon.
    let sun = new Date();
    let d = sun.getDay() || 7;
    if (d !== 7)
      // Only manipulate the date if it isn't sun.
      sun.setHours(-24 * (d - 7));
    let end = getLastWeek(sun);
    res.push(start);
    res.push(end);
  } else if (str === "This Month") {
    console.log("this month");
    let d = new Date();
    let startDay = startOfMonth(d);
    res.push(startDay);
    res.push(d);
  } else if (str === "Last Month") {
    console.log("Last Month");
    let currMonth = new Date();
    currMonth.setMonth(currMonth.getMonth() - 1);
    let start = startOfMonth(currMonth);
    let end = new Date();
    end.setDate(0);
    res.push(start);
    res.push(end);
  } else if (str === "Last 6 Months") {
    let startMonth = new Date();
    let endMonth = new Date();
    startMonth.setMonth(startMonth.getMonth() - 6);
    let start = new Date();
    start = startOfMonth(startMonth);
    console.log(start);

    let end = new Date();
    end = startOfMonth(endMonth);
    console.log(end);
    res.push(start);
    res.push(end);
  }
  return res;
}

console.log(getInfo("Last Month"));
