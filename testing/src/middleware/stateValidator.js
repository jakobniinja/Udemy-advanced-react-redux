import tv4 from "tv4";
import stateSchema from "./stateSchema";

export default ({ dispath, getState }) =>
  (next) =>
  (action) => {
    if (!tv4.validate(getState(), stateSchema)) {
      console.warn("Invalid schema detected");
    }
  };
