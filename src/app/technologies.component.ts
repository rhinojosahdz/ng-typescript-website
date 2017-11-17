import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
import { environment } from '../environments/environment';
@Component({
  selector: 'bob-technologies',
  styleUrls: ['technologies.component.scss'],
  templateUrl: 'technologies.component.html',
})
export class TechnologiesComponent {
  public stars = [{}, {}, {}, {}, {}];
  public searchText: string = '';
  public environment = environment;
  constructor(
    public modelService: ModelService,
  ) {
  }
}
