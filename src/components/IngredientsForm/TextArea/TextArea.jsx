import styled from "./textArea.module.css";
const TextArea = ({ onChangeHandler }) => {
  return (
    <div className={styled.TextArea}>
      <label htmlFor="prepInstructions">Instructions:</label>
      <textarea
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
        name="prepInstructions"
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default TextArea;
