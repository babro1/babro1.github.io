const links = [
    "./season1/harold",
    "./season1/haroldsequel",
    "./season1/argument",
    "./season1/playship",
    "./season2/thomas",
    "./season2/cooking",
    "./season2/sailing",
    "./season2/vacation",
    "./season2/trapped",
    "./season2/changes",
    "./season2/pizza",
    "./season2/clone",
    "./season2/au",
    "./season2/story",
    "./season3/roundit",
    "./season3/family",
    "./season3/jibcook"
];
function randlink() {
    const ra = Math.floor(Math.random() * links.length);
    return links[ra];
}
