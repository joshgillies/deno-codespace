import { serve } from "https://deno.land/std@0.74.0/http/server.ts";
const server = serve({ port: 8000 });

const headers = new Headers();
headers.set("content-type", "text/plain");

console.log("http://localhost:8000/")
for await (const req of server) {
    req.respond({
        headers,
        status: 200,
        body: "Hello World\n"
    });
}