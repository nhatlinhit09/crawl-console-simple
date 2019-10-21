const request=require('request');
const cheerio=require('cheerio');
request('https://vnexpress.net/tam-su', (error, response, html)=>{
	if(!error && response.statusCode == 200)
	{
        const $ = cheerio.load(html);
        
		$('.list_news').each((i, el )=>{
            const title =$(el)//lay du lieu title
            .find('.title_news')
            .text()
            .replace(/\s\s+/g, '');
            const link =$(el)
            .find('a')
            .attr('href');
            //const ic =$(el)
           // .find('.icon_commend')
           // .text();
           //.replace(/,/,'');
           //tao file csv
          // WriteStream.write(`${title},${link} \n`);
            

        });
        console.log( 'gw2 done');
	}
});