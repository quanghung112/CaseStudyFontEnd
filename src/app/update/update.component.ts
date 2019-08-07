import {Component, OnInit} from '@angular/core';
import {BackEndApiService} from '../back-end-api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id: number;
  customer: any;
  nameCustomer: string;
  phone: string;
  age: number;
  address: string;

  constructor(private api: BackEndApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.api.detail(this.id).subscribe(result => {
        this.customer = result;
      });
    });
  }

  update(updateForm: HTMLFormElement) {
    this.nameCustomer = updateForm.nameCustomer.value;
    this.age = updateForm.age.value;
    this.phone = updateForm.phone.value;
    this.address = updateForm.address.value;
    this.api.update(this.id, this.nameCustomer, this.age, this.phone, this.address).subscribe(result => {
        this.router.navigate(['/list']);
      }
    );
  }

}
