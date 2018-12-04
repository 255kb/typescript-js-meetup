/** ENVIRONMENT */

/** BROWSER **/

// Example from W3C (https://www.w3schools.com/jsref/met_document_addeventlistener.asp) 
// This would not compile in TS (with strict mode) : document.getElementById("test").innerHTML = "Hello World";

document.addEventListener("click", () => {

  const element = document.getElementById("test");

  if (element) {
    element.innerHTML = "Hello World";
  }
});


/** NODE **/

// Needs : npm install @types/node --save-dev

import * as fs from 'fs';

const walletPath = 'C:\\Users\\RichGuy\\Appdata\\Roaming\\Bitcoin\\wallet.dat';

if (fs.existsSync(walletPath)) {
  fs.readFileSync(walletPath);
}

