function toDeci() {
  const numDecimal = document.getElementById("numBinary").value.toString();

  let sum = 0;
  for (let i = 0; i < numDecimal.length; i++) {
    sum += parseInt(numDecimal[i]) * 2 ** (numDecimal.length - 1 - i);
  }
  console.log(sum);

  document.getElementById("Result").innerText = sum;

  var audio = new Audio("converted!.wav");

  audio.pause;
  audio.currentTime = 0;
  audio.currentTime = 0;
  audio.play();
}
