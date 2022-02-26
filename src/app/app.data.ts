export type ChartDataSet = [
  /**
   * x-axis label
   */
  string,
  [
    /**
     * part label
     */
    string,
    /**
     * values
     */
    number,
  ][],
][];

const akaPersonNames = [
  'Abeba Aberash',
  'Ada Amara',
  'Ayaan Chidinma Cleopatra',
  'Gugulethu',
  'Hadiza Imani',
  'Hibo Kenya Makena',
];

function generateDataPart(partsQuantity: number): [string, number][] {
  const result: [string, number][] = [];

  for (let partInd = 0; partInd < partsQuantity; partInd++) {
    result.push([
      akaPersonNames[partInd] || `Part ${partInd}`,
      Math.trunc(Math.random() * 1000),
    ]);
  }

  return result;
}

export function generateDataSet(xQuantity: number, partsQuantity: number): ChartDataSet {
  const result: ChartDataSet = [];
  let xSource = new Date(2014, 2, 3);

  for (let xIndex = 0; xIndex < xQuantity; xIndex++) {
    result.push([
      xSource.toLocaleDateString(undefined, {month: 'long'}),
      generateDataPart(partsQuantity),
    ]);
    xSource.setMonth(xSource.getMonth() + 1);
  }

  return result;
}
