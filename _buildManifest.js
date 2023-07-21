self.__BUILD_MANIFEST = function(s, c) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, c, "static/css/ae4ed9c503fd1e33.css", "static/chunks/pages/index-b4998f9f63aea6d6.js"],
        "/_error": ["static/chunks/pages/_error-8353112a01355ec2.js"],
        "/cart": ["static/chunks/78e521c3-0cb8b4b8fdc9362a.js", s, "static/chunks/pages/cart-e80cde6111fe4728.js"],
        "/category/[slug]": [s, "static/chunks/pages/category/[slug]-8976622d4249e967.js"],
        "/failed": ["static/chunks/pages/failed-75e20b6feb2a1304.js"],
        "/product/[slug]": [s, c, "static/css/db0cb9e9307b0f4c.css", "static/chunks/pages/product/[slug]-2474a42ac79ab656.js"],
        "/success": ["static/chunks/pages/success-7d5b8b184da2621e.js"],
        sortedPages: ["/", "/_app", "/_error", "/cart", "/category/[slug]", "/failed", "/product/[slug]", "/success"]
    }
}("static/chunks/675-94783329a13d0d54.js", "static/chunks/416-3f43a5c98df5e2a4.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();