import React from 'react';

const FormComponent = () => {
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'Pooja',
        lastName: 'Sharma',
    };
    const element = <h1>Hello, {formatName(user)}!</h1>;
    function getGreeting(user) {
        if (user) {
            return <h1>Hello, {formatName(user)}!</h1>;
        }
        return <h1>Hello, Stranger.</h1>;
    }


    const greeting = <h2> How's your day ? {getGreeting(user)}</h2>;

    return (
        greeting
        // document.getElementById('root') -- Not required
    );
};

export default FormComponent;