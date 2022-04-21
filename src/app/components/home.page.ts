import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h1>Welcome</h1>

    <h3>
      Nel progetto ho utilizzato un api esterna per implementare le fatture ed i
      clienti con <span class="yellow">Postman</span>. <br /><br /><br />
      Ho utilizzato <span class="red">Bootstrapp</span> in
      <span class="red">SCSS</span> per la parte grafica.
    </h3>
  `,
  styles: [
    `
      h1 {
        margin-top: 5rem;

        text-align: center;
        color: blue;
      }
      h3 {
        text-align: center;
        margin-top: 5rem;
      }
      .yellow {
        color: orange;
      }
      .red {
        color: red;
      }
    `,
  ],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
