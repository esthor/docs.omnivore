import{_ as o,c as a,a as e,b as i,t as r,d as n,o as s}from"./app.c0255b8e.js";const _=JSON.parse('{"title":"Exporting your data","description":"","frontmatter":{"title":"Exporting your data","editLink":true},"headers":[{"level":2,"title":"Exporting with the exporter tool","slug":"exporting-with-the-exporter-tool","link":"#exporting-with-the-exporter-tool","children":[{"level":3,"title":"Export archives","slug":"export-archives","link":"#export-archives","children":[]}]}],"relativePath":"using/exporting.md","lastUpdated":1730101337000}'),l={name:"using/exporting.md"},h={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=n('<p>The best way to export your data is to use the Obsidian client to sync all of your data into an Obsidian vault. If you are not familiar with Obsidian you can use our exporter tool to export all of your links, highlights, and saved page content.</p><nav class="table-of-contents"><ul><li><a href="#exporting-with-the-exporter-tool">Exporting with the exporter tool</a><ul><li><a href="#export-archives">Export archives</a></li></ul></li></ul></nav><h2 id="exporting-with-the-exporter-tool" tabindex="-1">Exporting with the exporter tool <a class="header-anchor" href="#exporting-with-the-exporter-tool" aria-hidden="true">#</a></h2><p>To use the exporter tool you will need to login to your account online at <a href="https://omnivore.app/login" target="_blank" rel="noreferrer">https://omnivore.app/login</a>. Once you have done this, navigate to your account page by opening the menu and clicking on your user name. You can access the page directly <a href="https://omnivore.app/settings/account" target="_blank" rel="noreferrer">here</a>.</p><p>On the account page click the <code>Export Data</code> button. This will gather all of your saved links, their page content, and your highlights into a single zip file. This can take some time depending on your account size, but you should receive an email once the process has started. Usually within 30 minutes of clicking the Export button. The entire process can take about 1hr per-1000 saved items.</p><p>Once completed, you will receive an export link in your email. This link is valid for 24hrs and can be used to download all your data.</p><h3 id="export-archives" tabindex="-1">Export archives <a class="header-anchor" href="#export-archives" aria-hidden="true">#</a></h3><p>The archive will contain a few items:</p><ol><li><code>./contents/*.html</code>: this is all of the content of your saved pages</li><li><code>./highlights/*.md</code>: this is all of your highlights saved in markdown format. The slug attribute from your metadata is used as the filename.</li><li><code>metadata_*.json</code>: Metadata files for all your saved items. These are provided in batches of 20 items. So items 0-20, 20-40, etc.</li></ol>',9);function p(t,u,g,x,f,m){return s(),a("div",null,[e("h1",h,[i(r(t.$frontmatter.title)+" ",1),c]),d])}const y=o(l,[["render",p]]);export{_ as __pageData,y as default};
