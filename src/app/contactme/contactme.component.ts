import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [CommonModule, FormsModule],
  //providers: [provideHttpClient()], // <-- Add this line
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  address: string = '';
  driversLicense: string = '';
  private apiUrl = 'https://script.google.com/macros/s/AKfycbxD4540W-HvCA_3dmYT4ziosNU23G7rEM3mzKRRNnb7r3HlPmV3TOTZL6BzzJltcJWUcw/exec'; // Replace with your Web app URL

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
        address:this.address,
        driversLicense: this.driversLicense

      };
      this.http.post(this.apiUrl, data).subscribe({
        next: (response) => {
          console.log('Data sent successfully', response);
          alert('Message sent successfully!');
          this.name = '';
          this.email = '';
          this.message = '';
          this.address = '';
          this.driversLicense = '';
          // Reset the form
          form.resetForm();
        },
        error: (error) => {
          console.error('Error sending data', error);
          alert('Error sending message. Please try again.');
        }
      });
    }
  }
}