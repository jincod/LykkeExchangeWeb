import {RestApi} from '..';
import {CredentialsModel} from '../../models';
import {AuthApi} from '../authApi';

export class MockAuthApi extends RestApi implements AuthApi {
  getToken = (credentials: CredentialsModel) =>
    Promise.resolve('foobar' as any);
  getSessionToken = (clientId: string) =>
    Promise.resolve({token: 'bar'} as any);
  getBearerToken = (app: any, code: string, path: string) =>
    Promise.resolve({token: 'bar'});
  signOut = (path: string) => ({} as any);
}

export default MockAuthApi;
