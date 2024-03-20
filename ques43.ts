let magicianss:string[]=["David Blaine","David Copperfield","Harry Houdini"]
let copymagician:string[]=[...magicianss]
function show_magiciansss(magicianss: string[]){
     magicianss.forEach(element => {
        console.log(element)
    });
}

function Make_great(copymagician:string[]){
    for(let i=0;i<copymagician.length;i++){
        copymagician[i]="The Great "+ copymagician[i]
    }

}

show_magiciansss(magicianss);
console.log("\nThis is my modified array ")
Make_great(copymagician)
show_magiciansss(copymagician);