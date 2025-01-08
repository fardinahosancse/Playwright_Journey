import { Page } from "@playwright/test";

export class NavigationPage {
  readonly onThisNavPage: Page;

  constructor(page: Page) {
    this.onThisNavPage = page;
  }

  async pageFormLayout() {
    await this.navbarAction("Forms");
    await this.onThisNavPage.getByText("Form Layout").click();
  }

  async pageDatePicker() {
    await this.navbarAction("Forms");
    await this.onThisNavPage.getByText("Datepicker").click();
  }

  async pageWebTable() {
    await this.navbarAction("Tables & Data");
    await this.onThisNavPage.getByText("Smart Table").click();
  }

  async pageToaster() {
    await this.navbarAction("Modal & Overlays");
    await this.onThisNavPage.getByText("Toastr").click();
  }

  async pageTooltip() {
    await this.navbarAction("Modal & Overlays");
    await this.onThisNavPage.getByText("Tooltip").click();
  }

  // Function to check if the navbar is already extended
  private async navbarAction(buttonName: string) {
    const buttonTitle = this.onThisNavPage.getByTitle(buttonName);
    const navState = await buttonTitle.getAttribute("aria-expanded");
    if (navState === "false") {
      await buttonTitle.click();
    } else {
      console.log(`The navbar section '${buttonName}' is already expanded.`);
    }
  }
}
