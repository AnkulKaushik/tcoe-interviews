describe('validateUrl', () => {

   it ('verify video ',async()=>{
        browser.url("https://edition.cnn.com/videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn");
       const video= await $(".video-inline__video-resource");
       await video.click()
       await browser.executeAsync((done) => {
           console.log('Wake me up before you go!');
           setTimeout(done, 15000);
        });
        browser.pause(3000)
        
     
        
    })
    it('verify related suggestion video', async() => {
        browser.url("https://edition.cnn.com/videos/business/2022/11/16/taylor-swift-concert-tour-presale-tickets-ticketmaster-cprog-cnntm-vpx.cnn");
        const video= await $(".video-inline__video-resource");
        await video.click()
        await browser.executeAsync((done) => {
            console.log('Wake me up before you go!');
            setTimeout(done, 15000);
         });
         browser.pause(3000)
         
        
    });
    });
