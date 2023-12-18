function calculateDemeritPoints() {
  const speedInput = document.getElementById('carSpeed');
  const resultDiv = document.getElementById('demeritPointsResult');

  const carSpeed = parseFloat(speedInput.value);

  const speedLimit = 70;
  const demeritPointsPer5Km = 1;
  const pointsThresholdForSuspension = 12;

  if (carSpeed < speedLimit) {
    resultDiv.innerText = "Ok";
  } else {
    const demeritPoints = Math.floor((carSpeed - speedLimit) / 5);

    if (demeritPoints > pointsThresholdForSuspension) {
      resultDiv.innerText = "License suspended";
    } else {
      resultDiv.innerText = `Points: ${demeritPoints}`;
    }
  }
}
