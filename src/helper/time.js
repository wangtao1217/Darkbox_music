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
  const minute = formatNum(Math.floor(interval / 60));
  const second = formatNum(interval % 60);
  return `${minute}:${second}`;
};
