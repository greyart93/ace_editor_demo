// console.log("Hello CodeSandbox");
// const request = require("request");
import request from "request";
// import { ecode } from "../components/Ace";

const options = {
  method: "POST",
  url: "https://glot.io/api/run/cpp/latest",
  headers: {
    Authorization: "793acaf8-f061-45eb-9470-ebb851cb4af0",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    files: [
      {
        name: "main.cpp",
        content: `#include <iostream>
        using namespace std;

        int main(){
          cout << "ok it works";
          return 0; 
        }
        `,
      },
    ],
  }),
};

const runCode = () => {
  return new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        const r = JSON.parse(body);
        console.log(body);
        console.log(r.stdout); // Hello glot
        console.log(r.stderr); // ''
        resolve(r.stdout);
      }
    });
  });
};

// runCode()
//   .then((output) => {
//     console.log("output: ", output);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

export default runCode;

// use async await
