import { serve } from "https://deno.land/std@0.75.0/http/server.ts";
import { getCodespaceURL } from "https://deno.land/x/codespace_url/mod.ts";
const port = 8000;
const server = serve({ port });

console.log(getCodespaceURL(port));
for await (const req of server) {
  const headers = new Headers();
  headers.set("content-type", "text/html;charset=utf8");

  req.respond({
    headers,
    status: 200,
    body: `Welcome to Deno ${Deno.version.deno} 🦕`,
  });
}
