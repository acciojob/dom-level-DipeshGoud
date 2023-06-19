//your JS code here. If required.
function findDOMLevel() {
  let element = document.getElementById('level');
  let level = 0;

  while (element.parentNode) {
    element = element.parentNode;
    level++;
  }

  alert("The level of the element is: " + level);
}

findDOMLevel();
