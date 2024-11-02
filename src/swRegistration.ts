export const SW = {
    init() {
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker
                    .register("/sw.js") // Ensure this points to the compiled JavaScript
                    .then(registration => {
                        console.log("SW registered:", registration)
                    })
                    .catch(error => {
                        console.error("SW registration failed:", error)
                    })
            })
        }
    },
}
