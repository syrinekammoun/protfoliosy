function SendMail() {
    var params ={
        subject : document.getElementById("subject").value,
        name : document.getElementById("name").value,
       email : document.getElementById("email").value,
       message : document.getElementById("message").value
    }
   emailjs.send("service_u51w7os", "template_webvuri", params).then(function (res){
       alert("Your Email was Sent successfully ! " );
})
}