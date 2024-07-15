const selectorsLogin = {
    //inputEmail : "#email",
    //inputPassWord : "#password",
    //buttonLogin : "#btn-cnx",
    monCompteButton : '#account-mini',
    monCompteIdentifezVousButton : 'a:has(div:contains("Créez un compte ou identifiez-vous"))',
    monCompteLoginButton :'#account-mini',
    buttonLogin : '#loginbtn',
    //buttonLogin : 'div:has(button:contains("Me connecter"))',
    inputEmail :'#email',
    inputPassWord :'#password',
    //buttonLogin : '.btn-Primary',
    //inputEmail :'input[placeholder="E-mail"]',
    //inputPassWord :'input[placeholder="Mot de passe"]',
    //buttonLogin : '.btn-Primary',
    statutMsg : 'div:has(span:contains("Nad Sab"))', 
    //buttonLoginOut :'a:has(span:contains("Déconnexion"))',
    buttonLoginOut :' a[href="/logout.php"]' ,
   
    InputErrorMessage : "#createresponse",
};
 
export default selectorsLogin;