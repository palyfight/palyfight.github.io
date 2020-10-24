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
      console.log(element)
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
