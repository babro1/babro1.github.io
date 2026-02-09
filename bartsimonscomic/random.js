const links = [
    "./season1/harold",
    "./season1/haroldsequel",
    "./season1/argument",
    "./season1/playship"
];
function randlink() {
    const ra = Math.floor(Math.random() * links.length);
    return links[ra];
}