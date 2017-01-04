import RIDB from 'index';

describe('RIDB.organization.all()', () => {
  it('returns array', () =>
    RIDB.organization.all().then((data) => expect(data).to.be.instanceof(Array))
  );
});
