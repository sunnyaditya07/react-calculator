function DigitButton({ dispatch, digit }) {
  return (
    <button onClick={() => dispatch({ type: "addDigit", payload: { digit } })}>
      {digit}
    </button>
  );
}

export default DigitButton;
