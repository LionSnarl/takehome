

export default function Inputs({name}) {


  //To-do access the props being passed from parent component 
  const handleChange = (e) => {
   let value = e.target.value
   // To do: send props to the story component
  }

  return (
    <>
      <p> Input component </p>
      <label> {name} </label>
      <input 
        type="text"
        name={name}
        value=""
        onChange={e => handleChange()}
      />
    </>
  );
}
