// required element:
let dropdwon=document.querySelector('.navbar ul li.client .dropdown');
let clientelement=document.querySelector('.navbar ul li.client');
let companydata=document.querySelector('.companies .companydata');
let client1data=document.querySelector('.companies .client1data');
let btnclientone=document.querySelector('.navbar ul li.client .dropdown .bookcontainer .clientone');
let btnclienttwo=document.querySelector('.navbar ul li.client .dropdown .bookcontainer .clienttwo');
let btncompany=document.querySelector('.navbar ul li.company');

  //mouseover event object on the client element:
 clientelement.addEventListener('mouseover',(ele)=>{
    dropdwon.style.opacity="1";
    dropdwon.style.top="40px"

 });
  //mouseover event object on the client element:
 clientelement.addEventListener('mouseleave',(ele)=>{
    dropdwon.style.top="-150px";  
});

btnclientone.addEventListener("click",()=>{
   companydata.classList.remove('hedin');
   client1data.classList.add('hedin');   
});
btnclienttwo.addEventListener("click",()=>{
   companydata.classList.add('hedin');
   client1data.classList.remove('hedin');  
});

// swiper slide for reviews client:
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween:20,
   freeMode: true,
   pagination: {
     el: ".swiper-pagination",
     clickable:true,
   },
 });
 // gallery section
 var swiper= new Swiper(".mySwiper2", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   },
   pagination: {
     el: ".swiper-pagination",
   },
 });

/// loginpage:
// login page
let btnlogin=document.querySelector('.header .user .btn');
let btnclose=document.querySelector('.login .close');
let loginpage=document.querySelector('.login');
let loginform=document.querySelector('.login .container form.loginform');
let signupform=document.querySelector('.login .container form.signupform');
let btnsignupprocess=document.querySelector('.login .container .loginform strong');
let btnloginprocess=document.querySelector('.login .container .signupform strong');
console.log(btnloginprocess)
let btnloginform=document.querySelector('.login .container .loginform .btnlogin');
let btnsignupform=document.querySelector('.login .container .signupform .btnsignup');
let error=document.querySelector('.login .container form.signupform .error');
let error2=document.querySelector('.login .container form.loginform .error');

btnlogin.addEventListener("click",()=>{
   loginpage.style.top="0px";
});
btnclose.addEventListener("click",()=>{
   loginpage.style.top="-600px";
});
btnsignupprocess.addEventListener("click",()=>{
  signupform.style.display='block';
  loginform.style.display='none';
});
btnloginprocess.addEventListener("click",()=>{
   signupform.style.display='none';
   loginform.style.display='block';
 });
   
  function logincheck(){
   btnloginform.addEventListener("click",(e)=>{
      let getusername=localStorage.getItem('username');
      let getpasword=localStorage.getItem('password');
      e.preventDefault();
          if(loginform[0].value==''||loginform[1].value==''){
            loginform[0].style.border='1.4px solid rgb(227, 90, 90)';
            loginform[0].focus();
            loginform[1].style.border='1.4px solid rgb(227, 90, 90)';
            error2.innerHTML=`please fill the impty field`;
          }
        else if(loginform[0].value==getusername&&loginform[1].value==getpasword){
         loginform[0].style.border='1.4px solid rgb(94, 230, 76)';
         loginform[1].style.border='1.4px solid rgb(94, 230, 76)';
            error2.style.color='rgb(94, 230, 76)'
            error2.innerHTML=`thanks`;
            setTimeout(() => {
                   loginpage.style.top='-600px';
                loginform[0].style.border='1.4px solid rgb(182, 186, 186)';
                 loginform[1].style.border='1.4px solid rgb(182, 186, 186)';
                  loginform[0].value=loginform[0].name;
                  loginform[1].value=loginform[1].name;
                  error2.innerHTML='';
                  document.location.reload();
            }, 2000);
        }
        else{
         error2.innerHTML=`please enter your correct acount`;
        }
         
    });
  }
  logincheck();
   
    //signupform
    btnsignupform.addEventListener("click",(e)=>{
      e.preventDefault();
         // check if the field=s is empty
          if(signupform[0].value==""){
             signupform[0].style.border='1.4px solid rgb(227, 90, 90)';
             error.innerHTML=` enter your ${signupform[0].placeholder} please`;
            }
            else if(signupform[1].value==""){
               signupform[1].style.border='1.4px solid rgb(227, 90, 90)';
               error.innerHTML=` enter your ${signupform[1].placeholder} please`;
          }
          else if(signupform[2].value==""){
            signupform[2].style.border='1.4px solid rgb(227, 90, 90)';
            error.innerHTML=` enter your ${signupform[2].placeholder} please`;
          }
          else{
           localStorage.setItem('username',signupform[0].value);
           localStorage.setItem('email',signupform[1].value);
           localStorage.setItem('password',signupform[2].value);
           error.style.color='rgb(94, 230, 76)';
           error.innerHTML=`your acount is created you must login`;
           setTimeout(() => {
              signupform.style.display='none';
              loginform.style.display='block';
           }, 2000);
          }
    });
      // popups 
   let popups=document.querySelector('.popups');
   let popupscloseicon=document.querySelector('.popups .fa-xmark');
   popupscloseicon.addEventListener('click',()=>{
    popups.style.opacity='0';
   });
   function showpopups(){
    popups.style.opacity='1';
   }
    ///
  // email js
 let companyname=document.querySelector('form#company-form .companyname');
 let managername=document.querySelector('form#company-form .managername');
 let companyemail=document.querySelector('form#company-form .companyemail');
 let companyaddress=document.querySelector('form#company-form .address');
 let companymessage=document.querySelector('form#company-form .message');
 let btnsubmit=document.querySelector('form#company-form .btn');

 function send(){
  emailjs.send("service_gb0vp89","template_obl00dt",{
    from_name:companyname.value,
    manager_name:managername.value,
    company_email:companyemail.value,
    company_address: companyaddress.value,
    message:companymessage.value
    }).then(res=>{
      console.log('success');
    });
 }
 btnsubmit.addEventListener('click',(e)=>{
  e.preventDefault();
  //check empty field:
  if(companyname.value==""||managername.value==""||companyemail.value==""||companyaddress.value==""){
    document.querySelector('form .messageerror').innerHTML='please fill the empty data';
    document.querySelector('form .messageerror').style.color='red';
    document.querySelector('form .messageerror').style.textAlign='center';
    companyname.addEventListener('keydown',()=>{
    document.querySelector('form .messageerror').innerHTML='';
    })
  }
  else if(companyemail.value.includes('@')==false&&companyemail.value.includes('.')==false){
    document.querySelector('form .messageerror').innerHTML='the email not valid';
    document.querySelector('form .messageerror').style.color='red';
       document.querySelector('form .messageerror').style.textAlign='center';
  }
  else{
       send();
    document.querySelector('form .messageerror').innerHTML='thanks yor message has been sent';
    document.querySelector('form .messageerror').style.color='green';
    popups.style.top='170vh';
    showpopups();
  }
 })

// the client email:
   // the require elements:
   let fullname=document.querySelector('form.form2 .firstname');
   let typeofservices=document.querySelector('form.form2 .servicesdata');
   let clientemail=document.querySelector('form.form2 .email');
   let clientage=document.querySelector('form.form2 .age_phone .age');
   let clientphone=document.querySelector('form.form2 .age_phone .phone');
   let fromcity=document.querySelector('form.form2 .fromcity #fromcity2');
   let placeindetail=document.querySelector('form.form2 .fromcity .placeindetails');
   let tocity=document.querySelector('form.form2 .tocity #tocity2');
   let amount=document.querySelector('form.form2 .tocity #amount');
   let date=document.querySelector('form.form2 .date .date2');
   let datetime=document.querySelector('form.form2 .date .datetime2');
   let clientmessage=document.querySelector('form.form2 .clientmessage');
   let clientsubmit=document.querySelector('form.form2 .btn2');
   
  function sendclient(){
    emailjs.send("service_gb0vp89","template_4ana8ch",{
      full_name:fullname.value,
      from_name: fullname.value,
      type_service:typeofservices.value,
      client_email:clientemail.value,
      client_age:clientage.value,
      client_whatsapp:clientphone.value,
      client_fromcity:fromcity.value,
      place_in_details:placeindetail.value,
      client_tocity:tocity.value,
      client_count:amount.value,
      date_travel:date.value,
      time_travel:datetime.value,
      message:clientmessage.value,
      }).then((res)=>{
          console.log('success');
      });
   }
   clientsubmit.addEventListener('click',(e)=>{
    e.preventDefault();
    //check
    if(fullname.value==""||typeofservices.value==""||clientemail.value==""||clientphone.value==""||clientage.value==""||fromcity.value==""||placeindetail.value==""||tocity.value==""||amount.value==""||date.value==""||datetime.value==""){
      document.querySelector('.form2 .messageerror').innerHTML='please fill the empty data';
      document.querySelector('.form2 .messageerror').style.color='red';
      document.querySelector('.form2 .messageerror').style.textAlign='center';
      companyname.addEventListener('keydown',()=>{
      document.querySelector('.form2 .messageerror').innerHTML='';
      })
    }
    else if(clientemail.value.includes('@')==false&&clientemail.value.includes('.')==false){
      document.querySelector('.form2 .messageerror').innerHTML='the email not valid';
      document.querySelector('.form2 .messageerror').style.color='red';
         document.querySelector('.form2 .messageerror').style.textAlign='center';
    }
    else{
      sendclient();
      document.querySelector('.form2 .messageerror').innerHTML='thanks yor message has been sent';
      document.querySelector('.form2 .messageerror').style.color='green';
    popups.style.top='170vh';
      showpopups();
       }
   });
 // contact us:
 let btncontact=document.querySelector('.contactform input.btn');
  btncontact.addEventListener('click',(e)=>{
    e.preventDefault();
    popups.style.top='3300px';
    showpopups();
  })

   