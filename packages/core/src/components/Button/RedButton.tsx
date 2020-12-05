interface Props {
  label: string;
}

export default function RedButton(props: Props): JSX.Element {
  return (
    <button data-testid="core-button" style={{ backgroundColor: 'red', color: 'white' }}>
      {props.label}
    </button>
  );
}
