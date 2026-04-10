it.only('add employee' ,function() {

/* cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //visit orange wedsit
cy.wait(3000)
cy.get('[name="username"]').type('admin') //type username
cy.wait(3000)
cy.get('[name="password"]').type('admin123') //type password
cy.wait(3000)
cy.get('.oxd-button').click()  //click LOGIN button
cy.wait(3000) */

cy.get(':nth-Child(1) >.oxd-main-menu-item').click()  //click on admin button
 cy.wait(3000)
cy.get('.orangehrm-header-container > .oxd-button').click()  //click add button
 cy.wait(3000)
 cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()  //choose user role
 cy.wait(3000)
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
 cy.wait(3000)
 cy.get('.oxd-autocomplete-text-input > input').type('a')
 cy.wait(5000)
cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
cy.wait(3000)
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
cy.wait(3000)
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
cy.wait(3000)
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('aliahx775')
cy.wait
(3000)
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('a002233fkc@')
cy.wait(3000)
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('a002233fkc@')
cy.wait(3000)
cy.get('.oxd-button--secondary').click()
cy.wait(5000)
// delet using serch functionm 
//type usename 
cy.get(':nth-child(2) > .oxd-input').type('aliahx775');  
cy.wait(4000);
//user role 
 // click on search button
cy.get('.oxd-form-actions > .oxd-button--secondary').click();  
cy.wait(3000);
//click on check box
cy.get('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click(); 
cy.wait(3000);
//click on delete basket
cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click(); 

//confirm delete
cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click();  
cy.wait(7000);



















/*
// assertion
        cy.get('.oxd-table-body').should('contain', 'Ahmadd').then(() => cy.log('Job title verified'));
        cy.wait(4000);
        // First find the exact row containing your job title and scrollview
        cy.contains('.oxd-table-row', 'Ahmadd')
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
        cy.wait(1000);
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete





*/

})