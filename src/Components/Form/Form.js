import React, {useState} from 'react'
import Input from '../Input/Input'


export default function Forms() {

    // TODO: Add remove input button. 

    //Providing my state with a mock object for initial values. 
    let mockData = {
        noun: [],
        verb: [],
        adj: []
    }

    // numInputs state holds a value of how many inputs we want to appear in our form. 
    const [numInputs, setNumInputs] = useState(mockData)
    

    // handleChange listens to the first input of our form, numberOfInputs, on change of the initial value, it will update our numInputs state to the new value of the input. 
    const handleChange = (event) => {

        //Destructuring our event into a target, then further destructuring our target into two different keys. 
        const {target: {name, value} } = event
        
        //Preparing a variable to avoid hoisting- This will create a unique name later on for the creation of a new object name
        let uniqueName = ""

        //Match our drop down selection target value string to one of our three state keys.
        if(event.target.value === "noun") {
            //Set uniqueName's value to our matched state key and then check the current length of the state keys value array and add a +1 to it so that we always get a fresh number. 
           uniqueName = `noun${numInputs.noun.length + 1}`;
        } else if( event.target.value === "verb") {
           uniqueName = `verb${numInputs.verb.length + 1}`;
        } else if(event.target.value === "adj") {
            uniqueName = `adj${numInputs.adj.length + 1}`;
        } else {
            //Error catch all. 
            alert("Something went wrong");
        }

        //Gather our existing state and its nested properties and save a copy of it.
        let newObject = {...numInputs};

        //Reassign our new copy with our new object pushed into the array.
        newObject.[value].push({name:uniqueName, value:""});

        //Save our new version of the state. 
        setNumInputs(newObject);
    }
    

    // Our form submit function. Utilizes preventDefault to keep the page from refreshing on submission.
   const handleSubmit = (e) => {
       e.preventDefault();
   };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
            <option default> Select a part of speech to add.</option>
            <option value="noun">Noun</option>
            <option value="verb">Verb</option>
            <option value="adj">Adjective</option>
        </select>

        {
            //map through state, return the input component call with prop values dynamically assigned.
        }
           
      </form>
    </>
  );
}
