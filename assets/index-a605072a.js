import{_ as n}from"./index-b7464ac9.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-194a34a0.js"),["assets/PolygonDrawer-194a34a0.js","assets/PolygonDrawerBase-3c82a6cb.js","assets/index-b7464ac9.js","assets/index-b46c16f9.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-5f6cc100.js"),["assets/TriangleDrawer-5f6cc100.js","assets/PolygonDrawerBase-3c82a6cb.js","assets/index-b7464ac9.js","assets/index-b46c16f9.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
