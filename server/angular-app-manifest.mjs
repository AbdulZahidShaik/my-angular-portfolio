
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-angular-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-angular-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/my-angular-portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/my-angular-portfolio/education"
  },
  {
    "renderMode": 2,
    "route": "/my-angular-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/my-angular-portfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/my-angular-portfolio/footer"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6116, hash: '53ecbf591e77fa9cf5fe41e0daa997ff712335c1af0a5c0a4bab88b3d63c02c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1133, hash: '2c73cb42443ae338d57cd50987642da377420a447b6b64b0915571859f637c67', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 61109, hash: '5104280e1e24245fd3c583ba404548bca93979a17c4bf2e5a3a5db3a28e38c2a', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 93275, hash: '9b486a45c3a9e3e30c041bc8dfd80d8dcb431b6bb5152120743f0d915bdb420d', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 44527, hash: '025a4ce204242f5ccbc66c89b502ebbfb8925bc1bbc55b7240d3d810ff4fa419', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 41390, hash: '3b8b923a361224f3d8a6087764743b72560236ae66eacf08e2c46e2e78817ece', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 96916, hash: '101e1f9b1e69af255c204ba70dbb0da3df12fad93f99632d467e3af987ac522d', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 61054, hash: '0743d4699b72b4c719d67d2b5a5b50e31dfa09c91f088668f24f127f06a07bfe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TQQAQVEJ.css': {size: 660477, hash: 'CiSeANXpsSo', text: () => import('./assets-chunks/styles-TQQAQVEJ_css.mjs').then(m => m.default)}
  },
};
