import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('new-page')
export class AppSettings extends LitElement {
    static styles = [
        css`
          #newpage {
          text-align: center;
          }
        `
    ];

    render() {
        return html`
        <app-header ?enableBack="${true}"></app-header>
        <br>
        <main>
          <div id="newpage">
            <h2>New Page</h2>

            <sl-card>
              <h2>Test page</h2>

              <p>Hello this is test page</p>
            </sl-card>

          </div>
        </main>
        `;
    }
}
