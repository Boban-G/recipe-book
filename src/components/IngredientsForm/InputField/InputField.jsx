import styled from "./inputField.module.css";
const InputField = ({
  fieldType,
  fieldFor,
  labelValue,
  placeholder,
  onChangeHandler,
  minVal = 0,
  maxVal = 1000,
}) => {
  return (
    <div className={`${styled.InputField}`}>
      <label htmlFor={fieldFor}>{labelValue}:</label>
      <input
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
        type={fieldType}
        placeholder={placeholder}
        min={minVal}
        max={maxVal}
      />
    </div>
  );
};

export default InputField;
