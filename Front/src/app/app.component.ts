import { Component } from '@angular/core';
import { Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lucatic-grupo3-final';
  parentSubject:Subject<string> = new Subject();

  constructor() {

  }

 cardAnimation(value: any) {
    this.parentSubject.next(value);
  }

}

