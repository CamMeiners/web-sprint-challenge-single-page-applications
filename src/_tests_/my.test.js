describe('Form App', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]');
    const pepperoni = () => cy.get('input[name=pepperoni]');
    const bacon = () => cy.get('input[name=bacon]');
    const orderButton = () => cy.get('button[id=order-button]')
    const emailInput = () => cy.get('input[name=email]')
    const addressInput = () => cy.get('input[name=address]')

    it('Test Check', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('Proper Elements'), () => {
        nameInput().should('exist');
        pepperoni().should('exist');
        bacon().should('exist');
        orderButton().should('exist');
    }


        it('Navigate', () => {
            cy.url().should('include', 'localhost');
        })
        it('Name, Checking all boxes', () => {
            nameInput()
                .should('have.value', '')
                .type('Cam')
                .should('have.value', 'Cam')
            pepperoni()
                .should('not.be.checked')
                .check()
                .should('be.checked')
            bacon()
                .should('not.be.checked')
                .check()
                .should('be.checked')

        })

        it('Order Button', () => {
            orderButton()
                .should('be.disabled')
                nameInput().type('Cam')
                emailInput().type('cam@lambda.com')
                addressInput().type('555N 444W')
                orderButton().should('not.be.disabled')
        })

})