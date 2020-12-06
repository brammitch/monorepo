export interface BlueButtonProps {
  label: string;
}

export function BlueButton(props: BlueButtonProps): JSX.Element {
  return (
    <button data-testid="core-button" style={{ backgroundColor: 'blue', color: 'white' }}>
      {props.label}
    </button>
  );
}
