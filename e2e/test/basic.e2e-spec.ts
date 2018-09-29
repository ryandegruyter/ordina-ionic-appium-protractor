import {browser, by, element, ElementFinder, protractor} from 'protractor';

describe('App', () => {
  describe('default screen', () => {
    it('should have a title saying Page One', async () => {
      await browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.id('skip'))));
      const skipButton: ElementFinder = await browser.element(by.id('skip'));
      const skipButtonLabel: string = await skipButton.getText();
      expect(skipButtonLabel).toEqual('SKIP');

      skipButton.click();

      await browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.id('btn-login'))));
      const loginBtn: ElementFinder = await browser.element(by.id('btn-login'));
      const loginBtnLabel: string = await loginBtn.getText();
      expect(loginBtnLabel).toEqual('SIGN IN');

      loginBtn.click();
    });
  });
});
