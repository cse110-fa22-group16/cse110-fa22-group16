let dateObj = new Date();
let date = dateObj.getDate();
let month = dateObj.getMonth() + 1;
let year = dateObj.getFullYear();
let key = `${year}-${month}-${date}`;

jest.setTimeout(100000);

describe('Test home page', () => {
    beforeAll(async () => {
        await page.goto(' https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/home-page.html');
    });    
    it('check let\'s go button link to prompt page, if not enter yet', async () => {
        await page.click('button');
        const title = await page.title();
        expect(title).toBe('Prompt Page');
    });
});


const moodList = ['terrible', 'bad', 'neutral', 'good', 'great'];

describe('Test prompt page', () => {
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

describe('Test home page', () => {
    beforeAll(async () => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/home-page.html');
    });    
    it('check let\'s go button link to finish page, if enter yet', async () => {
        await page.click('button');
        const title = await page.title();
        expect(title).toBe('Finish Page');
    });
});

const helloGroupLinkList = ['home-page.html', 'prompt-page.html', 'finish-page.html'];
for(let i=0; i<helloGroupLinkList.length; i++) {
    describe(`Test navbar (${helloGroupLinkList[i]})`, () => {
        beforeAll(async () => {
            await page.goto(`https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/${helloGroupLinkList[i]}`);
        });    
        it('logo link to home page', async () => {
            const navigationPromise = page.waitForNavigation({ waitUntil: ['load', 'networkidle2'] });
            await page.click('img');
            await navigationPromise;
            const title = await page.title();
            expect(title).toBe('Home Page');
        });
        it('my calendar link to calendar page', async () => {
            await page.goto(`https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/${helloGroupLinkList[i]}`);
            await page.click('.to-calendar');
            const title = await page.title();
            expect(title).toBe('Calendar Page');
        });
        it('check dynamic date', async () => {
            await page.goto(`https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/${helloGroupLinkList[i]}`);
            const dateSpan= await page.$$('header>.date-today');
            const dateValue = await (await dateSpan[0].getProperty('innerText')).jsonValue();
            
            expect(dateValue).toBe(`${month}/${date}/${year}`);
        });
    });
}

describe('Test finish page', () => {
    beforeAll(async () => {
        await page.goto('https://cse110-fa22-group16.github.io/cse110-fa22-group16/source/hello-page/finish-page.html');
    });    
    it('check you entry button link to edit page', async () => {
        await page.click('button');
        const title = await page.title();
        expect(title).toBe('Edit Page');
    });
});
