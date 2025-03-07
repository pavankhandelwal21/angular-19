import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-home',
  imports: [],
  templateUrl: './router-home.component.html',
  styleUrl: './router-home.component.css'
})
export class RouterHomeComponent {
  userName: string | null = ''

  constructor(private activeRouter: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.userName = this.activeRouter.snapshot.paramMap.get('name')
  }
  goToProfile(val: string) {
    this.router.navigate(['router-profile'], { queryParams: { lastName: val } })
  }
}
