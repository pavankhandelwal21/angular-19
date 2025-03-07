import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-contact',
  imports: [],
  templateUrl: './router-contact.component.html',
  styleUrl: './router-contact.component.css'
})
export class RouterContactComponent {
  againName: string | null = '';

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(params => {
      this.againName = params['againName'];
    });
  }
}
