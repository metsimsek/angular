import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(link: string): Promise<unknown> {
    return browser.get(link);
  }

  async getParagraphText(selector: string): Promise<string> {
    return element(by.css(selector)).getText();
  }

  getElement(selector: string) {
    return element(by.css(selector));
  }

  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }
  
}