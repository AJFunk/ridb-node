import RIDB from 'index';

describe('RIDB.organization.all()', () => {
  it('returns array', () =>
    RIDB.organization.all().then((data) => expect(data.RECDATA).to.be.instanceof(Array))
  );
});

describe('RIDB.organization.organization()', () => {
  it('returns array', () =>
    RIDB.organization.organization(128).then((data) => expect(data).to.be.instanceof(Array))
  );
});
