const puppeteer = require("puppeteer")

describe('Mi primer test en puppeteer',()=>{
  

        it('Debe abrir y cerrar el navegador',async () => {
            const browser = await puppeteer.launch({
            headless:false,  //uso de interfaz
            slowMo:0,  // navegar lento
            devtools:false, //abrir las devtools
            /*defaultViewport:{
                width:415,
                height:915
            } //tamaño de pagina */
           // args:['--window-size = 415,915'] tamaño de ventana
           defaultViewport:null  

        })
   
   

    const page = await browser.newPage()
    await page.goto('https://github.com/erika-nath/GDL004-social-network')
    await new Promise(resolve => setTimeout(resolve, 5000))
    await browser.close()
    }, 10000) 
})
