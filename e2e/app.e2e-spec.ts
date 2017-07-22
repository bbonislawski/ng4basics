import { Ng4basicsPage } from './app.po';

describe('ng4basics App', () => {
  let page: Ng4basicsPage;

  beforeEach(() => {
    page = new Ng4basicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
