import {Component, OnInit} from '@angular/core';
import {HttpClientService, Test} from '../service/httpclient.service';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  counter = 0;
  tests: Test[];
  searchTest = '';
  loginService: AuthenticationService;

  constructor(
    private httpClientService: HttpClientService
  ) {
  }

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }

  ngOnInit() {
    this.httpClientService.getTest().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  ngOnInitSort() {
    this.httpClientService.getTestSort().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.tests = response;
  }

  deleteTest(test: Test): void {
    this.httpClientService.deleteEmployee(test)
      .subscribe(data => {
        this.tests = this.tests.filter(u => u !== test);
      })
    ;
  }
}
