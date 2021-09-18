import {atom} from "recoil";
import {CityId} from "../../utils/cities";

export const cityIdState = atom<CityId | undefined>({
  key: "CityId",
  default: undefined
});
