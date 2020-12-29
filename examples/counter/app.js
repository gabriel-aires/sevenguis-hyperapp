import { app } from '../../lib/hyperapp.js'
import html from 'https://unpkg.com/hyperlit'

export default (node) =>
    app({
        node,
        init: 0,
        view: (x) => html`
            <div class="app app-counter">
                <button onclick=${(x) => x + 1}>
                    You have clicked me ${' ' + x} times
                </button>
            </div>
        `,
    })
