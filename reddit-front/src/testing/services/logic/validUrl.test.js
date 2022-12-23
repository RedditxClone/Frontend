import validUrl from '../../../services/logic/validUrl';

describe('Test url', () => {
  it('Test a valid url', () => {
    expect(validUrl('https://asaad.com')).toBeTruthy();
  });

  it('Test a valid url', () => {
    expect(validUrl('http://asaad.com')).toBeTruthy();
  });

  it('Test a url with query paramaters', () => {
    expect(validUrl('http://asaad.com?id=kjfdlfjd&name=asaad')).toBeTruthy();
  });

  it('Test an invalid url', () => {
    expect(validUrl('http---://asaad.com')).toBeFalsy();
  });
});
