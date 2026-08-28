
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/World-Bank-Map/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/World-Bank-Map/map",
    "route": "/World-Bank-Map"
  },
  {
    "renderMode": 2,
    "route": "/World-Bank-Map/map"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 452, hash: '27aec75d327a10688b2238523285773cd882d26e5968d42772ade1473442d708', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 965, hash: 'b60d44ef8204d5b6e0a36207ce9e54e32f30e92d8c9f943047bb8e0eb9c40d53', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'map/index.html': {size: 1933, hash: '2f42ee7bc96a83d3c9bd055b024e7f6190753633b8b42cea3738ef5dd3e0f622', text: () => import('./assets-chunks/map_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
