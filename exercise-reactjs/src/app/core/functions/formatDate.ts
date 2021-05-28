export const formatDate = (datetime: string) => {
  const arr: string[] = datetime.split("T");
  const date = arr[0].replaceAll("-", "/").split("/").reverse().join("/");
  const time = arr[1] ? arr[1].split(".")[0].slice(0, -3) : "";
  return `${date} ${time}`;
}
