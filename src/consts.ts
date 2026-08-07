export const SITE_NAME = 'Bitcoin Smiles';
export const SITE_DESCRIPTION =
  'Bitcoin Smiles connects global Bitcoin support with free dental care in rural El Salvador.';
export const DONATE_URL =
  'https://btcpay.bitcoinsmiles.org/apps/2G8kt2ax1okDYRguWQwa4khK7NDc/crowdfund';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-05" → "May 2026" */
export function monthYear(date: string): string {
  const [year, month] = date.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
}
