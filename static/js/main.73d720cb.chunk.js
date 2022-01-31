(this.webpackJsonpmangohaze=this.webpackJsonpmangohaze||[]).push([[0],{13:function(e,t,a){"use strict";t.a=a.p+"static/media/color-logo-purple.84013984.svg"},14:function(e,t,a){"use strict";t.a=a.p+"static/media/purple-bg.a9df8fa2.png"},18:function(e,t,a){"use strict";t.a=a.p+"static/media/orange-bg.cef392c0.png"},20:function(e,t,a){},23:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),gsap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_Assets_purple_bg_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14),_Assets_color_logo_purple_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13),_Assets_orange_bg_png__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(18),_Assets_color_logo_orange_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),Quiz=function Quiz(props){var completed=[],points=0,counter=0,question=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),questionNumber=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),orangeLogoRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),purpleLogoRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),a=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),b=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),c=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),d=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),e=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),bg=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),showA=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),showB=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),showC=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),showD=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),showE=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),keyMap=["a","b","c","d","e"],questionaire_limit=5,list_of_questions=[{question:"For ultimate freshness, our Live Resin Vapes are made from:",options:{a:"A. Fresh frozen Mango Haze Flower",b:"B. Dried Mango Haze Flower",c:"C. Mango Tree Sap"},answer:"a",bg:"url(".concat(_Assets_purple_bg_png__WEBPACK_IMPORTED_MODULE_3__.a,")")},{question:"By freezing fresh Mango Haze flower we retain the terpenes to extract the truest expression of the plant?",options:{a:"A. True",b:"B. False"},answer:"a",bg:"url(".concat(_Assets_orange_bg_png__WEBPACK_IMPORTED_MODULE_5__.a,")")},{question:"Color\u2019s Mango Haze Live Resin has what cannabinoid ratio?",options:{a:"A. 1:1 - CBD:THC",b:"B. 2:1 - CBD:THC",c:"C. 100% CBD",d:"D. 100% THC"},answer:"b",bg:"url(".concat(_Assets_purple_bg_png__WEBPACK_IMPORTED_MODULE_3__.a,")")},{question:"What flavour palate explosion can you expect from Color Mango Haze Live Resin?",options:{a:"A. Cheesy + Peppery",b:"B. Sweet + Spice",c:"C. Floral + Citrus"},answer:"b",bg:"url(".concat(_Assets_orange_bg_png__WEBPACK_IMPORTED_MODULE_5__.a,")")},{question:"What go-to format is Color Mango Haze Live Resin available in?",options:{a:"A. Milled Flower, Ready-to-Roll",b:"B. PAX Pod",c:"C. 510 Vape Cartridge"},answer:"c",bg:"url(".concat(_Assets_purple_bg_png__WEBPACK_IMPORTED_MODULE_3__.a,")")}],history=Object(react_router__WEBPACK_IMPORTED_MODULE_2__.f)();Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){randList()}),[]);var randList=function randList(){if(keyMap.forEach((function(key){completed.length%2===0?(eval("show".concat(key.toUpperCase())).current.style="background-color: #FF8C00",orangeLogoRef.current.className="logo",purpleLogoRef.current.className="logo displayNone"):(eval("show".concat(key.toUpperCase())).current.style="background-color: #6D0A45",orangeLogoRef.current.className="logo displayNone",purpleLogoRef.current.className="logo")})),completed.length>=questionaire_limit)points<4?(localStorage.setItem("points",points),history.push("/points")):(localStorage.setItem("points",points),history.push("/data-capture"));else{var random=counter++,check_completed=completed.find((function(e){return e==random}));check_completed||0===check_completed?randList():(completed.push(random),question.current.textContent=list_of_questions[random].question,bg.current.style.background=list_of_questions[random].bg,bg.current.style.backgroundSize="100% 100%",keyMap.forEach((function(key){eval(key).current.className="ans",list_of_questions[random].options[key]?(eval(key).current.textContent=list_of_questions[random].options[key],eval("show".concat(key.toUpperCase())).current.className="orange_bg ".concat(key)):eval("show".concat(key.toUpperCase())).current.className="displayNone"})))}},selected_answer=function selected_answer(selected_data){var index=completed[completed.length-1];selected_data==list_of_questions[index].answer?(gsap__WEBPACK_IMPORTED_MODULE_1__.a.to(".".concat(selected_data),{backgroundColor:"#FF8C00",duration:.5}),eval(selected_data).current.textContent="Correct.",eval(selected_data).current.className="ans correct",points++):(gsap__WEBPACK_IMPORTED_MODULE_1__.a.to(".".concat(selected_data),{backgroundColor:"#6D0A45",duration:.5}),eval(selected_data).current.textContent="Incorrect"),setTimeout((function(){questionNumber.current.textContent=completed.length+1,randList()}),1e3)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"quiz-container",ref:bg,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{id:"quizHolder",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{id:"titleHolder",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"questionNumber",ref:questionNumber,children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{ref:question})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{id:"answer_list",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{ref:showA,className:"displayNone",onClick:function(){return selected_answer("a")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{className:"ans",ref:a})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{ref:showB,className:"displayNone",onClick:function(){return selected_answer("b")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{className:"ans",ref:b})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{ref:showC,className:"displayNone",onClick:function(){return selected_answer("c")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{className:"ans",ref:c})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{ref:showD,className:"displayNone",onClick:function(){return selected_answer("d")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{className:"ans",ref:d})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{ref:showE,className:"displayNone",onClick:function(){return selected_answer("e")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{className:"ans",ref:e})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img",{ref:orangeLogoRef,className:"colorLogo",src:_Assets_color_logo_orange_svg__WEBPACK_IMPORTED_MODULE_6__.a,alt:"Color Cannabis Orange Logo"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img",{ref:purpleLogoRef,className:"colorLogo displayNone",src:_Assets_color_logo_purple_svg__WEBPACK_IMPORTED_MODULE_4__.a,alt:"Color Cannabis Orange Logo"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{className:"legal_copy",children:"All product images and labels provided for information and illustrative purposes only, and do not represent the actual cannabis product, product label or it\u2019s appearance."})]})};__webpack_exports__.a=Quiz},29:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(16),s=a.n(o),r=a(24),i=a(2),l=a(9),_=a(3),d=(a(29),a(30),a(0)),A=(new Date).getFullYear()-19,u=function(e){var t=Object(i.f)(),a=Object(n.useState)({style:{backgroundColor:"".concat(e.color),border:"none",display:"flex",alignItems:"center",justifyContent:"center"},link:""}),c=Object(l.a)(a,1)[0],o=function(){if("/"==e.path&&(void 0==e.day||void 0==e.month||void 0==e.province||void 0==e.verifyAge))return _.a.to(".submission_alert",{opacity:"1",duration:.3}),!0;void 0==e.path&&t.push(e.link)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{className:"submission_alert",style:{color:"white",position:"absolute",zIndex:"999",marginTop:"-35px",opacity:"0"},children:"You're missing a required field"}),Object(d.jsxs)("button",{onClick:function(){if(o()&&(o(),console.log(window.location.href)),!o()){if(e.verifyAge<A){var a={dob:"".concat(e.verifyAge,"/").concat(e.month,"/").concat(e.day),province:e.province};localStorage.setItem("users_metadata",JSON.stringify(a)),t.push(e.link)}e.verifyAge>A&&window.location.replace("https://www.gotmilk.com/")}},style:c.style,className:"next_btn ".concat(e.class),children:[e.text,e.image&&Object(d.jsx)("img",{id:"next_image",src:e.image,alt:""})]})]})},j=a(8),b=(a(20),function(e){var t=["-"],a=["-"],c=["-","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=["-","ON","QC","NL","PE","NS","NB","MB","SK","AB","BC","YT","NT","NU"],s=Object(n.useState)({title:"",data:[]}),r=Object(l.a)(s,2),i=r[0],A=r[1],b=Object(n.useState)(!0),p=Object(l.a)(b,2),g=p[0],O=p[1],m=Object(n.useState)(""),h=Object(l.a)(m,2),E=h[0],C=h[1],x=Object(n.useState)(),f=Object(l.a)(x,2),M=f[0],D=f[1],v=Object(n.useState)(),B=Object(l.a)(v,2),I=B[0],N=B[1],P=Object(n.useState)(),w=Object(l.a)(P,2),y=w[0],R=w[1],T=Object(n.useState)(),L=Object(l.a)(T,2),k=L[0],U=L[1],W=function e(n,c,o){n!=c&&(n+=1,"y"==o&&a.unshift(n),"d"==o&&t.push(n),e(n,c,o))};W(1900,2021,"y"),W(0,31,"d");var K=function(e,t){C(e),g&&Q(e,t),g||(e!==E?Q(e,t):Y())},Q=function(e,t){"day"==e?_.a.to(".dayArrow",{rotation:"-90",duration:.3}):_.a.to(".dayArrow",{rotation:"0",duration:.3}),"month"==e?_.a.to(".monthArrow",{rotation:"-90",duration:.3}):_.a.to(".monthArrow",{rotation:"0",duration:.3}),"year"==e?_.a.to(".yearArrow",{rotation:"-90",duration:.3}):_.a.to(".yearArrow",{rotation:"0",duration:.3}),"province"==e?_.a.to(".provinceArrow",{rotation:"-90",duration:.3}):_.a.to(".provinceArrow",{rotation:"0",duration:.3}),_.a.to(".sidebar",{width:"70px",duration:.3}),A({title:e,data:t}),O(!g),C(e)},Y=function(){_.a.to(".dayArrow",{rotation:"0",duration:.3}),_.a.to(".monthArrow",{rotation:"0",duration:.3}),_.a.to(".yearArrow",{rotation:"0",duration:.3}),_.a.to(".provinceArrow",{rotation:"0",duration:.3}),_.a.to(".sidebar",{width:"0px",duration:.3}),A({title:"",data:[]}),O(!0),C("")};return Object(n.useEffect)((function(){}),[]),Object(d.jsx)("div",{className:"home_bg",children:Object(d.jsxs)("div",{id:"landing_wrapping",children:[Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h4",{style:{color:"white"},children:i.title.toUpperCase()})}),Object(d.jsx)("ul",{children:i.data.map((function(e,t){return Object(d.jsx)("li",{className:"opitons_list",name:i.title,onClick:function(t){t.stopPropagation(),function(e,t){"day"==e?D(t):"month"==e?N(t):"year"==e?R(t):"province"==e&&U(t),g||("day"==e&&_.a.to(".dayArrow",{rotation:"0",duration:.3}),"month"==e&&_.a.to(".monthArrow",{rotation:"0",duration:.3}),"year"==e&&_.a.to(".yearArrow",{rotation:"0",duration:.3}),"province"==e&&_.a.to(".provinceArrow",{rotation:"0",duration:.3}),_.a.to(".sidebar",{width:"0px",duration:.3}),A({title:"",data:[]}),O(!g)),C("")}(i.title,e)},children:e},t)}))})]}),Object(d.jsx)("img",{className:"colorLogo",src:j.a,alt:"Color Cannabis Logo"}),Object(d.jsx)("h2",{children:"Please Verify Your Age."}),Object(d.jsxs)("div",{id:"dob_capture",children:[Object(d.jsxs)("div",{className:"select_container",onClick:function(e){K("day",t)},children:[Object(d.jsx)("div",{className:"bb-container ",children:Object(d.jsx)("div",{className:"orangeBox",children:"DAY"})}),Object(d.jsx)("div",{className:"input-label",children:null!==M&&void 0!==M?M:"..."})]}),Object(d.jsxs)("div",{className:"select_container",onClick:function(e){e.stopPropagation(),K("month",c)},children:[Object(d.jsx)("div",{className:"bb-container ",children:Object(d.jsx)("div",{className:"orangeBox",children:"MONTH"})}),Object(d.jsx)("div",{className:"input-label",children:null!==I&&void 0!==I?I:"..."})]}),Object(d.jsxs)("div",{className:"select_container",onClick:function(e){e.stopPropagation(),K("year",a)},children:[Object(d.jsx)("div",{className:"bb-container ",children:Object(d.jsx)("div",{className:"orangeBox",children:"YEAR"})}),Object(d.jsx)("div",{className:"input-label",children:null!==y&&void 0!==y?y:"..."})]}),Object(d.jsxs)("div",{className:"select_container",onClick:function(e){e.stopPropagation(),K("province",o)},children:[Object(d.jsx)("div",{className:"bb-container ",children:Object(d.jsx)("div",{className:"orangeBox",children:"PROVINCE"})}),Object(d.jsx)("div",{className:"input-label",children:null!==k&&void 0!==k?k:"..."})]}),Object(d.jsx)("div",{id:"next_btn_landing",children:Object(d.jsx)(u,{text:"Next.",path:"/",verifyAge:y,day:M,month:I,province:k,color:"#FF8C00",link:"/prize"})})]}),Object(d.jsx)("p",{className:"legal_copy",children:"All product images and labels provided for information and illustrative purposes only, and do not represent the actual cannabis product, product label or it\u2019s appearance."})]})})}),p=a.p+"static/media/Color.f02d29c1.mp4",g=function(e){var t=Object(i.f)();return Object(n.useEffect)((function(){setTimeout((function(){t.push("/mango-haze")}),2e4)}),[]),Object(d.jsx)("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,children:Object(d.jsx)("source",{src:p,type:"video/mp4"})})},O=a.p+"static/media/mango-cartridge.fc7d950f.png",m=function(e){return Object(d.jsxs)("div",{className:"strain-info-container",children:[Object(d.jsxs)("div",{className:"info_container",children:[Object(d.jsx)("h1",{children:"Mango Haze"}),Object(d.jsx)("h2",{children:"510 LIVE RESIN CARTRIDGE"})]}),Object(d.jsxs)("div",{className:"columns_holder",children:[Object(d.jsx)("div",{className:"shared_width left-content",children:Object(d.jsxs)("div",{className:"shared_width",children:[Object(d.jsx)("div",{className:"info_container",children:Object(d.jsx)("p",{className:"margin_zero",style:{fontSize:"13px"},children:"Mango Haze Live Resin by Color is a pure cannabis extract with a rich mango aroma and hints of spice and pine celebrating a 2:1 CBD:THC ratio. Every batch of live resin by Color Cannabis is crafted from freshly frozen cannabis flower and contains no diluents."})}),Object(d.jsxs)("div",{className:"info_container",children:[Object(d.jsx)("p",{className:"label",children:"SATIVA HYBRID"}),Object(d.jsx)("p",{className:"margin_zero thin",children:"THC 20-26% mg/g"}),Object(d.jsx)("p",{className:"margin_zero thin",children:"CBD 43-49% mg/g"})]}),Object(d.jsxs)("div",{className:"info_container",children:[Object(d.jsx)("p",{className:"label",children:"AROMA & FLAVOURS"}),Object(d.jsx)("p",{className:"margin_zero thin",children:"Tropical, Fruity, Mango"})]}),Object(d.jsxs)("div",{className:"info_container",children:[Object(d.jsx)("p",{className:"label",children:"LICENSED PRODUCER"}),Object(d.jsx)("p",{className:"margin_zero thin",children:"WeedMD Rx Inc."})]}),Object(d.jsx)("div",{id:"next_btn_mango_haze",children:Object(d.jsx)(u,{text:"Let's Start.",link:"/quiz",color:"#FF8C00"})})]})}),Object(d.jsx)("div",{className:"vape_container",children:Object(d.jsx)("img",{id:"vapePen",src:O,alt:""})}),Object(d.jsx)("p",{className:"legal_copy",children:"All product images and labels provided for information and illustrative purposes only, and do not represent the actual cannabis product, product label or it\u2019s appearance."})]})]})},h=a(23),E=a(25),C=function(e){var t=localStorage.getItem("points"),a=Object(i.f)();return Object(d.jsxs)("div",{className:"data-capture-container",children:[Object(d.jsxs)("div",{id:"quiz_result_holder_",children:[Object(d.jsx)("img",{className:"colorLogo",src:j.a,alt:"Color Cannabis Logo"}),Object(d.jsxs)("div",{id:"contact_header_comment_holder",children:[Object(d.jsxs)("h2",{children:["Congratulations! ",Object(d.jsx)("br",{})," You scored"]}),Object(d.jsx)("h3",{children:"".concat(t," out of 5.")}),Object(d.jsxs)("p",{children:["Please leave your information ",Object(d.jsx)("br",{})," below to be entered to win!"]})]})]}),Object(d.jsxs)("form",{className:"form_collection",onSubmit:function(e){e.preventDefault();var n=JSON.parse(localStorage.getItem("users_metadata")),c=Object(E.a)({fullname:"".concat(e.target.fullname.value),email:"".concat(e.target.email.value),company:"".concat(e.target.store.value),points:t},n);fetch("https://bottlecapdev.pythonanywhere.com/mango",{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){var t=e.status;200===parseInt(t)&&a.push("/ThanksForEntry")}))},children:[Object(d.jsx)("div",{className:"input_container",children:Object(d.jsxs)("div",{className:"input_wrapper",children:[Object(d.jsx)("div",{className:"label_bg",children:Object(d.jsx)("label",{htmlFor:"fullname",className:"labels_",children:"FULLNAME"})}),Object(d.jsx)("input",{className:"inputs formInput",type:"text",id:"fullname",name:"fullname",required:!0})]})}),Object(d.jsx)("div",{className:"input_container",children:Object(d.jsxs)("div",{className:"input_wrapper",children:[Object(d.jsx)("div",{className:"label_bg",children:Object(d.jsx)("label",{htmlFor:"email",className:"labels_",children:"EMAIL"})}),Object(d.jsx)("input",{className:"inputs formInput",type:"email",id:"email",name:"email",required:!0})]})}),Object(d.jsx)("div",{className:"input_container",children:Object(d.jsxs)("div",{className:"input_wrapper",children:[Object(d.jsx)("div",{className:"label_bg",children:Object(d.jsx)("label",{htmlFor:"store",className:"labels_",children:"STORE"})}),Object(d.jsx)("input",{className:"inputs formInput",type:"text",id:"store",name:"store",required:!0})]})}),Object(d.jsx)("input",{type:"submit",id:"submit_btn",value:"Submit"})]}),Object(d.jsx)("p",{className:"legal_copy",children:"All product images and labels provided for information and illustrative purposes only, and do not represent the actual cannabis product, product label or it\u2019s appearance."})]})},x=a.p+"static/media/guitar.53634a63.svg",f=function(e){return Object(d.jsxs)("div",{className:"Prizing noOverflow",children:[Object(d.jsx)("div",{id:"next_btn_green",children:Object(d.jsx)(u,{image:"data:image/png;base64,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",link:"/Quiz"})}),Object(d.jsx)("div",{id:"ball_layer"}),Object(d.jsx)("div",{id:"guitar_layer",children:Object(d.jsx)("img",{id:"guitar",src:x,alt:""})}),Object(d.jsx)("p",{id:"instruction_context",children:"ANSWER CORRECTLY ON THIS QUICK QUIZ FOR A CHANCE TO WIN A SATURDAY PARTY FOR YOUR STORE"})]})},M=a.p+"static/media/t-shirt-prize.63ed81c7.png",D=function(e){return Object(d.jsxs)("div",{className:"prize_page",children:[Object(d.jsx)("img",{className:"colorLogo",src:j.a,alt:"Color Cannabis Logo"}),Object(d.jsxs)("h2",{children:["Complete this quick quiz for a ",Object(d.jsx)("span",{children:"chance to win a"})," Color Mango Haze Custom Ice Dye Kit."]}),Object(d.jsx)("img",{src:M,className:"tshirtPrize",alt:"Color Cannabis Tshirt Prize"}),Object(d.jsx)("div",{id:"next_btn_prize",children:Object(d.jsx)(u,{text:"Let's Go!",link:"/educational-video",color:"#FF8C00"})}),Object(d.jsx)("p",{className:"legal_copy",children:"All product images and labels provided for information and illustrative purposes only, and do not represent the actual cannabis product, product label or it\u2019s appearance."})]})},v=a(13),B=function(e){Object(i.f)();var t=localStorage.getItem("points");return Object(n.useEffect)((function(){}),[]),Object(d.jsx)("div",{className:"points_container",children:Object(d.jsxs)("div",{className:"content-container",children:[Object(d.jsxs)("h2",{className:"score_text",children:["You only scored ",t," out of 5."]}),Object(d.jsxs)("p",{className:"tryagain_text",children:["You'll have to try again ",Object(d.jsx)("br",{})," for your chance to win!"]}),Object(d.jsx)("div",{id:"next_btn_points",children:Object(d.jsx)(u,{text:"Try Again.",link:"/quiz",color:"#6D0A45"})}),Object(d.jsx)("img",{className:"colorLogo",src:v.a,alt:"Color Cannabis Orange Logo"}),Object(d.jsx)("p",{className:"legal_copy",children:"All product images and labels provided for information and illustrative purposes only, and do not represent the actual cannabis product, product label or it\u2019s appearance."})]})})},I=(a.p,function(e){Object(i.f)(),localStorage.getItem("points");return Object(d.jsxs)("div",{className:"thanks_container",children:[Object(d.jsx)("img",{className:"colorLogo",src:j.a,alt:"Color Cannabis Logo"}),Object(d.jsxs)("div",{className:"messaging_for_points",children:[Object(d.jsx)("h2",{className:"msg_text",children:"Thank you for taking our Colour Quiz!"}),Object(d.jsx)("p",{children:"Please contact your Store Manager to receive your Mango Haze Ice Dye Kit."})]}),Object(d.jsx)("div",{id:"next_btn_thanks",children:Object(d.jsx)(u,{text:"Play Again",link:"/quiz",color:"#FF8C00"})}),Object(d.jsx)("p",{className:"legal_copy",children:"All product images and labels provided for information and illustrative purposes only, and do not represent the actual cannabis product, product label or it\u2019s appearance."})]})});var N=function(){return Object(d.jsx)(r.a,{basename:"/mangohaze",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",exact:!0,strict:!0,component:b}),Object(d.jsx)(i.a,{path:"/points",exact:!0,strict:!0,component:B}),Object(d.jsx)(i.a,{path:"/prize",exact:!0,strict:!0,component:D}),Object(d.jsx)(i.a,{path:"/educational-video",exact:!0,strict:!0,component:g}),Object(d.jsx)(i.a,{path:"/mango-haze",exact:!0,strict:!0,component:m}),Object(d.jsx)(i.a,{path:"/Quiz",exact:!0,strict:!0,component:h.a}),Object(d.jsx)(i.a,{path:"/data-capture",exact:!0,strict:!0,component:C}),Object(d.jsx)(i.a,{path:"/instructions",exact:!0,strict:!0,component:f}),Object(d.jsx)(i.a,{path:"/ThanksForEntry",exact:!0,strict:!0,component:I})]})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),P()},8:function(e,t,a){"use strict";t.a=a.p+"static/media/color-logo-orange.a2759d5e.svg"}},[[42,1,2]]]);
//# sourceMappingURL=main.73d720cb.chunk.js.map