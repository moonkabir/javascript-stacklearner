
var arr = [3,5,55,3434,4,42,4,245,4,55,24,4]

var find = 55;
var isFind = false;

for( var i = 0; i<arr.length; i++){
    if(arr[i] == find){
        console.log('Data Found at Index'+i)
        isFound = true
        break;
    }
}

if(!isFound){
    console.log('Data Not Found ');
}