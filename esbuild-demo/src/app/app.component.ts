import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-root',
  template: ` <p>Hello World!!!</p> `,
  styles: [
    `
      p {
        font-size: 30px;
        color: lightCoral;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  title = 'esbuild-demo';

  ngOnInit() {
    console.log(am4core);
    console.log(am4charts);
  }

}
