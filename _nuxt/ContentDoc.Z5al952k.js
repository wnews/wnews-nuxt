import{D as d,E as v,s as y,G as D,B as w,m as g,d as H,H as x,I as S,J as s}from"./entry.34xiocKQ.js";import b from"./ContentRenderer.xIcEPclr.js";import q from"./ContentQuery.0RDsIQZC.js";import"./ContentRendererMarkdown.vue.yzCkXKen.js";import"./index.1dSrIji7.js";import"./preview.a1NCaHXn.js";import"./asyncData.edzDmU6z.js";import"./query.dw2Buo-U.js";const a=(u,p=y())=>{const e=d(u),m=g();v(()=>d(u),(n=e)=>{if(!p.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),m.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),D(()=>w(t))},{immediate:!0})},$=H({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(u){const{contentHead:p}=g().public.content,e=x(),{tag:m,excerpt:f,path:n,query:t,head:r}=u,c=r===void 0?p:r,l={...t||{},path:n||(t==null?void 0:t.path)||S(y().path),find:"one"},C=(o,i)=>s("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return s(q,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:_})=>{var h;return c&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:_,excerpt:f,...this.$attrs})}:({data:o})=>(c&&a(o),s(b,{value:o,excerpt:f,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):C("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||s("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||s("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),j=$,E=j;export{E as default};
