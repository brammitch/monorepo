interface Props {
  label: string;
}

export default function BlueButton(props: Props): JSX.Element {
  return (
    <button data-testid="core-button" style={{ backgroundColor: 'blue', color: 'white' }}>
      {props.label}
    </button>
  );
}
