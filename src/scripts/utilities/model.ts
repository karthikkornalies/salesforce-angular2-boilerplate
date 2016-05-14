import { Observable } from "rxjs/Rx";
import { Salesforce } from "../services/salesforce.service";
import * as Ajax from "clay-model-salesforce-api";

export abstract class Model {

  public ajax: ClayModelSalesforceApi.Ajax;
  public model: any;
  private salesforce: Salesforce;

  constructor(public sObjectName: string, public properties: string[]) {
    this.salesforce = new Salesforce();
    this.ajax = this.salesforce.Ajax;
    this.model = this.salesforce.Model.setup(sObjectName, properties);
  }

  public static query(queryString: string): Observable<any> {
    let res: Promise<any> = Ajax.query(queryString);
    return Observable.fromPromise(res);
  }

  public static create(atts: Object, options: Object) {

  }


  /**
   * Fetch records for a specific model
   * @parameter attributes An array of attributes to fetch. Default: ["Id", "Name"]
   * @parameter limit Limit the query to fetch a certain number of records. Default: 10
   * @parameter offset Number to offset the list by; useful for pagination. Default: 0
   * @parameter sort Array of 2 parameters; Sort by, and Sort Direction
   * @return Observable with the model or list of models
   */
  public fetch(attributes = ["Id", "Name"], limit = 10, offset = 0, sort?: string[]): Observable<Model[]> {

    // If attributes exist then we need to turn them into a comma separated list
    let attributeList: string = "";
    if (attributes && attributes.length > 0) {
      attributeList = attributes.join(", ");
    }

    // Set the limit of records pulled
    let limitString: string = `LIMIT ${limit}`;

    // Set the record to offset by
    let offsetString: string = `OFFSET ${offset}`;

    // If a sort parameter is specified turn it into a string
    let sortString: string = "";
    if (sort)
      sortString = `SORT BY ${sort[0]} ${sort[1]}`;

    // Build the query
    let query = `
      SELECT
        ${attributeList}
      FROM ${this.sObjectName}
      ${sortString}
      ${limitString}
      ${offsetString}
    `;

    return Model.query(query);
  }

}