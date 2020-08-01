/**
 * 日期格式化
 */
export const dateFormat = (intDate: any, format = "yyyy-MM-dd") => {
  if (!intDate) return "";
  let date = new Date(intDate);
  // let format = 'yyyy-MM-dd hh:mm:ss'
  var o: any = {
    "M+": date.getMonth() + 1, // month
    "d+": date.getDate(), // day
    "h+": date.getHours(), // hour
    "m+": date.getMinutes(), // minute
    "s+": date.getSeconds(), // second
    "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
    "S": date.getMilliseconds(), // millisecond
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    let item = o[k];
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1,
        RegExp.$1.length === 1 ? item : ("00" + item).substr(("" + item).length));
    }
  }
  return format;
};
