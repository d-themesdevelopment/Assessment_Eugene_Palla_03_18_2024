import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrl: 'sidebar.component.scss',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
})
export class SidebarComponent {
  showFiller = false;
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */