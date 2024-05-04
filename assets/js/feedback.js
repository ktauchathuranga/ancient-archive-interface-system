function submitFeed(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var rate=document.getElementById("rates").value;
    var comment=document.getElementById("comment").value;
    var phonepatten= /^\d{3}-\d{3}\d{4}$/;

    if(name==="" | email==="" | rate===""){
        alert("please fill the all feeld");
        return false;
    }
    if(!phonepatten.test(phone)){
        alert("please enter phone number in format: 123-4567890");
        return false;

    }
   if(comment===""){
    alert("please write some comment for us.");
    return false
}

document.getElementById("result").innerHTML="Thank you " + name + " fill the form,";

}