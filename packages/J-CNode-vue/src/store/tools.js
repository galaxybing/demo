const tools = {
  transData() {

  },
  transTime(time, Iarr = ["year", "month", "day", "hour", "min", "second"]) {
    if (time) {
      let fullTime = new Date(time);
      return fullTime;
    } else {
      console.log("time format is err");
      return "ERR";
    }
    // return time.substr(0, );
  },
  transType(tab) {
    const typeObj = {
      ask: "问答",
      share: "分享",
      job: "工作",
      dev: "测试"
    }
    return typeObj[tab];
  },
  transTop(top) {
    if (top) {
      return "置顶"
    }
  },
  transGood(good) {
    if (good) {
      return "精华"
    }
  },
  limitCount(count) {
    return count >= 99 ? '99+' : count;
  },
  // 获取时间距离现在过去多久
  timeToNow(time) {
    let now = new Date().getTime();
    let last = new Date(time).getTime();
    let section = now - last;
    let second = Math.round(section / 1000);
    if (second / 60 > 1) {
      let min = Math.round(second / 60);
      if (min / 60 > 1) {
        let hour = Math.round(min / 60);
        if (hour / 24 > 1) {
          let day = Math.round(hour / 24);
        }
      }
    }
    return second;
  },
  // formatSeconds: function (value) {
  //   var secondTime = parseInt(value); // 秒
  //   var minuteTime = 0; // 分
  //   var hourTime = 0; // 小时
  //   if (secondTime > 60) { //如果秒数大于60，将秒数转换成整数
  //     //获取分钟，除以60取整数，得到整数分钟
  //     minuteTime = parseInt(secondTime / 60);
  //     //获取秒数，秒数取佘，得到整数秒数
  //     secondTime = parseInt(secondTime % 60);
  //     //如果分钟大于60，将分钟转换成小时
  //     if (minuteTime > 60) {
  //       //获取小时，获取分钟除以60，得到整数小时
  //       hourTime = parseInt(minuteTime / 60);
  //       //获取小时后取佘的分，获取分钟除以60取佘的分
  //       minuteTime = parseInt(minuteTime % 60);
  //     }
  //   }
  //   var result = "" + parseInt(secondTime) + "秒";

  //   if (minuteTime > 0) {
  //     result = "" + parseInt(minuteTime) + "分" + result;
  //   }
  //   if (hourTime > 0) {
  //     result = "" + parseInt(hourTime) + "小时" + result;
  //   }
  //   return result;
  // }
}
export default (tools)
