let a = document.getElementById('menu');
let menuBtn = document.querySelector('.menuBtn');
let closeBtn = document.querySelector('.closeBtn');

function openMenu(){
    a.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
}
function closeMenu(){
    a.style.display ='none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
}





function emailsend(){
    var Firstname = document.getElementById('firstname').value;
    var Lastname = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var MessageBody = "Name  " + Firstname +
    "<br/> Lastname "+ Lastname +
    "<br/> phone "+ phone +
    "<br/> Email "+ email +
    "<br/> Message "+ message ;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yusufshaikh@gmail.com",
        Password : "799940DCAC4ACF59F0D152EDBA181FDD4D11",
        To : 'yusufshaikhonly@gmail.com',
        From : "yusufshaikh@gmail.com",
        Subject : "This is the subject",
        Body : MessageBody
    }).then(
      message => alert(message)
    );
}
