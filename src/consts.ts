export const SITE_NAME = 'Bitcoin Smiles';
export const SITE_DESCRIPTION =
  'Free dental care in rural El Salvador, funded in Bitcoin by thousands of strangers since 2021.';
export const DONATE_URL =
  'https://btcpay.bitcoinsmiles.org/apps/2G8kt2ax1okDYRguWQwa4khK7NDc/crowdfund';
export const FILM_YOUTUBE_ID = '5KWewAhxo0E';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-05" → "May 2026" */
export function monthYear(date: string): string {
  const [year, month] = date.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
}
