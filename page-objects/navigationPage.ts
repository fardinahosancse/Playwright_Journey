import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class NavigationPage extends HelperBase {
  
  constructor(page: Page) {
    super(page)
  }

  async pageFormLayout() {
    await this.navbarAction("Forms");
    await this.page.getByText("Form Layout").click();
    await this.waitForNumberOfSeconds(3)
  }

  async pageDatePicker() {
    await this.navbarAction("Forms");
    await this.page.getByText("Datepicker").click();
  }

  async pageWebTable() {
    await this.navbarAction("Tables & Data");
    await this.page.getByText("Smart Table").click();
  }

  async pageToaster() {
    await this.navbarAction("Modal & Overlays");
    await this.page.getByText("Toastr").click();
  }

  async pageTooltip() {
    await this.navbarAction("Modal & Overlays");
    await this.page.getByText("Tooltip").click();
  }

  // Function to check if the navbar is already extended
  private async navbarAction(buttonName: string) {
    const buttonTitle = this.page.getByTitle(buttonName);
    const navState = await buttonTitle.getAttribute("aria-expanded");
    if (navState === "false") {
      await buttonTitle.click();
    } else {
      console.log(`The navbar section '${buttonName}' is already expanded.`);
    }
  }
}
