import LIFF from "@line/liff";

declare global {
  interface Window {
      liff?: typeof LIFF;
  }
}
