import validTitle from '../../../services/logic/validateTitle';

describe('Test Title with length 5', () => {
  it('Test a valid title', () => {
    expect(validTitle('ahmedAsaad')).toBeTruthy();
  });

  it('Test a valid title', () => {
    expect(validTitle('as   ht   mrere')).toBeTruthy();
  });

  it('Test an invalid title', () => {
    expect(validTitle('ahm')).toBeFalsy();
  });

  it('Test an invalid title', () => {
    expect(validTitle('   ahm   ')).toBeFalsy();
  });
});
