export const SITE_NAME = 'Bitcoin Smiles';
export const SITE_DESCRIPTION =
  'Bitcoin Smiles connects global Bitcoin support with free dental care in rural El Salvador.';
/** Self-hosted BTCPay Server instance and the crowdfund app on it. */
export const BTCPAY_HOST = 'https://btcpay.bitcoinsmiles.org';
export const CROWDFUND_APP_ID = '2G8kt2ax1okDYRguWQwa4khK7NDc';
/** Public store id, used only for the unauthenticated /api/rates endpoint. */
export const BTCPAY_STORE_ID = 'XqyMEcQuufT4opU5YNMphR7NwzEuBtZjj7i7hUvgqtw';
export const DONATE_URL = `${BTCPAY_HOST}/apps/${CROWDFUND_APP_ID}/crowdfund`;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-05" → "May 2026" */
export function monthYear(date: string): string {
  const [year, month] = date.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
}
