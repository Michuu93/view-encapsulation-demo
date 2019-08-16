import {Component} from '@angular/core';

@Component({
    selector: 'app-green',
    template: `
        <p>Green paragraph!</p>
    `,
    styles: [`
        p {
            color: green;
        }
    `]
})
export class GreenComponent {
}
