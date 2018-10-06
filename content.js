// var firstHref = $("a[href^='http']").eq(0).attr("href");

// console.log(firstHref);
// TODO:
// Optionally disable netflix and FB autoplay
// Add a blacklist that can be added to and iterated through
// Add a tool for right click on element to blacklist it
// Wishlist:
// Add a tool to view and manage the blacklist
// Toggle to turn it off
$("<style>")
    .prop("type", "text/css")
    .html("\
    #ibp-main {\
        display:none !important;\
    }")
    .appendTo("head");
$('.watch-sidebar').hide();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if ( request.message === "clicked_browser_action" ) {
      // TODO: toggle hidden
      $('.watch-sidebar').hide();
      $('#secondary-inner').hide();
      $('.intercom-launcher').hide();
      $('#intercom-container').hide();
      $('#ibp-main-text').hide();
      $('#ibp-main').hide();
      $('#related.ytd-watch').hide();
    }
  }
);