const string="TECHATCORE";
const count={}
for(let i=0;i<string.length;i++){
    const element=string[i];
    if(count[element]){
        count[element]++;
    }else{
        count[element]=1;
    }
}
console.log(count);
