(this["webpackJsonpemail-sig-generator"]=this["webpackJsonpemail-sig-generator"]||[]).push([[0],{56:function(e,t,a){},76:function(e,t,a){e.exports=a(92)},92:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(11),s=a.n(r),i=(a(56),a(17)),o=a(25),c=a(12),d=a(9),u=a(13),p=a(14),m=a(15),h=(a(81),a(65)),g=a(133),f=a(137),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){var t=Object(o.a)({},a.state);t[e.target.name]=e.target.value,a.setState(t),a.props.handleFieldChange(e.target.value,e.target.name)},a.state={officePhoneNum:0,cellPhoneNum:0},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"form-step double"},n.a.createElement("div",{className:"form-step__field"},n.a.createElement(f.a,{className:"field__input",required:this.props.isRequired[0],fullWidth:!0,variant:"outlined",name:this.props.fieldName[0],label:this.props.fieldLabel[0],onChange:this.handleChange,error:0!=this.state.officePhoneNum&&!this.props.phoneNumValidity.office}),0!=this.state.officePhoneNum&&!this.props.phoneNumValidity.office&&n.a.createElement("div",{className:"errorText"},"* Must be 10 digit phone number")),n.a.createElement("div",{className:"form-step__field"},n.a.createElement(f.a,{required:this.props.isRequired[1],className:"field__input",fullWidth:!0,variant:"outlined",name:this.props.fieldName[1],label:this.props.fieldLabel[1],onChange:this.handleChange,error:0!=this.state.cellPhoneNum&&!this.props.phoneNumValidity.cell}),0!=this.state.cellPhoneNum&&!this.props.phoneNumValidity.cell&&n.a.createElement("div",{className:"errorText"},"* Must be 10 digit phone number")))}}]),t}(l.Component),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleChange=function(e){a.props.handleFieldChange(e.target.value,e.target.name)},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"form-step"},n.a.createElement("div",{className:"form-step__field"},n.a.createElement(f.a,{className:"field__input",required:!0,fullWidth:!0,variant:"outlined",name:this.props.fieldName,label:this.props.fieldLabel,onChange:this.handleChange})))}}]),t}(l.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("button",{className:"button",onClick:this.props.handleClick},"Generate Signature")}}]),t}(l.Component),E=a(5),N=a(138),C=a(136),j=Object(E.a)({root:{color:"#836EAA","&$checked":{color:"#4e2a84"}},checked:{}})((function(e){return n.a.createElement(C.a,Object.assign({color:"default"},e))})),S=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement(N.a,{control:n.a.createElement(j,{size:"medium"}),label:this.props.fieldName,onChange:this.props.handleAlumToggle,className:"margin-bot__small"})}}]),t}(l.Component),O=a(129),A=a(140),D=a(134),w=a(141),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).isYearNotZero=function(){return 0!==a.state.classYear},a.handleSelectChange=function(e){if(a.props.gradDegree)var t="gradInfo";else t="underGradInfo";a.setState({degreeType:e.target.value}),a.props.handleDegreeChange(e.target.value,t,e.target.name,a.props.arrayID)},a.handleChange=function(e){if(a.props.gradDegree)var t="gradInfo";else t="underGradInfo";a.setState({classYear:e.target.value}),a.props.handleDegreeChange(e.target.value,t,e.target.name,a.props.arrayID)},a.state={degreeType:"",classYear:0},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=n.a.createElement("div",{className:"form-step__field"},n.a.createElement(O.a,{required:!0,fullWidth:!0,variant:"outlined",className:"form-control"},n.a.createElement(A.a,{className:"label-control"},"Degree"),n.a.createElement(D.a,{className:"select-control",value:this.state.degreeType,name:"degree",onChange:this.handleSelectChange},n.a.createElement(w.a,{value:""}),n.a.createElement(w.a,{value:"DDS",label:"Doctor of Dental Surgery"},"Doctor of Dental Surgery (DDS)"),n.a.createElement(w.a,{value:"DPT",label:"Doctor of Physical Therapy"},"Doctor of Physical Therapy (DPT)"),n.a.createElement(w.a,{value:"GME",label:"Graduate Medical Education"},"Graduate Medical Education (GME)"),n.a.createElement(w.a,{value:"DHL",label:"Doctor of Humane Letters"},"Doctor of Humane Letters (DHL)"),n.a.createElement(w.a,{value:"GP",label:"Grandparent of student or alumni"},"Grandparent of student or alumni (GP)"),n.a.createElement(w.a,{value:"JD",label:"Juris Doctor"},"Juris Doctor (JD)"),n.a.createElement(w.a,{value:"LLM",label:"Master of Laws"},"Master of Laws (LLM)"),n.a.createElement(w.a,{value:"MA",label:"Master of Arts"},"Master of Arts (MA)"),n.a.createElement(w.a,{value:"MBA",label:"Master of Business Administration "},"Master of Business Administration (MBA)"),n.a.createElement(w.a,{value:"MD",label:"Doctor of Medicine"},"Doctor of Medicine (MD)"),n.a.createElement(w.a,{value:"MFA",label:"Master of Fine Arts"},"Master of Fine Arts (MFA)"),n.a.createElement(w.a,{value:"MMus",label:"Master of Music"},"Master of Music (MMus)"),n.a.createElement(w.a,{value:"MS",label:"Master of Science"},"Master of Science (MS)"),n.a.createElement(w.a,{value:"P",label:"Parent of students or alumni "},"Parent of students or alumni (P)"),n.a.createElement(w.a,{value:"PhD",label:"Doctor of Philosophy"},"Doctor of Philosophy (PhD)"))));return n.a.createElement("div",{className:"form-step double degree"},this.props.gradDegree&&e,n.a.createElement(O.a,{className:"form-step__field year"},n.a.createElement(f.a,{className:"field__input",required:!0,fullWidth:!0,variant:"outlined",label:"Class Year",name:"year",onChange:this.handleChange,error:0!=this.state.classYear&&!this.props.isYearValid}),0!=this.state.classYear&&!this.props.isYearValid&&n.a.createElement("div",{className:"errorText"},"* Year must be between 1934 and 2026")))}}]),t}(l.Component),I=a(135),P=[{title:"(f)ae",value:"(f)ae",type:"subject"},{title:"e/ey",value:"e/ey",type:"subject"},{title:"he",value:"he",type:"subject"},{title:"per",value:"per",type:"subject"},{title:"she",value:"she",type:"subject"},{title:"they",value:"they",type:"subject"},{title:"ve",value:"ve",type:"subject"},{title:"xe",value:"xe",type:"subject"},{title:"ze/zie",value:"ze/zie",type:"subject"}],k=[{title:"(f)aer",value:"(f)aer",type:"object"},{title:"em",value:"em",type:"object"},{title:"him",value:"him",type:"object"},{title:"per",value:"per",type:"object"},{title:"her",value:"her",type:"object"},{title:"them",value:"them",type:"object"},{title:"verr",value:"ve",type:"object"},{title:"xem",value:"xem",type:"object"},{title:"hir",value:"hir",type:"object"}],G=[{title:"(f)aer",value:"(f)aer",type:"possessive"},{title:"eir",value:"eir",type:"possessive"},{title:"his",value:"his",type:"possessive"},{title:"pers",value:"pers",type:"possessive"},{title:"her",value:"her",type:"possessive"},{title:"their",value:"their",type:"possessive"},{title:"vis",value:"vis",type:"possessive"},{title:"xyr",value:"xyr",type:"possessive"},{title:"hir",value:"hir",type:"possessive"}],M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleChange=function(e,t){a.props.handlePronounChange(t.value,t.type)},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"form-step triple pronouns"},n.a.createElement("div",{className:"form-step__field"},n.a.createElement(I.a,{options:P,getOptionLabel:function(e){return e.title},style:{width:"100%"},onChange:this.handleChange,name:this.props.fieldName[0],renderInput:function(t){return n.a.createElement(f.a,Object.assign({},t,{className:"field__input",label:e.props.fieldLabel[0],name:e.props.fieldName[0],variant:"outlined"}))}})),n.a.createElement("div",{className:"form-step__field"},n.a.createElement(I.a,{options:k,getOptionLabel:function(e){return e.title},style:{width:"100%"},onChange:this.handleChange,name:this.props.fieldName[1],renderInput:function(t){return n.a.createElement(f.a,Object.assign({},t,{className:"field__input",label:e.props.fieldLabel[1],name:e.props.fieldName[1],variant:"outlined"}))}})),n.a.createElement("div",{className:"form-step__field"},n.a.createElement(I.a,{options:G,getOptionLabel:function(e){return e.title},style:{width:"100%"},onChange:this.handleChange,name:this.props.fieldName[2],renderInput:function(t){return n.a.createElement(f.a,Object.assign({},t,{className:"field__input",label:e.props.fieldLabel[2],name:e.props.fieldName[2],variant:"outlined"}))}})))}}]),t}(l.Component),L=[{title:"Evanston",value:"Evanston",type:"city"},{title:"New York",value:"New York",type:"city"}],x=[{title:"IL",value:"IL",type:"state"},{title:"NY",value:"NY",type:"state"}],F=[{title:"60208 (Evanston)",value:"60208",type:"zip"},{title:"10020 (New York)",value:"10020",type:"zip"}],T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleChange=function(e,t){a.props.handleFieldChange(t.value,t.type)},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"form-step triple pronouns"},n.a.createElement("div",{className:"form-step__field"},n.a.createElement(I.a,{options:L,getOptionLabel:function(e){return e.title},style:{width:"100%"},onChange:this.handleChange,name:this.props.fieldName[0],renderInput:function(t){return n.a.createElement(f.a,Object.assign({},t,{required:!0,className:"field__input",label:e.props.fieldLabel[0],name:e.props.fieldName[0],variant:"outlined"}))}})),n.a.createElement("div",{className:"form-step__field"},n.a.createElement(I.a,{options:x,getOptionLabel:function(e){return e.title},style:{width:"100%"},onChange:this.handleChange,name:this.props.fieldName[1],renderInput:function(t){return n.a.createElement(f.a,Object.assign({},t,{required:!0,className:"field__input",label:e.props.fieldLabel[1],name:e.props.fieldName[1],variant:"outlined"}))}})),n.a.createElement("div",{className:"form-step__field"},n.a.createElement(I.a,{options:F,getOptionLabel:function(e){return e.title},style:{width:"100%"},onChange:this.handleChange,name:this.props.fieldName[2],renderInput:function(t){return n.a.createElement(f.a,Object.assign({},t,{required:!0,className:"field__input",label:e.props.fieldLabel[2],name:e.props.fieldName[2],variant:"outlined"}))}})))}}]),t}(l.Component),V=a(132),Y=a(63),B=a.n(Y),z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.underGradInfo,a=this.props.gradInfo,l=n.a.createElement("div",{className:"form-step degrees"},t.map((function(t,a){return n.a.createElement(_,{key:a,arrayID:a,handleDegreeChange:e.props.handleDegreeChange,gradDegree:!1,isYearValid:t.isYearValid})}))),r=n.a.createElement("div",{className:"form-step degrees"},a.map((function(t,a){return n.a.createElement(_,{key:a,arrayID:a,handleRemoveDegree:e.props.handleRemoveDegree,handleDegreeChange:e.props.handleDegreeChange,gradDegree:!0,isYearValid:t.isYearValid})})),n.a.createElement("div",{className:"add-degree",onClick:this.props.handleAddDegree},n.a.createElement(V.a,{onClick:this.props.handleAddDegree,"aria-label":"add a degree",label:"test"},n.a.createElement(B.a,null)),"Add Northwestern degree")),s=n.a.createElement("div",{className:"error-messages"},"You must fill all required fields (indicated with a *) before generating a signature.");return n.a.createElement("article",{className:"sig-form"},n.a.createElement("h3",null,"Name"),n.a.createElement(b,{fieldName:["firstName","lastName"],fieldLabel:["First Name","Last Name"],handleFieldChange:this.props.handleFieldChange,isRequired:[!0,!0]}),n.a.createElement("h3",null,"NU Degrees"),n.a.createElement("div",{className:"checkboxes"},n.a.createElement("div",{className:"form-step"},n.a.createElement(S,{fieldName:"Are you a Northwestern undergraduate alum?",handleAlumToggle:this.props.handleUndergradAlumToggle}),this.props.isUndergradAlum&&l),n.a.createElement("div",{className:"form-step"},n.a.createElement(S,{fieldName:"Are you a Northwestern graduate/professional degree holder, or the grandparent/parent of a Northwestern student or alum?",handleAlumToggle:this.props.handleGradAlumToggle}),this.props.isGradAlum&&r)),n.a.createElement("h3",null,"Job"),n.a.createElement(b,{fieldName:["title","department"],fieldLabel:["Job Title","Department"],handleFieldChange:this.props.handleFieldChange,autoComplete:!0,isRequired:[!0,!0]}),n.a.createElement("h3",null,"Pronouns"),n.a.createElement(M,{fieldName:["subject","object","possessive"],fieldLabel:["Subject","Object","Possessive"],handlePronounChange:this.props.handlePronounChange}),n.a.createElement("h3",null,"Address"),n.a.createElement(v,{fieldName:"address",fieldLabel:"Street Address",handleFieldChange:this.props.handleFieldChange}),n.a.createElement(T,{fieldName:["city","state","zip"],fieldLabel:["City","State","Zip"],handleFieldChange:this.props.handleFieldChange,autoComplete:!1}),n.a.createElement("h3",null,"Contact Information"),n.a.createElement(b,{fieldName:["officePhoneNum","cellPhoneNum"],fieldLabel:["Office Phone Number","Cell Phone Number"],handleFieldChange:this.props.handleFieldChange,autoComplete:!1,phoneNumValidity:this.props.phoneNumValidity,isRequired:[!1,!1]}),this.props.cantGenerateSig&&s,n.a.createElement(y,{handleClick:this.props.handleClick}))}}]),t}(l.Component);a(88);function R(e){var t=e.split("");return t.splice(3,0,"."),t.splice(7,0,"."),t.join("")}var U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={value:"",copied:!1},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){for(var e=n.a.createElement("span",{className:"pronouns"},"(",this.props.globalState.pronouns.subject,"/",this.props.globalState.pronouns.object,"/",this.props.globalState.pronouns.possessive,")",n.a.createElement("br",null)),t=n.a.createElement("span",{className:"job"},this.props.globalState.title,this.props.globalState.department.length>0&&", ",this.props.globalState.department,n.a.createElement("br",null)),a=n.a.createElement("span",{className:"office-num"},n.a.createElement("br",null),R(this.props.globalState.officePhoneNum)," office"),l=n.a.createElement("span",{className:"cell-num"},n.a.createElement("br",null),R(this.props.globalState.cellPhoneNum)," cell"),r="",s=0;s<this.props.globalState.gradInfo.length;s++)r=s<this.props.globalState.gradInfo.length-1?0===s?r+", \u2019"+this.props.globalState.gradInfo[s].year.toString().slice(-2)+" "+this.props.globalState.gradInfo[s].degree+", ":r+"\u2019"+this.props.globalState.gradInfo[s].year.toString().slice(-2)+" "+this.props.globalState.gradInfo[s].degree+", ":r+"\u2019"+this.props.globalState.gradInfo[s].year.toString().slice(-2)+" "+this.props.globalState.gradInfo[s].degree;var i="";for(s=0;s<this.props.globalState.underGradInfo.length;s++)i=i+"\u2019"+this.props.globalState.underGradInfo[s].year.toString().slice(-2);return n.a.createElement("section",{className:"sig-result"},n.a.createElement("div",{className:"sig-result__wrapper"},n.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{borderTop:"1px solid #4e2a84",borderBottom:"1px solid #4e2a84",fontFamily:'"Arial"',fontSize:"11px",color:"#716C6B"}},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{style:{fontFamily:'"Arial"',fontSize:"13px",color:"#4e2a84",paddingTop:"10px",lineHeight:"1.2"}},n.a.createElement("strong",null,this.props.globalState.firstName," ",this.props.globalState.lastName," ",this.props.globalState.isUndergradAlum&&i,this.props.globalState.isGradAlum&&r))),n.a.createElement("tr",null,n.a.createElement("td",{style:{fontFamily:'"Arial"',fontSize:"11px",color:"#716C6B",paddingTop:"10px",lineHeight:"1.29"}},this.props.globalState.pronouns.subject.length>0&&e,this.props.globalState.title.length>0&&t,n.a.createElement("span",{className:"org"},this.props.globalState.org),n.a.createElement("br",null),n.a.createElement("span",{className:"nu"},"Northwestern University"),n.a.createElement("br",null),n.a.createElement("span",{className:"special-msg"},n.a.createElement("em",null,this.props.globalState.specialMsg)))),n.a.createElement("tr",null,n.a.createElement("td",{style:{fontFamily:'"Arial"',fontSize:"11px",color:"#716C6B",paddingTop:"10px",paddingBottom:"20px",lineHeight:"1.29"}},n.a.createElement("span",{className:"address"},this.props.globalState.address,", ",this.props.globalState.city," ",this.props.globalState.state," ",this.props.globalState.zip),this.props.globalState.phoneNumValidity.office&&a,this.props.globalState.phoneNumValidity.cell&&l)))),n.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{fontFamily:'"Arial"',fontSize:"11px",color:"#716C6B"}},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{style:{fontFamily:'"Arial"',fontSize:"13px",color:"#4e2a84",paddingTop:"10px",lineHeight:"1.2"}},n.a.createElement("strong",null,n.a.createElement("a",{style:{color:"#4e2a84"},href:"https://wewill.northwestern.edu/s/1479/282-giving/index-campaign.aspx?gid=282&pgid=61&utm_medium=email&utm_source=ARD%20email&utm_campaign=ARD%20Email%20Signature"},"We Will. The Campaign for Northwestern.")," ",n.a.createElement("br",null),n.a.createElement("a",{style:{color:"#4e2a84"},href:"https://www.alumni.northwestern.edu/s/1479/02-naa/16/home.aspx?sid=1479&gid=2&pgid=20761&utm_medium=email&utm_source=ARD%20email&utm_campaign=ARD%20Email%20Signature"},"alumni.northwestern.edu")))),n.a.createElement("tr",null,n.a.createElement("td",{style:{fontFamily:'"Arial"',fontSize:"11px",color:"#716C6B",paddingTop:"10px",lineHeight:"1.29"}},n.a.createElement("a",{style:{color:"#716C6B",textDecoration:"none"},href:"https://www.facebook.com/northwesternalumni"},"Facebook")," | ",n.a.createElement("a",{style:{color:"#716C6B",textDecoration:"none"},href:"https://twitter.com/NUAlumni"},"Twitter")," | ",n.a.createElement("a",{style:{color:"#716C6B",textDecoration:"none"},href:"https://www.instagram.com/northwesternalumni/"},"Instagram")))))))}}]),t}(l.Component),q=a(64),H=a.n(q),W=Object(h.a)({palette:{primary:H.a},typography:{fontFamily:['"Akkurat Pro Regular"']}}),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).isClassYearValid=function(e){return(e=parseInt(e))>=1935&&e<=2025},a.isPhoneNumValid=function(e){return!!/^\d+$/.test(e)&&10===e.length},a.handlePronounChange=function(e,t){var l=Object(o.a)({},a.state);l.pronouns[t]=e,a.setState(l)},a.handleFieldChange=function(e,t){var l=Object(o.a)({},a.state);if(l[t]=e,"officePhoneNum"===t||"cellPhoneNum"===t){var n=a.isPhoneNumValid(e),r=t.substring(0,t.length-8);l.phoneNumValidity[r]=!!n}a.setState(l)},a.handleDegreeChange=function(e,t,l,n){var r=Object(o.a)({},a.state);if(r[t][n][l]=e,"year"===l){var s=a.isClassYearValid(e);r[t][n].isYearValid=!!s}a.setState(r)},a.handleAddDegree=function(){a.setState({gradInfo:[].concat(Object(i.a)(a.state.gradInfo),[{degree:"",year:0,isYearValid:!1}])})},a.handleRemoveDegree=function(e){},a.handleUndergradAlumToggle=function(){var e=a.state.isUndergradAlum;if(e)a.setState({underGradInfo:[]}),a.setState({isUndergradAlum:!e});else{a.setState({underGradInfo:[].concat(Object(i.a)(a.state.underGradInfo),[{year:0,isYearValid:!1}])}),a.setState({isUndergradAlum:!e})}},a.handleGradAlumToggle=function(){var e=a.state.isGradAlum;if(e)a.setState({gradInfo:[]}),a.setState({isGradAlum:!e});else{a.setState({gradInfo:[].concat(Object(i.a)(a.state.gradInfo),[{degree:"",year:0,isYearValid:!1}])}),a.setState({isGradAlum:!e})}},a.handleDateChange=function(){var e=Object(o.a)({},a.state);e.buttonClicked=!0,a.setState(e)},a.handleClick=function(){if(a.state.firstName.length>0&&a.state.lastName.length>0&&a.state.title.length>0&&a.state.department.length>0&&a.state.address.length>0&&a.state.city.length>0&&a.state.state.length>0&&a.state.zip.length>0){var e=Object(o.a)({},a.state);e.generateButtonClicked=!0,e.cantGenerateSig=!1,a.setState(e)}else a.setState({cantGenerateSig:!0})},a.state={generateButtonClicked:!1,firstName:"",lastName:"",isUndergradAlum:!1,isGradAlum:!1,underGradInfo:[],gradInfo:[],pronouns:{subject:"",object:"",possessive:""},title:"",department:"",org:"Alumni Relations and Development",specialMsg:"Commemorating 150 years of women students",address:"",city:"",state:"",zip:"",officePhoneNum:"",cellPhoneNum:"",phoneNumValidity:{office:!1,cell:!1},cantGenerateSig:!1},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=Object(o.a)({},this.state);return n.a.createElement(g.a,{theme:W},n.a.createElement("div",{className:"App container"},n.a.createElement("h2",null,"ARD Email Signature Generator"),n.a.createElement("p",null,"This tool will generate a branded email signature for your northwestern staff email. Simply fill out the form below, and click \u2018Generate Signature\u2019."),n.a.createElement("p",null,"For further instructions on how to set a signature on Outlook follow \xa0",n.a.createElement("a",{href:"https://support.office.com/en-us/article/create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2"},"this guide"),"."),n.a.createElement(z,{globalState:e,handleClick:this.handleClick,handleUndergradAlumToggle:this.handleUndergradAlumToggle,handleGradAlumToggle:this.handleGradAlumToggle,isUndergradAlum:this.state.isUndergradAlum,isGradAlum:this.state.isGradAlum,underGradInfo:this.state.underGradInfo,gradInfo:this.state.gradInfo,handleAddDegree:this.handleAddDegree,handleRemoveDegree:this.handleRemoveDegree,handleFieldChange:this.handleFieldChange,handlePronounChange:this.handlePronounChange,handleDegreeChange:this.handleDegreeChange,phoneNumValidity:this.state.phoneNumValidity,cantGenerateSig:this.state.cantGenerateSig}),this.state.generateButtonClicked&&n.a.createElement(U,{globalState:e})))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.d8c9c5a0.chunk.js.map