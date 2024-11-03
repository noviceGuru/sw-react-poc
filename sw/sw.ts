/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
const sw = self as unknown as ServiceWorkerGlobalScope & typeof globalThis;


sw.addEventListener("install", (event: ExtendableEvent) => {
    console.log("Service Worker: Installed", event)
    // Optionally skip waiting for development
    if (sw.location.hostname === "localhost") {
        sw.skipWaiting()
    }
})

sw.addEventListener("activate", (event: ExtendableEvent) => {
    console.log("Service Worker: Activated", event)
    event.waitUntil(sw.clients.claim())
})

async function modifyAPIResponse(request: Request) {
    // const apiResponse = await fetch(request)
    // const json = await apiResponse.json()
    // json.extraField = "set by fetch handler"

    return new Response(JSON.stringify({ name: "Amin" }), {
        // Ensure that the Content-Type: and other headers are set.
        // headers: apiResponse.headers,
    })
}

sw.addEventListener("fetch", (event: FetchEvent) => {
    console.log("Service Worker: Fetching", event.request.url)
    event.respondWith(modifyAPIResponse(event.request))

    // Add caching logic here
})
