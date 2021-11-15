export default function ErrorMessage({ errors }) {
  return (
    <div>
      {Object.keys(errors).map((errorKey) => (
        <p key={errorKey}>{errors[errorKey]}</p>
      ))}
    </div>
  );
}
