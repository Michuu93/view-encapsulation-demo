import {Component} from '@angular/core';

@Component({
    selector: 'app-red',
    template: `
        <p>Red paragraph!</p>
    `,
    styles: [`
        p {
            color: red;
        }
    `]
})
export class RedComponent {
}
