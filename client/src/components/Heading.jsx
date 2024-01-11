// eslint-disable-next-line react/prop-types
const Heading = ({ handleClick, spanText, text, subText, btnText }) => {
  return (
    <div className="heading">
      <div className="heading__info">
        <h1>
          <span>{spanText}</span> {text}
        </h1>
        <p>{subText}</p>
      </div>
      <button onClick={handleClick}>{btnText}</button>
    </div>
  );
};

export default Heading;
