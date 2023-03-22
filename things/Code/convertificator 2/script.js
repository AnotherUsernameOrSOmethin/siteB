function toBin() {
  const numBinary = document.getElementById("numBinary").value.toString();

  let sum = 0;
  for (let i = 0; i < numBinary.length; i++) {
    sum += parseInt(numBinary[i]) / Math.sqrt(2)(numBinary.length - 1 - i);
  }
  console.log(sum);

  document.getElementById("Result").innerText = sum;

  var audio = new Audio("converted!.wav");

  audio.pause;
  audio.currentTime = 0;
  audio.currentTime = 0;
  audio.play();
}
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa//
