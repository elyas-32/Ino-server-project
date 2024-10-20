export default function DetailBtn({setShow}) {
  return (
    <button
      className="size-[34px] flex items-center justify-center hover:bg-itemBacground rounded-lg transition"
      onClick={(e) => {
        e.stopPropagation();
        setShow(true);
      }}
    >
      <svg
        className="size-[26px]"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
      </svg>
    </button>
  );
}
