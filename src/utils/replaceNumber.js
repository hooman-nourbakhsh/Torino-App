export const e2p = (s) => (s ? s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]) : "");

export const p2e = (s) => (s ? s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d)) : "");

export const sp = (number) => {
  if (!number && number !== 0) return "۰";
  const seperatedNumber = number.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber.join(",");
  return e2p(joinedNumber);
};

export const debitCard = (number) => {
  if (!number && number !== 0) return "۰";
  const seperatedNumber = number.toString().match(/(\d+?)(?=(\d{4})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber.join("-");
  return e2p(joinedNumber);
};