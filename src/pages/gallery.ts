import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-gallery')
export class AppSettings extends LitElement {
    static styles = [
        css`
          #gallery-container {
          padding-top: 20px;
          text-align: center;
          }
          header {
            text-align: center;
            padding: 20px;
            background-color: #333;
            color: white;
          }
          .gallery {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
              gap: 15px;
              padding: 20px;
          }
          .gallery img {
              width: 100%;
              height: auto;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .gallery img:hover {
              transform: scale(1.05);
              transition: 0.3s ease;
          }
        `
    ];

    render() {
        return html`
        <app-header ?enableBack="${true}"></app-header>
        <br>
        <main>
          <div id="gallery-container">
            <header>
                <h1>Image Gallery</h1>
                <p>Displaying images from dummy URLs</p>
            </header>

            <div class="gallery">
                <img src="https://picsum.photos/200/300" alt="Image 1">
                <img src="https://picsum.photos/id/237/200/300" alt="Image 2">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="Image 3">
                <img src="https://picsum.photos/id/200/200/300" alt="Image 4">
                <img src="https://picsum.photos/200/300?grayscale" alt="Image 5">
                <img src="https://picsum.photos/id/123/200/300" alt="Image 6">
                <img src="https://picsum.photos/id/123/200/300" alt="Image 7">
                <img src="https://picsum.photos/id/88/200/300" alt="Image 8">
                <img src="https://picsum.photos/id/42/200/300" alt="Image 9">
                <img src="https://picsum.photos/id/199/200/300" alt="Image 10">
            </div>

          </div>
        </main>
        `;
    }
}
