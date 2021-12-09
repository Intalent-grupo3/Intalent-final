import {
    Component,
    OnInit
} from '@angular/core';
import {
    Subject
} from 'rxjs';
import {
    CrudServicesService
} from '../../../services/crud-services.service';

@Component({
    selector: 'app-view',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class ViewComponent implements OnInit {
    title = 'lucatic-grupo3-final';
   // parentSubject: Subject < string > = new Subject();
    constructor() {}
    ngOnInit(): void {}
   



}