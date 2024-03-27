import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserList } from 'src/app/models/user_list'; 
import { UserListService } from 'src/app/services/user_list.service'; 

@Component({
  selector: 'app-user-list',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UserListComponent implements OnInit {
  listUsers: UserList[] = [];

  currentPage: number = 1;
  pageSize: number = 5;
  pageSizes: number[] = [5, 10, 20];

  

  constructor(private router: Router, private userListService: UserListService) { }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userListService.getUsers().subscribe(
      data => {
        this.listUsers = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  nextPage() {
    this.currentPage++;
  }

  previousPage() {
    this.currentPage--;
  }

  pageNumbers(): number[] {
    const totalPages = Math.ceil(this.listUsers.length / this.pageSize);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  changePageSize(pageSize: any) {
    this.pageSize = parseInt(pageSize, 10);
    this.currentPage = 1;
  }

  
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  get getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
