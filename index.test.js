const cap= require('./index');

test('random', () => {
    expect(cap('racecar')).toBe('Racecar');
})