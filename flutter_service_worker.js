'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b5e2edd99107c143cb3f7820806bd5b5",
"index.html": "4a4f9f852649e940496d2bafff9eba06",
"/": "4a4f9f852649e940496d2bafff9eba06",
"main.dart.js": "272496f608d0e698aaef825360a5f3be",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "102d64a90a38c3251e06a0fe42f384a9",
"assets/AssetManifest.json": "38979cc8c7ef733b1c2072d063dc7aae",
"assets/NOTICES": "935da19f1a04a05be365b9c9e7c31b26",
"assets/FontManifest.json": "85a907975f2575481c3906947198e2d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "042d2d5435acf4c1d9464c6f3020d16f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/replay.png": "6bdd52a1f967d1e6c414ecbc3c9f4d6d",
"assets/assets/images/start-button.png": "61add865c02ab3de3cae5fa5e48fe77d",
"assets/assets/images/ball.png": "ba19e574c15bc96ac2dcb9476f96770e",
"assets/assets/images/male.png": "e79a4cb5adb4c24034a1c0d3cbdbeb9b",
"assets/assets/images/pause_play.png": "8dbb42ef1503d8affb5e6213f5650fc1",
"assets/assets/images/hearth.png": "001187c0c9923bdc4a330ab8f4cd904b",
"assets/assets/images/dino_sprite_sheet.png": "b35f4dbe1513c61146da143674613790",
"assets/assets/images/dino_sprite.gif": "96870b29fbf82f779dc63292242011b4",
"assets/assets/images/giphy.gif": "14deaf00acd3f0cdecd7e94721ac9282",
"assets/assets/images/heli.png": "5f7db259f64d5e4498a30d0633b61be4",
"assets/assets/images/parallax/plx-2.png": "53d9e937ac94613d7d408fcc50fa67c7",
"assets/assets/images/parallax/plx-3.png": "b50ebfb91131365a479f229c0325c033",
"assets/assets/images/parallax/plx-1.png": "25c49cc12aeed4d2799dc9fb52e3c213",
"assets/assets/images/parallax/plx-4.png": "58662c8e1ed9bd74717dfa54df862788",
"assets/assets/images/parallax/plx-5.png": "552941c58ccaa9782ebee6496e77e003",
"assets/assets/images/parallax/plx-6.png": "07b9aeda90128cb6e63954f56d0af5d7",
"assets/assets/images/background.png": "6c7f2806659fecd37b1a55da26d142f9",
"assets/assets/images/pause22.png": "aec75bb06e6b4510f704440b5479da04",
"assets/assets/images/female.png": "ab3529a0c45f6ee8e4a2bb5ba8bb7d7a",
"assets/assets/images/pause.png": "df1154278623e2dd40a4487ee96c2e0c",
"assets/assets/images/Bat/Flying%2520(46x30).png": "7986dfad436b4607994d3fe1ecced6ce",
"assets/assets/images/woman.png": "cc4c64115f3a8e490c902ae96bd7a253",
"assets/assets/images/leena.png": "46201a237d6e509d1bf6015524454a3a",
"assets/assets/images/Rino/Run%2520(52x34).png": "ec606d010f9bc60557b58c4ec855524e",
"assets/assets/images/AngryPig/Walk%2520(36x30).png": "ce06f2c96e2ac0c6cd14e854a870e3e8",
"assets/assets/images/bg.jpeg": "608bc08f4a476eb8d4291f0f80b2fef2",
"assets/assets/images/volume-mute.png": "1b049d276f4885a7b180c44c504715be",
"assets/assets/images/pause2.png": "f53a784fa924fff7d0890d1a4e04825c",
"assets/assets/images/button.png": "ca73bab66c3b71033ce76aee1032aace",
"assets/assets/images/BG.png": "6c7f2806659fecd37b1a55da26d142f9",
"assets/assets/tiles/map1.tmx": "998844b5382310b44590577b7a477973",
"assets/assets/tiles/BG2.tsx": "0d8a67419b8107e29fe98da462fdbcc6",
"assets/assets/tiles/map.tmx": "af25ef3511b6fd57ed0d638e8c9a37a6",
"assets/assets/audio/hurt7.wav": "1d3abcc01a999fc13bbb91e75a15c72c",
"assets/assets/audio/8BitPlatformerLoop.wav": "f6b03e1f08c979b5ea451635495ab4c3",
"assets/assets/audio/readme.md": "125e571fd712037b1e0f4580722c327b",
"assets/assets/audio/wrong.mp3": "48f9d11ba4fc6a005543fda8e077aa68",
"assets/assets/audio/jump14.wav": "117ba1ac434eaba4dc894b0bfe16e42e",
"assets/assets/fonts/Audiowide/Audiowide-Regular.ttf": "e9ee108cd098321ac27b95ebcebfcdf6",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
