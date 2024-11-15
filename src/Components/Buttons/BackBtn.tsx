export default function BackBtn() {
  return (
    <button
      className="size-[38px] flex justify-center items-center ml-2 hover:bg-itemBacground rounded-lg transition"
      onClick={() => {
        window.history.back();
      }}
    >
      <svg
        className="size-[18px]"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M16.88 2.88c-.49-.49-1.28-.49-1.77 0L6.7 11.29c-.39.39-.39 1.02 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77z"></path>
      </svg>
    </button>
  );
}
