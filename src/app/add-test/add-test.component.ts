import {Component, OnInit} from '@angular/core';
import {HttpClientService, Test} from '../service/httpclient.service';
import {rootRoute} from '@angular/router/src/router_module';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  // @ts-ignore
  user: Test = new Test('', '', '', '');

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  createTest(): void {
    this.httpClientService.createEmployee(this.user)
      .subscribe(data => {
        // alert('Test created successfully.');
      });
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 300);
  }

}
