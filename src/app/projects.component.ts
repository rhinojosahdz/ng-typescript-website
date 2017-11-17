import { environment } from '../environments/environment';
import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
@Component({
  selector: 'bob-projects',
  styleUrls: ['projects.component.scss'],
  templateUrl: 'projects.component.html',
})
export class ProjectsComponent {
  public environment = environment;
  constructor(
    public modelService: ModelService,
  ) {
  }

  public playVideo($event: any) {
    // for better support in older browsers
    let t = $event.target || $event.srcElement;
    t.play && t.play();
  }
}
