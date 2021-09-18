import React from 'react';

const OrderPizza = (props) => {
    const {
        values,
        submit,
        change,
        disabled,
        
      } = props
    
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
      }
    return(
        <form className='form container' id='pizza-form' onSubmit={onSubmit}>
        <div className='form-group inputs'>
        
            <h1>Pizza Maker</h1>
            <h2>Contact Information</h2>
            <label>Name:
                <input
                id='name-input'
                name='name'
                type='text'
                value={values.name}
                onChange={onChange}
                />
            </label>
            <label>
                Email:
                <input
                name='email'
                type='text'
                value={values.email}
                onChange={onChange}
                />
            </label>
            <label>
                Address:
                <input
                name='address'
                type='text'
                value={values.address}
                onChange={onChange}
                />
            </label>
            
            <label>
                Size:
            <select id='size-dropdown' name="size" value={values.dropdown} onChange={onChange}>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='X-Large'>X-Large</option>
                    
                </select>
            </label>
            <h2>Crust</h2>
            <label>
                Stuffed Crust (adds $40)
                <input
                type='checkbox'
                name='stuffedCrust'
                value={values.stuffedCrust}
                onChange={onChange}
                />
            </label>
            <label>
                Garlic Crust (adds $120)
                <input
                type='checkbox'
                name='garlicCrust'
                value={values.garlicCrust}
                onChange={onChange}
                />
            </label>
            <h2>Cheese</h2>
            <label>
                None
                <input
                type='checkbox'
                name='noCheese'
                value={values.noCheese}
                onChange={onChange}
                />
            </label>           
            <label>
                Normal Cheese
                <input
                type='checkbox'
                name='normalCheese'
                value={values.normalCheese}
                onChange={onChange}
                />
            </label>            <label>
                Extra Cheese (adds $80)
                <input
                type='checkbox'
                name='extraCheese'
                value={values.extraCheese}
                onChange={onChange}
                />
            </label>
            <h2>Toppings</h2>
            <h3>Meats</h3>
            <label>
                Pepperoni
                <input
                type='checkbox'
                name='pepperoni'
                value={values.pepperoni}
                onChange={onChange}
                />
            </label>            
            <label>
                Bacon
                <input
                type='checkbox'
                name='bacon'
                value={values.bacon}
                onChange={onChange}
                />
            </label>            
            <label>
                Ham
                <input
                type='checkbox'
                name='ham'
                value={values.ham}
                onChange={onChange}
                />
            </label>
            <h3>Veggies</h3>
            <label>
                Green Peppers
                <input
                type='checkbox'
                name='peppers'
                value={values.peppers}
                onChange={onChange}
                />
            </label>
            <label>
                Olives
                <input
                type='checkbox'
                name='olives'
                value={values.olives}
                onChange={onChange}
                />
            </label>
            <label>
                Mushrooms
                <input
                type='checkbox'
                name='mushrooms'
                value={values.mushrooms}
                onChange={onChange}
                />
            </label>
            <h2>Instructions</h2>
            <label>Special Instructions: 
                <input
                id='special-text'
                name='special'
                type='text'
                value={values.special}
                onChange={onChange}
                />
            </label>

            
        
        <button id='order-button' disabled={disabled}>Submit</button>
        </div>
        </form>
    )
}
export default OrderPizza;