'use strict';
if (document.getElementById("VoidV1")) {
  document.getElementById("VoidV1").remove();
} else {
  var block_to_insert;
  var container_block;
  block_to_insert = document.createElement("div");
  block_to_insert.id = "VoidV1";
  block_to_insert.innerHTML = '\n  <style>\n  \n  .grai {\n  background: linear-gradient(90deg, rgba(84,84,84,1) 0%, rgba(0,0,0,1) 100%);\n  position:absolute;\n  top:45%;\n  right:52%;\n  width:45px;\n  height:100px;\n  }\n  \n  .opbutton2 {\n  font-family: sans-serif;;\nfont-weight: bold;\nfont-size: 15px;\ncolor: #fff;\nbackground-image: radial-gradient(ellipse, rgba(0, 0, 0, 1) 21%, rgba(56, 56, 56, 1) 100%);\nborder: solid #ffffff 4px;\nborder-radius: 12px;\nposition:absolute;\ntop: 75px;\nleft: 6px;\nwidth:140px;\nheight:50px;\ntransition:1s;\n  }\n  \n  .opbutton2:hover {\n  background-image: linear-gradient(90deg, rgba(115, 0, 255, 1) 0%, rgba(187, 0, 255, 1) 67%);\n  color:black;\n  border: solid black 6px;\n  font-weight: 1000;\n  text-decoration: underline;\n border-radius: 79% 21% 88% 12% / 18% 74% 26% 82%;\n  }\n  \n  .bu {\n  font-family: Roboto, sans-serif;\nfont-size: 15px;\ncolor: white;\nbackground: linear-gradient(90deg, rgba(0, 0, 0, 1) 8%, rgba(89, 0, 255, 1) 100%);\nheight:30px;\nborder: solid #6600ff 2px;\nbox-shadow: rgba(0, 0, 0, 1) 0px 5px 15px;\nborder-radius: 9px 30px 30px 9px;\nflex-direction:row-reverse;\ntext-align:center;\nfont-weight:bold;\ntransition: all 0.5s\n}\n\n.bu:hover {\nheight:40px;\nfont-size: 17px;\nborder: solid white 2px\n}\n  .butext {\n  color:white;\n  font-size:15px;\n  }\n  .title {\n  font-weight:bold;\n  font-size:30px;\n  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);\n  color:white;\n  }\n  .hr {\n  background:#fff;\n  height:2px;\n  }\n.x {\nbackground:transparent;\nborder:none;\ncolor:white;\nfont-weight: bold;\nfont-size:20px;\n}\n.line {\nbackground:white;\nheight:2px;\nborder:none;\n}\n/* ok ok heres hacks */\n.hacks {\nwidth:200px;\nheight:200px;\nbackground:black;\nposition:absolute;\ntop: 80px;\nright: 16px;\nborder-radius: 30px;\ntext-align: center;\n}\n.options {\nwidth:150px;\nheight:150px;\nbackground:#545454;\nborder-radius: 30px;\ntext-align: center;\nposition:absolute;\ntop:37%;\n}\n.intervoidpic {\ntransition: transform 1s ease-in-out;\n}\n.intervoidpic:hover {\ntransform: rotate(360deg);\n}\n  </style>\n<a href="https://discord.gg/VnkpeGmv2C" style="position:absolute;top:20px;right:85px;" class="intervoidpic"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB8klEQVQ4Ea2UzUuUURSHHS3UqaFgipJqRJgWUmJBtMlFEBRBIhbhR7iQaCG4kP6Q+gMECXLRok3Qqk3MYtRFQZlIQSBMKAQFUfkV1vQ8L3OHyyDIyPzg4d573nPPve85531Tww9+NjVSzY0MZqwDuwQ8jK0LuuE9fIIUKMer0A7LsAp/oKo4YBvWuzAKFyALBXgDGfgHG3AHTsEaFGG6MpYZm1JRDgdZz8BRH9ShRXw95LN7Qg6PMZ+CeoMZ4zzch+RtQ8DrGC7DfmSMIci72UUaNJjD/SrHxpuQMqAVvQSxvrCYhQX4Gz1YZ/4SXsCvyN7C/AakDdgDxyFIx4cwDlb8HSir+BRGQLvVTSrLqGyzDgOeg4MQ9J3JW9iBEthvyraxTX6D7TMH+gRlmeQMeCZYKqMVNwVWrRM8UOnbBza+eb8CSWUZVSuc0KBDLNePYADy0AvKr2QMbGrzeg20BXlgxoBxHnzo2k33XNTIm92q2ExBrcpGXQJzEuQnZfLn4StsgbkS/UrwCp7DJgTpu+INfT2dJsGKn4SzMAHe4jT4Bfma30Dfi/AY7F2L9BqMUzSgbfIEPLUfboNV/gjb8AFq5c30KcCzypj8WOOfA/YkyYcYvVmcBp/FshhHwMAeWpU3jGVBfIW9pN+P3ZwsSkP1H2BvZtLmW38/AAAAAElFTkSuQmCC" width="30px"></img></a>\n      <div class="grai" style="position:absolute;top:45%;right:52%;"></div>\n      <img src="data:image/png;base64,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" width="50px" style="position:absolute;top:20px;left:20px;" class="intervoidpic"></img>\n  <p style="position:absolute;top:90%;left:6%;">Tip: Press J to toggle menu</p>\n  <p style="position:absolute;top:17%;right:33%;color:#5700FF;font-weight:bold;">Intervoid is made by ! ! ! J6X</p>\n  <br>\n<h1 class="title" style="text-align:center;position:absolute;top:10px;right:30%">VoidV1 2.6</h1>\n<button class="x" style="position: absolute;top: 5px;right: 5px;" id="close">X</button>\n                              <p></p>\n<p id="pagez" class="butext" style="position:absolute;top:25%;">Intervoid options are below.</p>\n                              <div class="options" id="options">\n                              <h1 style="position:absolute;top:30px;">Coming soon...</h1>\n                              </div>\n                              <div class="hacks" id="hacks">\n                              <p id="secomd">Hacks</p>\n                              <div id="hacc">\n                               <p></p>\n<button class="bu" id="skipper"><img src="https://login.i-ready.com/favicon.ico" width="20px">Skip lesson</button>\n                              <p></p>\n<button class="bu" id="mins" style="width:140px"><img src="https://login.i-ready.com/favicon.ico" width="20px">Minute Farmer</button>\n                              <p></p>\n<button class="bu" id="backgrch"><img src="https://login.i-ready.com/favicon.ico" width="20px">Change Background</button>\n\n                              <p></p>\n                              </div>\n                              </div>\n                              </div>\n                              ';
  container_block = document.getElementsByTagName("body")[0];
  container_block.appendChild(block_to_insert);
  VoidV1.setAttribute("style", "\nheight:300px;\nwidth:400px;\ncolor:white;\nfloat:left;\nfont-family:arial,\nsans,\nverdana;\nfont-size:12px;\nz-index:10000;\ndisplay: inline-block;\nline-height:unset !important;\nline-height:1 !important;s\noverflow:visible;\nposition:fixed;\nleft: 50%;\ntransform: translate(-50%);\ntop: 20%;\ntransform: translateX(-50%);\npadding:2px 5px;\nbox-shadow: 0px 0px 50px 9px rgba(106, 0, 255,1);\nbackground-image: linear-gradient(\n90deg,\nhsl(289deg 100% 23%) 0%,\nhsl(288deg 100% 22%) 6%,\nhsl(287deg 100% 22%) 11%,\nhsl(286deg 100% 22%) 17%,\nhsl(285deg 100% 22%) 22%,\nhsl(284deg 100% 22%) 28%,\nhsl(283deg 100% 21%) 33%,\nhsl(282deg 100% 21%) 39%,\nhsl(281deg 100% 21%) 44%,\nhsl(280deg 100% 21%) 50%,\nhsl(279deg 100% 21%) 56%,\nhsl(278deg 100% 21%) 61%,\nhsl(276deg 100% 20%) 67%,\nhsl(275deg 100% 20%) 72%,\nhsl(274deg 100% 20%) 78%,\nhsl(272deg 100% 20%) 83%,\nhsl(271deg 100% 20%) 89%,\nhsl(269deg 100% 20%) 94%,\nhsl(268deg 100% 19%) 100%\n);\nborder-radius:20px;\n");
}
console.log("Void Chunks Loaded...");
let _0x217e73;
let _0x3937e1 = false;
let _0x2b75ca;
let _0x11e08c;
let _0x31c714;
let _0x2c7206;
let _0x56f395;
let _0x3c8850;
function _0x53d824(canCreateDiscussions) {
  let nOpt = document.createElement("script");
  nOpt.innerHTML = "eval('" + canCreateDiscussions + "')";
  document.body.appendChild(nOpt);
  nOpt.remove();
}
let _0x126cbc = function() {
  if (window.html5Iframe === undefined || window.html5Iframe === null && window.lessonBridge === undefined || window.lessonBridge === null) {
    alert("Please (FULLY) open a lesson.");
  } else {
    try {
      _0x53d824('_0x24c87b["_0x3611e6"]["a25_0x0g16"]()');
      let logIntervalId = setInterval(() => {
        if (document.body.textContent.includes("Something's wrong. Tap the green arrow button or ask your teacher for help.")) {
          clearInterval(logIntervalId);
          alert("Farm a few minutes if you see this message.");
        }
      }, 500);
      setTimeout(() => {
        clearInterval(logIntervalId);
      }, 2000);
    } catch (conv_reverse_sort) {
      console.log(conv_reverse_sort);
      alert("ur lesson didnt get skipped for some odd reason");
    }
  }
};
fetch("https://res.cloudinary.com/cupiditys/raw/upload/v" + Math.floor(Math.random() * 999999) + "/app-26.chunk.js").then((achiev) => {
  return achiev.text();
}).then((canCreateDiscussions) => {
  _0x56f395 = canCreateDiscussions;
  fetch("https://res.cloudinary.com/cupiditys/raw/upload/v" + Math.floor(Math.random() * 999999) + "/app-22.chunk.js").then((achiev) => {
    return achiev.text();
  }).then((canCreateDiscussions) => {
    _0x3c8850 = canCreateDiscussions;
    let nOpt = document.createElement("script");
    nOpt.innerHTML = _0x56f395;
    let tooltipContentElement = document.createElement("script");
    tooltipContentElement.innerHTML = _0x3c8850;
    document.body.appendChild(nOpt);
    document.body.appendChild(tooltipContentElement);
    let logIntervalId = setInterval(() => {
      if (document.readyState === "complete") {
        nOpt.remove();
        tooltipContentElement.remove();
        clearInterval(logIntervalId);
      }
    }, 100);
  });
});
document.getElementById("skipper").onclick = _0x126cbc;
document.getElementById("backgrch").onclick = backcrown;
document.getElementById("mins").onclick = minsp;
document.getElementById("close").onclick = closemenu;
dragElement(document.getElementById("VoidV1"));
function dragElement(elem) {
  function start(event) {
    (event = event || window.event).preventDefault();
    onMouseDownX = event.clientX;
    dragStart = event.clientY;
    document.onmouseup = mouseUp;
    document.onmousemove = mouseMove;
  }
  function mouseMove(event) {
    (event = event || window.event).preventDefault();
    padding = onMouseDownX - event.clientX;
    offset = dragStart - event.clientY;
    onMouseDownX = event.clientX;
    dragStart = event.clientY;
    elem.style.top = elem.offsetTop - offset + "px";
    elem.style.left = elem.offsetLeft - padding + "px";
  }
  function mouseUp() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  var padding = 0;
  var offset = 0;
  var onMouseDownX = 0;
  var dragStart = 0;
  if (document.getElementById(elem.id + "header")) {
    document.getElementById(elem.id + "header").onmousedown = start;
  } else {
    elem.onmousedown = start;
  }
}
let discord = "https://discord.gg/VnkpeGmv2C";
window.open(discord);
function closemenu() {
  alert("The menu has been removed. Click the book mark again to enable intervoid.");
  document.getElementById("VoidV1").remove();
  document.getElementById("morre").remove();
}
function showextras() {
}
function minsp() {
  if (window.html5Iframe === undefined) {
    alert("Lesson not isnt open or detected.");
  } else {
    alert("VoidV1 mins farmer has began. (Wait for how many mins u want in the lesson.)");
    setInterval(function() {
      html5Iframe.contentWindow.document.querySelector("#yesBtn").click();
    }, 3000);
  }
}
function backcrown() {
  let estimation = prompt("Put the link to the image inside the box.");
  document.getElementsByClassName("css-1lvadjd-Typography-Username e15psnz0").textContent = estimation;
  if (estimation === undefined) {
    alert("Background is NULL.");
  }
}
function inta() {
  var boxChild = document.getElementById("VoidV1");
  if (boxChild.style.display === "none") {
    boxChild.style.display = "block";
  } else {
    boxChild.style.display = "none";
  }
}
document.addEventListener("keydown", function(event) {
  if (event.code == "KeyJ" || event.metaKey) {
    inta();
  }
});
function xinta() {
  var boxChild = document.getElementById("morre");
  if (boxChild.style.display === "none") {
    boxChild.style.display = "block";
  } else {
    boxChild.style.display = "none";
  }
}
document.addEventListener("keydown", function(event) {
  if (event.code == "KeyJ" || event.metaKey) {
    xinta();
  }
});
function ireadyop() {
}
function cookieclicka() {
  window.open();
}
function coins() {
  let attributeTemplate = prompt("How many coins do you want?", "10,000");
  document.getElementsByClassName("css-1ha21nc-Typography enj526p0")[0].innerHTML = attributeTemplate;
  alert("You have " + attributeTemplate + " coins. (ITS ONLY FOR SHOW)");
}
function namechanger() {
  let attributeTemplate = prompt("Put anything inside the box.", "2pac");
  document.getElementsByClassName("css-1lvadjd-Typography-Username e15psnz0")[0].innerHTML = attributeTemplate;
}
function fixLesson() {
  let campaignId = html5Iframe.src.split("?csid=")[1].split("&type")[0];
  fetch("https://login.i-ready.com/student/v2/web/lesson_component/" + campaignId + "/markprogress/" + campaignId, {
    headers : {
      accept : "application/json, text/plain, */*",
      "accept-language" : "en-US,en;q=0.9",
      "content-type" : "application/json;charset=UTF-8",
      "sec-fetch-dest" : "empty",
      "sec-fetch-mode" : "cors",
      "sec-fetch-site" : "same-origin",
      "sec-gpc" : "1"
    },
    referrer : "https://login.i-ready.com/student/dashboard/home",
    referrerPolicy : "strict-origin-when-cross-origin",
    body : '{"value":"a","bucket":"short_term_unsecured","datatype":"json"}',
    method : "POST",
    mode : "cors",
    credentials : "include"
  });
  alert("Your lesson should be fixed. If not, report a issue in discord.");
}
function dupe() {
  if (window.html5Iframe === undefined) {
    alert("Lesson needs to be open.");
  } else {
    alert("You can get answers from the duplication.");
    alert("Once you click ok, your lesson will be multiplied 3 times in 3 different tabs.");
    open(window.html5Iframe.src);
    open(window.html5Iframe.src);
    open(window.html5Iframe.src);
  }
}
function gamefree() {
  window.open("https://docs.google.com/document/d/1Y5rPs6YQtTpp5HAiE6HTuesLxHHf53VTa41nvqF7uHk/edit");
}
function leslink() {
  if (window.html5Iframe === undefined) {
    alert("Please open a lesson.");
  } else {
    var src = window.html5Iframe.src;
    alert("Your lesson link is: " + src);
  }
}
var more2 = document.createElement("div");
more2.innerHTML = '<div id="morre" style="width:140px; left: 1px; top: 1px; background-color: black; color: white; outline: transparent 1px; position:absolute; z-index: 99999; border-radius: 10px;font-family:arial,sans,verdana;background-image: linear-gradient( 115deg, hsl(253deg 100% 10%) 0%, hsl(259deg 94% 10%) 11%, hsl(263deg 90% 11%) 22%, hsl(267deg 87% 11%) 33%, hsl(271deg 85% 11%) 44%, hsl(276deg 86% 12%) 56%, hsl(280deg 88% 12%) 67%, hsl(285deg 91% 12%) 78%, hsl(289deg 95% 12%) 89%, hsl(292deg 100% 12%) 100% ); box-shadow: 0px 0px 30px 5px rgba(119, 0, 255,1),0px 0px 15px 17px rgba(119, 100, 255,0.5);padding: 10px;left: 20%;transform: translate(-50%);top: 50%;transform: translateX(-50%);">\n<style>\n/* hi tonic garo */\n.midl {\ntext-align: center;\n}\n\n.bu3 {\ncolor:white;\nbackground:transparent;\nborder:none;\nfont-size:12px;\nwidth: 120px;\nheight:30px;\nborder-radius:10px;\nfont-family: sans-serif;\ntransition: all 1s;\nfont-weight:bold;\n}\n\n.bu3:hover {\ncolor:#9000ff;\nfont-size:14px;\nbackground-color:white;\n}\n\n</style>\n<div id="more4" class="midl">\n<h1 class="title" style="font-family: sans-serif;">Extras</h1>\n<hr class="hr">\n\n<button class="bu3" id="coinz"><img src="https://login.i-ready.com/favicon.ico" width="15px">Change Coins</button>\n\n<button class="bu3" id="namez"><img src="https://login.i-ready.com/favicon.ico" width="15px">Change Name</button>\n\n<button class="bu3" id="fics"><img src="https://login.i-ready.com/favicon.ico" width="15px">Fix Lesson</button>\n\n<button class="bu3" id="dupe"><img src="https://login.i-ready.com/favicon.ico" width="15px">Dupe Lesson</button>\n\n<button class="bu3" id="leslink"><img src="https://login.i-ready.com/favicon.ico" width="15px">Lesson Link</button>\n\n<button class="bu3" id="gamefree"><img src="https://login.i-ready.com/favicon.ico" width="15px">Free games</button>\n\n</div>\n</div>';
document.body.appendChild(more2);
dragElement(document.getElementById("morre"));
function dragElement(elem) {
  function start(event) {
    (event = event || window.event).preventDefault();
    onMouseDownX = event.clientX;
    dragStart = event.clientY;
    document.onmouseup = mouseUp;
    document.onmousemove = mouseMove;
  }
  function mouseMove(event) {
    (event = event || window.event).preventDefault();
    padding = onMouseDownX - event.clientX;
    offset = dragStart - event.clientY;
    onMouseDownX = event.clientX;
    dragStart = event.clientY;
    elem.style.top = elem.offsetTop - offset + "px";
    elem.style.left = elem.offsetLeft - padding + "px";
  }
  function mouseUp() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  var padding = 0;
  var offset = 0;
  var onMouseDownX = 0;
  var dragStart = 0;
  if (document.getElementById(elem.id + "header")) {
    document.getElementById(elem.id + "header").onmousedown = start;
  } else {
    elem.onmousedown = start;
  }
}
document.getElementById("gamefree").onclick = gamefree;
document.getElementById("coinz").onclick = coins;
document.getElementById("namez").onclick = namechanger;
document.getElementById("fics").onclick = fixLesson;
document.getElementById("dupe").onclick = dupe;
document.getElementById("leslink").onclick = leslink;
document.getElementById("fgames").onclick = fgames;
document.getElementById("xtra").onclick = xtra;
