import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { MyloginService } from './mylogin.service';
@Component({
    selector: 'lib-mylogin',
    templateUrl: './mylogin.component.html',
    styles: [
    ]
})
export class MyloginComponent implements OnInit {
    @Input() userNameType: string;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    emailCheck: boolean = false;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private myloginService: MyloginService,
        //   private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.myloginService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        if (this.userNameType == 'email') {
            this.loginForm = this.formBuilder.group({
                email: ['', Validators.compose([Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.minLength(1)])],
                password: ['', Validators.compose([Validators.required])],
            });
        } else {

            this.loginForm = this.formBuilder.group({
                username: ['', Validators.required],
                password: ['', Validators.compose([Validators.required])],
            });
        }

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        console.log(this.userNameType);
        if (this.userNameType == 'email') {
            this.emailCheck = true;
        } else {
            this.emailCheck = false;
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        //   this.alertService.clear();

        // stop here if form is invalid
        console.log('done validation1', this.loginForm.invalid)
        if (this.loginForm.invalid) {
            return;
        }
        console.log('done validation')
        this.loading = true;
        if (this.userNameType == 'email') {
            this.router.navigate(['/welcome']);
        } else {
            this.router.navigate(['/login']);
        }
        // this.myloginService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             //   this.alertService.error(error);
        //             this.loading = false;
        //         });
    }

}
