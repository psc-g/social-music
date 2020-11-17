var vids = ['sDNFeRs5CjQ', '_UatqHxhPwc', '3AH1hQP1dIA', 'WyMkMRVYqLk', 'wOcjCcJL5og', 'cgA0pucCvkc', 'oQGzQeZyy64', 'NoL8ctxXnq0']

function selectVideos() {
  leftId = Math.floor(Math.random() * vids.length);
  leftVid = vids[leftId];
  rightId = Math.floor(Math.random() * vids.length);
  while (rightId == leftId) {
    rightId = Math.floor(Math.random() * vids.length);
  }
  rightVid = vids[rightId];
  document.getElementById("leftInput").value = leftId + 1;
  document.getElementById("rightInput").value = rightId + 1;

  var leftTitle = "Left video";
  var rightTitle = "Right video";
  if (Math.random() < 0.5) {
    document.getElementById("humanInput").value = "left";
    leftTitle += " (Human composed)";
    rightTitle += " (AI composed)";
  } else {
    document.getElementById("humanInput").value = "right";
    rightTitle += " (Human composed)";
    leftTitle += " (AI composed)";
  }
  var leftDiv = document.getElementById("leftVideo");
  var rightDiv = document.getElementById("rightVideo");
  leftDiv.innerHTML = '<h2>' + leftTitle + '</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/' + leftVid + '?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  rightDiv.innerHTML = '<h2>' + rightTitle + '</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/' + rightVid + '?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}
