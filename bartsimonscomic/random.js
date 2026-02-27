const links = [
    "./season1/harold",
    "./season1/haroldsequel",
    "./season1/argument",
    "./season1/playship",
    "./season2/thomas",
    "./season2/cooking",
    "./season2/sailing"
];
function randlink() {
    const ra = Math.floor(Math.random() * links.length);
    return links[ra];
}
