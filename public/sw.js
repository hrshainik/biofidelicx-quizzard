if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-8ba0688acd913e7a.js",revision:"8ba0688acd913e7a"},{url:"/_next/static/chunks/pages/404-7644620bdae7446d.js",revision:"7644620bdae7446d"},{url:"/_next/static/chunks/pages/_app-a8cd283f8d4fd688.js",revision:"a8cd283f8d4fd688"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/about-4524af8c77588a83.js",revision:"4524af8c77588a83"},{url:"/_next/static/chunks/pages/category-d08eea192e202d9a.js",revision:"d08eea192e202d9a"},{url:"/_next/static/chunks/pages/category/%5BcSlug%5D-f0c2ddb8691ea8a2.js",revision:"f0c2ddb8691ea8a2"},{url:"/_next/static/chunks/pages/category/%5BcSlug%5D/quiz/%5BqSlug%5D-f60fba23658462ad.js",revision:"f60fba23658462ad"},{url:"/_next/static/chunks/pages/contact-240c564f3d57f7bd.js",revision:"240c564f3d57f7bd"},{url:"/_next/static/chunks/pages/index-4c8868c4877c5c2e.js",revision:"4c8868c4877c5c2e"},{url:"/_next/static/chunks/pages/log-in-741d75dcb0091cac.js",revision:"741d75dcb0091cac"},{url:"/_next/static/chunks/pages/sign-up-bb0b59e5ea2795cc.js",revision:"bb0b59e5ea2795cc"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"5752944655d749a0"},{url:"/_next/static/css/b45e2fd819fd7bd8.css",revision:"b45e2fd819fd7bd8"},{url:"/_next/static/media/shadow-inverse.0cbd392d.png",revision:"0cbd392d"},{url:"/_next/static/media/shadow.9c542695.png",revision:"9c542695"},{url:"/_next/static/ytjwUtE97Ty167uLe64gB/_buildManifest.js",revision:"d682435b8d4b9e9a47038a0498893184"},{url:"/_next/static/ytjwUtE97Ty167uLe64gB/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/ytjwUtE97Ty167uLe64gB/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"23bf3f7a27a1810138c9590b917826a7"},{url:"/android-chrome-512x512.png",revision:"ba45e6a690256cac7223ec3db97b409f"},{url:"/apple-touch-icon.png",revision:"2dd4cd1958212fbe1f397ebb222eee73"},{url:"/dummymember.jpg",revision:"94ec96491d7531f0a493bed28b6da2db"},{url:"/favicon-16x16.png",revision:"7661059cc11d1957e3d240ad4c89b743"},{url:"/favicon-32x32.png",revision:"712d889d1468e2de019464a4a6406148"},{url:"/favicon.ico",revision:"06728b84ea2c32deb5be5ac7f80905e7"},{url:"/hero-img.jpg",revision:"b616b30de1567845a04471ddfd1d98c9"},{url:"/icon-192x192.png",revision:"77e567167d8fa5d51ac61d397e1616fa"},{url:"/icon-256x256.png",revision:"dbb0f2a908b5fe4b7021f34f32485584"},{url:"/icon-384x384.png",revision:"70aabb5b2dc621a7fa3f546d16c48622"},{url:"/icon-512x512.png",revision:"6292d6fc0a85f37f8771a0d489e205bf"},{url:"/logo-dark.svg",revision:"6675eefbbc3cc531a07810fead9661b5"},{url:"/logo.svg",revision:"4ded1ded68120ee6814381f9b25100a9"},{url:"/manifest.json",revision:"5cb6cc67df71e1e39677414e8d50850f"},{url:"/shadow-inverse.png",revision:"97e08a69faeae900c4ce626a6869acfd"},{url:"/shadow.png",revision:"5da44faf8fd57cebbb210452d21ad73b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));