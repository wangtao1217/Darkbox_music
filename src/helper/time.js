export const formatNum = (num, n = 2) => {
  let len = num.toString().length;
  while (len < n) {
    num = "0" + num;
    len++;
  }
  return num;
};

export const formatTime = (interval) => {
  interval = Math.floor(interval || 0);
  const min = formatNum(Math.floor(interval / 60));
  const sec = formatNum(interval % 60);
  return {
    min,
    sec,
  };
};
