import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  host: {
    class: 'min-h-dvh flex flex-col'
  }
})
export class App {
  protected readonly title = signal('country-app');
}
