import React, { useState, useEffect } from "react";
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import OrderPizza from './order-pizza';
import schema from './formSchema';
import * as yup from 'yup';
import Pizza from './Pizza'
import axios from 'axios'
// const { url } = useRouteMatch();

const initialFormValues = {
  name: '',
  email:'',
  address:'',
  size:'',
  stuffedCrust: false,
  garlicCrust:false,
  noCheese:false,
  normalCheese:false,
  extraCheese:false,
  pepperoni:false,
  bacon:false,
  ham:false,
  peppers:false,
  olives:false,
  mushrooms:false,
  special:'',
}

const initialFormErrors = {
  name: '',
  email:'',
  address:'',
  size:'',
}

const initialPizzas = []
const initialDisabled = true



const App = () => {

const [pizzas, setPizzas] = useState(initialPizzas)
const [formValues, setFormValues]= useState(initialFormValues) 
const [formErrors, setFormErrors] = useState(initialFormErrors) 
const [disabled, setDisabled] = useState(initialDisabled)

const postNewPizza = newPizza => {
  axios.post('https://reqres.in/api/orders', newPizza)
  .then(res => {
    setPizzas([res.data, ...pizzas])
    setFormValues(initialFormValues);
  }).catch(err => {console.error(err)})
}

const inputChange = (name,value) => {
  yup.reach(schema,name)
  .validate(value)
  .then(() => setFormErrors({ ...formErrors, [name]: '' }))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  setFormValues({
    ...formValues,
    [name]: value
  })
}
const formSubmit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    address: formValues.address.trim(),
    size: formValues.size,
    stuffedCrust: formValues.stuffedCrust,
    garlicCrust:formValues.garlicCrust,
    noCheese:formValues.noCheese,
    normalCheese:formValues.normalCheese,
    extraCheese:formValues.extraCheese,
    pepperoni:formValues.pepperoni,
    bacon:formValues.bacon,
    ham:formValues.ham,
    peppers:formValues.peppers,
    olives:formValues.olives,
    mushrooms:formValues.mushrooms,
    special:formValues.special,
  }
  postNewPizza(newPizza);
}
useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <>

    <div className ='App'>
    <nav>
      <Link to ='/'>Home</Link>
      
    </nav>
    <Switch>
    <Route exact path={'/'} >
      <h1>Lambda Eats</h1>
      <h2>Gourmet pizza from sources you can trust!</h2>
      <Link to='/pizza'>
      <button type='button' id='order-pizza'>Order Now!</button>
      </Link>
      
      </Route>
      <Route path={'/pizza'}>
        <OrderPizza
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        />
        {
        pizzas.map(pizza => {
          return (
            <Pizza key={pizza.id} details={pizza} />
          )
        })
      }
      </Route>
    </Switch>

      </div>
    
  </>
  );
};
export default App;
