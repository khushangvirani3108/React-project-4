import { legacy_createStore as createStore } from "redux";
import rootred from "./Redux/Reducer/Main";

const store = createStore(rootred);
export default store;
