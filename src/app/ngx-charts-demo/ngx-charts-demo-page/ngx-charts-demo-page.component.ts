import { Component, OnInit, ViewChild } from '@angular/core';
import { BarVertical2DComponent, Color, ScaleType } from '@swimlane/ngx-charts';
import { generateDataSet } from '../../app.data';

type ChartDataSource =
  {
    name: string;
    series: {
      name: string;
      value: number;
    }[];
  }[];

@Component({
  selector: 'app-ngx-charts-demo-page',
  templateUrl: './ngx-charts-demo-page.component.html',
  styleUrls: ['./ngx-charts-demo-page.component.scss'],
})
export class NgxChartsDemoPageComponent implements OnInit {

  @ViewChild('chartRef') chartRef?: BarVertical2DComponent;

  colorScheme: Color = {
    domain: ['#115DEE', '#C4DCF7', '#E176A5'],
    group: ScaleType.Ordinal,
    name: 'my scheme',
    selectable: false,
  };

  chartData: ChartDataSource = [];
  xQuantityValue = '9';

  constructor() {
  }

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

  handleGeneratebuttonClick() {
    this.chartData = generateDataSet(parseInt(this.xQuantityValue, 10), 3).map(([xName, parts]) => {
      return {
        name: xName,
        series: parts.map(([partName, value]) => {
          return {
            name: partName,
            value,
          };
        }),
      };
    });

    /**
     * Важный костыль.
     * Часто сразу после первой инициализаци первая группа баров
     * рисуется на ~30 пикселов ниже, чем надо.
     * Исправляется ели например провести мышью над.
     * Задержку меньше лучше не ставить, некрасиво, если анимация еще не завершена.
     */
    setTimeout(() => {
      if (this.chartRef) {
        this.chartRef.update();
      }
    }, 1000);

  }
}
