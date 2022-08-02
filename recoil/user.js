const {atom} = require("recoil");

export const userAccountsRecoil = atom({
  key: "userAccountsRecoil",
  default: [],
});
