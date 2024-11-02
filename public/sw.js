"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
self.addEventListener("install", (event) => {
    console.log("Service Worker: Installed", event);
    // Optionally skip waiting for development
    if (self.location.hostname === "localhost") {
        //@ts-ignore
        self.skipWaiting();
    }
});
self.addEventListener("activate", (event) => {
    console.log("Service Worker: Activated", event);
    event.waitUntil(self.clients.claim());
});
function modifyAPIResponse(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiResponse = yield fetch(request);
        const json = yield apiResponse.json();
        json.extraField = "set by fetch handler";
        return new Response(JSON.stringify({ name: "Amin" }), {
            // Ensure that the Content-Type: and other headers are set.
            headers: apiResponse.headers,
        });
    });
}
self.addEventListener("fetch", (event) => {
    console.log("Service Worker: Fetching", event.request.url);
    event.respondWith(modifyAPIResponse(event.request));
    // Add caching logic here
});
