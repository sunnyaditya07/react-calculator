function OperationDigitButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: "chooseOperation", payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}

export default OperationDigitButton;
