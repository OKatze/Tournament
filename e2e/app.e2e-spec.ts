import { FIFAPage } from './app.po';

describe('fifa App', function() {
  let page: FIFAPage;

  beforeEach(() => {
    page = new FIFAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
