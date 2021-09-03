function todaysEntries(entries) {
    var v1 =new Date();
    let cnt=entries.length;
    return entries.filter(myfun);
    //  console.log(name);
	// Complete the function
}
function myfun(value,index){
    var v1=new Date(value.date);
    var v2=new Date();
    if(v1.getTime()===v2.getTime())
    {
        return value.name;
    }
}

module.exports = todaysEntries;


