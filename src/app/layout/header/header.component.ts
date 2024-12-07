import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  AfterViewInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { ConfigService } from "src/app/config/config.service";
import { LanguageService } from "src/app/core/service/language.service";
import { TokenStorageService } from "src/app/core/service/token-storage.service";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"],
})
export class HeaderComponent extends UnsubscribeOnDestroyAdapter
  implements OnInit, AfterViewInit {
  public config: any = {};
  userImg: string;
  homePage: string;
  isNavbarCollapsed = true;
  searchTerm: string = ''; // Define searchTerm property
  email: string;
  notifications: any[] = [];
  countryName: string;
  flagvalue: string;
  langStoreValue: string;
  currentDate: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private configService: ConfigService,
    private router: Router,
    public languageService: LanguageService,
    private tokenStorage: TokenStorageService
  ) {
    super();
  }

  ngOnInit() {
    this.config = this.configService.configData;
    const userRole = this.tokenStorage.getUser().roles;
    this.homePage = "admin/dashboard";
    this.email = this.tokenStorage.getUser().email;

    this.notifications = [
      // Define your notifications array here
    ];

    // Get today's date
    const today = new Date();
    this.currentDate = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });


    // Populate initial values or perform any necessary logic
  }

  ngAfterViewInit() {
    // Perform post-view initialization tasks if needed
  }

  // search(event: Event) {
  //   event.preventDefault(); // Prevent default form submission
  //   console.log("Search term:", this.searchTerm);
    // Implement search logic here (e.g., send search request to backend)
  // }

  // openNotifications() {
  //   console.log("Open notifications");
    // Implement logic to handle opening notifications
  // }

  openUserProfileDropdown() {
    console.log("Open user profile dropdown");
    // Implement logic to handle opening user profile dropdown
  }

  // buy() {
  //   console.log("Buy function called");
    // Implement buy logic or navigate to buy page
    // this.router.navigate(['/buy']);
  // }

  // sell() {
  //   console.log("Sell function called");
    // Implement sell logic or navigate to sell page
    // this.router.navigate(['/sell']);
  // }

  // addToCart() {
  //   console.log("Add to cart function called");
    // Implement add to cart logic or navigate to cart page
    // this.router.navigate(['/addToCart']);
  // }

  callSidemenuCollapse() {
    const body = this.document.body;
    const hasClass = body.classList.contains("side-closed");
    if (hasClass) {
      this.renderer.removeClass(body, "side-closed");
      this.renderer.removeClass(body, "submenu-closed");
    } else {
      this.renderer.addClass(body, "side-closed");
      this.renderer.addClass(body, "submenu-closed");
    }
  }

  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigate(["/authentication/signin"]);
  }

  setLanguage(text: string, lang: string, flag: string) {
    this.languageService.setLanguage(lang);
    this.countryName = text;
    this.flagvalue = flag;
    this.langStoreValue = lang;
  }
}
