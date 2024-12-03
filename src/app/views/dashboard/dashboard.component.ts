import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { finalize } from 'rxjs';
import { ShiftsService } from '../../services/shifts.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgIf } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';

interface Shift {
  vehicleNo: string;
  plateNo: string;
  reading: string;
  time: string;
  device: { name: string; code: string };
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  standalone: true,
  imports: [
    InputIcon,
    IconFieldModule,
    ButtonModule,
    TableModule,
    ProgressSpinnerModule,
    KnobModule,
    FormsModule,
    NgIf,
    SkeletonModule,
  ],
})
export class DashboardComponent {
  shifts: Shift[] = [];
  skeletons: string[] = [];
  isLoading: boolean = true;
  value: number = 90;
  value2: number = 75;
  value3: number = 80;


  constructor(private shiftService: ShiftsService) {
    this.skeletons = Array.from({ length: 4 }).map((_, i) => `Item #${i}`);
    this.fetchShifts();
  }

  private fetchShifts(): void {
    this.isLoading = true;
    this.shiftService
      .getShifts()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response) => {
          const data = response || [];
          this.shifts = data;
        },
        error: (error) => console.error('Error loading shifts data:', error),
      });
  }
}
