import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './authentication.service';
import {Router} from '@angular/router';

export class Test {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public date: Date
  ) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getTest() {
    const username = 'user';
    const password = 'user';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});

    return this.httpClient.get<Test[]>('http://localhost:8080/', {headers});
  }
  getTestSort() {
    const username = 'user';
    const password = 'user';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});

    return this.httpClient.get<Test[]>('http://localhost:8080/sort', {headers});
  }

  public deleteEmployee(test) {
    const username = 'user';
    const password = 'user';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.delete<Test>('http://localhost:8080' + '/' + test.id, {headers});
  }

  public createEmployee(test) {
    const username = 'user';
    const password = 'user';

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    // this.router.navigate(['/login']);
    return this.httpClient.post<Test>('http://localhost:8080/', test, {headers});

  }

  // getCurrentUser(user: User) {
  //   const username = 'user';
  //   const password = 'user';
  //
  //   const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
  //   return this.httpClient.get<User>('http://localhost:8080' + '/' + user.id, {headers});
  // }
}
