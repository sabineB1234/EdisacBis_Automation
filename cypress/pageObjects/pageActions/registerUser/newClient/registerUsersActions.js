import selectorsRegistersUser from "../../../../pageObjects/pageElements/registerUsers/newClient/regsiterUsersElements";

export class registerUserActions {

  visitLogin() {
      //cy.wait(6000);
      cy.visit('https://www.edisac.com/');
      cy.viewport(1500,1320);
      cy.wait(2000);
  }

  verifyVisibilityPageHome() {
      cy.title().then((title) => {
      cy.log('The title of the page is: ' + title);
      cy.title().should('contain', 'edisac');
      cy.url().should('contain', 'edisac');
    });
  }

  clickSignInButton() {
      cy.get(selectorsRegistersUser.MonCompteButton).click();
  }

  VerifyVisibilyPageAuthentification() {
      cy.wait(8000);
      
      cy.title().then((title) => {
      cy.log('The title of the page is: ' + title);
      cy.url().should('include', '/login');
    });
    }

  verifyTextsVisibleDejaVu (dejavutext){
    cy.wait(8000);
    cy.get(selectorsRegistersUser.InputTextDejaVu, { timeout: 10000 })
      .should('exist') // Vérifiez que l'élément existe
      .invoke('text')
      .then((text) => {
    cy.log('The message is: ' + text.trim());
        expect(text.trim()).contains(dejavutext);
      });
  }

  fillCreateAccountEmail(Email) {
    cy.get(selectorsRegistersUser.InputEmail).type(Email)// Remplacez par le sélecteur correct
    .trigger('mouseover');
    cy.get(selectorsRegistersUser.ButtonValidate, { timeout: 10000 })
    .click({ force: true });
  }

  clickCreateAccountButton(){
    cy.get(selectorsRegistersUser.ButtonValidate, { timeout: 10000 })
    .log('The je cree mon compte button is displayed')
    
    //.should('exist') 
    //.should('be.visible') 
    //.scrollIntoView()
    .then((button) => {
    cy.log('Button Add is found: ', button);  
    cy.get(selectorsRegistersUser.ButtonValidate)
    .click({ force: true });
  })
  }

  verifyVisibilityCreationPage() {
    cy.title().then((title2) => {
    cy.log('The title of the page is: ' + title2);
    cy.url().should('include', 'email');
    });
  }

  verifyTextVisibleAuthentification(creemoncomptetext) {
    cy.get(selectorsRegistersUser.InputTextCreeMonCompte)
      .invoke('text')
      .then((text) => {
        // Faites quelque chose avec le texte récupéré
        cy.log(text); // Affiche "Hello, World!" dans les logs de Cypress
        expect(text).contains(creemoncomptetext); // Exemple d'assertion
      });
    //cy.contains(creemoncomptetext).should('be.visible');
  }

  fillPasswordDetails(password, passwordBis) {
    cy.get(selectorsRegistersUser.InputPassWord).type(password); // Remplacez par le sélecteur correct
    cy.get(selectorsRegistersUser.InputPassWordConfirm).type(passwordBis); // Remplacez par le sélecteur correct
  }

  selectUserCategory() {
    cy.get(selectorsRegistersUser.InputCategory).click(); // Remplacez par le sélecteur correct
  }

  selectUserTitle() {
    cy.get(selectorsRegistersUser.InputTitle).click(); // Remplacez par le sélecteur correct
  }

  fillPersonalInformation(FirstName,LastName) {
    cy.get(selectorsRegistersUser.InputFirstName).type(FirstName);
    cy.get(selectorsRegistersUser.InputLastName).type(LastName);
  }

  selectDateOfBirth(day) {
    cy.get(selectorsRegistersUser.InputDay).select(day); // Remplacez par le sélecteur correct
  }

  selectMonthOfBirth(month) {
    cy.get(selectorsRegistersUser.InputMonth).select(month); 
  }

  selectYearOfBirth(year) {
    cy.get(selectorsRegistersUser.InputYear).select(year); 
  }

  selectCountry(country) {
    cy.get(selectorsRegistersUser.InputCountry).select(country); 
  }

  fillRegistrationDetails(Zipcode,City,Address,Address2,MobilePhone,HomePhone) {
    cy.get(selectorsRegistersUser.InputZipCode).type(Zipcode);
    cy.get(selectorsRegistersUser.InputCity).type(City);
    cy.get(selectorsRegistersUser.InputAdress).type(Address);
    cy.get(selectorsRegistersUser.InputAdress2).type(Address2);
    cy.get(selectorsRegistersUser.InputMobile).type(MobilePhone);
    cy.get(selectorsRegistersUser.InputPhone).type(HomePhone);
  }

  selectNewsletterCheckbox() {
    cy.get(selectorsRegistersUser.InputNewsLetter).click(); 
  }

  verifytNewsletterMessage(newsletter) {
    cy.log('Expected text: '+ newsletter); 
    cy.get(selectorsRegistersUser.InputNewsLetterMessage, { timeout: 10000 })
      .should('exist') 
      .invoke('text')
      .then((text) => {
    cy.log('The message is: ' + text.trim());
       expect(text.trim()).contains(newsletter);
      });
  }

  clickRegisterButton() {
    cy.get(selectorsRegistersUser.InputValidate).click(); 
  }

  clickMyAccountButton() {
    cy.get(selectorsRegistersUser.MonCompteButton).click({ multiple: true, force: true });
  }

  verifyUserStatus(expectedStatus) {
    cy.get(selectorsRegistersUser.InputStatutMsg)
      .invoke('text')
      .then((text) => {
      expect(text.trim()).contains(expectedStatus);
      });
  }

  clickSignOutButton() {
    cy.get(selectorsRegistersUser.InputLogOut,{ multiple: true });
    cy.wait(4000);
  }


verifyErrorMessage(Fields ,ErrorMessage){
  cy.wait(8000);
  const field = Fields.toString();
  cy.log('Field received: ' + field); 
  let selector;
  switch (true){
  case field.includes("EmailDejaUtilisé") :
      //cy.contains('Un compte associé à cette adresse existe déjà').should('be.visible');
      selector = selectorsRegistersUser.EmailErrorMessage, { timeout: 10000 } ;
      break;
  case field.includes("EmailInvalid"):
      selector = selectorsRegistersUser.EmailErrorMessage, { timeout: 10000 } ;
      break;
  case field.includes("EmailVide"):
      selector = selectorsRegistersUser.EmailErrorMessage, { timeout: 10000 } ;
      break;
      default:  
      cy.log('Invalid field provided: ' + field);    
      throw new Error ("Invalid field provided");
  }
    cy.wait(8000);
    cy.get(selector)
    .should('exist')
    .should('be.visible')
    .invoke('text').then((text) => {
      cy.wait(2000);
      cy.log('The message error is: ' + text); 
      //cy.get(selector).should("contain", ErrorMessage);
      cy.log('The expected message error  is: ' + ErrorMessage);
      expect(text.trim()).contains(ErrorMessage);
    });
}
}
export default new registerUserActions()