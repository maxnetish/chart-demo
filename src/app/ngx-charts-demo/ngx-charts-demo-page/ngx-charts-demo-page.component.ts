import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-ngx-charts-demo-page',
  templateUrl: './ngx-charts-demo-page.component.html',
  styleUrls: ['./ngx-charts-demo-page.component.scss']
})
export class NgxChartsDemoPageComponent implements OnInit {

  colorScheme: Color = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
    group: ScaleType.Ordinal,
    name: 'my scheme',
    selectable: false,
  };

  chartData = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect($event: any) {
    console.log('onSelect: ', $event);
  }

  onActivate($event: any) {
    console.log('onActivate: ', $event);
  }

  onDeactivate($event: any) {
    console.log('onDeactivate: ', $event);
  }
}
