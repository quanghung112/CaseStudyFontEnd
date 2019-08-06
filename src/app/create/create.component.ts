import {Component, OnInit} from '@angular/core';
import {BackEndApiService} from '../back-end-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  name: string;
  age: number;
  phone: string;
  address: string;

  constructor(public api: BackEndApiService,
              private router: Router
  ) {
  }

  ngOnInit() {
  }

  create(createForm: HTMLFormElement) {
    this.name = createForm.nameCustomer.value;
    this.age = createForm.age.value;
    this.address = createForm.address.value;
    this.phone = createForm.phone.value;
    this.api.addCustomer(this.name, this.age, this.phone, this.address).subscribe(result => {
      this.router.navigate(['/list']);
    });
  }

}
