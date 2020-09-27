import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-sacchon-team6';
  loadedFeature = 'home';

  constructor(
    private route: ActivatedRoute,
  ) {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
