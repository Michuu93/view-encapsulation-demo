import {Component} from '@angular/core';

@Component({
    selector: 'app-blue',
    template: `
        <p>Blue paragraph!</p>
    `,
    styles: [`
        p {
            color: blue;
        }
    `]
})
export class BlueComponent {
}
