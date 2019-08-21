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
    encapsulation: ViewEncapsulation.ShadowDom
})
export class BlueComponent {
}
