function dosomething(){
    throw new Error("this is an error");

}
function init(){
    try{
        dosomething();
    }
    catch(e){
        console.log(e);
    }
    console.log("after successful error handling");
}
init();