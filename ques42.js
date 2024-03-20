var magicians = ["David Blaine", "David Copperfield", "Harry Houdini"];
function show_magicianss(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
make_great(magicians);
show_magicianss(magicians);
