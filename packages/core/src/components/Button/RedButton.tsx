export interface RedButtonProps {
  label: string;
}

export function RedButton(props: RedButtonProps): JSX.Element {
  return (
    <button data-testid="core-button" style={{ backgroundColor: 'red', color: 'white' }}>
      {props.label}
    </button>
  );
}
