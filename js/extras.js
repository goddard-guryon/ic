//added javascript for success and failure message box
var close = document.getElementsByClassName("closebtn");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
function show_fail_message() {
  var show = document.getElementById("show_fail");
  setTimeout(function(){ show.style.display = "block"; }, 600);
}
function show_success_message() {
  var show = document.getElementById("show_success");
  setTimeout(function(){ show.style.display = "block"; }, 600);
}
//added javascript to send mail
var form_id_js = "contact";
var data_js = {
    "access_token": "xozyvgswwslhjqj1h6p6skyg"
};
function js_onSuccess() {
    show_success_message();
    setTimeout(function(){window.location = window.location.href}, 5000);
}
function js_onError(error) {
    show_fail_message();
    setTimeout(function(){window.location = window.location.href}, 5000);
}
var sendButton = document.getElementById("form-submit");
function js_send() {
    sendButton.value='Sending…';
    sendButton.disabled=true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
        if(request.readyState == 4) {
            js_onError(request.response);
        }
    };
    var extra_name = document.querySelector('#' + form_id_js + " [name='extra_name']").value;
    var reply_to = document.querySelector('#' + form_id_js + " [name='reply_to']").value;
    var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
    var message = document.querySelector("#" + form_id_js + " [name='text']").value;
    data_js['extra_name'] = extra_name;
    data_js['reply_to'] = reply_to;
    data_js['subject'] = subject;
    data_js['text'] = message;
    var params = toParams(data_js);
    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params);
    return false;
}
sendButton.onclick = js_send;
function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }
    return form_data.join("&");
}
var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function (e) {
    e.preventDefault();
});
//added javascript for schedule switching
var days = ["day1", "day2"];
    var visibleDivId = null;
    function make_visible_schedule(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDays();
    }
    function hideNonVisibleDays() {
      var i, divId, day;
      for(i = 0; i < days.length; i++) {
        divId = days[i];
        day = document.getElementById(divId);
        if(visibleDivId === divId) {
          day.style.display = "block";
        } else {
          day.style.display = "none";
        }
      }
    }
//added javascript to toggle text description
var divs = ["concept", "schedule", "college", "dept", "organize", "advise", "patron"];
    var visibleDivId = null;
    function make_visible(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }
//builtin javascript below this point
$(document).ready(function() {
    // navigation click actions
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    // scroll to top action
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');
    });
    // mobile nav toggle
    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });
});
// scroll function
function scrollToID(id, speed){
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({scrollTop:targetOffset}, speed);
    if (mainNav.hasClass("open")) {
        mainNav.css("height", "1px").removeClass("in").addClass("collapse");
        mainNav.removeClass("open");
    }
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}
