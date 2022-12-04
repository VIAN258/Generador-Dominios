/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let pronoum = ['The', 'Our','They', 'He', 'She'];
let adjetivo = ['great', 'big', 'strong', 'weak', 'shame', 'furious', 'angry'];
let noun = ['angel', 'ana', 'antonia', 'maibel', 'lenis', 'nelson', 'maria', 'katy'];
let extension = ['.com', '.net', '.cl', '.co', '.ve'];

  for (let i=0; i<pronoum.length; i++){
    for (let j=0; j<adjetivo.length; j++){
      for (let k=0; k<noun.length; k++){
        for (let l=0; l<extension.length; l++){
          console.log(pronoum[i]+''+adjetivo[j]+''+noun[k]+''+extension[l]);
          
        }
      }
    }
  }
};
