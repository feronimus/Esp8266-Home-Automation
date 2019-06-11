import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService , NbToastrService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { filter, map } from 'rxjs/operators';
import {  Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user = {};

  userMenu = [
    { title: 'Profile'},
     { title: 'Log out' }
    ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserData,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              private authService: NbAuthService,
              private toastrService: NbToastrService,
              private router : Router
              ) 
  {
    this.authService.onTokenChange()
    .subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload().user;  // here we receive a payload from the token and assigne it to our `user` variable 
      }

    });               
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }


  ngOnInit() {
    this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        //console.log(title);
        if(title == "Log out"){
          console.log("what");
          this.router.navigate(['/auth/logout']); 
        };
        if(title == "Profile") {
          this.showToast("Profile is not implemented yet.","ERROREST OF ERRORS");
        }
      }
        //this.window.alert(`${title} was clicked!`
        );
  }

  showToast(msg,title) {
    this.toastrService.show(
      msg,//message
      title//title
       );
  }
}
