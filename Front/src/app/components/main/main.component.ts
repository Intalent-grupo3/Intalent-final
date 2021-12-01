import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    title = 'lucatic-grupo3-final';
    parentSubject: Subject<string> = new Subject();
    constructor() {}

    cardAnimation(value: any) {
        this.parentSubject.next(value);
    }
    ngOnInit(): void {}
}
