interface cardComponent {
  isHover?: boolean;
  children?: JSX.Element | JSX.Element[];
}

function CardComponent({ isHover = false, children }: cardComponent) {
  const getHover = () => {
    switch (isHover) {
      case true:
        return "gradient-border3";
      case false:
        return "gradient-border2";
      default:
        return "gradient-border2";
    }
  };

  return (
    <div
      className={`w-full h-full backdrop-blur-lg rounded-2xl  ${getHover()}`}
    >
      {children}
      <h1>hi </h1>
    </div>
  );
}

export default CardComponent;
