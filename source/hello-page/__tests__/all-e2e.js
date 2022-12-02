let dateObj = new Date();
let date = dateObj.getDate();
let month = dateObj.getMonth() + 1;
let year = dateObj.getFullYear();
let key = `${year}-${month}-${date}`;
const navigationPromise = page.waitForNavigation({ waitUntil: ['load', 'networkidle2'] });

jest.setTimeout(200000);

const moodList = ['terrible', 'bad', 'neutral', 'good', 'great'];

describe('Home Page and Prompt Page test', () => {
    // Home Page Test
    beforeAll(async () => {
        await page.setDefaultNavigationTimeout(0);
        await page.goto(' https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/home-page.html');
    });    
    it('check let\'s go button link to prompt page, if not enter yet', async () => {
        await page.click('button');
        const title = await page.title();
        expect(title).toBe('Prompt Page');
    });

    // Prompt Page Test
    beforeAll(async() => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/prompt-page.html');
    });
    
        for(let i=0; i<5; i++) {
            it(`check finish button save the data to localStorage and link to finish page (${moodList[i]})`, async () => {
                await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/prompt-page.html');
    
                const navigationPromise = page.waitForNavigation({ waitUntil: ['load', 'networkidle2'] });
                
                const btn= await page.$$('.feelingsChoices>input+label');
                await btn[i].click();
    
                await page.click('button');
                await navigationPromise;
                const localMood = await page.evaluate(() => localStorage.getItem(key));
    
                expect(localMood).toBe(`{\"rating\":\"${moodList[i]}\",\"comment\":\"\",\"edited\":false}`);
                
                const title = await page.title();
                expect(title).toBe('Finish Page');
            }, 10000);
        }
});

describe('Edit and Delete Test', () => {
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

    beforeAll(async() => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/edit-page/edit-page.html');
    });

    it(`Check delete test`, async () => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/edit-page/edit-page.html');

        const editButton = await page.$('#editButton');
        await editButton.click();

        // Text of the Delete Button
        const deleteButton = await page.$('#editButton');
        const value = await deleteButton.getProperty('innerText');
        const rawValue = await value.jsonValue();
        expect(rawValue).toBe('delete');

        // Simulate use of Delete Button
        await deleteButton.click();

        const deleteYes = await page.$('#deleteYes');
        await deleteYes.click();
        await page.waitForNavigation();
        const title = await page.title();
        expect(title).toBe('Calendar Page');
    });
});