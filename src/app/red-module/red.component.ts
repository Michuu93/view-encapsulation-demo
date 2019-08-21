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
    encapsulation: ViewEncapsulation.ShadowDom
})
export class RedComponent {
}
