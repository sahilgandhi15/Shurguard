import { ShurguardStoragePage } from './app.po';

describe('shurguard-storage App', () => {
  let page: ShurguardStoragePage;

  beforeEach(() => {
    page = new ShurguardStoragePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
