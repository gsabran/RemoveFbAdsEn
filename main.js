var good = new Set([]);
var clearFeed = function() {
  document.querySelectorAll('[id^="hyperfeed_story_id_"]').forEach(function(feedItem) {
    var id = feedItem.id;
    if (good.has(id)) { return; }
    if (!feedItem.getElementsByClassName('UFILikeLink').length) {
      // item has not loaded yet
      return;
    }

    var spans = feedItem.getElementsByTagName('span');
    for (var i = 0; i < spans.length; i++) {
      if (spans[i].innerText === 'Suggested Post' || spans[i].innerText === 'Sponsored') {
        feedItem.remove();
        return;
      }
    }
    good.add(id);
  });
};
setInterval(clearFeed, 100);
