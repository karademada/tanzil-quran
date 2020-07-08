const request = require('supertest');
const app = require('../server.js');

describe('Get Quran sura endpoint ', () => {
  it('should retrieve all sura', async () => {
    const res = await request(app).get('/quran');

    expect(res.statusCode).toEqual(200);
    const sura = {
      sura: 1,
      aya: 1,
      text: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ'
    };
    expect(res.body[0]).toEqual(sura);
  });

  it('should retrieve sura by sura ID', async () => {
    const res = await request(app).get('/quran/2');

    expect(res.statusCode).toEqual(200);
    const sura = {
      sura: 2,
      aya: 1,
      text: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ الم'
    };
    expect(res.body[0]).toEqual(sura);
  });
});
