(this["webpackJsonpemail-sig-generator"]=this["webpackJsonpemail-sig-generator"]||[]).push([[0],{63:function(e,a,t){},82:function(e,a,t){e.exports=t(98)},98:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(10),s=t.n(n),o=(t(63),t(40)),i=t(28),c=t(11),d=t(12),u=t(14),p=t(13),h=(t(87),t(71)),m=t(142),g=t(146),f=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).handleChange=function(e){var a=Object(i.a)({},l.state);a[e.target.name]=e.target.value,l.setState(a),l.props.handleFieldChange(e.target.value,e.target.name)},l.state={officePhoneNum:0,cellPhoneNum:0},l}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-step double"},r.a.createElement("div",{className:"form-step__field"},r.a.createElement(g.a,{className:"field__input",required:this.props.isRequired[0],value:this.props.fieldDefaultVals[0],fullWidth:!0,variant:"outlined",name:this.props.fieldName[0],label:this.props.fieldLabel[0],onChange:this.handleChange,error:0!=this.state.officePhoneNum&&!this.props.phoneNumValidity.office}),0!=this.state.officePhoneNum&&!this.props.phoneNumValidity.office&&r.a.createElement("div",{className:"errorText"},"* Must be 10 digit phone number (no hyphens, or special characters)")),r.a.createElement("div",{className:"form-step__field"},r.a.createElement(g.a,{required:this.props.isRequired[1],className:"field__input",value:this.props.fieldDefaultVals[1],fullWidth:!0,variant:"outlined",name:this.props.fieldName[1],label:this.props.fieldLabel[1],onChange:this.handleChange,error:0!=this.state.cellPhoneNum&&!this.props.phoneNumValidity.cell}),0!=this.state.cellPhoneNum&&!this.props.phoneNumValidity.cell&&r.a.createElement("div",{className:"errorText"},"* Must be 10 digit phone number (no hyphens, or special characters)")))}}]),t}(l.Component),v=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(c.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(e=a.call.apply(a,[this].concat(r))).handleChange=function(a){e.props.handleFieldChange(a.target.value,a.target.name)},e}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-step".concat(this.props.halfWidth?" double":"")},r.a.createElement("div",{className:"form-step__field"},r.a.createElement(g.a,{className:"field__input",required:this.props.isRequired,fullWidth:!0,variant:"outlined",value:this.props.fieldDefaultVals,name:this.props.fieldName,label:this.props.fieldLabel,onChange:this.handleChange})))}}]),t}(l.Component),b=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"button",onClick:this.props.handleClick},"Generate Signature")}}]),t}(l.Component),E=t(4),S=t(147),y=t(145),N=Object(E.a)({root:{color:"#836EAA","&$checked":{color:"#4e2a84"}},checked:{}})((function(e){return r.a.createElement(y.a,Object.assign({color:"default"},e))})),C=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,{control:r.a.createElement(N,{checked:this.props.isChecked,size:"medium"}),label:this.props.fieldName,onChange:this.props.handleAlumToggle,className:"margin-bot__small"})}}]),t}(l.Component),D=t(137),A=t(149),I=t(143),j=t(150),k=t(140),P=t(141),O=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).typeReturn=function(){return l.props.gradDegree?"gradInfo":"underGradInfo"},l.isYearNotZero=function(){return 0!==l.state.classYear},l.handleSelectChange=function(e){if(l.props.gradDegree)var a="gradInfo";else a="underGradInfo";l.setState({degreeType:e.target.value}),l.props.handleDegreeChange(e.target.value,a,e.target.name,l.props.arrayID)},l.handleChange=function(e){if(l.props.gradDegree)var a="gradInfo";else a="underGradInfo";l.setState({classYear:e.target.value}),l.props.handleDegreeChange(e.target.value,a,e.target.name,l.props.arrayID)},l.state={degreeType:"",classYear:0},l}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a=r.a.createElement("div",{className:"form-step__field"},r.a.createElement(D.a,{required:!0,fullWidth:!0,variant:"outlined",className:"form-control"},r.a.createElement(A.a,{className:"label-control"},"Degree"),r.a.createElement(I.a,{className:"select-control",value:this.props.fieldDefaultVals[0],name:"degree",onChange:this.handleSelectChange},r.a.createElement(j.a,{value:""}),r.a.createElement(j.a,{value:"DDS",label:"Doctor of Dental Surgery"},"Doctor of Dental Surgery (DDS)"),r.a.createElement(j.a,{value:"DPT",label:"Doctor of Physical Therapy"},"Doctor of Physical Therapy (DPT)"),r.a.createElement(j.a,{value:"GME",label:"Graduate Medical Education"},"Graduate Medical Education (GME)"),r.a.createElement(j.a,{value:"DHL",label:"Doctor of Humane Letters"},"Doctor of Humane Letters (DHL)"),r.a.createElement(j.a,{value:"JD",label:"Juris Doctor"},"Juris Doctor (JD)"),r.a.createElement(j.a,{value:"LLM",label:"Master of Laws"},"Master of Laws (LLM)"),r.a.createElement(j.a,{value:"MA",label:"Master of Arts"},"Master of Arts (MA)"),r.a.createElement(j.a,{value:"MBA",label:"Master of Business Administration "},"Master of Business Administration (MBA)"),r.a.createElement(j.a,{value:"MD",label:"Doctor of Medicine"},"Doctor of Medicine (MD)"),r.a.createElement(j.a,{value:"MFA",label:"Master of Fine Arts"},"Master of Fine Arts (MFA)"),r.a.createElement(j.a,{value:"MMus",label:"Master of Music"},"Master of Music (MMus)"),r.a.createElement(j.a,{value:"MS",label:"Master of Science"},"Master of Science (MS)"),r.a.createElement(j.a,{value:"PhD",label:"Doctor of Philosophy"},"Doctor of Philosophy (PhD)"),r.a.createElement(j.a,{value:"CERT",label:"Doctor of Philosophy"},"Certificate (CERT)"))));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-step double degree"},this.props.gradDegree&&a,r.a.createElement(D.a,{className:"form-step__field year"},r.a.createElement(g.a,{className:"field__input",required:!0,fullWidth:!0,variant:"outlined",value:this.props.fieldDefaultVals[1],label:"Class Year",name:"year",onChange:this.handleChange,error:0!==this.state.classYear&&!this.props.isYearValid}),0!=this.state.classYear&&!this.props.isYearValid&&r.a.createElement("div",{className:"errorText"},"* Year must be between 1934 and 2026")),r.a.createElement(k.a,{onClick:function(a){return e.props.handleRemoveDegree(e.props.arrayID,e.typeReturn())},"aria-label":"remove degree info",label:"test"},r.a.createElement(P.a,null))),r.a.createElement("div",{className:"errorText below"},this.props.errMsg))}}]),t}(l.Component),w=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).isYearNotZero=function(){return 0!==l.state.classYear},l.handleSelectChange=function(e){l.setState({degreeType:e.target.value}),l.props.handleDegreeChange(e.target.value,"parentInfo",e.target.name,l.props.arrayID)},l.handleChange=function(e){l.setState({classYear:e.target.value}),l.props.handleDegreeChange(e.target.value,"parentInfo",e.target.name,l.props.arrayID)},l.handleDeleteClick=function(e){console.log(e.value)},l.state={degreeType:"",classYear:0},l}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a=r.a.createElement("div",{className:"form-step__field"},r.a.createElement(D.a,{required:!0,fullWidth:!0,variant:"outlined",className:"form-control"},r.a.createElement(A.a,{className:"label-control"},"Select parent, or grandparent"),r.a.createElement(I.a,{className:"select-control",value:this.props.fieldDefaultVals[0],name:"degree",onChange:this.handleSelectChange},r.a.createElement(j.a,{value:""}),r.a.createElement(j.a,{value:"P",label:"Parent of students or alumni (P)"},"Parent of students or alumni (P)"),r.a.createElement(j.a,{value:"GP",label:"Grandparent of students or alumni (GP)"},"Grandparent of students or alumni (GP)"))));return r.a.createElement("div",{className:"form-step double degree"},a,r.a.createElement(D.a,{className:"form-step__field year"},r.a.createElement(g.a,{className:"field__input",required:!0,fullWidth:!0,variant:"outlined",value:this.props.fieldDefaultVals[1],label:"Class Year",name:"year",onChange:this.handleChange,error:0!=this.state.classYear&&!this.props.isYearValid}),0!=this.state.classYear&&!this.props.isYearValid&&r.a.createElement("div",{className:"errorText"},"* Year must be between 1934 and 2026")),r.a.createElement(k.a,{onClick:function(a){return e.props.handleRemoveDegree(e.props.arrayID,"parentInfo")},"aria-label":"remove degree info",label:"test"},r.a.createElement(P.a,null)))}}]),t}(l.Component),M=t(144),V=[{title:"",value:"",type:"subject"},{title:"(f)ae",value:"(f)ae",type:"subject"},{title:"e/ey",value:"e/ey",type:"subject"},{title:"he",value:"he",type:"subject"},{title:"per",value:"per",type:"subject"},{title:"she",value:"she",type:"subject"},{title:"they",value:"they",type:"subject"},{title:"ve",value:"ve",type:"subject"},{title:"xe",value:"xe",type:"subject"},{title:"ze/zie",value:"ze/zie",type:"subject"}],G=[{title:"",value:"",type:"object"},{title:"(f)aer",value:"(f)aer",type:"object"},{title:"em",value:"em",type:"object"},{title:"him",value:"him",type:"object"},{title:"per",value:"per",type:"object"},{title:"her",value:"her",type:"object"},{title:"them",value:"them",type:"object"},{title:"verr",value:"ve",type:"object"},{title:"xem",value:"xem",type:"object"},{title:"hir",value:"hir",type:"object"}],Y=[{title:"",value:"",type:"possessive"},{title:"(f)aers",value:"(f)aers",type:"possessive"},{title:"eirs",value:"eirs",type:"possessive"},{title:"his",value:"his",type:"possessive"},{title:"pers",value:"pers",type:"possessive"},{title:"hers",value:"hers",type:"possessive"},{title:"theirs",value:"theirs",type:"possessive"},{title:"vis",value:"vis",type:"possessive"},{title:"xyrs",value:"xyrs",type:"possessive"},{title:"hirs",value:"hirs",type:"possessive"}],F=(l.Component,t(35)),T=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).handleSelectChange=function(e){l.setState({curAddress:e.target.value}),l.props.handleFieldChange(e.target.value,e.target.name)},l.state={curAddress:""},l}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-step"},r.a.createElement("div",{className:"form-step__field"},r.a.createElement(D.a,{required:!0,fullWidth:!0,variant:"outlined",className:"form-control"},r.a.createElement(A.a,{className:"label-control"},"Work Address"),r.a.createElement(I.a,Object(F.a)({className:"select-control",value:this.state.curAddress,name:"address",onChange:this.handleSelectChange},"value",this.props.fieldDefaultVals),r.a.createElement(j.a,{value:""}),r.a.createElement(j.a,{value:"1201 Davis Street, Evanston, Illinois 60208",label:"1201 Davis Street, Evanston, Illinois 60208"},"1201 Davis Street, Evanston, Illinois 60208"),r.a.createElement(j.a,{value:"1800 Sheridan Road, Evanston, Illinois 60208",label:"1800 Sheridan Road, Evanston, Illinois 60208"},"1800 Sheridan Road, Evanston, Illinois 60208"),r.a.createElement(j.a,{value:"10 Rockefeller Plaza, Suite 800, New York, New York 10020",label:"10 Rockefeller Plaza, Suite 800, New York, New York 10020"},"10 Rockefeller Plaza, Suite 800, New York, New York 10020"),r.a.createElement(j.a,{value:"44 Montgomery Street, Suite 1800, San Francisco, California 94104",label:"44 Montgomery Street, Suite 1800, San Francisco, California 94104"},"44 Montgomery Street, Suite 1800, San Francisco, California 94104"),r.a.createElement(j.a,{value:"1007 Church Street, Suite 400, Evanston, Illinois 60201",label:"1007 Church Street, Suite 400, Evanston, Illinois 60201"},"1007 Church Street, Suite 400, Evanston, Illinois 60201"),r.a.createElement(j.a,{value:"375 East Chicago Avenue, Levy Mayer, 4th Floor, Chicago, Illinois 60611",label:"375 East Chicago Avenue, Levy Mayer, 4th Floor, Chicago, Illinois 60611"},"375 East Chicago Avenue, Levy Mayer, 4th Floor, Chicago, Illinois 60611"),r.a.createElement(j.a,{value:"420 East Superior Street, Chicago, Illinois 60611",label:"420 East Superior Street, Chicago, Illinois 60611"},"420 East Superior Street, Chicago, Illinois 60611"),r.a.createElement(j.a,{value:"None",label:"None"},"None")))))}}]),t}(l.Component),R=t(70),x=t.n(R),_=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).handleSelectChange=function(e){l.setState({curMsg:e.target.value}),l.props.handleFieldChange(e.target.value,e.target.name)},l.state={curMsg:"",msgChoices:[]},l}return Object(d.a)(t,[{key:"componentDidMount",value:function(){x.a.parse("https://s3.us-east-2.amazonaws.com/assets.ard.northwestern.edu/files/email-sig-generator/university-specific-programming-messages.csv",{header:!0,download:!0,skipEmptyLines:!0,complete:this.updateData.bind(this)})}},{key:"updateData",value:function(e){var a=e.data.filter((function(e){if(e.isEnabledChoice.toLowerCase().includes("true"))return e.messageCopy=e.messageCopy.replace("&#8209;","\u2013"),!0}));this.setState({msgChoices:a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"form-step"},r.a.createElement("div",{className:"form-step__field"},r.a.createElement(D.a,{fullWidth:!0,variant:"outlined",className:"form-control"},r.a.createElement(A.a,{className:"label-control"},"Programming Message"),r.a.createElement(I.a,Object(F.a)({className:"select-control",value:this.state.curAddress,name:"specialMsg",onChange:this.handleSelectChange},"value",this.props.fieldDefaultVals),r.a.createElement(j.a,{value:""}),r.a.createElement(j.a,{value:"",label:"No message"},"No message"),this.state.msgChoices.map((function(e,a){return r.a.createElement(j.a,{value:e.messageCopy,label:e.messageCopy},e.messageCopy)}))))))}}]),t}(l.Component),L=t(55),q=t.n(L),U=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={firstNameDefault:"",lastNameDefault:""},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a=this.props.underGradInfo,t=this.props.gradInfo,l=this.props.parentInfo,n=r.a.createElement("div",{className:"form-step degrees"},a.map((function(a,t){return r.a.createElement(O,{key:t,arrayID:t,handleDegreeChange:e.props.handleDegreeChange,handleRemoveDegree:e.props.handleRemoveDegree,fieldDefaultVals:["",e.props.globalState.underGradInfo[t].year],gradDegree:!1,isYearValid:a.isYearValid})}))),s=r.a.createElement("div",{className:"form-step degrees"},t.map((function(a,t){return r.a.createElement(O,{key:t,arrayID:t,handleRemoveDegree:e.props.handleRemoveDegree,handleDegreeChange:e.props.handleDegreeChange,fieldDefaultVals:[e.props.globalState.gradInfo[t].degree,e.props.globalState.gradInfo[t].year],errMsg:e.props.globalState.gradInfo[t].errMsg,gradDegree:!0,isYearValid:a.isYearValid})})),r.a.createElement("div",{className:"add-degree",onClick:this.props.handleAddDegree},r.a.createElement(k.a,{onClick:this.props.handleAddDegree,"aria-label":"add a degree",label:"test"},r.a.createElement(q.a,null)),"Add Northwestern Degree")),o=r.a.createElement("div",{className:"form-step degrees"},l.map((function(a,t){return r.a.createElement(w,{key:t,arrayID:t,handleRemoveDegree:e.props.handleRemoveDegree,handleDegreeChange:e.props.handleDegreeChange,fieldDefaultVals:[e.props.globalState.parentInfo[t].degree,e.props.globalState.parentInfo[t].year],isYearValid:a.isYearValid})})),r.a.createElement("div",{className:"add-degree",onClick:this.props.handleAddParentDegree},r.a.createElement(k.a,{onClick:this.props.handleAddParentDegree,"aria-label":"add a degree",label:"test"},r.a.createElement(q.a,null)),"Add another")),i=r.a.createElement("div",{className:"error-messages"},"You must fill all required fields (indicated with a *) before generating a signature.");return r.a.createElement("article",{className:"sig-form"},r.a.createElement("h3",null,"Name"),r.a.createElement(f,{fieldName:["firstName","lastName"],fieldLabel:["First Name","Last Name"],handleFieldChange:this.props.handleFieldChange,fieldDefaultVals:[this.props.globalState.firstName,this.props.globalState.lastName],isRequired:[!0,!0]}),r.a.createElement(v,{fieldName:"middleName",fieldLabel:"Middle or Former Name (Optional)",fieldDefaultVals:this.props.globalState.middleName,handleFieldChange:this.props.handleFieldChange,isRequired:!1,halfWidth:!0}),r.a.createElement("h3",null,"Alumni Designation"),r.a.createElement("div",{className:"checkboxes"},r.a.createElement("div",{className:"form-step"},r.a.createElement(C,{fieldName:"Are You a Northwestern Undergraduate Alum?",handleAlumToggle:this.props.handleUndergradAlumToggle,isChecked:this.props.globalState.isUndergradAlum}),this.props.isUndergradAlum&&n),r.a.createElement("div",{className:"form-step"},r.a.createElement(C,{fieldName:"Are You a Northwestern Graduate Degree, Professional Degree, or Certificate Holder?",handleAlumToggle:this.props.handleGradAlumToggle,isChecked:this.props.globalState.isGradAlum}),this.props.isGradAlum&&s),r.a.createElement("div",{className:"form-step"},r.a.createElement(C,{fieldName:"Are You the Parent/Grandparent of a Northwestern Student or Graduate?",handleAlumToggle:this.props.handleParentAlumToggle,isChecked:this.props.globalState.isParentAlum}),this.props.isParentAlum&&o)),r.a.createElement("h3",null,"Job"),r.a.createElement(f,{fieldName:["title","department"],fieldLabel:["Job Title","Department"],handleFieldChange:this.props.handleFieldChange,fieldDefaultVals:[this.props.globalState.title,this.props.globalState.department],autoComplete:!0,isRequired:[!0,!0]}),r.a.createElement("h3",null,"Pronouns"),r.a.createElement("div",{className:"sub-head-helper"},"Optional (e.g., \u201cshe/her/hers,\u201d \u201che/him/his and they/their/theirs,\u201d etc.)"),r.a.createElement(v,{fieldName:"pronouns",fieldLabel:"Pronouns",fieldDefaultVals:this.props.globalState.pronouns,handleFieldChange:this.props.handleFieldChange,isRequired:!1,halfWidth:!0}),r.a.createElement("h3",null,"Address"),r.a.createElement(T,{handleFieldChange:this.props.handleFieldChange,fieldDefaultVals:this.props.globalState.address,isRequired:!0}),r.a.createElement("h3",null,"Contact Information"),r.a.createElement("div",{className:"sub-head-helper"},"Cell phone number is optional"),r.a.createElement(f,{fieldName:["officePhoneNum","cellPhoneNum"],fieldLabel:["Office Phone Number","Cell Phone Number"],handleFieldChange:this.props.handleFieldChange,fieldDefaultVals:[this.props.globalState.officePhoneNum,this.props.globalState.cellPhoneNum],autoComplete:!1,phoneNumValidity:this.props.phoneNumValidity,isRequired:[!0,!1]}),r.a.createElement("h3",null,"University-Specific Programming"),r.a.createElement("div",{className:"sub-head-helper"},"Optional Programming Message"),r.a.createElement(_,{handleFieldChange:this.props.handleFieldChange,fieldDefaultVals:this.props.globalState.specialMsg,isRequired:!1}),this.props.cantGenerateSig&&i,r.a.createElement(b,{handleClick:this.props.handleClick}))}}]),t}(l.Component);function B(e){var a=e.split("");return a.splice(3,0,"."),a.splice(7,0,"."),a.join("")}var W=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).titleRef=r.a.createRef,l.myDep=r.a.createRef,l.state={value:"",copied:!1,titleWidth:0,depWidth:0,widthSum:0},l}return Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log(this.titleRef)}},{key:"componentDidUpdate",value:function(){console.log(this.titleRef)}},{key:"render",value:function(){var e=this.props.globalState.pronouns.replace(/[{()}]/g,"");e="("+e+")";var a=r.a.createElement("span",{className:"pronouns"},e),t=this.props.globalState.title,l=t.split(" ");t=l.join("\xa0");for(var n=r.a.createElement("span",{className:"job",style:{display:"block"}},r.a.createElement("div",null,r.a.createElement("span",{id:"title"},t)),r.a.createElement("div",null,r.a.createElement("span",{id:"department"},this.props.globalState.department.split(" ").join("\xa0")))),s=r.a.createElement("span",{className:"office-num"},r.a.createElement("br",null),B(this.props.globalState.officePhoneNum)," office"),o=r.a.createElement("span",{className:"cell-num"},r.a.createElement("br",null),B(this.props.globalState.cellPhoneNum)," cell"),i=r.a.createElement("span",{className:"address"},this.props.globalState.address),c="",d=0;d<this.props.globalState.underGradInfo.length;d++)this.props.globalState.underGradInfo[d].isYearValid&&(c=c+" \u2019"+this.props.globalState.underGradInfo[d].year.toString().slice(-2));var u="";if(this.props.globalState.isGradAlum){u="".concat(c.length>0?", ":" ");for(d=0;d<this.props.globalState.gradInfo.length;d++)d<this.props.globalState.gradInfo.length-1?0===d?this.props.globalState.gradInfo[d].degree.length>0&&(u=u+", \u2019"+this.props.globalState.gradInfo[d].year.toString().slice(-2)+" "+this.props.globalState.gradInfo[d].degree+", "):this.props.globalState.gradInfo[d].degree.length>0&&(u=u+"\u2019"+this.props.globalState.gradInfo[d].year.toString().slice(-2)+" "+this.props.globalState.gradInfo[d].degree+", "):this.props.globalState.gradInfo[d].degree.length>0&&(u=u+"\u2019"+this.props.globalState.gradInfo[d].year.toString().slice(-2)+" "+this.props.globalState.gradInfo[d].degree)}if(this.props.globalState.isParentAlum){var p="".concat(c.length>0||u.length>0?", ":" ");for(d=0;d<this.props.globalState.parentInfo.length;d++)d<this.props.globalState.parentInfo.length-1?this.props.globalState.parentInfo[d].degree.length>0&&(p=p+"\u2019"+this.props.globalState.parentInfo[d].year.toString().slice(-2)+" "+this.props.globalState.parentInfo[d].degree+", "):p=this.props.globalState.parentInfo[d].degree.length>0?p+"\u2019"+this.props.globalState.parentInfo[d].year.toString().slice(-2)+" "+this.props.globalState.parentInfo[d].degree:p.replace(/,\s*$/,"")}return r.a.createElement("section",{className:"sig-result"},r.a.createElement("div",{className:"sig-result__wrapper"},r.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{borderTop:"1px solid #4e2a84",borderBottom:"1px solid #4e2a84",fontFamily:'"Arial"',fontSize:"14px",color:"#716C6B",display:"block",width:"100%",maxWidth:"max-content"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{fontFamily:'"Arial"',fontSize:"16px",color:"#4e2a84",paddingTop:"10px",lineHeight:"1.2"}},r.a.createElement("strong",null,this.props.globalState.firstName," ","".concat(this.props.globalState.middleName.length>0?this.props.globalState.middleName+" ":""),this.props.globalState.lastName,this.props.globalState.isUndergradAlum&&c.length>3?c:"",this.props.globalState.isGradAlum&&u.length>5?u:"",this.props.globalState.isParentAlum&&p.length>5&&p))),r.a.createElement("tr",null,r.a.createElement("td",{style:{fontFamily:'"Arial"',fontSize:"14px",color:"#716C6B",paddingTop:"10px",lineHeight:"1.37",width:"max-content"}},this.props.globalState.pronouns.length>0&&a,this.props.globalState.title.length>0&&n,r.a.createElement("div",null,r.a.createElement("span",{className:"org"},this.props.globalState.org)),r.a.createElement("div",null,r.a.createElement("span",{className:"nu"},"Northwestern University")),r.a.createElement("div",{className:"special-msg",style:{whiteSpace:"nowrap",width:"480px"}},r.a.createElement("em",null,this.props.globalState.specialMsg.replace("&#8209;","\u2013"))))),r.a.createElement("tr",null,r.a.createElement("td",{style:{fontFamily:'"Arial"',fontSize:"14px",color:"#716C6B",paddingTop:"10px",paddingBottom:"30px",lineHeight:"1.37"}},"None"!=this.props.globalState.address&&i,this.props.globalState.phoneNumValidity.office&&s,this.props.globalState.phoneNumValidity.cell&&o)))),r.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{fontFamily:'"Arial"',fontSize:"14px",color:"#716C6B"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{fontFamily:'"Arial"',fontSize:"14px",color:"#4e2a84",paddingTop:"10px",lineHeight:"1.37"}},r.a.createElement("strong",null,r.a.createElement("a",{style:{color:"#4e2a84"},href:"https://www.alumni.northwestern.edu/s/1479/02-naa/16/home.aspx?sid=1479&gid=2&pgid=20761&utm_medium=email&utm_source=ARD%20email&utm_campaign=ARD%20Email%20Signature"},"alumni.northwestern.edu")))),r.a.createElement("tr",null,r.a.createElement("td",{style:{fontFamily:'"Arial"',fontSize:"12px",color:"#716C6B",paddingTop:"10px",lineHeight:"1.37"}},r.a.createElement("a",{style:{color:"#716C6B",textDecoration:"none"},href:"https://www.facebook.com/northwesternalumni"},"Facebook")," | ",r.a.createElement("a",{style:{color:"#716C6B",textDecoration:"none"},href:"https://twitter.com/NUAlumni"},"Twitter")," | ",r.a.createElement("a",{style:{color:"#716C6B",textDecoration:"none"},href:"https://www.instagram.com/northwesternalumni/"},"Instagram")))))))}}]),t}(l.Component),z=Object(h.a)({palette:{primary:{main:"#4e2a84"}},typography:{fontFamily:['"Akkurat Pro Regular"']}}),H=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).checkLocalStorage=function(){},l.isClassYearValid=function(e){return(e=parseInt(e))>=1935&&e<=2025},l.isPhoneNumValid=function(e){return!!/^\d+$/.test(e)&&10===e.length},l.handleFieldChange=function(e,a){var t=Object(i.a)({},l.state);if(t[a]=e,"officePhoneNum"===a||"cellPhoneNum"===a){var r=l.isPhoneNumValid(e),n=a.substring(0,a.length-8);t.phoneNumValidity[n]=!!r}l.setState(t)},l.handleDegreeChange=function(e,a,t,r){var n=Object(i.a)({},l.state);if(n[a][r][t]=e,"year"===t){var s=l.isClassYearValid(e);n[a][r].isYearValid=!!s}l.setState(n)},l.handleAddDegree=function(){l.setState({gradInfo:[].concat(Object(o.a)(l.state.gradInfo),[{degree:"",year:"",isYearValid:!1,errMsg:""}])})},l.handleAddParentDegree=function(){l.setState({parentInfo:[].concat(Object(o.a)(l.state.parentInfo),[{degree:"",year:"",isYearValid:!1,errMsg:""}])})},l.handleRemoveDegree=function(e,a){console.log(a);var t=l.state[a];t.splice(e,1),l.setState({type:t}),0===t.length&&("parentInfo"===a?l.setState({isParentAlum:!1}):"gradInfo"===a?l.setState({isGradAlum:!1}):l.setState({isUndergradAlum:!1}))},l.handleUndergradAlumToggle=function(){var e=l.state.isUndergradAlum;if(e)l.setState({underGradInfo:[]}),l.setState({isUndergradAlum:!e});else{l.setState({underGradInfo:[].concat(Object(o.a)(l.state.underGradInfo),[{year:"",isYearValid:!1,errMsg:""}])}),l.setState({isUndergradAlum:!e})}},l.handleGradAlumToggle=function(){var e=l.state.isGradAlum;if(e)l.setState({gradInfo:[]}),l.setState({isGradAlum:!e});else{l.setState({gradInfo:[].concat(Object(o.a)(l.state.gradInfo),[{degree:"",year:"",isYearValid:!1,errMsg:""}])}),l.setState({isGradAlum:!e})}},l.handleAcknowledgementToggle=function(){var e=l.state.isAcknowledgement;l.setState({isAcknowledgement:!e})},l.handleParentAlumToggle=function(){var e=l.state.isParentAlum;if(e)l.setState({parentInfo:[]}),l.setState({isParentAlum:!e});else{l.setState({parentInfo:[].concat(Object(o.a)(l.state.parentInfo),[{degree:"",year:"",isYearValid:!1,errMsg:""}])}),l.setState({isParentAlum:!e})}},l.handleDateChange=function(){var e=Object(i.a)({},l.state);e.buttonClicked=!0,l.setState(e)},l.handleClick=function(){if(l.state.firstName.length>0&&l.state.lastName.length>0&&l.state.title.length>0&&l.state.department.length>0&&l.state.address.length>0){var e=Object(i.a)({},l.state);e.generateButtonClicked=!0,e.cantGenerateSig=!1,l.setState(e)}else l.setState({cantGenerateSig:!0})},l.state={generateButtonClicked:!1,firstName:"",lastName:"",middleName:"",isUndergradAlum:!1,isGradAlum:!1,isParentAlum:!1,underGradInfo:[],gradInfo:[],parentInfo:[],pronouns:"",title:"",department:"",org:"Alumni Relations and Development",specialMsg:"Commemorating 150 years of women students",address:"",officePhoneNum:"",cellPhoneNum:"",phoneNumValidity:{office:!1,cell:!1},cantGenerateSig:!1},l}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("localState"));e?this.setState(e):console.log("There was no local storage memory")}},{key:"componentWillUpdate",value:function(e,a){localStorage.setItem("localState",JSON.stringify(a))}},{key:"render",value:function(){var e=Object(i.a)({},this.state);return r.a.createElement(m.a,{theme:z},r.a.createElement("div",{className:"App container"},r.a.createElement("h2",null,"ARD Email Signature Generator"),r.a.createElement("p",null,"Complete the form below to receive a custom, Northwestern-branded signature for your ARD staff email. Simply click \u201cGenerate Signature\u201d when you\u2019ve provided the requested information."),r.a.createElement("p",null,"You may copy and paste your new signature into your email template. For further instructions on how to set a signature on Outlook, follow\xa0",r.a.createElement("a",{target:"_blank",href:"https://support.office.com/en-us/article/create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2"},"this guide"),"."),r.a.createElement("p",null,"Note: Asterisks (*) indicate required information."),r.a.createElement(U,{globalState:e,handleClick:this.handleClick,handleUndergradAlumToggle:this.handleUndergradAlumToggle,handleGradAlumToggle:this.handleGradAlumToggle,handleParentAlumToggle:this.handleParentAlumToggle,handleAcknowledgementToggle:this.handleAcknowledgementToggle,isUndergradAlum:this.state.isUndergradAlum,isGradAlum:this.state.isGradAlum,isParentAlum:this.state.isParentAlum,underGradInfo:this.state.underGradInfo,gradInfo:this.state.gradInfo,parentInfo:this.state.parentInfo,handleAddDegree:this.handleAddDegree,handleAddParentDegree:this.handleAddParentDegree,handleRemoveDegree:this.handleRemoveDegree,handleFieldChange:this.handleFieldChange,handlePronounChange:this.handlePronounChange,handleDegreeChange:this.handleDegreeChange,phoneNumValidity:this.state.phoneNumValidity,cantGenerateSig:this.state.cantGenerateSig}),this.state.generateButtonClicked&&r.a.createElement(W,{globalState:e})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[82,1,2]]]);
//# sourceMappingURL=main.a40fc6bb.chunk.js.map