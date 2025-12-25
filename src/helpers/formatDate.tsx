const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export function formatDate(date: string): string {
  if (!date) return "";
  const dateFull = new Date(date);
  const month = months[dateFull.getMonth()];
  const day = dateFull.getDate();
  let dayPref = "st";
  if (day === 2) {
    dayPref = "nd";
  }
  if (day === 3) {
    dayPref = "rd";
  }
  if (day > 3) {
    dayPref = "th";
  }
  const year = dateFull.getFullYear();
  const dateString = `${month} ${day}
                    ${dayPref}, ${year}`;
  return dateString;
}
