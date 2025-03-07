import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-router-profile',
  imports: [RouterLink],
  templateUrl: './router-profile.component.html',
  styleUrl: './router-profile.component.css'
})
export class RouterProfileComponent {
  newName: string | null = '';
  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe(params => {
      this.newName = params['lastName'];

    })
  }
}
