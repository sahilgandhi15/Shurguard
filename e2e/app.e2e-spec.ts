import { JitStoragePage } from './app.po';

describe('jit-storage App', () => {
  let page: JitStoragePage;

  beforeEach(() => {
    page = new JitStoragePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
