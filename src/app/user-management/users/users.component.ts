import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [] // Inline styling used
})
export class UsersComponent implements OnInit {
  filterOptions = ['All Users', 'Active Users', 'Deactivated Users'];
  selectedFilter = 'All Users';
  totalUsers = 100; 
  systemUsersIcon = 'group'; 

  constructor() {}

  ngOnInit(): void {}
}
