import { ArrowUpIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

export const ButtonToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  function handleTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <button
        onClick={handleTop}
        className={
          visible
            ? "fixed right-8 bottom-72  w-12 h-12 flex justify-center items-center rounded-full border-0 text-white bg-violet-600 translate-y-56 cursor-pointer opacity-100"
            : "opacity-0"
        }
      >
        <ArrowUpIcon className="block h-7 w-7" />
      </button>
    </>
  );
};
