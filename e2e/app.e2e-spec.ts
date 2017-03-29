import { WebWebcamPage } from './app.po';

describe('web-webcam App', () => {
  let page: WebWebcamPage;

  beforeEach(() => {
    page = new WebWebcamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
