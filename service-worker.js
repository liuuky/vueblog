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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d026ef421c3794e912db774f1b2370b1"
  },
  {
    "url": "assets/css/0.styles.8a71b091.css",
    "revision": "0934cd5298c4351daad295ba5a44dab5"
  },
  {
    "url": "assets/img/addressChange.ff3d7e13.png",
    "revision": "ff3d7e13ddcf58cc80688cde4a5485c1"
  },
  {
    "url": "assets/img/bdefine.c2d5f774.png",
    "revision": "c2d5f774fd3f5fd5396d26a96ee35733"
  },
  {
    "url": "assets/img/brun.9ea517cf.png",
    "revision": "9ea517cf9916feaf3060ec51a7ae0a4f"
  },
  {
    "url": "assets/img/cache-200.45d79ba3.png",
    "revision": "45d79ba34ae999035084a4da44761712"
  },
  {
    "url": "assets/img/cache-all.660de25e.png",
    "revision": "660de25e20fccc6b545d907f75dbb12b"
  },
  {
    "url": "assets/img/cache-consult-304.bdc7e0b7.png",
    "revision": "bdc7e0b74c87189693d7b6841452eb41"
  },
  {
    "url": "assets/img/cache-demo.ee9d419a.png",
    "revision": "ee9d419af5d8776724282b3908b8e424"
  },
  {
    "url": "assets/img/cache-github.c5d86c6f.png",
    "revision": "c5d86c6ffb904e4b1a4515516743e912"
  },
  {
    "url": "assets/img/cache-lastmodify.f4683ea9.png",
    "revision": "f4683ea983ddcaf935cd62efb5246049"
  },
  {
    "url": "assets/img/cache-reopen.7fd0fdc8.png",
    "revision": "7fd0fdc8490760749f401d5a7efc5688"
  },
  {
    "url": "assets/img/cache-worker.9dd34199.png",
    "revision": "9dd341991567f6e4b969cfae8c007a65"
  },
  {
    "url": "assets/img/cdncache.5219c213.png",
    "revision": "5219c213af0feda70b3249900c97421a"
  },
  {
    "url": "assets/img/cdnnocahche.ecf6fe23.png",
    "revision": "ecf6fe23c5a2a128d8b0df4d33984ed3"
  },
  {
    "url": "assets/img/consult-cache.71ab2745.png",
    "revision": "71ab274543ad45f552b0f8133e705345"
  },
  {
    "url": "assets/img/define.26d6d57f.png",
    "revision": "26d6d57fc783c582fc88c6305e7532a6"
  },
  {
    "url": "assets/img/dom.4e80c52f.jpg",
    "revision": "4e80c52fbca7fe1eac7b5102b0a9f4d9"
  },
  {
    "url": "assets/img/etag-match.1d41ff6b.png",
    "revision": "1d41ff6b92d20dfcff51e37ec37da173"
  },
  {
    "url": "assets/img/etag.50e4a649.png",
    "revision": "50e4a64985abbdac5c81f8a859d34e54"
  },
  {
    "url": "assets/img/force-cache-use.b3b61423.png",
    "revision": "b3b6142311b429251473da76fa77eeec"
  },
  {
    "url": "assets/img/force-cache.6de6b3d9.png",
    "revision": "6de6b3d998cca4b50af1264c1e6fa2e0"
  },
  {
    "url": "assets/img/function.1da4ae70.png",
    "revision": "1da4ae702f155e3c687c5763863ddfb5"
  },
  {
    "url": "assets/img/gc-new.e652e66e.png",
    "revision": "e652e66ef9d8094381679f51d1a55ebb"
  },
  {
    "url": "assets/img/git-3-place.8306ec62.png",
    "revision": "8306ec62a687b261fa847a64286b9d21"
  },
  {
    "url": "assets/img/git-commit.7df5dd52.png",
    "revision": "7df5dd523a89a2d2e05d9064e54e3e1f"
  },
  {
    "url": "assets/img/git-glkz.3eff0f6a.png",
    "revision": "3eff0f6ae58e2402aab683cbd2f32005"
  },
  {
    "url": "assets/img/git-jlcy.f54798e5.png",
    "revision": "f54798e517fb7a2f3286e6059a73835a"
  },
  {
    "url": "assets/img/git-mergep.8020f257.png",
    "revision": "8020f257ed3d7d6bd3b1cda0f160739e"
  },
  {
    "url": "assets/img/git-mergep2.6beb1cc1.png",
    "revision": "6beb1cc1843c92b850052691d3f05a6b"
  },
  {
    "url": "assets/img/git-rebease.92a039af.png",
    "revision": "92a039afa017be14918e76360ee246ea"
  },
  {
    "url": "assets/img/gitignore.5d97f945.png",
    "revision": "5d97f945d78d6c260611d52ad8511291"
  },
  {
    "url": "assets/img/http-cache.9c0acde8.png",
    "revision": "9c0acde84d4b74818b9625ec3265ab6d"
  },
  {
    "url": "assets/img/httpscrypt.b6e671f2.png",
    "revision": "b6e671f27a8b0d28793640de53cb0685"
  },
  {
    "url": "assets/img/if-modified-since.a29d8a66.png",
    "revision": "a29d8a66e76ba8d366bb789b449c924b"
  },
  {
    "url": "assets/img/pipe.77fa35ce.png",
    "revision": "77fa35ce33b971ea274bfe2859c3cf86"
  },
  {
    "url": "assets/img/prototype.a6990cd8.png",
    "revision": "a6990cd8e005522a5c3cb9687223ea08"
  },
  {
    "url": "assets/img/quarticBye.bba7d984.png",
    "revision": "bba7d984f8c9ea121cb3be7c0a8bb2a0"
  },
  {
    "url": "assets/img/run.cd1c8763.png",
    "revision": "cd1c876341867ab9d053db78b73b1cc5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/serviceWorker.ac528e31.png",
    "revision": "ac528e312ed46f85f5e717a12b4987a6"
  },
  {
    "url": "assets/img/slideWindow.fca43d21.png",
    "revision": "fca43d210df50c93e428dfd04fbbbf32"
  },
  {
    "url": "assets/img/TCP.ba07fdfb.png",
    "revision": "ba07fdfba36adff0cbeb48a3e3215d0f"
  },
  {
    "url": "assets/img/tcp.c019717b.png",
    "revision": "c019717b86ba907e638510f5a26739d1"
  },
  {
    "url": "assets/img/this.4fd85c39.png",
    "revision": "4fd85c39dd36c95a3426d0d96370d6fc"
  },
  {
    "url": "assets/img/thr-handshake.78497aa3.png",
    "revision": "78497aa3a48de28d29a88d46b92e496b"
  },
  {
    "url": "assets/img/UDP.426ce440.png",
    "revision": "426ce4407282d4b03cd5b17b54afd9fb"
  },
  {
    "url": "assets/img/URL.b9892b23.png",
    "revision": "b9892b23dd7e72d2ab9ac460894ec991"
  },
  {
    "url": "assets/img/ysbm.3d6479be.png",
    "revision": "3d6479be598cf845ca17a0befa8d2378"
  },
  {
    "url": "assets/js/10.db29ae18.js",
    "revision": "f1cbd49f11e7bd08cec33c8b8191ef05"
  },
  {
    "url": "assets/js/100.a0e74a2a.js",
    "revision": "7218d6967ecfb0bb1e5845bf1d59363f"
  },
  {
    "url": "assets/js/101.e47a13ac.js",
    "revision": "2759ecf0db15e6ab1d4017a3f8931897"
  },
  {
    "url": "assets/js/102.e0188c66.js",
    "revision": "49f51ed54eaa0f8dcdce73e13f789e33"
  },
  {
    "url": "assets/js/103.3ba280f3.js",
    "revision": "d14f07f4505aaf6c60993577c039aee1"
  },
  {
    "url": "assets/js/11.7ccecf32.js",
    "revision": "4a9af38aaa545e14bb4cd4f70b443f97"
  },
  {
    "url": "assets/js/12.f2b6c169.js",
    "revision": "fa972649812d3766ace74e9c20170ba7"
  },
  {
    "url": "assets/js/13.8882e2c7.js",
    "revision": "28a634c0020fe5d0c979113a1a02aea4"
  },
  {
    "url": "assets/js/14.580c83ba.js",
    "revision": "5688d54995ee4b5a2c5c8c8f0c90594d"
  },
  {
    "url": "assets/js/15.dfad1340.js",
    "revision": "443788d38fcfe827fca2717d5b8d851e"
  },
  {
    "url": "assets/js/16.12c343e8.js",
    "revision": "9a4040d4d9c61253a36cd0ff562141b8"
  },
  {
    "url": "assets/js/17.b984e9ba.js",
    "revision": "832b990104fcd36da4c7b351da83d1c8"
  },
  {
    "url": "assets/js/18.85747d4f.js",
    "revision": "15a523995de281de421115ea83bdf3dd"
  },
  {
    "url": "assets/js/19.8fa86f01.js",
    "revision": "f75f96829992aeea865ec3fa03ca9752"
  },
  {
    "url": "assets/js/2.e767dfc7.js",
    "revision": "7611ce5afe523b121eb3241d01859d09"
  },
  {
    "url": "assets/js/20.00e3e7d8.js",
    "revision": "f8090ae34f0e5cd01f9b0ef782fdb338"
  },
  {
    "url": "assets/js/21.fa876fbf.js",
    "revision": "fd1e44f771a23da45a86d4ccb6ffcf33"
  },
  {
    "url": "assets/js/22.96f75fd2.js",
    "revision": "f401e289484b4e50b146de3234639050"
  },
  {
    "url": "assets/js/23.e37914b2.js",
    "revision": "6a11962941c01022dc4931fe60c0afd4"
  },
  {
    "url": "assets/js/24.dee22cc3.js",
    "revision": "b9a80a5dfcaf46de3600e7156183dce1"
  },
  {
    "url": "assets/js/25.a59f71a0.js",
    "revision": "3cd1973d6653badd2963cbaadb1c4441"
  },
  {
    "url": "assets/js/26.f5680a1a.js",
    "revision": "600d88c429d05f7a980f0bcc7497ee93"
  },
  {
    "url": "assets/js/27.9ef84fc4.js",
    "revision": "fdfbe3fdbbdbbb119040f7bc06a34deb"
  },
  {
    "url": "assets/js/28.ac368df2.js",
    "revision": "130cd1f664505be3953079e310d96f15"
  },
  {
    "url": "assets/js/29.e844a731.js",
    "revision": "46dd996e187bee16d290db9bd048faa7"
  },
  {
    "url": "assets/js/3.7f194174.js",
    "revision": "23e503e5113d054b3c26eb4d015dc3c2"
  },
  {
    "url": "assets/js/30.54cc9a7f.js",
    "revision": "6344b9067a970659e1ac10ce66d836ef"
  },
  {
    "url": "assets/js/31.95fccb9d.js",
    "revision": "87040f32e8f14ecaafb87bdcb5a42772"
  },
  {
    "url": "assets/js/32.b717f3e6.js",
    "revision": "aa53769928dcc546f19641e213cb2a14"
  },
  {
    "url": "assets/js/33.787e0799.js",
    "revision": "f6d8d921238bec6b10b31b2ed6bae958"
  },
  {
    "url": "assets/js/34.1586569b.js",
    "revision": "5274108a78e9f4c0915e4570aa4d5069"
  },
  {
    "url": "assets/js/35.c9077a7b.js",
    "revision": "75ba0534db3f73ba59459adbe5f262c9"
  },
  {
    "url": "assets/js/36.8f1ae50a.js",
    "revision": "6d733d7ab9effb333411b53341ee518c"
  },
  {
    "url": "assets/js/37.459d3e7c.js",
    "revision": "34c262a470b644cf02a053218d355a24"
  },
  {
    "url": "assets/js/38.e7842ab5.js",
    "revision": "1ce66cb5ea898b53991b4ae32b728550"
  },
  {
    "url": "assets/js/39.cecdbdc7.js",
    "revision": "7c9f6392ed78efea48905f52abb37576"
  },
  {
    "url": "assets/js/4.aab0b983.js",
    "revision": "77d0e470d6de9c23f7f645e11629e380"
  },
  {
    "url": "assets/js/40.34bc6ee0.js",
    "revision": "df7e566ba2460b63eec07b7a433a4e65"
  },
  {
    "url": "assets/js/41.179d8fd1.js",
    "revision": "93d356e3938ab82b1032fb14cbf85a27"
  },
  {
    "url": "assets/js/42.f57d725a.js",
    "revision": "e43989b84fd683878ebe3d2e860db08a"
  },
  {
    "url": "assets/js/43.a50a38d3.js",
    "revision": "cde619929b54413ca0cf69161afd91e4"
  },
  {
    "url": "assets/js/44.661dfb4a.js",
    "revision": "6430a29c78f868ae0f06c1fcbbc5fbbc"
  },
  {
    "url": "assets/js/45.8acc95b2.js",
    "revision": "c9814e051c28dd7d6c486f17aa73e285"
  },
  {
    "url": "assets/js/46.90ae0962.js",
    "revision": "c915e31e7f71ef6fa885047f020c4d0f"
  },
  {
    "url": "assets/js/47.f12df0e1.js",
    "revision": "1984c81a5382c33c19cc80712c893df5"
  },
  {
    "url": "assets/js/48.90de8b29.js",
    "revision": "7cb1572defc0554ea75aafe405b55734"
  },
  {
    "url": "assets/js/49.f893d825.js",
    "revision": "92bb7c204bf9cf4bdba9fa759170409e"
  },
  {
    "url": "assets/js/5.10883e09.js",
    "revision": "67e9beacaf73cdd9772fe1814a0d7b1d"
  },
  {
    "url": "assets/js/50.f1090d52.js",
    "revision": "c98c92823c71667f10c275b2f75fa384"
  },
  {
    "url": "assets/js/51.f32b816a.js",
    "revision": "ae33193e9166affceb862ff0ee6c7244"
  },
  {
    "url": "assets/js/52.8601d127.js",
    "revision": "e809406b2fcd5f96fb262be6f8775153"
  },
  {
    "url": "assets/js/53.85cc4a51.js",
    "revision": "36d86e5853716545f5196590815cbd49"
  },
  {
    "url": "assets/js/54.112bd1e5.js",
    "revision": "918b3c012a25667b3e63c0ba29f3faf8"
  },
  {
    "url": "assets/js/55.5667edec.js",
    "revision": "5da57d37762fe522089fd2dba9d58d7c"
  },
  {
    "url": "assets/js/56.0d3aca46.js",
    "revision": "3f6dc204ff570ecdda5d92a369fe5d09"
  },
  {
    "url": "assets/js/57.1d75a8fc.js",
    "revision": "9a478c71caaa0d3bc703dea9e04b3a12"
  },
  {
    "url": "assets/js/58.6b77b405.js",
    "revision": "96ca113359e13a2bbeee78bb4264e3b3"
  },
  {
    "url": "assets/js/59.16363448.js",
    "revision": "95122e537b572e28d0050e7aef106d60"
  },
  {
    "url": "assets/js/6.675d2cef.js",
    "revision": "a0f2f4b63f19e39ec0278329d30662d8"
  },
  {
    "url": "assets/js/60.9cdf945d.js",
    "revision": "af37c0d3b181ad8d53de69d05590973a"
  },
  {
    "url": "assets/js/61.d2363f47.js",
    "revision": "aaec9d4f3f151c1c78745b3a9bd1c484"
  },
  {
    "url": "assets/js/62.8eece0e4.js",
    "revision": "f49126afca05c96bb7f11e9d669c0842"
  },
  {
    "url": "assets/js/63.bef72fc7.js",
    "revision": "be63f901810f96dd382d760fc3f0a586"
  },
  {
    "url": "assets/js/64.fb981700.js",
    "revision": "ac6fcb3827aaad956bc3cfc0a8bead10"
  },
  {
    "url": "assets/js/65.5ce86e08.js",
    "revision": "698a0c4ed4e691ed430da11c77dd2187"
  },
  {
    "url": "assets/js/66.77aa7091.js",
    "revision": "df4c9b33c0dae2058f5ed542410c1049"
  },
  {
    "url": "assets/js/67.f46edc90.js",
    "revision": "48585aca388e26c219d7927045cde573"
  },
  {
    "url": "assets/js/68.f3768188.js",
    "revision": "cee77c08b8acb74842b766f795e2e8a4"
  },
  {
    "url": "assets/js/69.6782e1f7.js",
    "revision": "a16cebf09a834ddc8c2e734e10094113"
  },
  {
    "url": "assets/js/7.1d2a886c.js",
    "revision": "8c853e8eca958cb825c098718afa5bbe"
  },
  {
    "url": "assets/js/70.da2a5a12.js",
    "revision": "b5f00ddc47104c7788cfabfe4992209b"
  },
  {
    "url": "assets/js/71.add8451f.js",
    "revision": "44d0212b19f1d820320625b69141b428"
  },
  {
    "url": "assets/js/72.ed55d9dc.js",
    "revision": "7ac46a678ce8f3fc5ad4a6c7b61b04e5"
  },
  {
    "url": "assets/js/73.25d06f8e.js",
    "revision": "53cd72bdc038df6be88384284115051f"
  },
  {
    "url": "assets/js/74.6dde3ca8.js",
    "revision": "a1d50d9388636f8920b61b5540767358"
  },
  {
    "url": "assets/js/75.26d33569.js",
    "revision": "0d5cc5b889d9ff7966b4ab5a379ac202"
  },
  {
    "url": "assets/js/76.4dd6203f.js",
    "revision": "cd11259e6e7519ac721c5726d693ba14"
  },
  {
    "url": "assets/js/77.97a18059.js",
    "revision": "4596f637a71d76dba6cb2eff60d594b4"
  },
  {
    "url": "assets/js/78.22622783.js",
    "revision": "5c0caa13f4e35fafbdd7816cc502072b"
  },
  {
    "url": "assets/js/79.2163cc88.js",
    "revision": "c9c8e035d9eefb2e7d4ae2c9ed184d8c"
  },
  {
    "url": "assets/js/8.abf67eb3.js",
    "revision": "3c8abc540f255108918f67f97c47d9f6"
  },
  {
    "url": "assets/js/80.506d4cc0.js",
    "revision": "09c633468120492e2e5e9f46b9d10f8d"
  },
  {
    "url": "assets/js/81.1a3fc626.js",
    "revision": "20940830b053a8b67d2d0adcd8278865"
  },
  {
    "url": "assets/js/82.cb2aa020.js",
    "revision": "b64f85a1720c547ec8e8c666a866e273"
  },
  {
    "url": "assets/js/83.a1cbc7c3.js",
    "revision": "b6aee4d1d491a574b3bec2159f4e28d1"
  },
  {
    "url": "assets/js/84.efd78a05.js",
    "revision": "bf08ea4532e5bc001aaa9dba88fc7b4c"
  },
  {
    "url": "assets/js/85.008d5645.js",
    "revision": "b8b015da05ff66f5e8f48de5ae457148"
  },
  {
    "url": "assets/js/86.0d420329.js",
    "revision": "50407c65e97c7b075358a502ad9bd19d"
  },
  {
    "url": "assets/js/87.252a3bff.js",
    "revision": "599dbfe44d893702bf7d36bd818c1ec0"
  },
  {
    "url": "assets/js/88.28c149e2.js",
    "revision": "f2d8ad1364671b9c7c2d9804eb10b4dc"
  },
  {
    "url": "assets/js/89.41960d78.js",
    "revision": "e20300a04e6d62d4561e0c145f3aa525"
  },
  {
    "url": "assets/js/9.cb507dff.js",
    "revision": "13193583e9016153f14094dcbbbf3194"
  },
  {
    "url": "assets/js/90.d9576307.js",
    "revision": "9c6efa7d036cc4d602108b1ebfbf055c"
  },
  {
    "url": "assets/js/91.27a3b8e7.js",
    "revision": "fc358a2ed927aa987308fb01914d3195"
  },
  {
    "url": "assets/js/92.6a374b65.js",
    "revision": "75c181d582527d4a79c8e30880e83343"
  },
  {
    "url": "assets/js/93.31efcc53.js",
    "revision": "440d95bd6e71fb07e627d9b1146320a5"
  },
  {
    "url": "assets/js/94.45f067b8.js",
    "revision": "d7b7182d7a9beb194546d576f8521bea"
  },
  {
    "url": "assets/js/95.f98c8dcf.js",
    "revision": "8f85e7a6ff07b555f2d96fe3a52b3e6e"
  },
  {
    "url": "assets/js/96.5e2c91d3.js",
    "revision": "af1a261fee5b574e43ce8d16ddd3123f"
  },
  {
    "url": "assets/js/97.05aa71d6.js",
    "revision": "5d15d3c5332af4fb391678978c38ffa7"
  },
  {
    "url": "assets/js/98.0c737523.js",
    "revision": "80174a167b7b1aff59fb8cd8625465e6"
  },
  {
    "url": "assets/js/99.a7fe02c7.js",
    "revision": "8ed968a229a63efe4bc69f3bc43cb82d"
  },
  {
    "url": "assets/js/app.49c86617.js",
    "revision": "a7b7aa768a8fa767a7681d8ce185d203"
  },
  {
    "url": "config.html",
    "revision": "2ae9a92763db9e5211b6c064e16c7981"
  },
  {
    "url": "guide/index.html",
    "revision": "455f0f130c7a9c8838341c2b70e2d630"
  },
  {
    "url": "index.html",
    "revision": "705912967539652e6deacbdc0c552dd6"
  },
  {
    "url": "interceptor.png",
    "revision": "2c0db367f89973522e7894c9d6c93386"
  },
  {
    "url": "javascript.gif",
    "revision": "218e5ac3c68cdae3b7b5d1412612bf16"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "note/devnotes/axios中qs的使用.html",
    "revision": "3bb05ff9fa33db33545c25cb5eeed55c"
  },
  {
    "url": "note/devnotes/index.html",
    "revision": "ec663f1d174f141067ba085b8eb2dbeb"
  },
  {
    "url": "note/devnotes/JS生成全局唯一标识符（GUID,UUID）的方法.html",
    "revision": "e202a761ed42e4bdb3db9bea4c94f416"
  },
  {
    "url": "note/git/gitignore配置规则.html",
    "revision": "25710b8b518099b9b71eb1832704a77c"
  },
  {
    "url": "note/git/Git分支.html",
    "revision": "cf12bd81fe60a92aa162990acf178343"
  },
  {
    "url": "note/git/index.html",
    "revision": "2afc3448601c6bb81e5d24eca5b07e29"
  },
  {
    "url": "note/index.html",
    "revision": "c7d31b73098e23ddf07ed60c4bed6150"
  },
  {
    "url": "note/学习笔记.html",
    "revision": "0163d3a4e7c51dc41e0d0762fa8cec49"
  },
  {
    "url": "ts-logo.png",
    "revision": "ee58c5ee49d27ef95aa5ba43c241483e"
  },
  {
    "url": "ts/chapter1/index.html",
    "revision": "937401b43a278fc4cb1eece9beefcd12"
  },
  {
    "url": "ts/chapter1/install.html",
    "revision": "2684dfa73972684ac9702e38a2863ab4"
  },
  {
    "url": "ts/chapter1/start.html",
    "revision": "3132619aa9c3e7515c569afe2ed4b16b"
  },
  {
    "url": "ts/chapter10/auth.html",
    "revision": "4b17ed43062da32d87a8cfcc5a0b55c7"
  },
  {
    "url": "ts/chapter10/baseURL.html",
    "revision": "f42938881551c3337a98d7356c2d9eca"
  },
  {
    "url": "ts/chapter10/paramsSerializer.html",
    "revision": "70950da911f13e99c870dcdd0c45e07a"
  },
  {
    "url": "ts/chapter10/static.html",
    "revision": "b3ee2e63407fe07e4318b9465a0dc6ca"
  },
  {
    "url": "ts/chapter10/upload-download.html",
    "revision": "08642b12a72eca9f8f7f8c914407d673"
  },
  {
    "url": "ts/chapter10/validateStatus.html",
    "revision": "694f22d1dabb6850c8f13f1f3791b1f4"
  },
  {
    "url": "ts/chapter10/withCredentials.html",
    "revision": "0075bfa6d3de4ff2ffa03ac52cea511c"
  },
  {
    "url": "ts/chapter10/xsrf.html",
    "revision": "81f5ae28f35f79cb356b4e961b72f923"
  },
  {
    "url": "ts/chapter11/cancel.html",
    "revision": "13c7ee8c6db80afa74a0805a9d97c33f"
  },
  {
    "url": "ts/chapter11/headers.html",
    "revision": "830a131b672656f1a9a304a9e351f24b"
  },
  {
    "url": "ts/chapter11/helpers.html",
    "revision": "b0a27d8015535f80164555e8a16bbc29"
  },
  {
    "url": "ts/chapter11/instance.html",
    "revision": "fe091ff1c41e919a76f7732c86a451d6"
  },
  {
    "url": "ts/chapter11/interceptor.html",
    "revision": "2e4126afccc003fbb1446e714636466e"
  },
  {
    "url": "ts/chapter11/jest.html",
    "revision": "def9406e3c5f63fb581ff8f5d4676b03"
  },
  {
    "url": "ts/chapter11/mergeConfig.html",
    "revision": "3f1f67ac02bad98030ce75e17c966174"
  },
  {
    "url": "ts/chapter11/more.html",
    "revision": "9815cb51535207ca4db0ddbd3df11d58"
  },
  {
    "url": "ts/chapter11/preface.html",
    "revision": "380752652c6ede88a91fcc708bb9a5e8"
  },
  {
    "url": "ts/chapter11/requests.html",
    "revision": "efb7d3fe4629c0997088688bdba86984"
  },
  {
    "url": "ts/chapter2/advance.html",
    "revision": "68a4eb8c43fe2845fd70bbe4884a4c49"
  },
  {
    "url": "ts/chapter2/class.html",
    "revision": "3cb9af943865271c2df996f68b35ccb7"
  },
  {
    "url": "ts/chapter2/declare.html",
    "revision": "501af9d57dbfd185a1fb8a21f019c9b8"
  },
  {
    "url": "ts/chapter2/function.html",
    "revision": "59525a9be97084cfe373d9aff0b7ef58"
  },
  {
    "url": "ts/chapter2/generic.html",
    "revision": "dfd9c7dd422be1aa1f2601dfedb4701f"
  },
  {
    "url": "ts/chapter2/inference.html",
    "revision": "d371e2a2af5fd2c34ca57f2cfaa58b85"
  },
  {
    "url": "ts/chapter2/interface.html",
    "revision": "8832b15f4b64fc781adc44e36fce1afe"
  },
  {
    "url": "ts/chapter2/type.html",
    "revision": "f3b7d0becdb28d72a8b1d5cd19adec85"
  },
  {
    "url": "ts/chapter3/base.html",
    "revision": "b6ce99c77e9f74502bc99b54117c072f"
  },
  {
    "url": "ts/chapter3/init.html",
    "revision": "6fd7a9587e5bf3ee569bbd5e47475409"
  },
  {
    "url": "ts/chapter3/require.html",
    "revision": "b03be551eb19304b6b9ed34979b97c5a"
  },
  {
    "url": "ts/chapter4/data.html",
    "revision": "dee6ce099d2a00b85d1d38acc2110159"
  },
  {
    "url": "ts/chapter4/header.html",
    "revision": "b6af5025b890ceb0daa8e90e7212c699"
  },
  {
    "url": "ts/chapter4/response-data.html",
    "revision": "a2b42fcc7321de771513befd60e0171d"
  },
  {
    "url": "ts/chapter4/response-header.html",
    "revision": "dac88b40ef6fd9ae47da734110f6f9f7"
  },
  {
    "url": "ts/chapter4/response.html",
    "revision": "5de578cff05ef7f42c995dafb7b9cea0"
  },
  {
    "url": "ts/chapter4/url.html",
    "revision": "a8bdf9a666eda0ec970c66fa7fa11348"
  },
  {
    "url": "ts/chapter5/enhance.html",
    "revision": "fcf5db09f9b8ecfa15bbacdc2a499a08"
  },
  {
    "url": "ts/chapter5/error.html",
    "revision": "655a87d3bd8260012fceaf6c61ca2a06"
  },
  {
    "url": "ts/chapter6/extend.html",
    "revision": "0f8f61bc79b8e5e2d87308e0305560ce"
  },
  {
    "url": "ts/chapter6/generic.html",
    "revision": "1f016a3c427eb801790ade06af21703e"
  },
  {
    "url": "ts/chapter6/overload.html",
    "revision": "cc13937d0ab1c47ee8ff084fa8b59758"
  },
  {
    "url": "ts/chapter7 copy/interceptor.html",
    "revision": "92e514203c3f08e8db4e762405e8a68e"
  },
  {
    "url": "ts/chapter7/interceptor.html",
    "revision": "06e23e3c10f0a177b279b3071e56b37f"
  },
  {
    "url": "ts/chapter8/create.html",
    "revision": "3707f6f686e5bca0190ef55dd1a0dcf7"
  },
  {
    "url": "ts/chapter8/merge.html",
    "revision": "008c7e47d1ce8c9fdd4635eb25790cc5"
  },
  {
    "url": "ts/chapter8/transform.html",
    "revision": "853268dcea8dc33fd976aaaa8a157789"
  },
  {
    "url": "ts/chapter9/cancel.html",
    "revision": "f12b465a58eac6fdb63b2dab22bb47c3"
  },
  {
    "url": "ts/index.html",
    "revision": "1dbcb3986454af7c1162ff37363416d6"
  },
  {
    "url": "web/css/清除浮动.html",
    "revision": "8b4c2f98ebce460d9276831b1bb226a4"
  },
  {
    "url": "web/html/行内元素.html",
    "revision": "13f36a354bf968a84d7dcbcbb5ff5247"
  },
  {
    "url": "web/index.html",
    "revision": "855fba6a07c79c9deac828e99b221189"
  },
  {
    "url": "web/internet/Ajax.html",
    "revision": "bc4b611af2267788b7ae0c1e1668aa09"
  },
  {
    "url": "web/internet/CDN.html",
    "revision": "95ec90151dd8067a7c9a98c7482fdaeb"
  },
  {
    "url": "web/internet/cookie和session.html",
    "revision": "86ad3d8700f435df97ceca9098dc00df"
  },
  {
    "url": "web/internet/HTTP.html",
    "revision": "3effadd78b10fd945808d431ce531352"
  },
  {
    "url": "web/internet/HTTPS.html",
    "revision": "b4ee962bda98dc982cd1cdfadef22103"
  },
  {
    "url": "web/internet/index.html",
    "revision": "6b4c2c509324824a96a9ae8a29209e31"
  },
  {
    "url": "web/internet/Nginx.html",
    "revision": "22a74237237f004a168794455b7333b5"
  },
  {
    "url": "web/internet/RESTful.html",
    "revision": "5cbf4a42d8dafb8222c12c4d952d9158"
  },
  {
    "url": "web/internet/TCP.html",
    "revision": "40570c508c19ee2f66eb23ef37ffcec1"
  },
  {
    "url": "web/internet/TCPIP分为几层各层的作用是什么.html",
    "revision": "657bfc7a4d5c3bdb242ef6b1422a0b8d"
  },
  {
    "url": "web/internet/UDP.html",
    "revision": "ecfcd98fcaae3a24f57804b81ca1a23d"
  },
  {
    "url": "web/internet/从输入URL到页面加载完成的过程.html",
    "revision": "f51582a9cd0bf14ac706187e29236737"
  },
  {
    "url": "web/internet/缓存.html",
    "revision": "d80c5bc68e00207fcf5d1fadb5b80b6e"
  },
  {
    "url": "web/internet/跨域.html",
    "revision": "fe9b80a8b9acd721ef199126ae6d7d21"
  },
  {
    "url": "web/javascript/BOM.html",
    "revision": "64a637e0b4341b1860883a8795f397b5"
  },
  {
    "url": "web/javascript/DOM.html",
    "revision": "0f84c95af9c5556ae9374b2cc73dca9d"
  },
  {
    "url": "web/javascript/ES6.html",
    "revision": "62db7b1cb340a0ec99e86cd83508d470"
  },
  {
    "url": "web/javascript/index.html",
    "revision": "7d8fa3fc344f952f0d5eb466ec80360f"
  },
  {
    "url": "web/javascript/Node事件轮询.html",
    "revision": "37874712ebe67fef1167d1c0113073e5"
  },
  {
    "url": "web/javascript/ServiceWorker.html",
    "revision": "76e612c1c92308277fdc8d9419f1fd97"
  },
  {
    "url": "web/javascript/This.html",
    "revision": "4447424f69f822ff2765f9710e435526"
  },
  {
    "url": "web/javascript/事件机制.html",
    "revision": "59c0081f11bfae98b5bb3d768908c5c1"
  },
  {
    "url": "web/javascript/事件轮询机制.html",
    "revision": "7d17084380f7506a8f35aebb43e27369"
  },
  {
    "url": "web/javascript/事件队列.html",
    "revision": "51ae3e57a4fb67f3b508624094e79c8d"
  },
  {
    "url": "web/javascript/作用域.html",
    "revision": "dbb37be1425c12164c865144f3b3bb06"
  },
  {
    "url": "web/javascript/全局内置对象.html",
    "revision": "1ffd6fe81840d697ed04335ecffb61bd"
  },
  {
    "url": "web/javascript/其他题目.html",
    "revision": "00190163a776d4f7651a82cd9d37a514"
  },
  {
    "url": "web/javascript/函数.html",
    "revision": "ba8a314d1a0001ca3cfc1ec830815d8f"
  },
  {
    "url": "web/javascript/原型链与继承.html",
    "revision": "d2431e70f1f016dcd456137577091f12"
  },
  {
    "url": "web/javascript/变量类型和类型转换.html",
    "revision": "b7d710b20229b54bd39eda0115548b36"
  },
  {
    "url": "web/javascript/垃圾回收与内存泄露和优化.html",
    "revision": "a1f4314c58c4b51a4715f1bce455ac00"
  },
  {
    "url": "web/javascript/正则表达式.html",
    "revision": "3bad2749e55773d27393b6a8fade4e95"
  },
  {
    "url": "web/javascript/闭包的概念.html",
    "revision": "d60fdca4d4ec9d8af75299627a69a940"
  },
  {
    "url": "xsrf.png",
    "revision": "c8062970c91b39ae33160741d5e4f3fb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
