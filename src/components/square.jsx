export const Square = (props) => {
  return (
    <button
      className='square'
      index={props.value}
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
};
