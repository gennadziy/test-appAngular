import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})

export class UserdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
              private loginService: AuthenticationService

) {
}

ngOnInit() {
}

list() {
  this.router.navigate(['']);
}

}


