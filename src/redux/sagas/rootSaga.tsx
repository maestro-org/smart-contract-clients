import { all } from "redux-saga/effects";
import walletSagas from "./walletSagas";

function* rootSaga() {
  yield all([...walletSagas]);
}

export default rootSaga;
