import { Component, Inject, NgZone } from "@angular/core";
import { Model } from "../../utilities/model";
import { AccountModel } from "../../models/account";
import { MD_LIST_DIRECTIVES } from "@angular2-material/list";
import { MD_CARD_DIRECTIVES } from "@angular2-material/card";

@Component({
  selector: "app",
  template: `
    <md-card>
      <md-card-title>Accounts</md-card-title>
      <md-card-content>
        <md-list>
          <md-list-item *ngFor="let account of res">
            <h2 md-line>{{account.Name}}</h2>
            <p md-line>{{account.Id}}</p>
          </md-list-item>
        </md-list>
      </md-card-content>
    </md-card>
  `,
  providers: [ AccountModel ],
  directives: [ MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES ]
})
export class AppComponent {

  public res: Model[];

  constructor(private zone: NgZone) {
    let Account: Model = new AccountModel();

    this.zone.runOutsideAngular(() => {
      let sub = Account.fetch(["Id", "Name", "AccountNumber"]).subscribe((onNext) => {
        this.zone.run(() => {
          this.res = onNext;
          console.log(this.res);
        });
      });

    });
  }

}
