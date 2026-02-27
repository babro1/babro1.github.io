const links = [
    "./thomas",
    "./cooking",
    "./sailing"
];
function randlinks2() {
    const ra = Math.floor(Math.random() * links.length);
    return links[ra];
}
