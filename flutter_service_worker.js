'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4e4e8ed7fd64f4d8500d8c617bdff2af",
"version.json": "3cc55faac86ca99f718a8492d0243eb7",
"index.html": "b64cdcc6c9f6be55cbed696caae36be1",
"/": "b64cdcc6c9f6be55cbed696caae36be1",
"main.dart.js": "b2038508a1f9fd037ff2bf448338a09d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bd231226795ff0a4d1ae1f7d6318e2d6",
".git/config": "9c89f7ff32a37fc507e89cffca874bef",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/04/e43a88ff9a598d9a453e543f0ddd4623d23245": "d6a6a34145209709d7ebab6eaa2bf283",
".git/objects/93/dd0833fb83a925a48b6c031aa9562fde9727af": "42f4ec9ab01cc3b9464bf3da3964b785",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/cf62f9a36b77bf32780ce10de23efc4c8e9b0c": "1331b9d6fb3414d5ab2695add07fd1ae",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/a3/49131396888c1cec7db38741ea6ae4c52030a4": "19e3a17b5d1b8b8b20d4e39b58ad20d7",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/44bb61bebd9c30b80a956228aed7ea9b05658b": "6dce2f88ebfc322c2c0d8ad5fe578ed8",
".git/objects/ac/e112c7d97424d1a1b796f7d06f378ad9f13fe5": "e14bf92c5b1e3197a19adc688f177478",
".git/objects/ac/1d7038c7a67527c9170f1c6faedbe3ff380412": "82f79e9bbb37c1463358d03ddf9eb398",
".git/objects/ac/3b7fa2b83bd50d234d04580a12ef9647e61651": "b1d97e730aa771e9eb4a9fa9844adf38",
".git/objects/bb/56adb488e1874bb993370a672811bc2c9f97b2": "c2c359e417c6ca1a8728f82d961854ac",
".git/objects/df/997fbec9d7d747b674880b94273d4aa952f419": "1232b3ca553fcf0a84389f6c243547f1",
".git/objects/da/5a58ca652ca8dd6e473d6467bbba20d4cbb6c1": "776c564e2179d163553ac7c78148a25c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/097d53db89d098337a4d9287b74a2f6191fee8": "5d18e8c06b45d310370d7a5abf53527a",
".git/objects/d8/2c833d0f06fbaa05d07fdee68f6bd32fdee53b": "7a68e5da34f05be5c3b793fd7f1e6903",
".git/objects/d8/81138f155c8ad4cd1f0c1aa3be30a9b7d93cc3": "4dc94a8ebaabbe71a0b73939b0e4e9f8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/5a71980c16f038b6e2cb342d4647086298b2e5": "f9a7dae7cbbdf1069fbaa1522438469d",
".git/objects/e2/d5c4da24106cba0530c87d58990c31d42f150b": "5e48ef83c8898ed4edd751addbdd04d1",
".git/objects/f4/e581fb233c61110cab7dbeee5c5815e89bd81f": "183544989223845c07969d40a19a245b",
".git/objects/f3/f5a3f5f729c0da63204d228c45510e471cb37e": "238c2a2ae3d9e4db45bb7c4a3fafe4a7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4c44dfa661c7df85549a4e0c4cfa7368f73fd8": "9d98512ed144e12545202934c9926496",
".git/objects/c7/84880818338889d56d1db732e57f634fb126b1": "b8a1d91e1309c662d3056873bb4b9dbe",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/6dab62826246d78909ae399b3e3f30bad10eb5": "f2546c70687a9fb309986696debeeb11",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/20/b1fb776e4cfd02190e0f3a8925d32df081f49a": "abc89d1d84fb20f87852df598831e930",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/2105054bc3e849ea77742e5365ea5e7ba91d64": "7ec1bda77181717681b4abb9f45a985c",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/34bfc07a73750db09d71350d2151b91172386d": "ccdd3f56ff63f26a8da75e3b0cd12b2d",
".git/objects/1f/83d8888ff5db924d956f5194d6f146b7384b6c": "4efb9cb7bed5f43be00647ca3fe4bad5",
".git/objects/8a/6ccd1007729ca3bbb74dc750df2c38ebc6adac": "ee281144fbdb39a83ad6378b2d81953d",
".git/objects/7e/02979232657c43eaa847761ee44dd1540ca6d2": "894aa85d5bcc920db6b14598f06ae3f4",
".git/objects/7e/8b678b4cae465f1ed557c708f5da6f324e2b62": "69a074b025b7afa632cf2af5356a3431",
".git/objects/44/a472a517e609d95b4c8c192d5c4bf87445a3d8": "b6c31700d8f71aeaf90abffac04dfde5",
".git/objects/2a/c45a9db6ff4fce91ca7be8a54a354ed0d37f4f": "184bb1f5e16822027d4c5ae27d24bdf3",
".git/objects/2f/a8d0414fc7db681b0e3503008f037c459474fb": "0793043324044c7067687ff54deb44a6",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/00/37403a20d747ec328f52d8a48b25e6dde20426": "a3b82c17f1f9b67098b36ed924afc88e",
".git/objects/54/e74dd769d2c133c0afbfb19e8a41e8009aadb7": "7af1ffed93a47ab198c5e828a3fb0414",
".git/objects/98/f27a91d188b4632490dcc6c1e8068dbaf602fe": "719be0d08d3eaa30182e000bace51446",
".git/objects/5e/1ebbad22df4b6e6baaf823dace9fba0b0730a6": "70f1339008cb953d7cec45cad6b87a68",
".git/objects/08/5185898b3bbedaaacd5621ce7668c11e510dc3": "dce47a6c338fd169c1b94f167ea6011c",
".git/objects/6d/dc3b63805ab1cbd1b32c8144aa8137ca9dd7ff": "f89813613e3003f6d75809c94060dab1",
".git/objects/6d/09ad196fcfdf916e2eb7c39dff15031765c730": "ccf8b5c339e8b592aac0f72be3161cb1",
".git/objects/39/df089bff6953f83c7d15315ed64a994eaf1bfc": "74773e44419b116917adb9417553d6b1",
".git/objects/39/cd2a0f76137f20072e748221c5facd45855814": "6d9a3fcb0b1b998e72512cb89f03000d",
".git/objects/99/2601624e6d0410c9db71ddcf9aa098d5b0c96f": "be3bce49014b9baf0da488c618cd1dd3",
".git/objects/99/e1f3213c2d73415c42e2d7c6cc8bdce59180fe": "6e606ce146e1581566f79bd9a6df2a92",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/55/f7edc581832d46201db28bcf605ff70001f580": "cb248670a39ada5bbae98efff0706386",
".git/objects/63/224dc5fb587dbce37ce3030d13a6ebf0c70678": "f1764bf8cbabdfbcbc64ad7894a35dbc",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/0a/6daa8b41d4eaf661d9d6f8dacab34793a391f0": "e06eb1faadfdfa1ca99af26f72b483d6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/3c677ccd67418fdb8b1f2f97370906e63852e2": "6a946a2ddb088602eedb14502310bb58",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/18d522aeac5dbc2ae9e59f92ad0092e511faa0": "6e4a5687300d1292468f2dd170943fb1",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b026b0cacca22d74114496d039b424d9c1c336": "77ff81751f99ac889a5fd707ca4fd690",
".git/objects/e1/f5d31a0b076d6328868a1faa1e1bfff41c29ee": "7d83476a1d5b014f97ea8cde2ab33ed2",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/f9/64c03f03028ccbe321cfb2ca65c21f5b8cd79a": "1de51a8854efc2cdc79bc64f4cf36e5e",
".git/objects/e8/281fcab5bf1f7d16ff04df0e0fa41c2d02371e": "56401dcb574ec393360a68d6f1e346cc",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/fa/856deb1cedb275c1b5b6ab912c4531e9c966d2": "fd3e14b88dec95c022c452b6a6965261",
".git/objects/ff/6b4a2dfecc267725a89ca8de7b53f78a48cab6": "70225eaf01065f45627ca4fbd7ab18ad",
".git/objects/c5/179df80ec1e47a2442dc7ea14131b84b541385": "50e78abca883fc685cac1c92ae52b788",
".git/objects/c5/732b8a6113c8b6990a3d7c5f9acba39e05e94c": "044b20f1a586ca1465a227861a3cd2f1",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cb/60b7e51a45c6290858be49537e9cee329818e4": "d7394a95b5867967fb5a787984a1a3b3",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/f8/9645ce24fada9ac82658ce846cc2fd3de2b2aa": "eac0b2aa715174833ea99184ba95d28f",
".git/objects/e0/4369a0adbd051d999a7860a8abc2eaa2541676": "73c587dd7cb631f32942c5d034c94984",
".git/objects/46/fe25540bb613f6a026c93e82f2c6c002613a24": "5b3135d55bbfdc7d9cecf558b436572a",
".git/objects/2c/502a28e98aa18566e3f85ef9c2853840ddaf31": "23539ab2de2f9b6047e57d97c4e3cb5e",
".git/objects/2c/5ac3718bb22d9da909e3ee1c2a4bb3eba4db22": "4217335b9a68232ba39def9f12a019f4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/45d1a800a89c953def8a1ac4c8521d38464db8": "3a02901bfa54144c70ad06b6edb52c6f",
".git/objects/77/a697fc7b7b168a4ae9d1b33d7bcc5920021a22": "970c07c34ff39d56f24a77c4f2d107d5",
".git/objects/48/1874fa17bb6227ba22e2d7292f0315e7819a72": "1efe178cd120ff27da7057bed4f3b79d",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/8d/71e60670ba3810667e686d474b6582061a20e9": "78013e6a23457407837a4734472a2e11",
".git/objects/12/1ed5693b929c034d8e628f033862d9af64c1f0": "87ffa9b185362873964e81f3c09ac9df",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/40/e5afcdf79c89c47ad09dffa1d6da0ba9eae68d": "2ea895510ff530223a3134a1f6baa939",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/7f/1406086b6fc2414665291a47c0ff98868b9339": "b55aacc3ee26eb49ed47a53c11214770",
".git/objects/7f/a52ddeaf2af7d1b30a355e72c4515829b88514": "2ac4f68dfc58e3572dae3a4d2f83d791",
".git/objects/25/e3abaa4e86c3e837e73927429c25f65ae310f5": "b8a60f32f1cd1edfcd8e667934c02c68",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "d187e2ea8d20d5fc0c735b84e1b02631",
".git/logs/refs/heads/master": "66a21fc9d040dcf91d0452ce925cfd2c",
".git/logs/refs/heads/main": "69677f9850014d4d7e526d76f0454837",
".git/logs/refs/remotes/origin/HEAD": "8752eff00310bf36732026da612f9b64",
".git/logs/refs/remotes/origin/main": "7cdd3efab1391b95b39bb2a9d8de80f2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "0ae57644a7e93708de9ca66c7b4e04b0",
".git/refs/heads/main": "052cb2ab2767eca21f292b6cb59ddbb1",
".git/refs/tags/v1.4.9": "0318680aff2d795195a95ab60b26a85d",
".git/refs/tags/v1.4.7": "b99e030dcb915383e9cab02a656fac9a",
".git/refs/tags/v1.4.6": "d4be488b776f851ac7f9bf57cb4f1c2c",
".git/refs/tags/v1.4.1": "0ae57644a7e93708de9ca66c7b4e04b0",
".git/refs/tags/v1.4.8": "e55ce3867f675e86dc5b9da8d02ed531",
".git/refs/tags/v1.4.10": "51379486183f4133e938caa752f36183",
".git/refs/tags/v1.4.4": "17386c79596672bfc90763d7cea25606",
".git/refs/tags/v1.4.3": "a82f6571773531e2296f0a7d77dcc1b2",
".git/refs/tags/v1.4.2": "3059c193a0f94754836932241ced564d",
".git/refs/tags/v1.4.5": "93dffff6a56ac4fd1ea0f0881f3ea353",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "052cb2ab2767eca21f292b6cb59ddbb1",
".git/index": "3a00c1eeb0709879866db8af55982572",
".git/COMMIT_EDITMSG": "f8eb16fbb374079aa1a1c67c104d3e68",
".git/FETCH_HEAD": "7299ea84a84b4f606853576ef18adea6",
"assets/AssetManifest.json": "fa03cc4351f3760c0e8211d15b4b97de",
"assets/NOTICES": "31c8d00ef822c9ff4b8acd4099e5cfa4",
"assets/FontManifest.json": "31af0f3861bd44ace08a3370e30d839f",
"assets/AssetManifest.bin.json": "50ee7f6089348cac02f69fa7cc7c0024",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_iconpicker/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/flutter_iconpicker/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/flutter_iconpicker/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/flutter_iconpicker/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/Guide.png": "fc97e3c3bd90a09aa1f72cc8cbb4b865",
"assets/lib/assets/Roboto.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/AssetManifest.bin": "78d10956c53f16ad09c1ef0aa24983ae",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
