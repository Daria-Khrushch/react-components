(this["webpackJsonpgoit-react-hw-01-components-new"]=this["webpackJsonpgoit-react-hw-01-components-new"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__1Gq7q",description:"Profile_description__1mK4D",avatar:"Profile_avatar__2TsmZ",name:"Profile_name__3ZtfM",tag:"Profile_tag__28MX0",location:"Profile_location__2kZXL",stats:"Profile_stats__3O7b9",label:"Profile_label__hw1gr",quantity:"Profile_quantity__11tRS"}},function(e,a,t){e.exports={item:"FriendsList_item__3fqP2",status:"FriendsList_status__kADVA",online:"FriendsList_online__1de1t",offline:"FriendsList_offline__3FR1d",avatar:"FriendsList_avatar__1g0H3",name:"FriendsList_name__Ub_56"}},function(e,a,t){e.exports={title:"Statistics_title__PvHKl",statList:"Statistics_statList__1OUI7",item:"Statistics_item__3T6ws",label:"Statistics_label__3wK8b",percentage:"Statistics_percentage__3Uwm6"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,,,function(e){e.exports=JSON.parse('[{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){},,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),s=t(7),i=t.n(s),r=(t(16),t(1)),l=t.n(r),d=t(0);function o(e){var a=e.avatar,t=e.username,c=e.tag,n=e.location,s=e.stats;return Object(d.jsxs)("div",{className:l.a.profile,children:[Object(d.jsxs)("div",{className:l.a.description,children:[Object(d.jsx)("img",{src:a,alt:"User avatar",className:l.a.avatar}),Object(d.jsx)("p",{className:l.a.name,children:t}),Object(d.jsxs)("p",{className:l.a.tag,children:["@",c]}),Object(d.jsx)("p",{className:l.a.location,children:n})]}),Object(d.jsxs)("ul",{className:l.a.stats,children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Followers"}),Object(d.jsx)("span",{className:l.a.quantity,children:s.followers})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Views"}),Object(d.jsx)("span",{className:l.a.quantity,children:s.views})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Likes"}),Object(d.jsx)("span",{className:l.a.quantity,children:s.likes})]})]})]})}var b=t(3),p=t.n(b);function u(e){var a=e.title,t=e.stats;return Object(d.jsxs)("section",{className:p.a.statistics,children:[a&&Object(d.jsx)("h2",{className:p.a.title,children:"Upload stats"}),Object(d.jsx)("ul",{className:p.a.statList,children:t.map((function(e){var a=e.id,t=e.label,c=e.percentage;return Object(d.jsxs)("li",{className:p.a.item,children:[Object(d.jsx)("span",{className:p.a.label,children:t}),Object(d.jsxs)("span",{className:p.a.percentage,children:[c,"%"]})]},a)}))})]})}var m=t(8),j=t(4),f=t(2),O=t.n(f);function h(e){var a=e.isOnline,t=e.name,c=e.avatar;return Object(d.jsxs)("li",{className:O.a.item,children:[Object(d.jsx)("span",{className:"".concat(O.a.status," ").concat(a?O.a.online:O.a.offline),children:a}),Object(d.jsx)("img",{className:O.a.avatar,src:c,alt:t,width:"48"}),Object(d.jsx)("p",{className:O.a.name,children:t})]})}function _(e){var a=e.friends;return Object(d.jsx)("ul",{className:O.a.friendList,children:a.map((function(e){var a=e.id,t=e.name,c=e.avatar,n=e.isOnline;return Object(d.jsx)(h,{avatar:c,name:t,isOnline:n},a)}))})}var y=t(9),x=t(10),v=t(11),g=t.n(v);function w(e){var a=e.items;return Object(d.jsxs)("table",{className:g.a.transactionHistory,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Currency"})]})}),Object(d.jsx)("tbody",{children:a.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.type}),Object(d.jsx)("td",{children:e.amount}),Object(d.jsx)("td",{children:e.currency})]},e.id)}))})]})}function N(){return Object(d.jsxs)("div",{children:[m.map((function(e){return Object(d.jsx)(o,{avatar:e.avatar,username:e.username,tag:e.tag,location:e.location,stats:e.stats},e.username)})),Object(d.jsx)(u,{title:"Upload stats",stats:j},j.id),Object(d.jsx)(u,{stats:j},j.id),Object(d.jsx)(_,{friends:y}),Object(d.jsx)(w,{items:x}),";"]})}t(18);i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.querySelector("#root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.4f6b7fff.chunk.js.map