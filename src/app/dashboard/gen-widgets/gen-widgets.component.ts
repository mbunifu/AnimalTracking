import { Component, OnDestroy, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { NgbProgressbarModule } from "@ng-bootstrap/ng-bootstrap";
import { Subject } from "rxjs";
import { UserService } from "src/app/user/services/user.service";

@Component({
  selector: "app-gen-widgets",
  templateUrl: "./gen-widgets.component.html",
  styleUrls: ["./gen-widgets.component.sass"],
})
export class GenWidgetsComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  farmers: any[] = [];
  farmersCount: number = 0;
  customers: any[] = [];
  customersCount: number = 0;
  manufacturers: any[] = [];
  manufacturersCount: number = 0;
  serviceProviders: any[] = [];
  providersCount: number = 0;
  staff: any[] = [];
  staffCount: number = 0;
  warehouses: any[] = [];
  warehoseCount: number = 0;
  processors: any[] = [];
  processorsCount: number = 0;
  drivers: any[] = [];
  driversCount: number = 0;
  agrodealears: any[] = [];
  agrodelearsCount: number = 0;
  color: ThemePalette = 'warn';
  mode: NgbProgressbarModule = 'determinate';
  value = 95;
  bufferValue = 95;
  totalAnimals: any;

  constructor(private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.fetchTotalAnimals();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  fetchTotalAnimals(): void {
    this.userService.getTotalAnimals().subscribe(
      (response: number) => {
        console.log('Fetched total animals:', response);
        this.totalAnimals = response;
      },
      (error) => {
        console.error('Error fetching animals:', error);
        this.snackBar.open('Error fetching total animals', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }





  // private getCustomer(){
  //   this.customerService.getAllCustomers().subscribe({
  //     next: ((res) => {
  //       this.customers = res.entity;
  //       this.customersCount = this.customers.length;
  //     }),
  //     error: ((error) => {
  //       console.log("Error fetching customers", error);
  //     }),
  //     complete: (() => {})
  //   })
  // }

  // private getDrivers(){
  //   this.diverServive.getAlldrivers().subscribe({
  //     next: ((res) => {
  //       this.drivers = res.entity;
  //       this.driversCount = this.drivers.length;
  //     }),
  //     error: ((error) => {
  //       console.log("Error fetching drivers", error)
  //     }),
  //     complete: (() => {})
  //   })
  // }

  // private getProcessors(){
  //   this.processorService.getAllProcesors().subscribe({
  //     next: ((res) => {
  //       this.processors = res.entity;
  //       this.processorsCount = this.processors.length;
  //     }),
  //     error: ((error) => {
  //       console.log("Error fetching processors", error);
  //     }),
  //     complete: (() => {})
  //   })
  // }

  // private getAgrodelears(){
  //   this.agrodealersService.getAllAgribusiness().subscribe({
  //     next: ((res) => {
  //       this.agrodealears = res.entity;
  //       this.agrodelearsCount = this.agrodealears.length;
  //     }),
  //     error: ((error) => {
  //       console.log("Error fetching agrodealers", error);
  //     }),
  //     complete: (() => {})
  //   })
  // }

  // private getFarmers(){
  //   this.farmerService.getAllFarmers().subscribe({
  //     next: ((res) => {
  //       this.farmers = res.entity;
  //       this.farmersCount = this.farmers.length;
  //     }),
  //     error: ((error) => {
  //       console.log("Error Fetching farmers", error);
  //     }),
  //     complete: (() => {})
  //   })
  // }

  // private getManufacturers(){
  //   this.manufacturerService.getAllManufacturers().subscribe({
  //     next: ((res) => {
  //       this.manufacturers = res.entity;
  //       this.manufacturersCount = this.manufacturers.length;
  //     }),
  //     error: ((error) => {
  //       console.log("Error fetching manufacturers", error);
  //     }),
  //     complete: (() => {})
  //   })
  // }

  // private getServiceProviders(){
  //   this.providersService.getAllServiceProviders().subscribe({
  //     next: ((res) => {
  //       this.serviceProviders = res.entity;
  //       this.providersCount = this.serviceProviders.length;
  //     }),
  //     error: ((error) => {
  //       console.log("Error fetching servive providers", error);
  //     }),
  //     complete: (() => {})
  //   })
  // }

  // private getStaff(){
  //   this.staffService.getAllStaff().subscribe({
  //     next: ((res) => {
  //       this.staff = res.entity;
  //       this.staffCount = this.staff.length;
  //     }),
  //     error: ((error) => {
  //       console.log("Error fetching staff", error);
  //     }),
  //     complete: (() => {})
  //   })
  // }

  // private getWarehouses(){
  //   this.warehouseService.getAllWarehouses().subscribe({
  //     next: ((res) => {
  //       this.warehouses = res.entity;
  //       this.warehoseCount = this.warehouses.length;
  //     }),
  //     error: ((error) => {
  //       console.log("Error fetching warehouses", error);
  //     }),
  //     complete: (() => {})
  //   })
  // }
}