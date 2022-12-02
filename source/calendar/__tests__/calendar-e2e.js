describe('Basic user flow for Website', () => {

    jest.setTimeout(100000);
    //visit the website.
    beforeAll(async () => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/calendar/index.html');
    });

    /* Test initial behavior of the Date Selector */
    it("Date selector initializes to today's date.", async () => {
        const selector = await page.$('#dateSelect');
        const value = await selector.getProperty('value');
        const rawValue = await value.jsonValue();
        const todayDate = new Date();
        
        const year = todayDate.getFullYear();
        const month = todayDate.getMonth() + 1;

        expect(rawValue).toBe(year + '-' + month);
    });
});