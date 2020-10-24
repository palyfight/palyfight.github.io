function completedTask(event, clicked_id) {
    if(event.target.tagName !== "A"){
        $("#"+clicked_id).addClass("clickedExerciseCard");
        $("#"+clicked_id).addClass("clickedExerciseCard").children().eq(0).css("visibility", "visible");
    }
}

function markAllCardsAsComplete() {
    var items = document.getElementsByClassName("exerciseCard");
    for (var i=0; i < items.length; i++) {
        items[i].className += " clickedExerciseCard";
        items[i].className += " clickedExerciseCard:hover";
    }

    var items = document.getElementsByClassName("checkedCardMark");
    for (var i=0; i < items.length; i++) {
        items[i].style.visibility = "visible";
    }
}

function resetAllCards() {
    var items = document.getElementsByClassName("exerciseCard");
    for (var i=0; i < items.length; i++) {
        items[i].className = " exerciseCard";
    }

    var items = document.getElementsByClassName("checkedCardMark");
    for (var i=0; i < items.length; i++) {
        items[i].style.visibility = "hidden";
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function replaceSpan(muscle, exercises, min, max) {
    var index = getRandomInt(min, max);
    var exercise = exercises[index];
    var li_element = document.getElementById(muscle);
    li_element.innerHTML = capitalizeFirstLetter(exercise);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function fetchExercice(element, category) {
  $.getJSON(`https://wger.de/api/v2/exercise/?format=json&category=${category}&language=2`, function(json) {
      var item = json.results[Math.floor(Math.random()*(json.results.length))];
      element.html('<a href="https://wger.de/en/exercise/'+item.id+'/view" target="_blank">'+item.name+'</a>');
  });
}

$(document).ready(function() {
  fetchExercice($('#shoulder'), 13)
  fetchExercice($('#chest'), 11)
  fetchExercice($('#back'), 12)
  fetchExercice($('#leg'), 9)
  fetchExercice($('#abs'), 10)
  fetchExercice($('#calves'), 14)
  fetchExercice($('#arms'), 8)
})

var shoulders = ["barbell overhead press", "dumbell shoulder press", "front plate raise", "side lateral raise"];
var biceps = ["dumbell alternating bicep curls", "hammer curls", "preacher curls", "21(7-7-7)"];
var backs = ["cable row", "reverse grip lat pulldown", "kneeling one arm row", "dumbell bent-over row"];
var triceps = ["dips", "push-ups (mix)", "push-ups (mix)", "lying triceps extensions"];
var chests = ["dumbell bench press", "dumbell bench press", "incline dumbell press", "chest fly"];
var legs = ["smith machine box squats", "dumbell lunges", "dumbell lunges", "leg curls"];

var muscles = [
    [biceps, "bicep"],
    [triceps, "tricep"]
];

var i, len;
for (i = 0, len = muscles.length; i < len; ++i) {
    replaceSpan(muscles[i][1], muscles[i][0], 0, 3);
};
