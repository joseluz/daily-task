import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'dt-header',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
