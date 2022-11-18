describe('validate test cases', () => {

    // Site Search Functionality 

    it('verify search', async() => {
        browser.url("https://www.cnn.com/")

        const search = await $(".sc-bdVaJa");

        await search.click()
     
        const click = await $("#header-search-bar");

        await click.setValue("modi")
        await browser.executeAsync((done) => {
                console.log('Wake me up before you go!');
                setTimeout(done, 2000);
            });
        const btn = await $(".JwELA");
        btn.click();
        
        expect(browser).toHaveUrlContaining('modi')

    });

    // verify  video 

   it ('verify video ',async()=>{
        browser.url("https://edition.cnn.com/videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn");
       const video= await $(".video-inline__video-resource");
       await video.click()
       browser.pause(3000)
       await browser.executeAsync((done) => {
           setTimeout(done, 15000);
        });
        
     
        
    })
    it('verify related suggestion video', async() => {
        browser.url("https://edition.cnn.com/videos/business/2022/11/16/taylor-swift-concert-tour-presale-tickets-ticketmaster-cprog-cnntm-vpx.cnn");
        const video= await $(".video-inline__video-resource");
        await video.click()
        await browser.executeAsync((done) => {
            setTimeout(done, 15000);
         });
         
         
        
    });

    // verify image


    it('image verifying', async () => {
        let a = 1;
        let i = 1;
        await browser.setWindowRect(0, 0, 1200, 800);
        await browser.url("http://edition.cnn.com/travel/gallery/top-christmas-markets/index.html")
       
        const elem = await $('.Image__component');
        await elem.scrollIntoView();
        const next_image = await $(".GalleryHeroDecorators__next");
        do {
            await next_image.click()
            await browser.executeAsync((done) => {
                setTimeout(done, 2000);
            });
            i++
        } while (i < 10)

        const prev_image = await $(".GalleryHeroDecorators__previous");
        do {
            await prev_image.click()
            await browser.executeAsync((done) => {
                setTimeout(done, 2000);
            });
            a++
        } while (a < 10)
       
    });
    });
