"use strict";(self.webpackChunkmy_react_goit_project_1=self.webpackChunkmy_react_goit_project_1||[]).push([[763],{1763:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var n=r(9439),a=r(1087),s=r(3433),o=r(2791),c=r(4165),l=r(5861),i=r(1243),u=r(1731),p="https://645639fe5f9a4f23613e11e5.mockapi.io/users";function f(){return(f=(0,l.Z)((0,c.Z)().mark((function e(t,r){var n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Z)({method:"get",url:"".concat(p,"/?following=").concat(r),params:{page:t,limit:3}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),u.ZP.error("Server not response");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=(0,l.Z)((0,c.Z)().mark((function e(t){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Z)({method:"get",url:p,params:{page:t,limit:3}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),u.ZP.error("Server not response");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(e){return h.apply(this,arguments)}function h(){return(h=(0,l.Z)((0,c.Z)().mark((function e(t){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Z)({method:"get",url:"".concat(p,"/?following=").concat(t)});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),u.ZP.error("Server not response");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(){return(v=(0,l.Z)((0,c.Z)().mark((function e(t,r,n){var a;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Z)({method:"put",url:"".concat(p,"/").concat(t),data:{followers:r,following:n}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),u.ZP.error("Server not response");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var m="User_img__zEo6s",g="User_btn__YwPpS",x="User_text__OLcgj",Z="User_list_el__XddUQ",w="User_img_wrapp__X07Gi",j=r(184);var b=function(e){var t=e.followers,r=e.avatar,a=e.tweets,s=e.following,c=e.id,l=(0,o.useState)(t),i=(0,n.Z)(l,2),p=i[0],f=i[1],d=(0,o.useState)(s),_=(0,n.Z)(d,2),h=_[0],b=_[1],y=(0,o.useState)(!1),N=(0,n.Z)(y,2),C=N[0],k=N[1],F=function(){b(!h),k(!0),f(h?p-1:p+1),h?(0,u.Am)("NOT FOLLOW",{icon:"\ud83d\ude14",style:{color:"#5CD3A8",fontFamily:"Montserrat",width:"196px"}}):(0,u.Am)("FOLLOWING",{icon:"\ud83d\udd25",style:{color:"#5CD3A8",fontFamily:"Montserrat",width:"196px"}})};return(0,o.useEffect)((function(){C&&function(e,t,r){v.apply(this,arguments)}(c,p,h)}),[C,c,p,h]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:w,children:(0,j.jsx)("img",{className:m,src:r,alt:"avatar"})}),(0,j.jsxs)("ul",{className:x,children:[(0,j.jsx)("li",{className:Z,children:(0,j.jsxs)("p",{children:[a," Tweets"]})}),(0,j.jsx)("li",{className:Z,children:(0,j.jsxs)("p",{children:[p.toLocaleString("en")," Followers"]})})]}),h?(0,j.jsx)("button",{style:{backgroundColor:"#5CD3A8"},className:g,type:"button",onClick:F,children:"FOLLOWING"}):(0,j.jsx)("button",{style:{backgroundColor:"#EBD8FF"},className:g,type:"button",onClick:F,children:"FOLLOW"})]})},y="UserCard_card__215tK",N="UserCard_bgi_wrapp__tkRz7",C="UserCard_logo_wrapp__MhdCn",k="UserCard_border_bottom__DzElR",F="UserCard_user_wrapp__AgoMq",L="UserCard_btn__ELtFM",U=r(3368);var P=function(){var e=(0,U.EQ)(),t=e.users,r=e.setUsers,n=e.query,a=e.page,c=e.setPage,l=e.arrayLangth;return(0,o.useEffect)((function(){"all"===n&&function(e){return d.apply(this,arguments)}(a).then((function(e){return r((function(t){return[].concat((0,s.Z)(t),(0,s.Z)(e))}))})),function(e,t){return f.apply(this,arguments)}(a,n).then((function(e){return r((function(t){return[].concat((0,s.Z)(t),(0,s.Z)(e))}))}))}),[a,n]),(0,j.jsxs)(j.Fragment,{children:[null===t||void 0===t?void 0:t.map((function(e){var t=e.followers,r=e.id,n=e.avatar,a=e.tweets,s=e.following;return(0,j.jsxs)("div",{className:y,children:[(0,j.jsxs)("div",{className:N,children:[(0,j.jsx)("div",{className:C}),(0,j.jsx)("div",{className:k})]}),(0,j.jsx)("div",{className:F,children:(0,j.jsx)(b,{followers:t,avatar:n,following:s,tweets:a,id:r})})]},r)})),t.length!==l.length&&(0,j.jsx)("button",{className:L,type:"button",onClick:function(){c((function(e){return e+1})),setTimeout((function(){window.scrollBy({top:500,behavior:"smooth"})}),300)},children:"Load More"})]})},E=r(1692),O=r(2486),S=r(1890),A=r(5291),D=r(3166),M=r(1462),T=r(974),W="Filter_filter_form__5Zhxm";var z=function(){var e=(0,U.EQ)(),t=e.setPage,r=e.setUsers,n=e.setQuery,a=e.setArrayLangth;return(0,o.useEffect)((function(){_("").then((function(e){return a(e)}))}),[]),(0,j.jsxs)(S.Z,{className:W,children:[(0,j.jsx)(A.Z,{id:"radio-buttons-group-label",children:"Tweets"}),(0,j.jsxs)(D.Z,{row:!0,onChange:function(e){a([]),r([]),n(e.target.value),t(1),"all"===e.target.value&&_("").then((function(e){return a(e)})),"all"!==e.target.value&&_(e.target.value).then((function(e){return a(e)}))},"aria-labelledby":"radio-buttons-group-label",defaultValue:"all",name:"radio-buttons-group",children:[(0,j.jsx)(M.Z,{value:"all",control:(0,j.jsx)(T.Z,{}),label:"All"}),(0,j.jsx)(M.Z,{value:"false",control:(0,j.jsx)(T.Z,{}),label:"Follow "}),(0,j.jsx)(M.Z,{value:"true",control:(0,j.jsx)(T.Z,{}),label:"Followings "})]})]})};var I=function(){var e=(0,o.useState)(!1),t=(0,n.Z)(e,2),r=t[0],s=t[1];return(0,o.useEffect)((function(){window.scroll({top:0,behavior:"smooth"}),setTimeout((function(){s(!0)}),700)}),[]),r?(0,j.jsxs)("section",{className:E.Z.section,children:[(0,j.jsx)(z,{}),(0,j.jsxs)("div",{className:E.Z.container,children:[(0,j.jsx)(P,{}),(0,j.jsx)(a.rU,{className:E.Z.btn,to:"/",children:"Home"})]})]}):(0,j.jsx)(O.Z,{})}},1692:function(e,t){t.Z={container:"Page_container__0I38Y",section:"Page_section__EfDxr",btn:"Page_btn__zgIhp",title:"Page_title__LWhXY",wrapp_title:"Page_wrapp_title__Cta+6"}}}]);
//# sourceMappingURL=763.c9f604f4.chunk.js.map