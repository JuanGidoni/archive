import { models } from "./models";
import persistPlugin from "@rematch/persist";
import { init } from "@rematch/core";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 2,
  storage,
};

const store = init({
  models,
  plugins: [persistPlugin(persistConfig)],
});

export default store;
