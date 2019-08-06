import {Component, OnInit} from '@angular/core';
import {BackEndApiService} from '../back-end-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data: any;
  token: string;
  isLogin = false;

  constructor(
    private api: BackEndApiService,
  ) {
  }

  ngOnInit() {
    this.getList();
    this.token = localStorage.getItem('ACCESS_TOKEN');
    if (this.token !== null) {
      this.isLogin = true;
    }
  }

  getList() {
    this.api.getList().subscribe(result => {
        this.data = result;
      });
  }

}
