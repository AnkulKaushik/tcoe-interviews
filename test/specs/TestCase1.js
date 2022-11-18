describe('validateUrl', () => {

    it('verify search', async() => {
        browser.url("https://www.cnn.com/")

        const search = await $(".sc-bdVaJa");

        await search.click()
     
        const click = await $("#header-search-bar");

        await click.setValue("modi")
        await browser.executeAsync((done) => {
                console.log('Wake me up before you go!');
                setTimeout(done, 5000);
            });
        const btn = await $(".JwELA");
        btn.click();
        
        expect(browser).toHaveUrlContaining('modi')

        // await val.click()
    });

    

});