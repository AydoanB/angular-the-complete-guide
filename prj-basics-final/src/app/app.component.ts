import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  IsRecipesSelected: boolean;

  onNavigate($event: any) {
    if ($event === 'recipes') {
      this.IsRecipesSelected = true;
    }
    else {
      this.IsRecipesSelected = false;
    }
  }
}
