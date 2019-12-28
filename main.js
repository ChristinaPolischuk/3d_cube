window.onload = function () {
  let rotateY = 0,
    rotateX = 0;


  document.onkeydown = function (e) {
    if (e.keyCode === 37) rotateY -= 4;
    else if (e.keyCode === 38) rotateX += 4;
    else if (e.keyCode === 39) rotateY += 4;
    else if (e.keyCode === 40) rotateX -= 4;

    let cube = document.querySelector('.cube');

    cube.style.transform = 'rotateY(' + rotateY + 'deg)' + 'rotateX(' + rotateX + 'deg)';
  }
}