const puppeteer = require('puppeteer');

let url = 'https://www.booking.com/searchresults.fr.html?label=gen173nr-1FCAEoggI46AdIM1gEaE2IAQGYAQ24ARnIAQzYAQHoAQH4AQuIAgGoAgM&sid=b466de0e3f56f20221aff7d2ff25ba6d&sb=1&src=searchresults&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.fr.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaE2IAQGYAQ24ARnIAQzYAQHoAQH4AQuIAgGoAgM%3Bsid%3Db466de0e3f56f20221aff7d2ff25ba6d%3Bac_click_type%3Db%3Bac_position%3D0%3Bclass_interval%3D1%3Bdest_id%3D-73635%3Bdest_type%3Dcity%3Bdtdisc%3D0%3Bfrom_sf%3D1%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Biata%3DSIN%3Binac%3D0%3Bindex_postcard%3D0%3Blabel_click%3Dundef%3Bno_rooms%3D1%3Boffset%3D0%3Bpostcard%3D0%3Braw_dest_type%3Dcity%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bsearch_selected%3D1%3Bshw_aparth%3D1%3Bslp_r_match%3D0%3Bsrc%3Dindex%3Bsrc_elem%3Dsb%3Bsrpvid%3D7f6b5f7932500045%3Bss%3DSingapour%252C%2520Singapour%3Bss_all%3D0%3Bss_raw%3Dsingapour%3Bssb%3Dempty%3Bsshis%3D0%26%3B&ss=Singapour&is_ski_area=0&ssne=Singapour&ssne_untouched=Singapour&city=-73635&checkin_monthday=28&checkin_month=12&checkin_year=2018&checkout_monthday=3&checkout_month=1&checkout_year=2019&group_adults=2&group_children=0&no_rooms=1&from_sf=1';
(async ()=> {
const browser = await puppeteer.launch({headless: true,
  args: 
  [
    '--no-sandbox'
  ]});
const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 926});
await page.goto(url);
await page.screenshot({path: 'example.png'});

await page.close();
await browser.close();


})();