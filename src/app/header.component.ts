import { environment } from '../environments/environment';
import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
@Component({
  selector: 'bob-header',
  styleUrls: ['header.component.scss'],
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  public environment = environment;
  constructor(
    public modelService: ModelService,
  ) {
  }
}
