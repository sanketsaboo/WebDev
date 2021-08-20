//internal node
// const fs = require("fs");
// fs.copyFileSync("file1.txt","file2.txt");
//external node
 var superhero=require("superheroes");
 var supervillain =require("supervillains");
 var mySuperHeroName = superhero.random();
 var mySuperVillanName = supervillain.random();
 console.log(mySuperHeroName);
 console.log(mySuperVillanName);
