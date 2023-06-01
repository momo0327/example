
describe('Booking page', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5173/')
    cy.wait(500)

  

  })

  it('should fill a reservation with date, time, bowlinglanes, players',()=>{
    cy.get('[type="date"]').type('2023-05-06')
    cy.get('[type=text]').type('03.45')
    cy.get('[name="people"]').type('5')
    cy.get('[name="lanes"]').type('1')
  
  })

  it('should choose how many input fields for the shoe size, and fill in the shoe size for every player and book',()=>{
    cy.get('[type="date"]').type('2023-05-06')
    cy.get('[type=text]').type('03.45')
    cy.get('[name="people"]').type('5')
    cy.get('[name="lanes"]').type('1')
    cy.get('[class="shoes__button"]').click().click().click().click().click().click()
    cy.get('[class="input__field shoes__input"]').eq(0).type('43').should('be.visible')
    cy.get('[class="input__field shoes__input"]').eq(1).type('41').should('be.visible')
    cy.get('[class="input__field shoes__input"]').eq(2).type('37').should('be.visible')
    cy.get('[class="input__field shoes__input"]').eq(3).type('55').should('be.visible')
    cy.get('[class="input__field shoes__input"]').eq(4).type('31').should('be.visible')
    cy.get('[class="input__field shoes__input"]').eq(5)
    cy.get('[class="shoes__button shoes__button--small"]').eq(5).click()
    cy.wait(500)
    cy.get('[class="button booking__button"]').click()

  })


  it('should have the right information on the confirmation page, right date,time players and lanes',()=>{
    cy.get('[type="date"]').type('2023-05-06')
    cy.get('[type=text]').type('03.45')
    cy.get('[name="people"]').type('5')
    cy.get('[name="lanes"]').type('1')
    cy.get('[class="shoes__button"]').click().click().click().click().click()
    cy.get('[class="input__field shoes__input"]').eq(0).type('43')
    cy.get('[class="input__field shoes__input"]').eq(1).type('41')
    cy.get('[class="input__field shoes__input"]').eq(2).type('37')
    cy.get('[class="input__field shoes__input"]').eq(3).type('55')
    cy.get('[class="input__field shoes__input"]').eq(4).type('31')
    cy.get('[class="button booking__button"]').click()
    cy.wait(1000)

    cy.get('[class="input__field confirmation__input"]').eq(0).should('have.value','2023-05-06 03.45')
    cy.get('[class="input__field confirmation__input"]').eq(3).invoke('val').should('not.be.empty')
    cy.get('[class="confirmation__price"] p:nth-child(2)').should('have.text','700 sek')

    
  })

  it('should click on navicon and navigate through booking and confirmation',()=>{

      cy.get('[class="navigation__icon"]').click().should('be.visible')
      cy.wait(1000)
      cy.get('.navigation__link').eq(0).click()
      cy.wait(1000)
      cy.get('[class="navigation__icon"]').click()
      cy.wait(1000)
      cy.get('[class="navigation__icon"]').click()

      cy.get('.navigation__link').eq(1).click()
  })


})

