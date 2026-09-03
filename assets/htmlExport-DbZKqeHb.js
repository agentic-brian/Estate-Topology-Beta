import{t as e}from"./filename-DoBu6VnV.js";import{captureDiagramPng as t}from"./imageExport-BttARA9K.js";function n(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}async function r(r,i,a){let o=await t(i,{scale:2}),s=n(r.name),c=n(r.preparedFor||``),l=n(r.preparedBy||``),u=n(r.date||``),d=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${s}</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: -apple-system, Segoe UI, Roboto, sans-serif; background: #f8fafc; color: #0f172a; }
  header { padding: 16px 24px; border-bottom: 1px solid #e2e8f0; background: #ffffff; }
  h1 { margin: 0 0 4px; font-size: 18px; }
  .meta { font-size: 12px; color: #64748b; }
  main { padding: 24px; display: flex; justify-content: center; }
  img { max-width: 100%; height: auto; cursor: zoom-in; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff; }
  img.zoomed { max-width: none; cursor: zoom-out; }
  .hint { text-align: center; font-size: 11px; color: #94a3b8; margin-top: 8px; }
</style>
</head>
<body>
<header>
  <h1>${s}</h1>
  <div class="meta">${c?`Prepared for: ${c}`:``}${c&&l?` &nbsp;·&nbsp; `:``}${l?`Prepared by: ${l}`:``}${u?` &nbsp;·&nbsp; ${u}`:``}</div>
</header>
<main>
  <div>
    <img src="${o}" alt="${s} architecture diagram" onclick="this.classList.toggle('zoomed')">
    <div class="hint">Click the diagram to zoom in/out.</div>
  </div>
</main>
</body>
</html>`,f=new Blob([d],{type:`text/html`}),p=URL.createObjectURL(f),m=document.createElement(`a`);m.href=p,m.download=`${e(a)}.html`,m.click(),URL.revokeObjectURL(p)}export{r as exportStandaloneHtml};