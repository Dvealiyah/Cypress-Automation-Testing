it.only('visit&Login', function()       {


cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //visit orange wedsit
cy.wait(3000)
cy.get('[name="username"]').type('admin') //type username
cy.wait(3000)
cy.get('[name="password"]').type('admin123') //type password
cy.wait(3000)
cy.get('.oxd-button').click()
cy.wait(3000)


});