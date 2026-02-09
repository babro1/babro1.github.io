const links = [
    "./harold",
    "./haroldsequel",
    "./argument",
    "./playship"
];
function randlinks1() {
    const ra = Math.floor(Math.random() * links.length);
    return links[ra];
}