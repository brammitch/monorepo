interface Props {
  label: string;
}

export default function Button(props: Props): JSX.Element {
  return <button data-testid="core-button">{props.label}</button>;
}
