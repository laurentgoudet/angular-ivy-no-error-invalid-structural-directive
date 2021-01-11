import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- ngTemplateOutlet is mispelled below -->
    <ng-container *ngTemplateOutle="myTemplate"></ng-container>
    <ng-template #myTemplate>
      My template is here
    </ng-template>
  `,
})
export class AppComponent {
  title = 'test-strict';
}
