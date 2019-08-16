import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-green',
    template: `
        <p>Green paragraph!</p>
    `,
    styles: [`
        p {
            color: green;
        }
    `],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class GreenComponent {
}
