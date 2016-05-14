/// <reference path="./jsforce.d.ts" />
declare module ClayModelSalesforceApi {

    export interface Ajax {
      
      conn: jsforce.Connection;
      networkError(code: number): Promise<any>;
      listerForSalesforceCallback(callback: Function): any;
      registerKeys(loginServer: string, clientId: string, redirectUri: string, proxyUrl: string): void;
      openLoginWindow(callback: Function): void;
      onLoginCallback(event: Event): void;
      registerToken(token: Object): void;
      logout(): void;
      apex(method: string, name: string, params: any): Promise<any>;
      query(params: any, options?: any): Promise<any>;
      get(id: string, options?: any): Promise<any>;
      post(model: string, options?: any): Promise<any>;
      put(model: string, options?: any): Promise<any>;
      del(moel: string, options?: any): Promise<any>;
      handleResultWithPromise(err: any, result: any, nullok: any, deferred: Promise<any>): any;
        
    }
    
}

declare module "clay-model-salesforce-api" {
  var Ajax: ClayModelSalesforceApi.Ajax;
  export = Ajax;
}