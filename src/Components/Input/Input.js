export default function Inputs({parentKey, name, value, handleChange}) {
  return (
    <>
      <label> {name} </label>
      <input 
        type="text"
        name={name}
        id={parentKey}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
