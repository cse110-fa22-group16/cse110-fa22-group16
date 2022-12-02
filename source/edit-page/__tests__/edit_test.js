let dateObj = new Date();
let date = dateObj.getDate();
let month = dateObj.getMonth() + 1;
let year = dateObj.getFullYear();
let key = `${year}-${month}-${date}`;
const moodList = ['terrible', 'bad', 'neutral', 'good', 'great'];

jest.setTimeout(100000);
// I was not able to directly access edit page so I had to click through the other pages to access it.


describe('Test edit page from finish page', () => {
    beforeAll(async () => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/finish-page.html');
    });    
    it('Check the entry button link to edit page', async () => {
        await page.click('button');
        const title = await page.title();
        expect(title).toBe('Edit Page');
    });
});

describe('Test edit page', () => {
    beforeAll(async() => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/prompt-page.html');
    });

    for(let i = 0; i < 5; i++) {

        it(`Check edit page for the following mood: (${moodList[i]})`, async () => {
            await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/prompt-page.html');
            const navigationPromise = page.waitForNavigation({ waitUntil: ['load', 'networkidle2'] });
            const btn= await page.$$('.feelingsChoices>input+label');
            await btn[i].click();

            await page.click('button');
            await navigationPromise;

            // Title of Edit Page Check
            await page.click('button');
            const titleEdit = await page.title();
            expect(titleEdit).toBe('Edit Page');


            // Text of the Edit Button
            const editButton = await page.$('#editButton');
            const value = await editButton.getProperty('innerText');
            const rawValue = await value.jsonValue();
            expect(rawValue).toBe('edit');

            // Simulate use of Edit Button
            await editButton.click();

            const updateButton = await page.$('#updateButton');
            await updateButton.click();
            await navigationPromise;

            // Value of the Mood
            await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/finish-page.html');
            const localMood = await page.evaluate(() => localStorage.getItem(key));
            expect(localMood).toBe(`{\"rating\":\"${moodList[i]}\",\"comment\":\"\",\"edited\":true}`);

        });
    }
});


