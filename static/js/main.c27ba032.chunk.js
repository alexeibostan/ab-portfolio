(this["webpackJsonpab-portfolio"]=this["webpackJsonpab-portfolio"]||[]).push([[0],{68:function(e,a,t){e.exports=t(80)},73:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),i=t.n(o),l=(t(73),t(62)),c=t(32),s=t(114),m=t(121),p=t(130),u=t(127),E=t(60),d=t.n(E),f=t(129),g=t(117),h=t(118),b=t(120),y=t(122),v=t(133),C=t(131),O=t(36),j=t(123),w=t(134),x=Object(s.a)((function(e){return{chip:{margin:e.spacing(.5)}}}));function N(e){var a=e.skill,t=x();return r.a.createElement(w.a,{className:t.chip,variant:"outlined",avatar:r.a.createElement(v.a,null,a.ext),label:a.title})}var k=Object(s.a)((function(e){return{root:{width:272},avatar:{backgroundColor:"transparent",color:e.palette.secondary.main},chip:{margin:e.spacing(.5)},chipContainer:{marginTop:e.spacing(1.3)},cardActions:{display:"flex",justifyContent:"flex-end"}}}));function S(e){var a,t,n=e.project,o=e.onMoreAction,i=k();return r.a.createElement(g.a,{className:i.root},r.a.createElement(h.a,{avatar:r.a.createElement(C.a,{title:n.role,"aria-label":n.role},r.a.createElement(v.a,{"aria-label":"company",className:i.avatar},n.role.split(" ")[0].slice(0,1).toUpperCase(),n.role.split(" ")[1].slice(0,1).toUpperCase())),title:n.title,subheader:(t=n,t.type+" "+t.year)}),r.a.createElement(b.a,{className:i.cardContent},r.a.createElement(O.a,{variant:"body2",color:"textSecondary",component:"p"},(a=n.description).length>=115?a.slice(0,90)+"...":a),r.a.createElement(m.a,{className:i.chipContainer,container:!0,direction:"column",justify:"center",alignItems:"flex-start"},n.skills.slice(0,5).map((function(e,a){return r.a.createElement(N,{key:a,skill:e})})))),r.a.createElement(y.a,null,r.a.createElement(j.a,{size:"small",color:"primary",onClick:function(){return o()}},"ALTRE INFO")))}var T=Object(s.a)((function(e){return{root:{flexGrow:1,display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",marginTop:e.spacing(3),marginBottom:e.spacing(3)},title:{color:e.palette.primary.dark}}}));function _(e){var a=e.title,t=T();return r.a.createElement("div",{className:t.root},r.a.createElement(O.a,{className:t.title,variant:"h5"},a))}var R=t(124),D=Object(s.a)((function(e){return{root:{marginTop:e.spacing(5),marginBottom:e.spacing(5)},title:{color:e.palette.primary.dark},subtitle:{marginTop:e.spacing(2)},divider:{backgroundColor:e.palette.secondary.main,marginTop:e.spacing(1)}}}));function I(){var e=D();return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{container:!0,alignItems:"center",justify:"flex-start"},r.a.createElement(O.a,{className:e.title,variant:"h3"},"Sviluppatore Front End")),r.a.createElement(m.a,{className:e.subtitle,container:!0,alignItems:"center",justify:"flex-start"},r.a.createElement(O.a,{variant:"body1"},"Credere in te stesso e il duro lavoro ti porter\xe0 sempre al successo.")),r.a.createElement(R.a,{className:e.divider}))}var A=Object(s.a)((function(e){return{root:{width:272,padding:e.spacing(3)},chipContainer:{marginTop:e.spacing(1.3)},descContainer:{marginTop:e.spacing(1.3)},companyInfo:{marginTop:e.spacing(1.3)},divider:{backgroundColor:e.palette.secondary.main}}}));function B(e){var a=e.project,t=A();return a?r.a.createElement("div",{className:t.root},r.a.createElement("div",null,r.a.createElement(O.a,{variant:"h6"},a.title),r.a.createElement(O.a,{color:"secondary",variant:"subtitle1"},a.type)),r.a.createElement(R.a,{className:t.divider}),r.a.createElement("div",{className:t.companyInfo},r.a.createElement(O.a,{variant:"subtitle2"},a.company," ",a.year),r.a.createElement(O.a,{variant:"subtitle2"},a.client),r.a.createElement(O.a,{variant:"subtitle2"},a.role)),r.a.createElement("div",{className:t.descContainer},r.a.createElement(O.a,{variant:"body1"},a.description)),r.a.createElement(m.a,{className:t.chipContainer,container:!0,direction:"row",justify:"flex-start",alignItems:"center"},a.skills.map((function(e,a){return r.a.createElement(N,{key:a,skill:e})})))):null}var P=t(128),U=t(57),F=t.n(U),W=t(58),M=t.n(W),H=t(56),J=t.n(H),L=t(59),G=t.n(L),z=t(125),$=t(126),q=t(132),K=Object(s.a)((function(e){return{icons:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Q(){var e=K();return r.a.createElement(z.a,{position:"fixed"},r.a.createElement($.a,null,r.a.createElement(u.a,{edge:"start",className:e.icons,color:"inherit","aria-label":"icon"},r.a.createElement(v.a,{alt:"Alexei Bostan",src:"https://alexeibostan.github.io/ab-portfolio/logo.png"})),r.a.createElement(q.a,{smDown:!0},r.a.createElement(O.a,{variant:"h6",component:"h1",className:e.title},"Alexei Bostan Portfolio")),r.a.createElement(q.a,{smUp:!0},r.a.createElement(O.a,{variant:"h6",component:"h1",className:e.title},"Alexei Bostan")),r.a.createElement(q.a,{smDown:!0},r.a.createElement(P.a,{target:"_blank",href:"https://github.com/alexeibostan",color:"inherit"},r.a.createElement(u.a,{edge:"end",className:e.icons,color:"inherit","aria-label":"github"},r.a.createElement(J.a,null)))),r.a.createElement(P.a,{target:"_blank",href:"https://www.linkedin.com/in/alexei-bostan-6706b6a7/",color:"inherit"},r.a.createElement(u.a,{edge:"end",className:e.icons,color:"inherit","aria-label":"linkedin"},r.a.createElement(F.a,null))),r.a.createElement(q.a,{smDown:!0},r.a.createElement(P.a,{target:"_blank",href:"https://www.facebook.com/alexandre.lord1",color:"inherit"},r.a.createElement(u.a,{edge:"end",className:e.icons,color:"inherit","aria-label":"facebook"},r.a.createElement(M.a,null)))),r.a.createElement(P.a,{href:"https://alexeibostan.github.io/ab-portfolio/RESUME-Alexei-Bostan-IT.pdf",download:"RESUME-Alexei-Bostan",color:"inherit"},r.a.createElement(u.a,{edge:"end",className:e.icons,color:"inherit","aria-label":"github"},r.a.createElement(G.a,null)))))}var V=t(61),X=Object(V.a)({palette:{primary:{main:"#2F5597"},secondary:{main:"#ED7D31"},contrastThreshold:3,tonalOffset:.2}}),Y=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},bodyContainer:{padding:e.spacing(3),marginTop:64},drowerCloseButton:{position:"absolute",top:5,right:5,zIndex:2}}})),Z={projects:[],companies:[],detailProject:null,isDrowerOpen:!1};function ee(e,a){switch(a.type){case"FETCH_PROJECTS_SUCCESS":return Object(c.a)({},e,{projects:a.payload});case"FETCH_COMPANIES_SUCCESS":return Object(c.a)({},e,{companies:a.payload});case"OPEN_DROWER":return Object(c.a)({},e,{isDrowerOpen:!0});case"CLOSE_DROWER":return Object(c.a)({},e,{isDrowerOpen:!1});case"SHOW_DETAIL_PROJECT":return Object(c.a)({},e,{detailProject:a.payload,isDrowerOpen:!0});default:throw new Error}}function ae(){var e=Y(),a=Object(n.useReducer)(ee,Z),t=Object(l.a)(a,2),o=t[0],i=t[1],c=function(e){var a=[];return e.forEach((function(e){-1===a.indexOf(e.company)&&a.push(e.company)})),a};return Object(n.useEffect)((function(){fetch("https://alexeibostan.github.io/ab-portfolio/ab-projects.json").then((function(e){return e.json()})).then((function(e){console.log(e),i({type:"FETCH_COMPANIES_SUCCESS",payload:c(e)}),i({type:"FETCH_PROJECTS_SUCCESS",payload:e})}))}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{theme:X},r.a.createElement(r.a.Fragment,{key:"right"},r.a.createElement(p.a,{anchor:"right",open:o.isDrowerOpen,onClose:function(){return i({type:"CLOSE_DROWER"})}},r.a.createElement("div",null,r.a.createElement(u.a,{onClick:function(){return i({type:"CLOSE_DROWER"})},className:e.drowerCloseButton},r.a.createElement(d.a,null)),r.a.createElement(B,{project:o.detailProject})))),r.a.createElement(Q,null),r.a.createElement("div",{className:e.bodyContainer},r.a.createElement(I,null),o.companies.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement(_,{title:e}),r.a.createElement(m.a,{container:!0,alignItems:"center",justify:"flex-start",spacing:3},o.projects.filter((function(a){return a.company===e})).map((function(e,a){return r.a.createElement(m.a,{key:a,item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(S,{project:e,onMoreAction:function(){return i({type:"SHOW_DETAIL_PROJECT",payload:e})}}))}))))})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.c27ba032.chunk.js.map