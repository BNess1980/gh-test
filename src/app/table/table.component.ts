import { Component, OnInit } from '@angular/core';
import { TestDataService } from '../services/test-data.service';
import { StorageService } from '../services/storage.service';
import { ICase } from '../models/case.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  data: ICase[] = [];

  constructor(
    private _testDataService: TestDataService,
    private _storageService: StorageService
  ) {
    if (this._storageService.getItem('cases') === null) {
      //console.log('empty');
      this.getTestData();
    } else {
      //console.log('not empty');
      this.data = this._storageService.getItem('cases');
    }
  }

  ngOnInit(): void {}

  getTestData(): void {
    this.data = this._testDataService.getTestData();
    this._storageService.setItem('cases', this.data);
    // Using local storage to persist data; below would be for settting cases via service
    //this.testDataService.setCases(this.data);
  }
}
