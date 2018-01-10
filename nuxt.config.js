module.exports = {
    head: {
        title: "Identification Rumble",
        titleTemplate: "%s | Identification Rumble",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }
        ],
        script: [{ src: "/instascan.min.js", async: true }]
    },
    css: ["bootstrap/dist/css/bootstrap.css"],
    router: {
        linkActiveClass: "active"
    },
    generate: {
        dir: "docs"
    }
};
