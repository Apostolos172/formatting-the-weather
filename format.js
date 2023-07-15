let momentLib = document.createElement("script");
momentLib.src = "https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js";
document.getElementsByTagName("head")[0].appendChild(momentLib);

let execDate = document.createElement("script");
execDate.src = "https://apostolos172.github.io/formatting-the-weather/date.js";
document.getElementsByTagName("body")[0].appendChild(execDate);