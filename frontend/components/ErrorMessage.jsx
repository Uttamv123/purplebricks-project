export default function ErrorMessage({ message }) {
  return (
    <div className="error-msg" role="alert">
      ⚠️ {message || 'Something went wrong. Please try again.'}
    </div>
  );
}
