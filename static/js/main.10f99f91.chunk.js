(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{137:function(e,t,s){},138:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(18),i=s.n(c),r=(s(87),s(88),s(89),s(90),s(21)),o=s(22),l=s(24),d=s(23),j=s(3),h=s(1);function m(e){var t=e.item;return Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.g,{src:t.image,alt:t.name}),Object(h.jsxs)(j.e,{children:[Object(h.jsxs)(j.k,{children:[" ",t.name," "]}),t.designation?Object(h.jsx)(j.i,{children:t.designation}):null,Object(h.jsx)(j.j,{children:t.description})]})]})}var b=function(e){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row align-items-start",children:[Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(m,{item:e.dish})}),Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(m,{item:e.promotion})}),Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(m,{item:e.leader})})]}),Object(h.jsx)("h4",{children:"Home"})]})},u=s(5);function O(e){var t=e.dish;e.onClick;return Object(h.jsx)(j.d,{children:Object(h.jsxs)(u.b,{to:"/menu/".concat(t.id),children:[Object(h.jsx)(j.g,{width:"100%",src:t.image,alt:t.name}),Object(h.jsx)(j.h,{children:Object(h.jsx)(j.k,{children:t.name})})]})})}var x=function(e){var t=e.dishes.map((function(e){return Object(h.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(h.jsx)(O,{dish:e})},e.id)}));return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(j.a,{children:[Object(h.jsx)(j.b,{children:Object(h.jsx)(u.b,{to:"/home",children:"Home"})}),Object(h.jsx)(j.b,{active:!0,children:"Menu"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:"Menu"}),Object(h.jsx)("hr",{})]})]}),Object(h.jsx)("div",{className:"row",children:t})]})},f=s(25),g=s(12),p=function(e){return e&&e.length},v=function(e){return function(t){return!t||t.length<=e}},N=function(e){return function(t){return t&&t.length>=e}},w=function(e){return!isNaN(Number(e))},y=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},k=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(o.a)(s,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(j.a,{children:[Object(h.jsx)(j.b,{children:Object(h.jsx)(u.b,{to:"/home",children:"Home"})}),Object(h.jsx)(j.b,{active:!0,children:"Contact Us"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:"Contact Us"}),Object(h.jsx)("hr",{})]})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h3",{children:"Location Information"})}),Object(h.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(h.jsx)("h5",{children:"Our Address"}),Object(h.jsxs)("address",{children:["121, Clear Water Bay Road",Object(h.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(h.jsx)("br",{}),"HONG KONG",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-envelope"}),": ",Object(h.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(h.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(h.jsx)("h5",{children:"Map of our Location"})}),Object(h.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(h.jsxs)("div",{className:"btn-group",role:"group",children:[Object(h.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(h.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(h.jsxs)("a",{role:"button",className:"btn btn-info",href:"/",children:[Object(h.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(h.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(h.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h3",{children:"Send us Your Fedback"})}),Object(h.jsx)("div",{className:"col-12 col-md-9",children:Object(h.jsxs)(g.LocalForm,{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(h.jsxs)(j.B,{className:"form-group",children:[Object(h.jsx)(j.r,{htmlFor:"firstname",md:2,children:"First Name"}),Object(h.jsxs)(j.l,{md:10,children:[Object(h.jsx)(g.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:p,minLength:N(3),maxLength:v(15)}}),Object(h.jsx)(g.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 3 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(h.jsxs)(j.B,{className:"form-group",children:[Object(h.jsx)(j.r,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(h.jsxs)(j.l,{md:10,children:[Object(h.jsx)(g.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:p,minLength:N(3),maxLength:v(15)}}),Object(h.jsx)(g.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(h.jsxs)(j.B,{className:"form-group",children:[Object(h.jsx)(j.r,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(h.jsxs)(j.l,{md:10,children:[Object(h.jsx)(g.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. number",className:"form-control",validators:{required:p,minLength:N(3),maxLength:v(15),isNumber:w}}),Object(h.jsx)(g.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(h.jsxs)(j.B,{className:"form-group",children:[Object(h.jsx)(j.r,{htmlFor:"email",md:2,children:"Email"}),Object(h.jsxs)(j.l,{md:10,children:[Object(h.jsx)(g.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:p,validEmail:y}}),Object(h.jsx)(g.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(h.jsxs)(j.B,{className:"form-group",children:[Object(h.jsx)(j.l,{md:{size:6,offset:2},children:Object(h.jsx)("div",{className:"form-check",children:Object(h.jsxs)(j.r,{check:!0,children:[Object(h.jsx)(g.Control.checkbox,{model:".agree",className:"form-check-input",name:"agree"})," "," ",Object(h.jsx)("strong",{children:"May we contact you?"})]})})}),Object(h.jsx)(j.l,{md:{size:3,offset:1},children:Object(h.jsxs)(g.Control.select,{model:".contactType",type:"select",name:"contactType",className:"form-control",children:[Object(h.jsx)("option",{children:"Tel."}),Object(h.jsx)("option",{children:"Email"})]})})]}),Object(h.jsxs)(j.B,{className:"form-group",children:[Object(h.jsx)(j.r,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(h.jsx)(j.l,{md:10,children:Object(h.jsx)(g.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(h.jsx)(j.B,{className:"form-group",children:Object(h.jsx)(j.l,{md:{size:10,offset:2},children:Object(h.jsx)(j.c,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),s}(a.Component);function C(e){var t=e.leader;return Object(h.jsx)("div",{children:Object(h.jsxs)(j.s,{className:"row",children:[Object(h.jsx)(j.g,{className:"col-2 mt-4",src:t.image,alt:t.name}),Object(h.jsxs)(j.e,{className:"col-10",children:[Object(h.jsx)(j.k,{children:t.name}),Object(h.jsx)(j.i,{children:t.designation}),Object(h.jsx)(j.j,{children:t.description})]})]})})}var I=function(e){var t=e.leaders.map((function(e){return Object(h.jsx)(C,{leader:e})}));return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(j.a,{children:[Object(h.jsx)(j.b,{children:Object(h.jsx)(u.b,{to:"/home",children:"Home"})}),Object(h.jsx)(j.b,{active:!0,children:"About Us"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:"About Us"}),Object(h.jsx)("hr",{})]})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsxs)("div",{className:"col-12 col-md-6",children:[Object(h.jsx)("h2",{children:"Our History"}),Object(h.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(h.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(h.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(h.jsx)("div",{className:"col-12 col-md-5",children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.f,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(h.jsx)(j.e,{children:Object(h.jsxs)("dl",{className:"row p-1",children:[Object(h.jsx)("dt",{className:"col-6",children:"Started"}),Object(h.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(h.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(h.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(h.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(h.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(h.jsx)("dt",{className:"col-6",children:"Employees"}),Object(h.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)(j.d,{children:Object(h.jsx)(j.e,{className:"bg-faded",children:Object(h.jsxs)("blockquote",{className:"blockquote",children:[Object(h.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(h.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(h.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h2",{children:"Corporate Leadership"})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)(j.s,{list:!0,children:t})})]})]})};function F(e){var t=e.dish;return null!=t?Object(h.jsx)("div",{className:" col-12 col-md-5 m-1",children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.g,{width:"100%",src:t.image,alt:t.name}),Object(h.jsxs)(j.e,{children:[Object(h.jsx)(j.k,{children:t.name}),Object(h.jsx)(j.j,{children:t.description})]})]})}):Object(h.jsx)("div",{})}function M(e){var t=e.comments;if(null!=t){var s=t.map((function(e){var t=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)));return Object(h.jsxs)("ul",{className:"list-unstyled",children:[Object(h.jsx)("li",{children:e.comment}),Object(h.jsxs)("li",{children:["-- ",e.author,", ",t]})]})}));return Object(h.jsxs)("div",{className:" col-12 col-md-5 m-1 text-left ml-3",children:[Object(h.jsx)("h4",{children:"Comments"}),s]})}return Object(h.jsx)("div",{})}var T=function(e){return null!=e.dish?Object(h.jsxs)("div",{class:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(j.a,{children:[Object(h.jsx)(j.b,{children:Object(h.jsx)(u.b,{to:"/menu",children:"Menu"})}),Object(h.jsx)(j.b,{active:!0,children:e.dish.name})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:e.dish.name}),Object(h.jsx)("hr",{})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(F,{dish:e.dish}),Object(h.jsx)(M,{comments:e.comments})]})]}):Object(h.jsx)("div",{})},L=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={isNavOpen:!1,inModalOpen:!1},a.toggleNav=a.toggleNav.bind(Object(f.a)(a)),a.toggleModal=a.toggleModal.bind(Object(f.a)(a)),a.handleLogin=a.handleLogin.bind(Object(f.a)(a)),a}return Object(o.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+"Password: "+this.password.value+"Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)(j.y,{dark:!0,expand:"md",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(j.A,{onClick:this.toggleNav}),Object(h.jsx)(j.z,{className:"mr-auto",href:"/",children:Object(h.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante con Fusion"})}),Object(h.jsxs)(j.m,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(h.jsxs)(j.w,{navbar:!0,children:[Object(h.jsx)(j.x,{children:Object(h.jsxs)(u.c,{className:"nav-link",to:"/home",children:[Object(h.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(h.jsx)(j.x,{children:Object(h.jsxs)(u.c,{className:"nav-link",to:"/aboutus",children:[Object(h.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(h.jsx)(j.x,{children:Object(h.jsxs)(u.c,{className:"nav-link",to:"/menu",children:[Object(h.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(h.jsx)(j.x,{children:Object(h.jsxs)(u.c,{className:"nav-link",to:"/contactus",children:[Object(h.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(h.jsx)(j.w,{className:"ml-auto",navbar:!0,children:Object(h.jsx)(j.x,{children:Object(h.jsx)(j.c,{outline:!0,onClick:this.toggleModal,children:Object(h.jsx)("span",{className:"fa fa-sign-in fa-lg",children:"Login"})})})})]})]})}),Object(h.jsx)(j.q,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{classNam:"row row-header",children:Object(h.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(h.jsx)("h1",{children:"Ristorante Con Fusion"}),Object(h.jsx)("p",{children:"We take Inspiration from the World's best cuisines, and create an unque fusion experience. Our lipsmacking creation will tickle your coulinary senses!"})]})})})}),Object(h.jsxs)(j.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(h.jsx)(j.v,{toggle:this.toggleModal,children:"Login"}),Object(h.jsx)(j.u,{children:Object(h.jsxs)(j.n,{onSubmit:this.handleLogin,children:[Object(h.jsxs)(j.o,{children:[Object(h.jsx)(j.r,{htmlFor:"username",children:"Username"}),Object(h.jsx)(j.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(h.jsxs)(j.o,{children:[Object(h.jsx)(j.r,{htmlFor:"password",children:"Password"}),Object(h.jsx)(j.p,{type:"text",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(h.jsx)(j.o,{check:!0,children:Object(h.jsxs)(j.r,{check:!0,children:[Object(h.jsx)(j.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]})}),Object(h.jsx)(j.c,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),s}(a.Component);var S=function(e){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row justify-content-center",children:[Object(h.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(h.jsx)("h5",{children:"Links"}),Object(h.jsxs)("ul",{className:"list-unstyled",children:[Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/aboutus",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/menu",children:"Menu"})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/contactus",children:"Contact"})})]})]}),Object(h.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(h.jsx)("h5",{children:"Our Address"}),Object(h.jsxs)("address",{children:["121, Clear Water Bay Road",Object(h.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(h.jsx)("br",{}),"HONG KONG",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(h.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(h.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(h.jsx)("i",{className:"fa fa-google-plus"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(h.jsx)("i",{className:"fa fa-facebook"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(h.jsx)("i",{className:"fa fa-linkedin"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(h.jsx)("i",{className:"fa fa-twitter"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(h.jsx)("i",{className:"fa fa-youtube"})}),Object(h.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(h.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})},A=s(6),E=s(17),Z=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)(L,{}),Object(h.jsx)("div",{children:Object(h.jsxs)(A.d,{children:[Object(h.jsx)(A.b,{path:"/home",component:function(){return Object(h.jsx)(b,{dish:e.props.dishes.filter((function(e){return e.featured}))[0],promotion:e.props.promotions.filter((function(e){return e.featured}))[0],leader:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),Object(h.jsx)(A.b,{path:"/aboutus",component:function(){return Object(h.jsx)(I,{leaders:e.props.leaders})}}),Object(h.jsx)(A.b,{exact:!0,path:"/menu",component:function(){return Object(h.jsx)(x,{dishes:e.props.dishes})}}),Object(h.jsx)(A.b,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(h.jsx)(T,{dish:e.props.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],comments:e.props.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)}))})}}),Object(h.jsx)(A.b,{exact:!0,path:"/contactus",component:k}),Object(h.jsx)(A.a,{to:"/home"})," "]})}),Object(h.jsx)(S,{})]})}}]),s}(a.Component),R=Object(A.g)(Object(E.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}))(Z)),q=(s(137),s(27)),z={dishes:[{id:0,name:"Uthappizza",image:"./assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"./assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"./assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"./assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],comments:[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],promotions:[{id:0,name:"Weekend Grand Buffet",image:"./assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}],leaders:[{id:0,name:"Peter Pan",image:"./assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"./assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"./assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"./assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return e},B=Object(q.createStore)(P,z),H=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)(E.Provider,{store:B,children:Object(h.jsx)(u.a,{children:Object(h.jsx)("div",{children:Object(h.jsx)(R,{})})})})}}]),s}(a.Component),U=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,139)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(H,{})}),document.getElementById("root")),U()},90:function(e,t,s){}},[[138,1,2]]]);
//# sourceMappingURL=main.10f99f91.chunk.js.map