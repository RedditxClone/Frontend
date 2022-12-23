import removeSlashFromUserName from '../../../services/logic/removeSlashFromUserName';

describe('Test Remove /u/ from username', () => {
  it('Test a username with /u/', () => {
    expect(removeSlashFromUserName('/u/ahmedasaad')).toBe('ahmedasaad');
  });

  it('Test a username without /u/', () => {
    expect(removeSlashFromUserName('ahmedasaad')).toBe('ahmedasaad');
  });
});
