const chromium = require('chrome-aws-lambda');

exports.handler = async (event, context) => {
  const browser = await chromium.puppeteer.launch({
    headless: chromium.headless,
    args: chromium.args,
  });
  //const tab = await browser.newPage();
  //const text = await (await tab.goto("http://example.com/")).text();
  //console.log(text);
  //console.log("done");
  const page = await browser.newPage();
  await page.goto('https://aplikasi1.kelantan.gov.my/ekeberadaan/');
  

  await page.type('#no_ic','841227035133')
  await page.type('#katalaluan','e-Aduan@2018')

    await Promise.all([
    page.click('button.Submit2'),
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
]);
  
  browser.close();
}


