# React + Vite + SW in TypeScript

This is a personal project aimed at creating a stateful server within the browser using `Service Workers`.

The goal is to intercept all calls that the client makes to `REST API`s, store the data in `IndexedDB`, and pass it to the web application in a customized way.

This approach can be helpful when server-side features like `pagination` are unavailable, and the user’s initial behavior is repetitive and predictable.