import React, { Component } from 'react';
let instance;
let counter;

class  extends Component {
    constructor() {
        if(instance){
            return ('instance is already created');
        }
        return this;
    }
SingletonPattern
    getInstance = () =>{
        return this;
    }

    getCount = () => {
        return counter;
    }

    incrementCounter = () =>{
        counter++;
    }

    decrementCounter = () => {
        counter--;
    }
}

export default SingletonPattern;


const singletonCounter = Object.freeze(new SingletonPattern());