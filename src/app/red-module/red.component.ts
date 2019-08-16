import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-red',
    template: `
        <p>Red paragraph!</p>
    `,
    styles: [`
        p {
            color: red;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class RedComponent {
}
