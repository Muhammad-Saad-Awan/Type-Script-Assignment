var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianss = ["David Blaine", "David Copperfield", "Harry Houdini"];
var copymagician = __spreadArray([], magicianss, true);
function show_magiciansss(magicianss) {
    magicianss.forEach(function (element) {
        console.log(element);
    });
}
function Make_great(copymagician) {
    for (var i = 0; i < copymagician.length; i++) {
        copymagician[i] = "The Great " + copymagician[i];
    }
}
show_magiciansss(magicianss);
console.log("\nThis is my modified array ");
Make_great(copymagician);
show_magiciansss(copymagician);
