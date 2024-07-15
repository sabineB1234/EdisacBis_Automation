const selectorsRegistersUser = {
    
    //inputEmail : "#email",
    //inputPassWord : "#password",
    //buttonLogin : "#btn-cnx",
    MonCompteButton : "#account-mini",
    MonCompteLoginButton :'./label.hide840.small',
    
    //buttonLogin : 'div:has(button:contains("Me connecter"))',
    InputTextDejaVu : '.right > .titre-separation', 
    
   // InputTextDejaVu :'div:has(div:contains("Nouveau client"))',
    
    InputEmail :'#emailreg',
    ButtonValidate : '#registerbtn',

    InputTextCreeMonCompte : '.title0 > span',
   
    InputPassWord :'#password',
    InputPassWordConfirm :'#confirmpassword',
    InputCategory :' [value="P"]',
    //InputCategory :'div:has(input:contains("Particulier"))',
    InputTitle :'#identificationbtn > span',
    InputTitle : '[value="3"]',

    InputLastName :'#lastname',
    InputFirstName :'#firstname',

    InputDay :'#birthday',
    InputMonth :'#birthdate > :nth-child(2) > select',
    InputYear : ':nth-child(3) > select',

    InputCountry :'#countrycode',

    InputZipCode :'#zipcode',
    InputCity :'#city',
    InputAdress :'#address',
    InputAdress2 :'#address2',
    
    InputMobile :'#mobile',
    InputPhone :'#phone',

    InputNewsLetter :'#newsletterEdi',
    InputNewsLetterMessage : '.wauto',
   
    InputValidate :'#identificationbtn > span',

    InputLogOut :' a[href="/logout.php"]',
    								
    //buttonLogin : '.btn-Primary',
    //inputEmail :'input[placeholder="E-mail"]',
    //inputPassWord :'#ipassword',
    //buttonLogin : '.btn-Primary',
    InputStatutMsg : '.title0 > :nth-child(2)', 
    //buttonLoginOut :'a:has(span:contains("Déconnexion"))',
    buttonLoginOut :'.right > a',
    EmailErrorMessage : '#registerresponse',
   // InputEmailErrorMessage :'#registerresponse',
};
 
export default selectorsRegistersUser;