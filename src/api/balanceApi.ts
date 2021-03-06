import {RestApi} from '.';
import {ApiResponse} from './types';

export interface BalanceApi {
  fetchAll: () => ApiResponse<any>;
  fetchById: (assetId: string) => ApiResponse<any>;
}

export class RestBalanceApi extends RestApi implements BalanceApi {
  fetchAll = () =>
    this.bearerWretch()
      .url('/wallets/balances')
      .get()
      .json();

  fetchById = (assetId: string) =>
    this.bearerWretch()
      .url('/wallets/balances/${assetId}')
      .get()
      .json();

  fetchForWallet = (walletId: string) =>
    this.bearerWretch()
      .url(`/wallets/${walletId}/balances/`)
      .get()
      .json();
}

export default RestBalanceApi;
