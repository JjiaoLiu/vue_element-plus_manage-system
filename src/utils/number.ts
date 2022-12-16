export function useFormatDuring(number: number): string {
  const m: number = Math.floor(number / 60);
  const s: number = Math.floor(number % 60);
  const mm = m.toString().padStart(2, "0");
  const ss = s.toString().padStart(2, "0");
  return `${mm}:${ss}`;
}
export function useNumberFormat(number: number): string | number {
  if (number > 100000000) {
    return (number / 100000000).toFixed(1) + "亿";
  }
  if (number > 10000000) {
    return (number / 10000000).toFixed(1) + "千万";
  }
  if (number > 10000) {
    return (number / 10000).toFixed(1) + "万";
  }
  return number;
}
