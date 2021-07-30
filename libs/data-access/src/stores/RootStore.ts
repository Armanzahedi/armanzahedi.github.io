import { enableStaticRendering } from "mobx-react-lite";
import { AuthStore } from "./AuthStore";
import { CounterHydration, CounterStore } from "./CounterStore";

enableStaticRendering(typeof window === "undefined");

export type RootStoreHydration = {
  stopwatchStore?: CounterHydration;
};
export class RootStore {
  counterStore: CounterStore;
  authStore: AuthStore;
  constructor() {
    this.counterStore = new CounterStore(this);
    this.authStore = new AuthStore(this);
  }

  hydrate(data: RootStoreHydration) {
    if (data.stopwatchStore) {
      this.counterStore.hydrate(data.stopwatchStore);
    }
  }
}
