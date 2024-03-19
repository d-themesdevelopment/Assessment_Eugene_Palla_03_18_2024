import { Component } from '@angular/core';

interface Role {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  panelOpenState = false;
  drawer:any = true;
  roles: Role[] = [
    {value: 'admin', viewValue: 'Administrator'},
    {value: 'full', viewValue: 'Full Control'},
    {value: 'help', viewValue: 'HelpDesk'},
    {value: 'download', viewValue: 'Download'},
    {value: 'readable', viewValue: 'Readable'},
  ];
  administrator = [
    {
      group: 'user management',
      menus: [
        {name: 'pending access', icon: 'home'},
        {name: 'permission groups', icon: 'home'},
        {name: 'user management', icon: 'home'},
        {name: 'user roster', icon: 'home'},
      ]
    },
    {
      group: 'application management',
      menus: [
        {name: 'applications', icon: 'home'},
        {name: 'upload application', icon: 'home'},
      ]
    },
    {
      group: 'framework management',
      menus: [
        {name: 'frameworks', icon: 'home'},
        {name: 'upload frameworks', icon: 'home'},
      ]
    },
    {
      group: 'document library',
      menus: [
        {name: 'my documents', icon: 'home'},
        {name: 'library', icon: 'home'},
      ]
    },
    {
      group: 'internal help desk',
      menus: [
        {name: 'ticks', icon: 'home'},
      ]
    },
  ];

  full_control = [
    {
      group: 'user management',
      menus: [
        {name: 'permission groups', icon: 'home'},
        {name: 'user management', icon: 'home'},
        {name: 'user roster', icon: 'home'},
      ]
    },
    {
      group: 'application management',
      menus: [
        {name: 'applications', icon: 'home'},
      ]
    },
    {
      group: 'framework management',
      menus: [
        {name: 'frameworks', icon: 'home'},
      ]
    },
    {
      group: 'document library',
      menus: [
        {name: 'my documents', icon: 'home'},
        {name: 'library', icon: 'home'},
      ]
    },
    {
      group: 'internal help desk',
      menus: [
        {name: 'ticks', icon: 'home'},
      ]
    },
  ];
  
  help_desk = [
    {
      group: 'pending action items',
      menus: [
        {name: 'pending users', icon: 'home'},
        {name: 'pending applications', icon: 'home'},
        {name: 'pending frameworks', icon: 'home'},
      ]
    },
    {
      group: 'digital assets',
      menus: [
        {name: 'applications', icon: 'home'},
        {name: 'frameworks', icon: 'home'},
        {name: 'document library', icon: 'home'},
      ]
    },
    {
      group: 'companies, po, users',
      menus: [
        {name: 'user management', icon: 'home'},
        {name: 'company / po', icon: 'home'},
        {name: 'user roster', icon: 'home'},
      ]
    },
    {
      group: 'internal help desk',
      menus: [
        {name: 'ticks', icon: 'home'},
      ]
    },
  ];

  download = [
    {name: 'applications', icon: 'home'},
    {name: 'frameworks', icon: 'home'},
    {name: 'my documents', icon: 'home'},
    {name: 'library', icon: 'home'},
    {name: 'user roster', icon: 'home'},
  ];

  readable = [
    {name: 'applications', icon: 'home'},
    {name: 'frameworks', icon: 'home'},
    {name: 'my documents', icon: 'home'},
    {name: 'library', icon: 'home'},
  ];

  permissions:any = {
    'admin': {'type': 'group', 'target': this.administrator},
    'full': {'type': 'group', 'target': this.full_control},
    'help': {'type': 'group', 'target': this.help_desk},
    'download': {'type': 'simple', 'target': this.download},
    'readable': {'type': 'simple', 'target': this.readable}
  };
  
  selectedRole:any = 'admin';
  visibility:any = {
    true: 'visible',
    false: 'invisible'
  }
}
//Can I ask you about the workflow of the POS integration? Especially about filenames on ftp upload.