import{_ as n}from"./index-793d780f.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-37d0e686.js"),["assets/PolygonDrawer-37d0e686.js","assets/PolygonDrawerBase-a2f0c6e8.js","assets/index-793d780f.js","assets/index-11d58677.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-be78482b.js"),["assets/TriangleDrawer-be78482b.js","assets/PolygonDrawerBase-a2f0c6e8.js","assets/index-793d780f.js","assets/index-11d58677.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
