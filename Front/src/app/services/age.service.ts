import { Injectable } from '@angular/core';
import { Persona } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class AgeService {
    persona: Persona = {} as Persona;
    today: any = new Date();
    dd: number = this.today.getDate();
    mm: number = this.today.getMonth() + 1; //January is 0!
    yyyy: number = parseInt(this.today.getFullYear());
    months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    birth: any;
    month: any;
    day: any;
    year: any;
    age: any;

    constructor() {}

    calcAge(dob: string) {
        if (dob[0] > 'A' && dob[0] < 'Z') {
            console.log(dob);
            this.birth = String(dob).split(' ');
            for (let month of this.months) {
                if (month == this.birth[1]) {
                    this.month = this.months.indexOf(month) + 1;
                }
            }
            this.day = this.birth[2];
            this.year = this.birth[3];
        } else {
            this.birth = String(dob).split('-');
            this.day = this.birth[2];
            this.month = this.birth[1];
            this.year = this.birth[0];
        }

        this.age = this.yyyy - this.year;
        if (this.month >= this.mm) {
            if (this.day > this.dd) {
                this.age = this.age - 1;
            }
        }

        return this.age;
    }
}
