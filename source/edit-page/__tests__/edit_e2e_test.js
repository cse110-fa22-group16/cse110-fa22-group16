let dateObj = new Date();
let date = dateObj.getDate();
let month = dateObj.getMonth() + 1;
let year = dateObj.getFullYear();
let key = `${year}-${month}-${date}`;
const moodList = ['terrible', 'bad', 'neutral', 'good', 'great'];


describe('Test edit page from hello page', () => {
    beforeAll(async () => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/prompt-page.html');
        const navigationPromise = page.waitForNavigation({ waitUntil: ['load', 'networkidle2'] });
        const btn= await page.$$('.feelingsChoices>input+label');
        await btn[0].click();

        await page.click('button');
        await navigationPromise;
    });    
    it('Check the entry button link to edit page', async () => {
        // Title of Edit Page Check
        await page.click('button');
        const titleEdit = await page.title();
        expect(titleEdit).toBe('Edit Page');
        
    });
});

describe('Exit Button Test', () => {
    beforeAll(async () => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/prompt-page.html');
        const navigationPromise = page.waitForNavigation({ waitUntil: ['load', 'networkidle2'] });
        const btn= await page.$$('.feelingsChoices>input+label');
        await btn[0].click();

        await page.click('button');
        await navigationPromise;
    });    
    it('Check that exit button navigates to calendar page', async () => {
        // Title of Edit Page Check
        await page.click('button');
        const titleEdit = await page.title();
        expect(titleEdit).toBe('Edit Page');

        await page.click('#editButton');

        await page.click('#exitButton');
        const newTitle = await page.title();
        expect(newTitle).toBe('Calendar Page');
    });
});

describe('Test edit page with different moods', () => {
    beforeAll(async() => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/prompt-page.html');
    }, 100000);

    for(let i = 0; i < 5; i++) {
        it(`Check edit page for the following mood: (${moodList[i]})`, async () => {
            await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/prompt-page.html');
            const navigationPromise = page.waitForNavigation({ waitUntil: ['load', 'networkidle2'] });
            const btn= await page.$$('.feelingsChoices>input+label');
            await btn[i].click();

            await page.click('button');
            await navigationPromise;

            // Value of the Mood
            let dateObj = new Date();
            let date = dateObj.getDate();
            let month = dateObj.getMonth() + 1;
            let year = dateObj.getFullYear();
            let key = `${year}-${month}-${date}`;
            const localMood = await page.evaluate(() => localStorage.getItem(key));
            expect(localMood).toBe(`{\"rating\":\"${moodList[i]}\",\"comment\":\"\",\"edited\":false}`);
            
            // Proper Page Transfer
            const titleFinish = await page.title();
            expect(titleFinish).toBe('Finish Page');

        }, 100000);
    }
});

describe('Test edit page from finish page', () => {
    beforeAll(async () => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/finish-page.html');
    }, 100000);    
    it('Check the entry button link to edit page', async () => {
        await page.click('button');
        const title = await page.title();
        expect(title).toBe('Edit Page');
    });
});

describe('Delete Yes Button Test', () => {
    beforeAll(async () => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/prompt-page.html');
        const navigationPromise = page.waitForNavigation({ waitUntil: ['load', 'networkidle2'] });
        const btn = await page.$$('.feelingsChoices>input+label');
        await btn[0].click();

        await page.click('button');
        await navigationPromise;
    });    
    it('Check that exit button navigates to calendar page', async () => {
        // Title of Edit Page Check
        await page.click('button');
        const titleEdit = await page.title();
        expect(titleEdit).toBe('Edit Page');

        // Navigation to the correct edit section
        await page.click('#editButton');
        await page.click('#editButton');
        await page.click('#editButton');
        await page.click('#editButton');

        // Check the delete yes button - it should go to the calendar page    
        await page.click('#deleteYes');
        const newTitle = await page.title();
        expect(newTitle).toBe('Calendar Page');
    });
});

describe('Delete No Button Test', () => {
    beforeAll(async () => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/prompt-page.html');
        const navigationPromise = page.waitForNavigation({ waitUntil: ['load', 'networkidle2'] });
        const btn = await page.$$('.feelingsChoices>input+label');
        await btn[0].click();

        await page.click('button');
        await navigationPromise;
    });    
    it('Check that exit button navigates to calendar page', async () => {
        // Title of Edit Page Check
        await page.click('button');
        const titleEdit = await page.title();
        expect(titleEdit).toBe('Edit Page');

        // Navigation to the correct edit section
        await page.click('#editButton');
        await page.click('#editButton');
        await page.click('#editButton');
        await page.click('#editButton');

        // Check the delete no button - it should go back to the edit page    
        await page.click('#deleteNo');
        const newTitle = await page.title();
        expect(newTitle).toBe('Edit Page');
    });
});

