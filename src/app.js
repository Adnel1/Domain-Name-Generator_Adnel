/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = ["com", "net", "us", "io"];

  for (const pronounItem of pronoun) {
    for (const adjectiveItem of adjective) {
      for (const nounItem of noun) {
        for (const extensionItem of extensions) {
          console.log(
            pronounItem + adjectiveItem + nounItem + "." + extensionItem
          );
        }
      }
    }
  }
};
