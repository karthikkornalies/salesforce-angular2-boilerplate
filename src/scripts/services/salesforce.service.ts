import { Injectable } from "@angular/core";
import * as Model from "clay-model";
import * as Ajax from "clay-model-salesforce-api";

@Injectable()

export class Salesforce {

  public _sf: any = window["_sf"];
  public Ajax: any = Ajax;
  public Model: ClayModel.Model = Model;

  constructor() {
    this.register();
  }

  private register() {
    if (this.Ajax.registerToken) {
      this.Ajax.registerToken({
        access_token: this._sf.api,
        instance_url: this._sf.host
      });
    } else {
      this._sf.Ajax.namespace = "cbit.cbt_";
    }

  }

}