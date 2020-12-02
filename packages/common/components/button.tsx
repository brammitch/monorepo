interface Props {
  label: string;
}

export default function Button(props: Props): JSX.Element {
  return <button>{props.label}</button>;
}
