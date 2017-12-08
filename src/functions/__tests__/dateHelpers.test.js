import moment from 'moment';
import { isToday, diffToday } from '../dateHelpers';

// Mock date of `today` to 09-11-2017
// Date starts to count from 0
Date.now = () => new Date(2017, 11 - 1, 9);

describe('isToday', () => {
  it('should return false when given date is not today', () => {
    const today = isToday(moment('10-11-2017', 'DD-MM-YYYY'));

    expect(today).toBe(false);
  });

  it('should return false when given date is not today', () => {
    const today = isToday(moment('09-11-2017', 'DD-MM-YYYY'));

    expect(today).toBe(true);
  });
});

describe('diffToday', () => {
  it('should return 1 when given date is the next day', () => {
    const today = diffToday(moment('10-11-2017', 'DD-MM-YYYY'));

    expect(today).toBe(1);
  });

  it('should return 5 when given date is 5 days in the future', () => {
    const today = diffToday(moment('14-11-2017', 'DD-MM-YYYY'));

    expect(today).toBe(5);
  });

  it('should return -1 when given date is the previous day', () => {
    const today = diffToday(moment('08-11-2017', 'DD-MM-YYYY'));

    expect(today).toBe(-1);
  });

  it('should return -5 when given date is the previous day', () => {
    const today = diffToday(moment('04-11-2017', 'DD-MM-YYYY'));

    expect(today).toBe(-5);
  });

  it('should return 0 when given date is today', () => {
    const today = diffToday(moment('09-11-2017', 'DD-MM-YYYY'));

    expect(today).toBe(0);
  });
});

