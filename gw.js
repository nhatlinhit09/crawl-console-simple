
const request=require('request');
const cheerio=require('cheerio');
request('https://vnexpress.net/tam-su', (error, response, html)=>{
	if(!error && response.statusCode == 200)
	{
		const $ = cheerio.load(html);
		const siteHeading= $('.list_news');
		//console.log(siteHeading.html());
		//console.log(siteHeading.text());
		//const output = siteHeading.find(list_news).html();
		
		//const output = siteHeading
		//.children('h4') //crawl the h4
		//.parent()
		//.text();
		//tag + the a
		$('.list_news a').each((i,el)=>{
			//const item =$(el).html();
			const item =$(el).text();//show crawl duong dang text
			const link =$(el).attr('href');//lay crawl link index
			console.log(link);
			//console.log(item);
		});
		
		//console.log(output);
	}
});