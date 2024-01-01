import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "theme",
  storage: localStorage,
});

//오리지널 모드 속성 저장
export const OriginalState = atom({
  key: "original",
  default: {
    mode: "original",
    mainBgColor: "white",
    textColor: "black",
    subBgColor: "grey",
    textColor2: "lightgrey",
  },
});

// $grey: #222222;       no need 
// $black: #000000;      black

// $white: #ffffff;       white
// $background: #fcf4e5; bgcolor
// $red: #eb4d33;        pointColor

// 눈 모드 속성 저장
export const SnowState = atom({
  key: "snow",
  default: {
    mode: "snow",
    mainBgColor: "lightblue",
    textColor: "white",
    subBgColor: "blue",
    textColor2: "purple",
  },
});

//현재 모드 속성 저장
export const modeState = atom({
  key: "isMode",
  default: OriginalState,
  effects_UNSTABLE: [persistAtom],
});
