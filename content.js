function hideAll() {
  $('.watch-sidebar').hide();
  $('#secondary-inner').hide();
  $('.intercom-launcher').hide();
  $('#intercom-container').hide();
  $('#ibp-main-text').hide();
  $('#ibp-main').hide();
  $('#related.ytd-watch').hide();
  $('#dismissable').hide();
  $('#masthead-ad').hide();
  $('.ytd-video-masthead-ad-v3-renderer-0').hide();
  if(window.location.href == "https://www.youtube.com/") {
    $('.ytd-browse').hide();
  }
  if(window.location.href.includes("https://www.youtube.com/") || window.location.href.includes("https://www.google.com/")) {
    var listboxes = $('[role="listbox"]')
    listboxes.each(function () {
      $(this).hide();
      $(this).addClass("hidden");
    });
  }
}

function unhideAll() {
  $("body").off('DOMSubtreeModified', hideAll());
  $('.watch-sidebar').show();
  $('#secondary-inner').show();
  $('.intercom-launcher').show();
  $('#intercom-container').show();
  $('#ibp-main-text').show();
  $('#ibp-main').show();
  $('#related.ytd-watch').show();
  $('#dismissable').show();
  $('#masthead-ad').show();
  $('.ytd-video-masthead-ad-v3-renderer-0').show();
  if(window.location.href == "https://www.youtube.com/") {
    $('.ytd-browse').show();
  }
  if(window.location.href.includes("https://www.youtube.com/") || window.location.href.includes("https://www.google.com/")) {
    $('[role="listbox"]').each(function () {
      $(this).show();
    });
  }
}

$("<style>")
    .prop("type", "text/css")
    .html("\
    #ibp-main {\
        display:none !important;\
    }")
    .appendTo("head");

hideAll();

$("body").on('DOMSubtreeModified', function () {
  hideAll();
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if ( request.message === "clicked_browser_action" ) {
     unhideAll();
    }
  }
);