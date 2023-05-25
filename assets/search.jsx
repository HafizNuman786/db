export function SearchIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=" text-white"
      width={props.width ? props.width : 24}
      height={props.height ? props.height : 24}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokewidth={2}
    >
      <path
        strokelinecap="round"
        strokelinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}
