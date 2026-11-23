const fs = require("node:fs");
const assert = require("node:assert/strict");

const root = __dirname;
const html = fs.readFileSync(`${root}/index.html`, "utf8");
const script = fs.readFileSync(`${root}/script.js`, "utf8");
const stockists = fs.readFileSync(`${root}/stockists.html`, "utf8");

assert.match(html, /data-lost-package="1"/);
assert.match(html, /data-lost-package="5"/);
assert.match(html, /id="main-content"/);
assert.match(html, /class="skip-link"/);
assert.match(script, /localStorage\.getItem/);
assert.match(script, /localStorage\.setItem/);
assert.match(script, /stockistForm\.checkValidity/);
assert.match(stockists, /<form class="stockist-form"/);

console.log("NASLÉ landing-page tests passed.");
