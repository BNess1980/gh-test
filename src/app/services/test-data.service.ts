import { Injectable } from '@angular/core';
import * as data from '../../app/json/jsonForTest.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestDataService {
  constructor() {}
  testData: any = (data as any).default;

  private cases = new BehaviorSubject([]);
  casesCreated$ = this.cases.asObservable();

  getTestData() {
    return this.testData;
  }

  setCases(caseArr: any[]) {
    this.cases.next(caseArr);
  }
}
