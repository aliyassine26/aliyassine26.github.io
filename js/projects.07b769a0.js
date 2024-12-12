"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[176],{5199:function(e,t,r){r.r(t),r.d(t,{default:function(){return G}});var a=r(6252);const i={class:"container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"};function s(e,t,r,s,o,l){const n=(0,a.up)("ContactForm"),d=(0,a.up)("ContactDetails");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(n),(0,a.Wm)(d,{contacts:e.contacts},null,8,["contacts"])])}var o=r(8508),l=r.n(o),n=r(9963);const d={class:"w-full md:w-1/2"},c={class:"leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"},m=(0,a._)("p",{class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"}," Contact Form ",-1),u=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"name"},"Full Name",-1),p=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"email"},"Email",-1),g=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"subject"},"Subject",-1),b=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"message"},"Message",-1),f=["disabled"],x={key:0,class:"flex flex-row items-center gap-2"},h=(0,a.Uk)("Sending "),y=(0,a._)("svg",{class:"w-5 h-5 text-white animate-spin",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,a._)("path",{class:"opacity-75",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"})],-1),j=[h,y],k={key:1};function w(e,t,r,i,s,o){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",c,[m,(0,a._)("form",{onSubmit:t[4]||(t[4]=(0,n.iM)(((...e)=>o.sendEmail&&o.sendEmail(...e)),["prevent"])),ref:"form",class:"font-general-regular space-y-7"},[(0,a._)("div",null,[u,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>s.name=e),name:"from_name",type:"text",required:"",placeholder:"Your Name","aria-label":"Name"},null,512),[[n.nr,s.name]])]),(0,a._)("div",null,[p,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>s.email=e),name:"reply_to",type:"email",required:"",placeholder:"Your Email","aria-label":"Email"},null,512),[[n.nr,s.email]])]),(0,a._)("div",null,[g,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"subject","onUpdate:modelValue":t[2]||(t[2]=e=>s.subject=e),name:"subject",type:"text",required:"",placeholder:"Subject","aria-label":"Subject"},null,512),[[n.nr,s.subject]])]),(0,a._)("div",null,[b,(0,a.wy)((0,a._)("textarea",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"message","onUpdate:modelValue":t[3]||(t[3]=e=>s.message=e),name:"message",cols:"14",rows:"6","aria-label":"Message"},null,512),[[n.nr,s.message]])]),(0,a._)("div",null,[(0,a._)("button",{title:"Send Message",disabled:""==s.email||""==s.name||""==s.subject||""==s.message,class:"disabled:bg-indigo-300 px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",type:"submit","aria-label":"Send Message"},[s.loading?((0,a.wg)(),(0,a.iD)("div",x,j)):((0,a.wg)(),(0,a.iD)("span",k,"Send Message"))],8,f)])],544)])])}const v={_origin:"https://api.emailjs.com"},_=(e,t="https://api.emailjs.com")=>{v._userID=e,v._origin=t},I=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class P{constructor(e){this.status=e.status,this.text=e.responseText}}const D=(e,t,r={})=>new Promise(((a,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",(({target:e})=>{const t=new P(e);200===t.status||"OK"===t.text?a(t):i(t)})),s.addEventListener("error",(({target:e})=>{i(new P(e))})),s.open("POST",v._origin+e,!0),Object.keys(r).forEach((e=>{s.setRequestHeader(e,r[e])})),s.send(t)})),q=(e,t,r,a)=>{const i=a||v._userID;I(i,e,t);const s={lib_version:"3.2.0",user_id:i,service_id:e,template_id:t,template_params:r};return D("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},H=e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},S=(e,t,r,a)=>{const i=a||v._userID,s=H(r);I(i,e,t);const o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",i),D("/api/v1.0/email/send-form",o)};var C={init:_,send:q,sendForm:S},T=r(3002),z={setup(){},data(){return{serviceID:"default_service",templateID:"template_30mlgd8",email:"",name:"",subject:"",message:"",loading:!1}},methods:{sendEmail(){this.loading=!0;const e=(0,T.pm)();C.sendForm("service_6wvo7r8","template_30mlgd8",this.$refs.form,"lOy6WnAtU4OiI33zT").then((t=>{e.success("Email sent successfully!"),this.loading=!1,this.email="",this.name="",this.subject="",this.message="",console.log("SUCCESS!",t.text)}),(t=>{e.error("An error has occurred, please try again!"),console.log("FAILED...",t.text)}))}}},U=r(3744);const L=(0,U.Z)(z,[["render",w]]);var M=L,W=r(3577);const E={class:"w-full md:w-1/2"},F={class:"text-left max-w-xl px-6"},K=(0,a._)("h2",{class:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"}," Contact details ",-1),A={class:"font-general-regular"},N=["data-feather"];function Z(e,t,r,i,s,o){return(0,a.wg)(),(0,a.iD)("div",E,[(0,a._)("div",F,[K,(0,a._)("ul",A,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.contacts,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"flex",key:e.id},[(0,a._)("i",{"data-feather":e.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,N),(0,a._)("a",{href:"#",class:(0,W.C_)(["text-lg mb-4 text-ternary-dark dark:text-ternary-light","mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":""]),"aria-label":"Website and Phone"},(0,W.zw)(e.name),3)])))),128))])])])}var O={props:["contacts"]};const V=(0,U.Z)(O,[["render",Z]]);var Y=V,$={components:{ContactForm:M,ContactDetails:Y},created(){this.$gtag.pageview(this.$route)},data:()=>({contacts:[{id:1,name:"Turin, Italy",icon:"map-pin"},{id:2,name:"ali.yassine26@gmail.com",icon:"mail"}]}),mounted(){l().replace()},updated(){l().replace()},methods:{}};const R=(0,U.Z)($,[["render",s]]);var G=R},3872:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var a=r(6252);const i={class:"container mx-auto"};function s(e,t,r,s,o,l){const n=(0,a.up)("ProjectsGrid");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(n)])}var o=r(4052),l={name:"Projects",components:{ProjectsGrid:o.Z},created(){this.$gtag.pageview(this.$route)}},n=r(3744);const d=(0,n.Z)(l,[["render",s]]);var c=d},67:function(e,t,r){r.r(t),r.d(t,{default:function(){return se}});var a=r(6252);const i={class:"container mx-auto mt-10 sm:mt-20"};function s(e,t,r,s,o,l){const n=(0,a.up)("ProjectHeader"),d=(0,a.up)("ProjectGallery"),c=(0,a.up)("ProjectInfo"),m=(0,a.up)("ProjectRelatedProjects");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(n,{singleProjectHeader:e.singleProjectHeader},null,8,["singleProjectHeader"]),(0,a.Wm)(d,{projectImages:e.projectImages},null,8,["projectImages"]),(0,a.Wm)(c,{projectInfo:e.projectInfo},null,8,["projectInfo"]),(0,a.Wm)(m,{relatedProject:e.relatedProject},null,8,["relatedProject"])])}var o=r(8508),l=r.n(o),n=r(3577);const d={class:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},c={class:"flex"},m={class:"flex items-center mr-10"},u=(0,a._)("i",{"data-feather":"clock",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),p={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},g={class:"flex items-center"},b=(0,a._)("i",{"data-feather":"tag",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),f={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"};function x(e,t,r,i,s,o){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",d,(0,n.zw)(r.singleProjectHeader.singleProjectTitle),1),(0,a._)("div",c,[(0,a._)("div",m,[u,(0,a._)("span",p,(0,n.zw)(r.singleProjectHeader.singleProjectDate),1)]),(0,a._)("div",g,[b,(0,a._)("span",f,(0,n.zw)(r.singleProjectHeader.singleProjectTag),1)])])])}var h={props:["singleProjectHeader"]},y=r(3744);const j=(0,y.Z)(h,[["render",x]]);var k=j;const w={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},v=["src"];function _(e,t,r,i,s,o){return(0,a.wg)(),(0,a.iD)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectImages,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-10 sm:mb-0",key:e.id},[(0,a._)("img",{src:e.img,class:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:"{{ projectImage.title }}"},null,8,v)])))),128))])}var I={props:["projectImages"]};const P=(0,y.Z)(I,[["render",_]]);var D=P;const q={class:"block sm:flex gap-0 sm:gap-10 mt-14"},H={class:"w-full sm:w-1/3 text-left"},S={class:"mb-7"},C={class:"font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"},T={class:"leading-loose"},z={class:"mb-7"},U={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},L={class:"font-general-regular text-primary-dark dark:text-ternary-light"},M={class:"mb-7"},W={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},E={class:"font-general-regular text-primary-dark dark:text-ternary-light"},F={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},K={class:"flex items-center gap-3 mt-5"},A=["href"],N=["data-feather"],Z={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},O={class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"};function V(e,t,r,i,s,o){return(0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("div",H,[(0,a._)("div",S,[(0,a._)("p",C,(0,n.zw)(r.projectInfo.clientHeading),1),(0,a._)("ul",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.companyInfos,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"font-general-regular text-ternary-dark dark:text-ternary-light"},[(0,a._)("span",null,(0,n.zw)(e.title)+": ",1),(0,a._)("a",{href:"#",class:(0,n.C_)("Website"==e.title||"Phone"==e.title?"hover:underline cursor-pointer":""),"aria-label":"Project Website and Phone"},(0,n.zw)(e.details),3)])))),128))])]),(0,a._)("div",z,[(0,a._)("p",U,(0,n.zw)(r.projectInfo.objectivesHeading),1),(0,a._)("p",L,(0,n.zw)(r.projectInfo.objectivesDetails),1)]),(0,a._)("div",M,[(0,a._)("p",W,(0,n.zw)(r.projectInfo.technologies[0].title),1),(0,a._)("p",E,(0,n.zw)(r.projectInfo.technologies[0].techs.join(", ")),1)]),(0,a._)("div",null,[(0,a._)("p",F,(0,n.zw)(r.projectInfo.socialSharingsHeading),1),(0,a._)("div",K,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.socialSharings,(e=>((0,a.wg)(),(0,a.iD)("a",{key:e.id,href:e.url,target:"__blank","aria-label":"Share Project",class:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"},[(0,a._)("i",{"data-feather":e.icon,class:"w-4 lg:w-5 h-4 lg:h-5"},null,8,N)],8,A)))),128))])])]),(0,a._)("div",Z,[(0,a._)("p",O,(0,n.zw)(r.projectInfo.projectDetailsHeading),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.projectDetails,(e=>((0,a.wg)(),(0,a.iD)("p",{key:e.id,class:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"},(0,n.zw)(e.details),1)))),128))])])}var Y={props:["projectInfo"],mounted(){l().replace()},updated(){l().replace()}};const $=(0,y.Z)(Y,[["render",V]]);var R=$;const G={class:"mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},J={class:"font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"},X={class:"grid grid-cols-1 sm:grid-cols-4 gap-10"},B=["src","alt"];function Q(e,t,r,i,s,o){return(0,a.wg)(),(0,a.iD)("div",G,[(0,a._)("p",J,(0,n.zw)(r.relatedProject.relatedProjectsHeading),1),(0,a._)("div",X,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.relatedProject.relatedProjects,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("img",{src:e.img,class:"rounded-xl cursor-pointer",alt:e.title},null,8,B)])))),128))])])}var ee={props:["relatedProject"]};const te=(0,y.Z)(ee,[["render",Q]]);var re=te,ae={name:"Projects",created(){this.$gtag.pageview(this.$route)},components:{ProjectHeader:k,ProjectGallery:D,ProjectInfo:R,ProjectRelatedProjects:re},data:()=>({singleProjectHeader:{singleProjectTitle:"Project Management UI",singleProjectDate:"Jul 26, 2021",singleProjectTag:"UI / Frontend"},projectImages:[{id:1,title:"Kabul Project Management UI",img:r(2035)},{id:2,title:"Kabul Project Management UI",img:r(7294)},{id:3,title:"Kabul Project Management UI",img:r(8687)}],projectInfo:{clientHeading:"About Client",companyInfos:[{id:1,title:"Name",details:"Company Ltd"},{id:2,title:"Services",details:"UI Design & Frontend Development"},{id:3,title:"Website",details:"https://company.com"},{id:4,title:"Phone",details:"555 8888 888"}],objectivesHeading:"Objective",objectivesDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",technologies:[{title:"Tools & Technologies",techs:["HTML","CSS","JavaScript","Vue.js","TailwindCSS","AdobeXD"]}],projectDetailsHeading:"Challenge",projectDetails:[{id:1,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."},{id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:3,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:4,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."}],socialSharingsHeading:"Share This",socialSharings:[{id:1,name:"Twitter",icon:"twitter",url:"https://twitter.com/aliyassine8"},{id:2,name:"Instagram",icon:"instagram",url:"https://instagram.com/yassine2k"},{id:3,name:"Facebook",icon:"facebook",url:"https://facebook.com/"},{id:4,name:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/in/yassine2k"}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:1,title:"Mobile UI",img:r(2725)},{id:2,title:"Web Application",img:r(4600)},{id:3,title:"UI Design",img:r(7034)},{id:4,title:"Kabul Mobile App UI",img:r(8687)}]}}),mounted(){l().replace()},updated(){l().replace()},methods:{}};const ie=(0,y.Z)(ae,[["render",s]]);var se=ie},2725:function(e,t,r){e.exports=r.p+"img/mobile-project-1.8b4f9e2f.jpg"},8687:function(e,t,r){e.exports=r.p+"img/mobile-project-2.9bd76372.jpg"},2035:function(e,t,r){e.exports=r.p+"img/ui-project-1.96e7f21e.jpg"},7034:function(e,t,r){e.exports=r.p+"img/ui-project-2.afd87ce7.jpg"},4600:function(e,t,r){e.exports=r.p+"img/web-project-1.d1debdf5.jpg"},7294:function(e,t,r){e.exports=r.p+"img/web-project-2.ecd6c182.jpg"}}]);
//# sourceMappingURL=projects.07b769a0.js.map