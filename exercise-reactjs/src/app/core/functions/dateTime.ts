export const formatDate = (datetime: string) => {
  const start = -2;
  const date = new Date(datetime);
  const day = `0${date.getDay()}`.slice(start);
  const month = `0${date.getMonth() + 1}`.slice(start);
  const year = date.getFullYear();
  const hour = `0${date.getHours()}`.slice(start);
  const minute = `0${date.getMinutes()}`.slice(start);
  return `${day}/${month}/${year} ${hour}:${minute}`;
}
