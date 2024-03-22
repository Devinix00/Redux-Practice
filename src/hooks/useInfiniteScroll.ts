import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

interface IProps {
  setPage: Dispatch<SetStateAction<number>>;
  loader: MutableRefObject<HTMLDivElement | null>;
}

function useInfiniteScroll({ setPage, loader }: IProps) {
  useEffect(() => {
    const observerOptions = {
      rootMargin: "50px",
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const currentLoader = loader.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [loader, setPage]);
}

export default useInfiniteScroll;
