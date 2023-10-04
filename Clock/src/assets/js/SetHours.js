export default function SetHours(hour) {
  let currentHour = hour;
  if (hour > 12) {
    switch (hour) {
      case 13:
        currentHour = "01";
        break;
      case 14:
        currentHour = "02";
        break;
      case 15:
        currentHour = "03";
        break;
      case 16:
        currentHour = "04";
        break;
      case 17:
        currentHour = "05";
        break;
      case 18:
        currentHour = "06";
        break;
      case 19:
        currentHour = "07";
        break;
      case 20:
        currentHour = "08";
        break;
      case 21:
        currentHour = "09";
        break;
      case 22:
        currentHour = "10";
        break;
      case 23:
        currentHour = "11";
        break;
      default:
        currentHour = "12";
        break;
    }
  }

  return currentHour;
}
