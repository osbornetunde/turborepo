import { jsx } from 'react/jsx-runtime';

var n=({primary:e=!1,label:t="Click mes",size:r="small"})=>jsx("button",{className:`bg-green-800 ${r==="small"?"text-sm":"text-lg"} ${e?"text-brandblue":"text-red"} border border-red-800`,children:t});var p=({value:e})=>jsx("div",{className:"text-yellow-300",children:e});

export { n as Button, p as Text };
