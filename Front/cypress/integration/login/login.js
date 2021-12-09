import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I log in', () => {

    cy.log({ email: 'yelder302@gmail.com', password: '123456' })

})

Then('the url is /', (url) => {

    cy.url()

})

Then('I\'m logged in', () => {

    cy.window('localStorage.email')
})