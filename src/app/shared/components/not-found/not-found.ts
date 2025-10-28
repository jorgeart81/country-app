import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  host: { class: 'flex-1 flex flex-col items-center justify-center mt-10' }
})
export class NotFound {
  location = inject(Location);

  goBack() {
    this.location.back();
  }
}
