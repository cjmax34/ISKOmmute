import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.CIE_ABlB.js","_app/immutable/chunks/scheduler.tyKng7Df.js","_app/immutable/chunks/index.DhJ951SH.js","_app/immutable/chunks/entry.BtT6NoHq.js","_app/immutable/chunks/stores.DwHzie99.js","_app/immutable/chunks/stores.BVM346Q9.js"];
export const stylesheets = ["_app/immutable/assets/0.D9Uuf_om.css"];
export const fonts = [];
