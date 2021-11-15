export default function SubmitButton({ handleSubmit, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
}
