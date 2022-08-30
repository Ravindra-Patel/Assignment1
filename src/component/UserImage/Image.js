import "../../App.css";

const Image = ({image}) => {
  return (
    <div className="cover-card">
      <div className="cardHeadImage">
        <img src={image} alt={image}></img>
      </div>
    </div>
  );
};

export default Image;
