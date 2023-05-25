export function WatchIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokewidth="1.5"
      stroke="currentColor"
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
    >
      <path
        strokelinecap="round"
        strokelinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
