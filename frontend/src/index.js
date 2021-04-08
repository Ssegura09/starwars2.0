import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function findSubstring(arr1,arr2) { 
  let shortStr;
  let longStr;
  let result;
  console.log("i\ta[i]\tb[i]\tcommon\tresult");
  for(let j=0;j<array2.length;j++){
      result="";
      s1=array1[j];
      s2=array2[j];
  if(s1.length < s2.length){
     shortStr = s1;
     longStr = s2;
   }else{
     shortStr = s2;
     longStr = s1;
   }

  for(let i = 0; i < shortStr.length; i++){
     if(longStr.indexOf(shortStr[i]) !== -1){
      result = result+shortStr[i];
 }
}
if(result.length>0)
console.log(j+"\t"+s1+"\t"+s2+"\t"+result+"\tYES");
else
console.log(j+"\t"+s1+"\t"+s2+"\t"+"\tNO");
  }
}    

function kangaroo(x1, v1, x2, v2) {
  console.log(...arguments)
  let kan1 = x1
  let kan2 = x2
  for (let i = 1; i < 20; i++) {
    kan1 += v1
    kan2 += v2
    // console.log(kan1, kan2)
    if (kan1 === kan2) {
      console.log('YES')
      return 'YES'
    }
  }
  console.log('NO')
  return 'NO'
}