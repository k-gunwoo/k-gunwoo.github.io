import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Gunwoo Kim's academic profile", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Gunwoo Kim — Theoretical Computer Science<\/title>/i);
  assert.match(html, /Structural Graph Theory/);
  assert.match(html, /First-Order Logic and Twin-Width/);
  assert.match(html, /Odd-Cycle-Packing-Treewidth/);
  assert.match(html, /Unifying Islands of Tractability/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
