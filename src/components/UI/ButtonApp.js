const ButtonApp = (props) => {
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.placeholder}
    </button>
  );
};

export default ButtonApp;
