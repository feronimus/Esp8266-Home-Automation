import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Alexandros Andrikopoulos 2019</span>
    <div class="socials">
      <a href="https://github.com/feronimus/" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/profile.php?id=903965653" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/Feronimus1" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/andrikopoulos/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
