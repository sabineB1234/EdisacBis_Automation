import { Given, When, Then, And } from  'cypress-cucumber-preprocessor/steps';
import loginActions from '../../../../pageObjects/pageActions/authentification/login/loginActions';

Given(/^I navigate to automation URL to connect Edisac website/, () => {
  loginActions.visitLogin();
  });

And (/^I click on sign up button on the EDISAC page/, () => {
  loginActions.clickOnMonCompteButton();
    }); 

When (/^I enter a correct email (.*) and a correct password (.*)/,(Email,Password) => {
  loginActions.fillLoginCredentials(Email,Password);
  }); 

And (/^I click on login Button on the EDISAC page/,() => {
  loginActions.clickOnLoginButton() ;
  });

And (/^I click on mon compte on the EDISAC page/,() => {
    loginActions.clickOnMonCompteButton() ;
    }); 

And (/^I verify that I m (.*) on the EDISAC page/,(Statut) => {
  loginActions.VerifyVisibilyStatut(Statut)
    });

Then (/^I click on the login out button of Edisac page/,() => {
  loginActions.clickOnLogOutButton () ;
   }); 

When (/^I enter incorrect email (.*) and incorrect password (.*)/,(Email1,Password1) => {
  loginActions.fillIncorrectLoginCredentials(Email1,Password1);
    }); 
  
And (/^I click on login Button on the EDISAC page to authentication incorrect/,() => {
  loginActions.clickOnLoginButton() ;
    });

Then (/^under the fields (.*) I should see the messsage error (.*)/, (Fields,ErrorMessage) => {
  loginActions.getErrorMessage(Fields,ErrorMessage)
});