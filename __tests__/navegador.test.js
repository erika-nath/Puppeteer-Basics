const puppeteer = require("puppeteer")

describe('Mi primer test en puppeteer',()=>{
  

        it('Debe abrir y cerrar el navegador',async () => {
            const browser = await puppeteer.launch({
            headless:false
        })
   
   

    const page = await browser.newPage()
    await page.goto('https://github.com/erika-nath/GDL004-social-network')
    await new Promise(resolve => setTimeout(resolve, 5000))
    await browser.close()
    }, 10000) 
})
