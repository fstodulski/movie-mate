type InfiniteScrollOptions = {
  callback: () => void | Promise<void>;
  threshold?: number;
};
export const infiniteScroll = (
  node: HTMLElement,
  { callback, threshold = 0 }: InfiniteScrollOptions
) => {
  const handleScroll = async () => {
    if (node.scrollTop + node.clientHeight + threshold >= node.scrollHeight) {
      await callback();
    }
  };
  node.addEventListener('scroll', handleScroll);

  return {
    destroy() {
      node.removeEventListener('scroll', handleScroll);
    }
  };
};
