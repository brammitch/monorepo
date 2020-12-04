interface Props {
  label: string;
}

export default function LocalButton(props: Props): JSX.Element {
  return <button data-testid="local-button">{props.label}</button>;
}
