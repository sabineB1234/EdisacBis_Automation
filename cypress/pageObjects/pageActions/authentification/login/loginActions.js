import selectorsLogin from '../../../../pageObjects/pageElements/authentification/login/loginElements';


class loginActions {
  visitLogin() {  
    cy.visit("https://www.edisac.com/");
    cy.viewport(1500,1320);
    cy.wait(2000);
  }

  //clickOnMonCompteButton() {
    // Vérifiez que le bouton "Mon Compte" existe et affichez un log
    //cy.get(selectorsLogin.monCompteButton)
      //.should('exist') // Vérifiez que l'élément existe
      //.log('The Mon Compte button is displayed')
      //.click({force: true }); 
      //.realHover() // Survolez le bouton "Mon Compte"
      //  // Survolez le bouton "Identifiez-vous" et cliquez dessus
       //cy.get(selectorsLogin.monCompteIdentifezVousButton, { timeout: 10000 })
          //.should('exist')
          //.log('Identifiez-vous button is displayed')
          //.realHover()
          
      //});
  

  fillLoginCredentials(Email,Password) {
    cy.get( selectorsLogin.inputEmail).clear().type(Email);
    cy.get(selectorsLogin.inputPassWord).clear().type(Password);
  }
  
// Clic sur le bouton de connexion
clickOnLoginButton() {
  cy.get(selectorsLogin.buttonLogin, { timeout: 10000 })
    .should('be.visible') // Attendre que l'élément soit visible
    .click();
}

clickOnMonCompteButton() {
  cy.get(selectorsLogin.monCompteLoginButton, { timeout: 10000 })
    .should('be.visible') // Attendre que l'élément soit visible
    .click();
}

clickOnLogOutButton() { 
  cy.wait(2000);
  cy.get(selectorsLogin.buttonLoginOut, { timeout: 10000 })
    .should('not.have.css', 'display', 'none')
    .then(() => {
      // Cliquez sur le lien de déconnexion
      cy.get('a[href="/logout.php"]')
        .should('be.visible') // Vérifiez que l'élément est visible
        .click({ multiple: true, force: true }); // Utilisez force: true si nécessaire
    });

   // Attendre que l'élément soit visible
  //.click({ multiple: true, force: true }); // Utiliser force: true si nécessaire
}
VerifyVisibilyStatut(Statut) { 
cy.get(selectorsLogin.statutMsg).invoke('text').then((text) => {
  cy.log('The message is: ' + text); 
  cy.get(selectorsLogin.statutMsg).should("contain", Statut);
  //expect(text.trim()).to.equal(Statut);
});
}

fillIncorrectLoginCredentials(Email1,Password1){
cy.get(selectorsLogin.inputEmail).clear().type(Email1);
cy.get(selectorsLogin.inputPassWord).clear().type(Password1);
}

getErrorMessage(Fields ,ErrorMessage){
    const field = Fields.toString();
    cy.log('Field received: ' + field);  // Log ajouté
    let selector;
    switch (true){
    case field.includes("Email") :
        selector = selectorsLogin.InputErrorMessage;
        break;
    case field.includes("Password"):
        selector = selectorsLogin.InputErrorMessage;
        break;
        default:  
        cy.log('Invalid field provided: ' + field);    
        throw new Error ("Invalid field provided");
      }
      cy.get(selector).invoke('text').then((text) => {
        cy.log('The message is: ' + text); 
        cy.get(selector).should("contain", ErrorMessage);
        expect(text.trim()).contains(ErrorMessage);
      });
  }}

export default new loginActions()

