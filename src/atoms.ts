import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark", // unique value
  default: false,
});
