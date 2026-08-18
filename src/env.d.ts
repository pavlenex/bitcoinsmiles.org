/// <reference types="astro/client" />

/** Injected by BTCPay Server's modal script (loaded on demand). */
interface Window {
  btcpay?: { showInvoice(invoiceId: string): void };
}
