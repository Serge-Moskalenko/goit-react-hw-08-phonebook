"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[989],{9989:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(2791),i=t(9434),a=t(9439),s=t(2134),l=t(1737),o=t(6916),d=function(e){return e.filter},u=function(e){return e.contacts.items},c=function(e){return e.contacts.isLoading},x=(0,o.P1)([d,u],(function(e,n){var t=e.trim().toLowerCase();return n.filter((function(e){return e.name.trim().toLowerCase().includes(t)}))})),p=t(1413),m=t(9179),h=t(6747),f=t(9195),b=t(184),y={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"100%",sm:"400px"},bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},g=function(e){var n=e.isOpen,t=e.closeModal,r=e.nameD,a=e.numberD,s=e.id,o=(0,i.I0)(),d=(0,f.cI)({defaultValues:{name:r,number:a}}),u=d.register,c=d.handleSubmit,x=d.reset;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(m.Z,{open:n,onClose:t,children:(0,b.jsx)(h.Z,{sx:y,children:(0,b.jsxs)("form",{onSubmit:c((function(e){var n=e.name,r=e.number;o((0,l.Tk)({id:s,name:n,number:r})),x(),t()})),style:{border:"2px solid black",padding:"20px",width:"300px"},children:[(0,b.jsxs)("label",{style:{display:"flex",flexDirection:"column",fontSize:"16px"},children:["Name",(0,b.jsx)("input",(0,p.Z)((0,p.Z)({style:{width:"200px",height:"20px",marginTop:"10px"},type:"text"},u("name")),{},{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,maxLength:20}))]}),(0,b.jsxs)("label",{style:{display:"flex",flexDirection:"column",fontSize:"16px"},children:["Number",(0,b.jsx)("input",(0,p.Z)((0,p.Z)({style:{width:"200px",height:"20px",marginTop:"10px"},type:"tel"},u("number")),{},{pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0,maxLength:20}))]}),(0,b.jsx)("button",{type:"submit",style:{marginTop:"20px"},children:"edit"})]})})})})},j=function(e){var n=e.id,t=e.name,o=e.number,d=(0,i.I0)(),u=(0,i.v9)(c),x=(0,r.useState)(!1),p=(0,a.Z)(x,2),m=p[0],h=p[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("p",{children:[t,"    ",o]}),(0,b.jsx)("button",{style:{width:"70px",height:"30px",marginLeft:"10px"},type:"botton",onClick:function(){return function(e){d((0,l.GK)(e))}(n)},disabled:u,children:"Delete"}),(0,b.jsx)(s.dEB,{size:"2em",onClick:function(){return h(!0)}}),m&&(0,b.jsx)(g,{isOpen:m,closeModal:function(){return h(!1)},id:n,nameD:t,numberD:o})]})},v=t(8267),w=function(){var e=(0,i.v9)(d),n=(0,i.I0)();return(0,b.jsxs)("label",{style:{display:"flex",flexDirection:"column",width:"200px",fontSize:"20px"},children:["Find contact by name",(0,b.jsx)("input",{style:{marginTop:"10px"},type:"text",value:e,onChange:function(e){return n((0,v.M)(e.target.value))}})]})},Z=function(){var e=(0,i.I0)(),n=(0,i.v9)(u),t=(0,f.cI)(),r=t.register,a=t.handleSubmit,s=t.reset;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h1",{children:"Phonebook"}),(0,b.jsxs)("form",{onSubmit:a((function(t){var r=t.name,i=t.number;if(n.some((function(e){return e.name===r})))return alert("".concat(r," is already in contacts")),void s();e((0,l.uK)({name:r,number:i})),s()})),style:{border:"2px solid black",padding:"20px",width:"400px"},children:[(0,b.jsxs)("label",{style:{display:"flex",flexDirection:"column",fontSize:"16px"},children:["Name",(0,b.jsx)("input",(0,p.Z)((0,p.Z)({style:{width:"200px",height:"20px",marginTop:"10px"},type:"text"},r("name")),{},{placeholder:"Only text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,maxLength:20}))]}),(0,b.jsxs)("label",{style:{display:"flex",flexDirection:"column",fontSize:"16px"},children:["Number",(0,b.jsx)("input",(0,p.Z)((0,p.Z)({style:{width:"200px",height:"20px",marginTop:"10px"},type:"tel"},r("number")),{},{placeholder:"Only number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,maxLength:20}))]}),(0,b.jsx)("button",{type:"submit",style:{marginTop:"20px"},children:"Add contact"})]})]})},k=function(){var e=(0,i.I0)(),n=(0,i.v9)(x);return(0,r.useEffect)((function(){e((0,l.yF)())}),[e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h2",{children:"Contacts"}),(0,b.jsx)(Z,{}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),(0,b.jsx)(w,{}),(0,b.jsx)("ul",{style:{listStyle:"none"},children:n.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,b.jsx)("li",{style:{display:"flex",alignItems:"center"},children:(0,b.jsx)(j,{id:n,name:t,number:r})},n)}))})]})}}}]);
//# sourceMappingURL=989.928c1e62.chunk.js.map