import { WordShortenerPipe } from './word-shortener.pipe';

describe('WordShortenerPipe', () => {
  it('create an instance', () => {
    const pipe = new WordShortenerPipe();
    expect(pipe).toBeTruthy();
  });
});
