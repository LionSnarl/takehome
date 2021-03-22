

export default function Inputs() {


  //To-do access the props being passed from parent component 
  const handleChange = (e) => {
   let value = e.target.value
   // To do: send props to the story component
  }

  return (
    <>
      <p> Input component </p>
      <label> Label here </label>
      <input 
        type="text"
        name="inputName"
        value=""
        onChange={e => handleChange()}
      />
    </>
  );
}
