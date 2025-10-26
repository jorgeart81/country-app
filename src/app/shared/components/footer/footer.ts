import { Component } from '@angular/core';

@Component({
  selector: 'footer[app-footer]',
  imports: [],
  templateUrl: './footer.html',
  host: {
    class: 'footer sm:footer-horizontal bg-base-200 text-base-content p-10',
  }
})
export class Footer {

}
