import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-actions',
  template: `
    <div>
      <div class="row">
        <div class="col-xs-3">
          <button class="btn btn-default">Draft</button>
        </div>
        <div class="col-xs-3">
          <button class="btn btn-default">Approve</button>
        </div>
        <div class="col-xs-3">
          <button class="btn btn-default">Discard</button>
        </div>
      </div>
    </div>
  `
})
export class ReportActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
