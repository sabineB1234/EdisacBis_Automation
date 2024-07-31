import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import loginActions from '../../../../pageObjects/pageActions/authentification/login/loginActions';
import registerUserActions  from '../../../../pageObjects/pageActions/registerUser/newClient/registerUsersActions';


Given(/^I navigate to EDISAC URL to sign up/,() => {
  loginActions.visitLogin();
});

When (/^I verify that EDISAC home page is visible/,() => { 
  console.log('registerUserActions:', registerUserActions); // Debug
      if (registerUserActions && typeof registerUserActions.VerifyVisibilyPageAuthentification === 'function') {
        registerUserActions.VerifyVisibilyPageAuthentification();
      } else {
        throw new Error('registerUserActions or VerifyVisibilyPageAuthentification is not defined correctly.');
      }
});

And (/^I click on the sign in button on the EDISAC page/,() => {
  registerUserActions.clickSignInButton();
});

When (/^I verify that EDISAC page authentications is visible/,() => {
  registerUserActions.VerifyVisibilyPageAuthentification();
});

And (/^I verify that nouveau client (.*) is visible on EDISAC page/,(dejavutext) => {
  registerUserActions.verifyTextsVisibleDejaVu (dejavutext);
});

When (/^I fill the email address on the create account section EDISAC page/,() => {
  registerUserActions.fillCreateAccountEmail();
});

And(/^I click create account button in EDISAC page/,() => {
  registerUserActions.clickCreateAccountButton();
});

When(/^I verify that I m on Je crée mon compte EDISAC page/,() => {
  registerUserActions.verifyVisibilityCreationPage();
});

And (/^I verify that the text (.*) Edisac website is visible/,(creemoncomptetext) => {
  registerUserActions.verifyTextVisibleAuthentification(creemoncomptetext);
});

And (/^I fill password in the following details/,(dataTable) => {
  const details = dataTable.rowsHash();
  cy.log('Details:', details);
  cy.log('Password:', details.Password);
  cy.log('PassWordBis:', details.PassWordBis);

  registerUserActions.fillPasswordDetails(details.Password, details.PassWordBis);
});

And (/^I select User category personne or entrerpise/,() => {
  registerUserActions.selectUserCategory();
})
And (/^I select User title Mrs or Mr on EDISAC create page/,() => {
  registerUserActions.selectUserTitle();
})

And (/^I select day of birth of the user (.*) on EDISAC create page/,(day) => {
  registerUserActions.selectDateOfBirth(day);
})

And (/^I select month of birth of the user (.*) on EDISAC create page/,(month) => {
  registerUserActions.selectMonthOfBirth(month);
})

And (/^I select year of birth of the user (.*) on EDISAC create page/,(year) => {
  registerUserActions.selectYearOfBirth(year);
})

And (/^I select the country of the user (.*) on EDISAC create page/,(country) => {
  registerUserActions.selectCountry(country);
})

And (/^I fill Personnel informations on EDISAC create page in the following details/,(dataTable) => {
  const details = dataTable.rowsHash();
  cy.log('Details:', details);
  cy.log('FirstName:', details.FirstName);
  cy.log('LastName:', details.LastName);
  
  registerUserActions.fillPersonalInformation(details.FirstName,details.LastName);
})

And (/^I fill the supply registration informations form on EDISAC create page with the following details/,(dataTable) => { 
  const details = dataTable.rowsHash();
  cy.log('Details:', details);
  cy.log('Zipcode:', details.Zipcode);
  cy.log('City:', details.City);
  cy.log('Address:', details.Address);
  cy.log('Address2:', details.Address2);
  cy.log('HomePhone:', details.HomePhone);
  cy.log('MobilePhone:', details.MobilePhone);
  registerUserActions.fillRegistrationDetails(details.Zipcode, details.City, details.Address, details.Address2, details.HomePhone, details.MobilePhone);
});

And (/^I Select checkbox Sign up for our newsletter on EDISAC create page/, () => {
  registerUserActions.selectNewsletterCheckbox();
});

And (/^I verify (.*) information on EDISAC create page/,(newsletter) => {
  registerUserActions.verifytNewsletterMessage(newsletter);
});

And (/^I click on register button on EDISAC create page/, () => {
  registerUserActions.clickRegisterButton();
});

And (/^I Click on mon compte button on EDISAC create page/,() => {
  registerUserActions.clickMyAccountButton();
});

And (/^I verify the statue (.*) on EDISAC create page/,(expectedStatus) => {
  registerUserActions.verifyUserStatus(expectedStatus);
});

Then (/^I Click on sign out button/,() => {
  registerUserActions.clickSignOutButton();
});

 When (/^I fill the email address (.*) on the create account section EDISAC page/,(Email) => {
  registerUserActions.fillCreateAnAccountEmail(Email);
});

Then (/^under the fields (.*) I should see the messsage error (.*)/,(Fields ,ErrorMessage) => {
  registerUserActions.verifyErrorMessage(Fields ,ErrorMessage);
});
