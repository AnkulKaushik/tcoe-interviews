describe('validate Image', () => {

    it('image verifying', async () => {
        let a = 1;
        let i = 1;
        await browser.setWindowRect(0, 0, 1200, 800);
        await browser.url("http://edition.cnn.com/travel/gallery/top-christmas-markets/index.html")
        // await browser.executeAsync((done) => {
        //     console.log('Wake me up before you go!');
        //     setTimeout(done, 15000);
        // });
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
}
)
