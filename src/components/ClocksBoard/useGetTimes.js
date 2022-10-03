export const useGetTimes = () => {
  //get user timezone offset in minutes
  const currentDate = new Date();
  const userTimezoneOffset = currentDate.getTimezoneOffset();
};


adjustForTimezone(date){
    var timeOffsetInMS:number = date.getTimezoneOffset() * 60000;
    date.setTime(date.getTime() + timeOffsetInMS);
    return date
}