// for , while, do-while , break , continue
let var_name = "random value";
//let result = "";

for (let i = 0; i < var_name.length; i++) {
       // console.log(`${i} - ${var_name[i]}`); 
        //console.log(i + " - " + var_name[i]); //var_name[1] = a

        // result.concat (`${i} - ${var_name[i]}`);           
        result = result + `${i} - ${var_name[i]}, `;
}
console.log(result); 

//
// 0 - r +
// 1 - a

//0-r -a

let result = "";
for (i = 1; i < 6; i++) {
   // console.log(i);
   // i= 2 break;
   if (i === 2) continue;
    result += i;
}
console.log(Number(+result)); //console.log(Number(result)); 

while (i < 6) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while (true);



