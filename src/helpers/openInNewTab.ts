export const openInNewTab = (url: string | undefined) => {
  if (url) {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  }
};
