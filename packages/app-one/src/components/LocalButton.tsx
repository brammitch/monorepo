interface Props {
  label: string;
}

export default function LocalButton(props: Props): JSX.Element {
  return <button>{props.label}</button>;
}
