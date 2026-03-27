const randlinks2 = [
    "./thomas",
    "./cooking",
    "./sailing",
    "./vacation"
];
function grandlinks2() {
    const ra = Math.floor(Math.random() * randlinks2.length);
    return randlinks2[ra];
}
