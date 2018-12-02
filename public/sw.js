/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "precache-manifest.3d08f580db39b4904c2a014d2ec86b3b.js"
);

workbox.core.setCacheNameDetails({prefix: "nellow-0.0.0"});

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/cloud.google.com/, workbox.strategies.cacheFirst({ "cacheName":"google-cloud-image", plugins: [new workbox.expiration.Plugin({"maxAgeSeconds":300,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/https:\/\/use.fontawesome.com/, workbox.strategies.cacheFirst({ "cacheName":"font-awesome", plugins: [new workbox.expiration.Plugin({"maxAgeSeconds":300,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/icon-.*/, workbox.strategies.cacheFirst({ "cacheName":"nellow-icons", plugins: [new workbox.expiration.Plugin({"maxAgeSeconds":300,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/\.css$/, workbox.strategies.cacheFirst({ "cacheName":"css-cache", plugins: [new workbox.expiration.Plugin({"maxAgeSeconds":300,"purgeOnQuotaError":false})] }), 'GET');
