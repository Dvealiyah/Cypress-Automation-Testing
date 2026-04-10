it.only('AddDeleteJobTitle' ,function() {

/* cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //visit orange wedsit
cy.wait(3000)
cy.get('[name="username"]').type('admin') //type username
cy.wait(3000)
cy.get('[name="password"]').type('admin123') //type password
cy.wait(3000)
cy.get('.oxd-button').click()  //click LOGIN button
cy.wait(3000)  */

//chose Admin
cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
cy.wait(5000);

// click on job boutoon to drop the list 
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
cy.wait(3000);


 // chose jon title from the lisr 
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
cy.wait(3000);

// click on add bouton 
cy.get('.oxd-button').click();
cy.wait(3000);

// write the job title 
cy.get(':nth-child(2) > .oxd-input').type('Software Engineerr');
cy.wait(3000);

//write the job description
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Tests software to find bugs, ensure quality, and verify that it meets requirements before release. Works with developers to fix issues.');
cy.wait(3000);

// add browse
cy.get ('[type="file"]').selectFile('cypress/fixtures/job.txt',{force: true});
cy.wait(3000);

// weite note 
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('First');
cy.wait(3000);

// tan on save boutton  
cy.get('.oxd-button--secondary').click();
cy.wait(3000);

//delete
// assertion
        cy.get('.oxd-table-body').should('contain', 'Software Engineerr').then(() => cy.log('Job title verified'));
        cy.wait(4000);
        // First find the exact row containing your job title and scrollview
        cy.contains('.oxd-table-row', 'Software Engineerr')
            .scrollIntoView({ duration: 300 })
            .should('exist')
            .within(() => {
                // checkbox click
                cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
                    .click({ force: true });
                // click trash
                cy.get(':nth-child(1) > .oxd-icon')
                    .should('be.visible')
                    .click({ force: true, multiple: true });
            });
        cy.wait(5000);
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete
                cy.wait(8000); 

})