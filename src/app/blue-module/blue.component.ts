import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-blue',
    template: `
        <p>Blue paragraph!</p>
    `,
    styles: [`
        p {
            color: blue;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class BlueComponent {
}
