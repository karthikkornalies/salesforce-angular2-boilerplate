import { Model } from "../utilities/model";

export class AccountModel extends Model {

  constructor() {
    super("Account", ["Id", "Name"]);
  }

}