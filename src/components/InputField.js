export default function InputField({ name, id, value, setValue, setErrors }) {
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <label>{name}</label>
      <input onChange={handleChange} value={value} />
    </div>
  );
}
