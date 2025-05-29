const removeSegment = (url, segmentToDelete) => {
  const segments = url.split("/").filter((segment) => segment !== "");
  for (let i = 0; i < segmentToDelete; i++) {
    segments.pop();
  }
  const newUrl = segments.join("/");
  return newUrl;
};
export default removeSegment;
