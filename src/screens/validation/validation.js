import * as yup from 'yup';


const ValidationSchema = yup.object({
    roomWidth: yup
        .number('Enter parameters of your room')
        .min(1, 'This value must be greater than 0')
        .max(1000, 'Max value is 1000 sm')
        .required('required'),

    roomLength: yup
        .number('Enter parameters of your room')
        .min(1, 'This value must be greater than 0')
        .max(1000, 'Max value is 1000 sm')
        .required('required'),

    roomHeight: yup
        .number('Enter parameters of your room')
        .min(1, 'This value must be greater than 0')
        .max(1000, 'Max value is 1000 sm')
        .required('required'),

    name: yup
        .string('Enter your name')
        .min(2, 'Name should be of minimum 2 characters length')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
});

export default ValidationSchema;