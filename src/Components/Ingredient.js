const Ingredient = (props) => {
  const picture = props.picture;
  const content = props.content;
  const openModal = () => {
    
  };
  return (
    <div
      className="ingredient"
      onClick={() => {
        openModal();
      }}
      style={{ backgroundImage: picture }}
    >
      <div className="modal hidden">
        <p className="modal-content">{content}</p>
      </div>
    </div>
  );
};

export default Ingredient;
