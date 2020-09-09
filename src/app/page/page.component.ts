import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { TestDataService } from '../services/test-data.service';
import { StorageService } from '../services/storage.service';
import { Subscription } from 'rxjs';
import { ICase } from '../models/case.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  caseId: string;
  case: ICase;
  private sub1: any;
  //private sub2: any;
  private subs: Subscription[] = [];
  data: ICase[] = [];

  constructor(
    private route: ActivatedRoute,
    //private _testDataService: TestDataService,
    private _storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.sub1 = this.route.params.subscribe((params) => {
      console.log(params);
      this.caseId = params['caseId'];
    });

    // I could get the case data through a service subscription but this will not work on a page reload
    /*this.sub2 = this.testDataService.casesCreated$.subscribe((cases) => {
      console.log(cases);
      this.case = cases.find((item) => item.CaseID === +this.caseId);
    });*/

    this.subs.push(this.sub1);
    //this.subs.push(this.sub2);

    this.data = this._storageService.getItem('cases');

    // case caseID as number
    this.getCaseById(+this.caseId);
  }

  getCaseById(caseId: number) {
    if (caseId !== NaN && this.data.length !== 0) {
      this.case = this.data.find((item) => item.CaseID === caseId);
      console.log(this.case);
    }
  }

  ngOnDestoy(): void {
    // used for unsubscribing multiple subscriptions
    this.subs.forEach((subscription) => subscription.unsubscribe());
  }
}
