"use strict";(self.webpackChunkmysooq=self.webpackChunkmysooq||[]).push([[764],{9586:function(n,e,t){t.r(e);var o,a,r=t(885),i=t(168),s=t(2791),l=t(7939),c=t(52),d=t(4569),u=t.n(d),p=t(5148),x=t(6871),m=t(569),h=t(5952),f=t(184),g=l.ZP.div(o||(o=(0,i.Z)(["\n  position: relative;\n  margin: 5em auto;\n  display: flex;\n  flex-flow: column wrap;\n  width: clamp(40%, 100%, 200px);\n  padding: 15px 20px;\n  gap: 10px;\n  background-color: #fff;\n  border-radius: 10px;\n  padding-bottom: 30px;\n  min-height: 300px;\n\n  & h2 {\n    text-align: center;\n    margin-bottom: 5px;\n  }\n\n  & span {\n    margin-bottom: 0;\n  }\n\n  & .error {\n    margin-top: -5px;\n    font-size: 12px;\n    font-weight: 600;\n    color: red;\n  }\n\n  @media only screen and (max-width: 800px) {\n    & {\n      width: 90%;\n    }\n  }\n\n  & input:focus {\n    width: clamp(350px, 60%);\n    border: 1px solid var(--blue);\n    transition: all 0.5s linear;\n  }\n"]))),b=l.ZP.button(a||(a=(0,i.Z)(["\n  display: block;\n  padding: 6px;\n  min-width: 110px;\n  color: var(--white);\n  background-color: var(--blue);\n  border-radius: 3px;\n  font-family: var(--secondFont);\n  font-size: 14px;\n  transition: all 0.2s linear;\n  margin: 10px auto;\n  width: 150px;\n\n  &:hover {\n    background-color: #01687d;\n    transition: all 0.2s linear;\n  }\n"])));e.default=function(){var n=(0,s.useState)(""),e=(0,r.Z)(n,2),t=e[0],o=e[1],a=(0,s.useState)(!1),i=(0,r.Z)(a,2),l=i[0],d=i[1],v=(0,s.useState)(""),w=(0,r.Z)(v,2),Z=w[0],j=w[1],k=(0,s.useState)(""),y=(0,r.Z)(k,2),S=y[0],C=y[1],q=(0,x.s0)();return(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault(),d(!0),u().post("".concat(p._,"User/Forget?username=").concat(t),{}).then((function(n){console.log(n.data),!1===n.data.data?(j(n.data.message),d(!1)):(C(!0),setTimeout((function(){C(!1)}),4e3),d(!1),setTimeout((function(){q("code")}),3e3))})).catch((function(n){d(!1),console.log(n)}))},children:[S?(0,f.jsx)(h.Z,{msg:"\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0643\u0648\u062f \u0627\u0644\u062a\u062d\u0642\u0642 \u0625\u0644\u064a \u0627\u0644\u0625\u064a\u0645\u064a\u0644 \u0627\u0644\u062e\u0627\u0635 \u0628\u0643"}):null,l?(0,f.jsx)(m.Z,{}):(0,f.jsxs)(g,{children:[(0,f.jsx)("h2",{children:"\u0627\u0633\u062a\u0639\u0627\u062f\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"}),(0,f.jsx)(c.CW,{children:"\u0623\u062f\u062e\u0644 \u0628\u0631\u064a\u062f\u0643 \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),(0,f.jsx)("input",{type:"email",placeholder:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a",onChange:function(n){return o(n.target.value)},value:t,required:!0}),(0,f.jsx)("span",{className:"error",children:Z}),(0,f.jsx)(b,{children:"\u0625\u0631\u0633\u0627\u0644"})]})]})}}}]);
//# sourceMappingURL=764.333270e4.chunk.js.map