export const useLockScroll = () => {
  const lockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.body.style.overflow = "unset";
  };

  return { lockScroll, unlockScroll };
};
