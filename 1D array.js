var score=[20,30,5,70,66,15,80];
  score.sort(function fname(a,b) {
    return b-a;
  })
  document.write(score +"<br> ");
  document.write(score[0]);


  // another way 1D array


  function highestScore(score) {
    let max = score[0];
    for (let x = 1; x < score.length; x++) {
      if (max<score[x]) {
        max = score[x];
      }    
    }
    return max;
 }
 let score =[166,188,177,198,126,185,193,178,199,191,105,104,408,477,486,548,667,783,1080,6678,5739,5763,6876,4653,5769,3264,8767,6465,8768,7986,9870,4308];
 let maxScore = highestScore(score);
  document.write(maxScore);