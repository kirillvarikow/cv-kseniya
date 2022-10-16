const puppeteer = require('puppeteer');
const fileUrl = require('file-url');

(async() => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://kirylvarykau.github.io/cv-kseniya/');
	
	await page.pdf({
		path: 'test.pdf',
		format: 'A4',
		margin: {
			top: "20px",
			left: "20px",
			right: "20px",
			bottom: "20px"
		}
	});
	await browser.close();
})();