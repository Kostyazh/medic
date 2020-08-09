document.getElementById("active").click();
content = document.getElementsByClassName("content");
keys = document.getElementsByClassName("keys");

function clickDirection(event, tabName) {
    let i, content, keys;
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    for (i = 0; i < keys.length; i++) {
      keys[i].className = keys[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    event.currentTarget.className += " active";
  }
