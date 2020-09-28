<div class="col">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<h2 class="text-center">Measurement Data</h2>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
      <table *ngIf="hideTable" class="table-striped">
        <thead class="head">
          <tr>
            <th scope="col"> # </th>
            <th scope="col"> Date </th>
            <th scope="col"> Daily Glucose Level </th>
            <th scope="col"> Daily Carb Intake </th>
            <th scope="col"> Actions </th>
          </tr>
        </thead>
      
        <tbody class="table-body">
          <tr *ngFor="let measurement of measurements; let i = index">
            <td>{{ i + 1 }}</td>
      
            <th scope="row">{{ measurement.created_date | date: "dd/MM/yyyy" }}</th>
      
            <td>{{ measurement.carb_intake }} mg/dL</td>
      
            <td>{{ measurement.glucose_level }} grams</td>
      
            <td>
              <button
                (click)="deleteCases(measurement.measurement_id)"
                class="btn"
                type="button"
              ><i class="fa fa-trash"></i>
                
              </button>
      
              <button
              
                [routerLink]="[measurement.measurement_id]"
                class="btn"
                type="button"><i class="fa fa-folder"></i>
                
              </button>
            </td>
          </tr>
      
          <!-- Using `myData.length > 0` to make sure `myData` gets full before creating the chart -->
        </tbody>
      </table>
      
      <table *ngIf="hideDateTable" class="table-striped">
        <thead class="head">
          <tr>
            <th scope="col"> # </th>
            <th scope="col"> Date </th>
            <th scope="col"> Daily Glucose Level </th>
            <th scope="col"> Daily Carb Intake </th>
            <th scope="col" > Actions </th>
          </tr>
        </thead>
      
        <tbody class="table-body">
          <tr *ngFor="let measurement of measurementsByDate; let i = index">
            <td>{{ i + 1 }}</td>
      
            <th scope="row">{{ measurement.created_date | date: "dd/MM/yyyy" }}</th>
      
            <td>{{ measurement.carb_intake }} mg/dL</td>
      
            <td>{{ measurement.glucose_level }} grams</td>
      
            <td>
              <button
                (click)="deleteCases(measurement.measurement_id)"
                class="btn"
                type="button"
              >
                Delete
              </button>
              <button
                [routerLink]="[measurement.measurement_id]"
                class="btn"
                type="button"
              >
                Update
              </button>
            </td>
          </tr>
      
          <!-- Using `myData.length > 0` to make sure `myData` gets full before creating the chart -->
        </tbody>
      </table>
      <div class="container">
        <button type="button" class="btn btn-primary btn-lg" id="averageBtn">
          Compute My Average
        </button>
      
        <button type="button" class="btn btn-primary btn-lg" id="graphBtn" (click)="showCharts()">
          Show My Graphs
        </button>
      </div>
    </div>
    <div class="col-md-6">
      <div *ngIf="showChart">

        <google-chart
        *ngIf="myGraphData.length > 0"
        [title]="title"
        [type]="type"
        [data]="myGraphData"
        [columns]="chartColumns"
        [options]="options"
        [width]="width"
        [height]="height"
      ></google-chart>
      
      </div>
    </div>
  </div>
</div>

<!-- <table border="1" cellspacing="0" cellpadding="0" > -->




</div>
  <!-- <google-chart
  *ngIf="myGraphData.length > 0"
  [title]="title"
  [type]="type"
  [data]="myGraphData"
  [columns]="chartColumns"
  [options]="options"
  [width]="width"
  [height]="height"
></google-chart> -->
