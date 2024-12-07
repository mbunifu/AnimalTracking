import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/service/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
signupForm: FormGroup;
onSubmit() {
throw new Error('Method not implemented.');
}
successMessage: any;
isLoading: Boolean= false;
errorMessage: '';
  
  constructor(private formBuilder: FormBuilder,
              private authservice:AuthService,
            private router:Router){{
              this.signupForm = this.formBuilder.group({
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                IDNumber: ['', Validators.required],
                phoneNumber: ['', Validators.required],
                Email: ['', Validators.required],
                role: ['', Validators.required],
                password: ['', [Validators.required, Validators.minLength(8)]],
                confirmPassword: ['', Validators.required],
                termsAndConditions: [false, Validators.requiredTrue],
                privacyPolicy: [false, Validators.requiredTrue],
                cookiesPolicy: [false, Validators.requiredTrue]
              });
           }}

  ngOnInit() {
    
  }
}