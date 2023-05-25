export function TickIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mr-1"
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokewidth={2}
    >
      <path strokelinecap="round" strokelinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
