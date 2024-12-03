import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';

interface Option {
  name: string;
  code: string;
}

@Component({
  templateUrl: 'add-user.component.html',
  styleUrls: ['add-user.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    AvatarModule,
    FileUploadModule,
    IconFieldModule,
    InputIconModule,
    DropdownModule,
    FormsModule,
    NgIf,
  ],
})
export class AddUserComponent {
  userForm!: FormGroup;
  isLoading = false;

  roles: Option[] | undefined;
  fleets: Option[] | undefined;
  departments: Option[] | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UsersService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    // Initialize form group
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[0-9]{10}$')]],
      role: new FormControl<Option | null>(null, [Validators.required]),
      department: new FormControl<Option | null>(null, [Validators.required]),
      fleet: new FormControl<Option | null>(null, [Validators.required]),
    });
    // Populate dropdown options
    this.roles = [
      { name: 'Super Admin', code: 'super-admin' },
      { name: 'Admin', code: 'admin' },
      { name: 'User', code: 'user' },
    ];
    this.departments = [
      { name: 'Human Resources', code: 'HR' },
      { name: 'Operations', code: 'OPS' },
      { name: 'Finance', code: 'FIN' },
      { name: 'IT Support', code: 'IT' },
      { name: 'Logistics', code: 'LOG' },
    ];
    this.fleets = [
      { name: 'Delivery Van', code: 'DV' },
      { name: 'Pickup Truck', code: 'PT' },
      { name: 'Forklift', code: 'FL' },
      { name: 'Sedan', code: 'SD' },
      { name: 'Motorbike', code: 'MB' },
    ];
  }

  onBasicUploadAuto(event: any) {
    console.log('upload --> ', event);
  }

  // Handle form submission
  onSubmit() {
    this.userForm.markAllAsTouched();
    if (this.userForm.valid) {
      this.userForm.markAsUntouched();
      this.isLoading = true;
      this.userService
        .addUser(this.userForm.value)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'User added successfully!',
            });
            this.router.navigate(['/']);
          },
          error: (error) => console.error('Error adding user data:', error),
        });
    } else {
      console.log('Form is invalid --> ', this.userForm);
    }
  }
}
