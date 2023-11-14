// 날짜 표시
export const today = new Date();
export const todayYear = today.getFullYear();
export const todayMonth = today.getMonth() + 1;
export const todayDate = today.getDate();

export const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const todayTextMonth = monthList[todayMonth];