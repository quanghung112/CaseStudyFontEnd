import {Component, OnInit} from '@angular/core';
import {BackEndApiService} from '../back-end-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  id: number;

  constructor(private api: BackEndApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    if (confirm('ban co muon xoa?')) {
      this.activatedRoute.params.subscribe(params => {
        this.id = params.id;
        this.api.delete(this.id).subscribe(result => {
          console.log(result);
          this.router.navigate(['/list']);
        });
      });
    } else {
      this.router.navigate(['/list']);
    }
  }
}
