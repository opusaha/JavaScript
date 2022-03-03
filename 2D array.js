

      // highest run theke nam ber korar upay......


function highestRunScorer(playersInfo) {
  let highestScorer= playersInfo[0][0];
  let highestScore = playersInfo[0][1];

  for (let x = 1; x < playersInfo.length; x++) {
    if (highestScore<playersInfo[x][1]) {
      highestScore=playersInfo[x][1];
      highestScorer=playersInfo[x][0];
    }
  }
  return highestScorer
}

let playersInfo= [["Ashraful",95],["Sakib",191],["Mushfiq",3],["Mahmudullah",45],["Mashrafee",13]];
let playersName= highestRunScorer(playersInfo);
document.write(playersName)