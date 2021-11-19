import styled from "./detailsBox.module.css";
const DetailsBox = ({ name, value }) => {
  return (
    <div className={styled.DetailsBox}>
      <h3>{name}:</h3>
      <p>{value}</p>
    </div>
  );
};

export default DetailsBox;
