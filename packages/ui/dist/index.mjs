import { jsx } from 'react/jsx-runtime';

var b=({primary:e=!1,label:t="Click mes",size:r="small",backgroundColor:o="bg-green-800"})=>jsx("button",{className:`${o} ${r==="small"?"text-sm":"text-lg"} ${e?"text-brandblue":"text-red"} border border-red-800`,children:t});var g=({value:e})=>jsx("div",{className:"text-yellow-300",children:e});

export { b as Button, g as Text };
