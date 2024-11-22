export function formattedCardholder(value: string): string {
  if (!value.trim()) return "";
  let cleanedValue = value.replace(/[^a-zA-Z\s-]/g, "");
  cleanedValue = cleanedValue.replace(/--+/g, "-");
  cleanedValue = cleanedValue.trimStart();

  if (cleanedValue.startsWith("-")) {
    cleanedValue = cleanedValue.slice(1);
  }

  if (
    cleanedValue.trim().split(/\s+/).length === 1 &&
    cleanedValue.endsWith(" ")
  )
    return cleanedValue.trim() + " ";

  const words = cleanedValue.split(/\s+/).filter(Boolean);

  cleanedValue = words.slice(0, 2).join(" ");

  return cleanedValue.replace(/\s+/g, " ");
}

export function formattedCVC(value: string): string {
  return extractNumbers(value).slice(0, 3);
}

export function extractNumbers(value: string): string {
  return value.replace(/[^\d]/g, "");
}

export function formattedExpire(value: string): string {
  const digitValue = extractNumbers(value);

  const month = digitValue.substring(0, 2);
  const year = digitValue.substring(2, 4);

  if (month.length < 2) return month;

  const formattedMonth = formatPart(month, 1, 12);

  if (month.length === 2 && !year) return formattedMonth;
  if (year && year.length < 2) return `${formattedMonth}/` + year;

  const formattedYear = formatPart(year, 21, 26);

  return `${formattedMonth}/${formattedYear}`;
}

function formatPart(part: string, min: number, max: number): string {
  let num = parseInt(part);
  num = Math.min(Math.max(num, min), max);
  return num < 10 ? `0${num}` : `${num}`;
}
