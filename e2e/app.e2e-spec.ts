import { CodeBeAdminPage } from './app.po';

describe('code-be-admin App', () => {
  let page: CodeBeAdminPage;

  beforeEach(() => {
    page = new CodeBeAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
