type TooltipPayload = {
    // Assuming this object has some specific properties (provide more details if needed)
    [key: string]: any; 
  };
  
  type Payload = {
    payload: any; // Adjust the type here based on the actual payload structure
    stroke: string;
    fill: string;
    cx: string;
    cy: string;
    // Add more properties as needed based on the data in the payload
  };
  
  type TooltipPosition = {
    x: number;
    y: number;
  };
  
  export type ChartData = {
    percent: number;
    cornerRadius: number | undefined;
    name: string;
    tooltipPayload: TooltipPayload[];
    midAngle: number;
    cx: number;
    cy: number;
    endAngle: number;
    fill: string;
    innerRadius: number;
    maxRadius: number;
    middleRadius: number;
    outerRadius: number;
    paddingAngle: number;
    payload: Payload;
    startAngle: number;
    stroke: string;
    tooltipPosition: TooltipPosition;
    value: number;
  };