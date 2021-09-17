import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
    .string()
    .required('Name is required!')
    .min(2, 'name must be at least 2 characters'),
    email: yup
    .string()
    .required('Email is required!')
    .email('Must be a valid email address!'),
    size:yup
    .string()
    .oneOf(['Small', 'Medium', 'Large', 'X-Large'], 'What size would you like your pizza?'),
    special:yup
    .string(),
    address:yup
    .string(),
    stuffedCrust: yup.boolean(),
    garlicCrust:yup.boolean(),
    noCheese:yup.boolean(),
    normalCheese:yup.boolean(),
    extraCheese:yup.boolean(),
    pepperoni:yup.boolean(),
    bacon:yup.boolean(),
    ham:yup.boolean(),
    peppers:yup.boolean(),
    olives:yup.boolean(),
    mushrooms:yup.boolean(),

})

export default schema;