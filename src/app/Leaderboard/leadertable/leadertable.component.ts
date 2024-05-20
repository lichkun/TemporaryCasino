import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-leadertable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leadertable.component.html',
  styleUrl: './leadertable.component.scss'
})
export class LeadertableComponent implements OnInit {

  topUsers: any[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.topUsers = this.userService.getTopUsers();
  }

}
