"use strict";var precacheConfig=[["/struisvogel/index.html","069a3a320c0f1f8ac2f263ad85a68947"],["/struisvogel/static/css/main.fe092796.css","e80e86f0165438ed8f623002495ae379"],["/struisvogel/static/js/main.bdf7438d.js","8ad24bf4194efe8f7c198431be453007"],["/struisvogel/static/media/base.37711644.jpg","37711644778246b6ce9a4b2785787702"],["/struisvogel/static/media/db-01.ad67951d.jpg","ad67951d82157e272ee71de4fbfdf738"],["/struisvogel/static/media/db-02.123059b9.jpg","123059b9341fe5e5814d73c2c4a4b653"],["/struisvogel/static/media/db-03.b3d8a64d.jpg","b3d8a64db1225131d6b63bc3e95cd03c"],["/struisvogel/static/media/facebook.ca749449.jpg","ca74944976ddebcff360713a1df2b46c"],["/struisvogel/static/media/grindr.ecfe629d.jpg","ecfe629d95f41680125209e74c3e0885"],["/struisvogel/static/media/header.161f2776.jpg","161f2776434fa38d58e1777922f4b26b"],["/struisvogel/static/media/strava.db92c828.jpg","db92c82892f0f0c06d6ba330a1251ac0"],["/struisvogel/static/media/struis-01.6e0031cf.jpg","6e0031cfc2ccce80be8b238f97fd91e0"],["/struisvogel/static/media/tdr-01.dcd1e333.jpg","dcd1e333e9d4a24425f0c7f24485e07a"],["/struisvogel/static/media/tinder.3c0c2cfe.jpg","3c0c2cfeedfa7d20f8c9110637e69038"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),e=urlsToCacheKeys.has(r));var a="/struisvogel/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});