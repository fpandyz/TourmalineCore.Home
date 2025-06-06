export type OptionYM = {
  clickmap: boolean;
  trackLinks: boolean;
  accurateTrackBounce: boolean;
  webvisor: boolean;
};

declare global {
  interface Window {
    ym: (id: number, operationName: string, option: OptionYM | string) => unknown;
    gtag: (operationName: string, ...arg: any) => unknown;
  }
}
