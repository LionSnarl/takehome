import React, {useState} from 'react'
import Input from '../Input/Input'


export default function Forms() {

    // TODO: Add remove input button. 

    //Providing the state with a mock object for initial values. This can be swapped out for any json package. In this project, we're dealing with parts of speech to render a story. In the english language, there are 8 total parts. With this in mind, we have a maximum of 8 total parent possibilities. 
    //For this example, we will start with only 3 parts of speech, giving us three unique inputs. 

    let mockData = {
        noun: { 
            noun1:
            {
                name:"noun1",
                value:""
            },
        },
        verb: {
            verb1: {
                name:"verb1",
                value:""
            }
        },
        adj: {
            adj1:{
                name:"adj1",
                value:""
            }
        }
    }

    // speechInputs holds a object of various parts of speech. Each category holds a unique child key with its own properties that will be used to populate the form inputs dynamically based upon the count of child keys. 
    //Starts with a single child key nested inside each parent key. 
    const [speechInputs, setSpeechInputs] = useState(mockData)
    

    ///TEST AREA
   const triggerLog = () => {
       console.log(speechInputs)
   }
    /// END TEST AREA
     
    const handleChange = (event) => {

        //Destructuring our event into target, then further destructuring our target into two different keys. This will allow us to use either name or value as key names if needed. 
        const {target: {name, value} } = event
        
        // Toggle for a conditional later that will decide if the new input has a parent key in state or not.
        let isUniqueParent = null
        // uniqueName will be utilized to store a keyName later.
        let uniqueName = null

        // //Creates an array of parent key names. 
        let parentKeys = Object.keys(speechInputs)

        //Check to see if the new input already has an existing key it can be nested into.
        if(parentKeys.includes(event.target.value)) {
            //Switch isUniqueParent to false.
            isUniqueParent = false
            //Set uniqueName for child key name
            uniqueName = `${event.target.value}${Object.keys(speechInputs.[value]).length+ 1}`    
        } else {
            isUniqueParent = true
            //set uniqueName to our target value, since it will be used as a parent key.
            uniqueName = event.target.value
        }

        //Check to see if uniqueParent got tripped to true before deciding how to set state.
        if(isUniqueParent === true) {
            //Create a new key name for the child object.
            let childKey = uniqueName + 1
            // Copy old state data and merge new object in when setting state.
            setSpeechInputs({...speechInputs, [uniqueName]:{[childKey]:{name:childKey, value:""}}})
        } else {
            // Copy old state and then access the key name we're adding a new child to, copy the old set of child keys and values and then add in the new child along with all of the original keys and values.
            setSpeechInputs({...speechInputs, [value]:{...speechInputs.[value], [uniqueName]:{name:uniqueName, value:""}}})
        }
        
    }
    

    // Our form submit function. Utilizes preventDefault to keep the page from refreshing on submission.
   const handleSubmit = (e) => {
       e.preventDefault();
   };

  return (
    <>
      <form onSubmit={handleSubmit}>
          {/* This can be easily modified to be more dynamic, such as a text box that sends the values of whats typed up to the state to define custom keys. The logic can handle anything handed to it.  A simple drop down works well for right now to fit within the MadLibs project idea. Only Noun, Verb and Adj currently exist ahead of time in the mock data state, when a new option is selected from dropdown it will add a whole new nested object into state.*/}
        <select onChange={handleChange}>
            <option default> Select a part of speech to add.</option>
            <option value="noun">Noun</option>
            <option value="pronoun">Pronoun</option>
            <option value="verb">Verb</option>
            <option value="adj">Adjective</option>
            <option value="adverb">Adverb</option>
            <option value="prepo">Preposition</option>
            <option value="conjunc">Conjunction</option>
            <option value="interj">Interjection</option>
        </select>
    <hr/>
        {
            //Acces our state object at top level and store the parent keys temporarily into an array so we can access the names and talk to the children keys. 
            Object.keys(speechInputs).map((keyName) => {
                //After mapping through the new array to capture the parent keys, we access the nested layer using the same pattern
                return Object.keys(speechInputs.[keyName]).map(childKey => {
                    //Now that we have our child keys, we're abe to have our map render a component on return with the key names passed as props.
                    return <Input 
                                name={childKey}/>
                })
            })
        }

      </form>
    </>
  );
}
