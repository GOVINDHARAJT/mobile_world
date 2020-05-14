const mobiles: Object[] = [
    {
        logo:  'http://pngimg.com/uploads/apple_logo/apple_logo_PNG19692.png',
        site:  'https://www.apple.com/in/',
        brand: 'iphone',
        model: 'iphone SE',
        price: '16,999',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61BN2ccoPoL._SL1000_.jpg',
        amazonlink: 'https://www.amazon.in/Refurbished-Apple-iPhone-MLXM2HN-Gold/dp/B0776ZLRCR/ref=sr_1_7?dchild=1&keywords=iphone+se&qid=1588147454&sr=8-7',
        flipkartlink: 'https://www.flipkart.com/apple-iphone-se-gold-32-gb/p/itmetm9frzqcdrcm?pid=MOBETM93HMBGUQKH&lid=LSTMOBETM93HMBGUQKHZVFD5O&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=53a12d07-a600-4589-b31b-91a27debe229.MOBETM93HMBGUQKH.SEARCH&ppt=sp&ppn=sp&ssid=ik046wlbz40000001588148010029&qH=417360a05fc3522d'
    },
    {   
        logo:  'https://cdn.clipart.email/ad579ab3c8fc74067a8ab9c56d4ba4dd_xiaomi-logo-png-xiaomi-mi-logo-850-bsas-mobile-service_850-850.png',
        site:  'https://www.mi.com/in',
        brand: 'redmi',
        model: 'redmi 5',
        price: '7,999',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71EcwBpeRyL._SL1500_.jpg',
        amazonlink: 'https://www.amazon.in/Redmi-Note-%E0%A4%97%E0%A5%8B%E0%A4%B2%E0%A5%8D%E0%A4%A1-64-RAM/dp/B07P72FGSY/ref=sr_1_3?dchild=1&keywords=redmi+note+5&qid=1588152005&sr=8-3',
        flipkartlink:'https://www.flipkart.com/redmi-5-gold-32-gb/p/itmf9gjw8gy9vfv3?pid=MOBF3DHYPPRFYY6X&lid=LSTMOBF3DHYPPRFYY6XMLKTAJ&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=9b4d5c7d-3651-4ec1-a302-d3d166788ebd.MOBF3DHYPPRFYY6X.SEARCH&ppt=sp&ppn=sp&ssid=idzsqo81cw0000001588152251929&qH=aa73d17a19b75426'
    },
    {
        logo:  'https://www.searchpng.com/wp-content/uploads/2019/01/vivo-Phone-logo-715x250.png',
        site:  'https://www.vivo.com/in',
        brand: 'vivo',
        model: 'vivo V5 plus',
        price: '26,999',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71hWpET8rcL._SY741_.jpg',
        amazonlink: 'https://www.amazon.in/Vivo-V5Plus-Gold-64-RAM/dp/B01N4V50HD/ref=sr_1_2?dchild=1&keywords=vivo+v5&qid=1588167426&sr=8-2',
        flipkartlink:'https://www.flipkart.com/vivo-v5-plus-gold-64-gb/p/itmeqvehtxuxxfuf?pid=MOBEQVEHJHVKZPYQ&lid=LSTMOBEQVEHJHVKZPYQPSMGFI&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=03d41bfd-5a78-4c65-8636-90277bc3d6f3.MOBEQVEHJHVKZPYQ.SEARCH&ppt=sp&ppn=sp&ssid=z4p76x87sg0000001588167623757&qH=6557bb6eef2733e6'
    },
    {
        logo:  'http://pngimg.com/uploads/samsung_logo/samsung_logo_PNG8.png',
        site:  'https://www.samsung.com/in/smartphones/',
        brand: 'samsung',
        model: 'Galaxy note 8',
        price: '59,999',
        image: 'data:image/webp;base64,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',
        amazonlink: 'https://www.amazon.in/Samsung-Galaxy-Maple-Storage-Offers/dp/B072LPF919/ref=sr_1_6?crid=37LUIYYWGIT5N&dchild=1&keywords=samsung+galaxy+note+8&qid=1588238087&sprefix=sagalaxy+note+8%2Caps%2C424&sr=8-6',
        flipkartlink:'https://www.flipkart.com/samsung-galaxy-note-8-midnight-black-64-gb/p/itmfaa8wy9xzp4m7?pid=MOBFY4NYWWE9ZFFN&lid=LSTMOBFY4NYWWE9ZFFNWFVFTP&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=363ff49b-eb19-4f47-9431-63f5185fbb2d.MOBFY4NYWWE9ZFFN.SEARCH&ppt=sp&ppn=sp&ssid=3mc7nfhi3k0000001588238247972&qH=ea776ce547ae6aaa'
    },
    {
        logo:  'http://pngimg.com/uploads/apple_logo/apple_logo_PNG19692.png',
        site:  'https://www.apple.com/in/',
        brand: 'iphone',
        model: 'iphone 6s',
        price: '22,999',
        image: 'https://images-na.ssl-images-amazon.com/images/I/516jNlSnB-L._SL1024_.jpg',
        amazonlink: 'https://www.amazon.in/Apple-iPhone-6S-Space-Storage/dp/B01LX3A7CC/ref=sr_1_3?dchild=1&keywords=iphone+6s&qid=1588148090&sr=8-3',
        flipkartlink: 'https://www.flipkart.com/apple-iphone-6s-space-grey-32-gb/p/itmen2yyjfzpspyg?pid=MOBEN2YYKU9386TQ&lid=LSTMOBEN2YYKU9386TQCQ4EGX&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=d45454ea-5a30-41b1-80f9-158685fe0335.MOBEN2YYKU9386TQ.SEARCH&ppt=sp&ppn=sp&ssid=3w7mnkck7k0000001588148174514&qH=6a4fa6f1ee635be9'
    },
    {
        logo:  'https://cdn.clipart.email/ad579ab3c8fc74067a8ab9c56d4ba4dd_xiaomi-logo-png-xiaomi-mi-logo-850-bsas-mobile-service_850-850.png',
        site:  'https://www.mi.com/in',
        brand: 'redmi',
        model: 'redmi note 5Pro',
        price: '7,999',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71FIzR3BfDL._SL1500_.jpg',
        amazonlink: 'https://www.amazon.in/Mi-Redmi-Note-Pro-Storage/dp/B07F3HJKDB/ref=sr_1_4?dchild=1&keywords=redmi+note+5pro&qid=1588165679&sr=8-4',
        flipkartlink:'https://www.flipkart.com/redmi-note-5-pro-blue-64-gb/p/itmf3qstwujazqsp?pid=MOBF2BSGFKFKVQMC&lid=LSTMOBF2BSGFKFKVQMCXSHTC8&marketplace=FLIPKART&srno=s_1_3&otracker=search&otracker1=search&fm=SEARCH&iid=dc912e79-4c35-4cc6-ab01-e6f28c4bc2be.MOBF2BSGFKFKVQMC.SEARCH&ppt=sp&ppn=sp&ssid=ly2fj6fi740000001588165832167&qH=c4fd233ce740b9d3'
    },
    {
        logo:  'https://www.searchpng.com/wp-content/uploads/2019/01/vivo-Phone-logo-715x250.png',
        site:  'https://www.vivo.com/in',
        brand: 'vivo',
        model: 'vivo V7',
        price: '26,999',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71z1vr7iJhL._SY741_.jpg',
        amazonlink: 'https://www.amazon.in/Vivo-1718-Matte-Without-Offers/dp/B079PWTKG4/ref=sr_1_2?dchild=1&keywords=vivo+v7&qid=1588167835&sr=8-2',
        flipkartlink:'https://www.flipkart.com/vivo-v7-energetic-blue-32-gb/p/itmezhzzuzha8hmk?pid=MOBFYKFZSHZSZPZQ&lid=LSTMOBFYKFZSHZSZPZQF61IGL&marketplace=FLIPKART&srno=s_1_2&otracker=search&otracker1=search&fm=SEARCH&iid=b19c385f-1351-48c6-8c99-9666596b7ce3.MOBFYKFZSHZSZPZQ.SEARCH&ppt=sp&ppn=sp&ssid=1q9yadwp800000001588167934963&qH=98a4b1d9b16e7c78'
    },
    {
        logo:  'http://pngimg.com/uploads/apple_logo/apple_logo_PNG19692.png',
        site:  'https://www.apple.com/in/',
        brand: 'iphone',
        model: 'iphone 5s',
        price: '14,999',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41uHivasXbL.jpg',
        amazonlink: 'https://www.amazon.in/dp/B00FXLCJ28?tag=kp-web-price-in-india-21&linkCode=ogi&th=1&psc=1&SubscriptionId=AKIAJZ7ZVEW7WHEFIMWA&ascsubtag=1827874',
        flipkartlink: 'https://www.flipkart.com/apple-iphone-5s-space-grey-16-gb/p/itmeuyd8ngnpzjg8?pid=MOBDPPZZPXVDJHSQ&lid=LSTMOBDPPZZPXVDJHSQJFCARH&marketplace=FLIPKART&srno=s_1_3&otracker=search&otracker1=search&fm=SEARCH&iid=3a3c293e-f2ca-46be-a173-eaa3acba8a35.MOBDPPZZPXVDJHSQ.SEARCH&ppt=sp&ppn=sp&ssid=l4cri94pm80000001588147159312&qH=0ff939b1a9edc6b1'
    },
    {
        logo:  'http://pngimg.com/uploads/samsung_logo/samsung_logo_PNG8.png',
        site:  'https://www.samsung.com/in/smartphones/',
        brand: 'samsung',
        model: 'Galaxy M30',
        price: '10,790',
        image: 'https://images-na.ssl-images-amazon.com/images/I/816RTtou9zL._SY741_.jpg',
        amazonlink: 'https://www.amazon.in/Samsung-Galaxy-M30-Gradation-Blue/dp/B07HGJJ58K/ref=sr_1_1?dchild=1&keywords=Samsung+Galaxy+M30&qid=1588238706&sr=8-1',
        flipkartlink:'https://www.flipkart.com/samsung-galaxy-m30-blue-32-gb/p/itmb245858b3fe3b?pid=MOBFH6HYT5Z5ZPER&lid=LSTMOBFH6HYT5Z5ZPERSKE1U6&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=bafce3a7-a4ec-49f1-b1e9-4dd740757065.MOBFH6HYT5Z5ZPER.SEARCH&ppt=sp&ppn=sp&ssid=t75nkqxukg0000001588239171105&qH=59f8c3609b500c68'
    },
    {
        logo:  'https://cdn.clipart.email/ad579ab3c8fc74067a8ab9c56d4ba4dd_xiaomi-logo-png-xiaomi-mi-logo-850-bsas-mobile-service_850-850.png',
        site:  'https://www.mi.com/in',
        brand: 'redmi',
        model: 'redmi A2',
        price: '10,435',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91RPpvrgmsL._SL1500_.jpg',
        amazonlink: 'https://www.amazon.in/Mi-A2-Red-128GB-Storage/dp/B07DJD1CBT/ref=sr_1_1?dchild=1&keywords=redmi+A2&qid=1588166339&sr=8-1',
        flipkartlink:'https://www.flipkart.com/mi-a2-red-128-gb/p/itmfghsgrkphksag?pid=MOBFD94CUVXZYMZH&lid=LSTMOBFD94CUVXZYMZHTOBPY2&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=d7102849-3f09-4091-b0ab-ec902ed747a3.MOBFD94CUVXZYMZH.SEARCH&ppt=sp&ppn=sp&ssid=ph4ns3ep8w0000001588166463089&qH=6569f2c697414e74'
    },
    {
        logo:  'https://www.searchpng.com/wp-content/uploads/2019/01/vivo-Phone-logo-715x250.png',
        site:  'https://www.vivo.com/in',
        brand: 'vivo',
        model: 'vivo V7',
        price: '26,999',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71z1vr7iJhL._SY741_.jpg',
        amazonlink: 'https://www.amazon.in/Vivo-1718-Matte-Without-Offers/dp/B079PWTKG4/ref=sr_1_2?dchild=1&keywords=vivo+v7&qid=1588167835&sr=8-2',
        flipkartlink:'https://www.flipkart.com/vivo-v7-energetic-blue-32-gb/p/itmezhzzuzha8hmk?pid=MOBFYKFZSHZSZPZQ&lid=LSTMOBFYKFZSHZSZPZQF61IGL&marketplace=FLIPKART&srno=s_1_2&otracker=search&otracker1=search&fm=SEARCH&iid=b19c385f-1351-48c6-8c99-9666596b7ce3.MOBFYKFZSHZSZPZQ.SEARCH&ppt=sp&ppn=sp&ssid=1q9yadwp800000001588167934963&qH=98a4b1d9b16e7c78'
    },
    {
        logo:  'http://pngimg.com/uploads/samsung_logo/samsung_logo_PNG8.png',
        site:  'https://www.samsung.com/in/smartphones/',
        brand: 'samsung',
        model: 'Galaxy s10 plus',
        price: '73,800',
        image: 'data:image/webp;base64,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',
        amazonlink: 'https://www.amazon.in/Test-Exclusive-1038-with-Offer/dp/B07KXC7QSP/ref=sr_1_3?crid=2R67S6QITHUAI&dchild=1&keywords=samsung+galaxy+s10+plus+mobile&qid=1588239778&sprefix=Samsung+Galaxy+s10%2Caps%2C382&sr=8-3',
        flipkartlink:'https://www.flipkart.com/samsung-galaxy-s10-plus-ceramic-black-512-gb/p/itmfdyp69zhpygfz?pid=MOBFDNHAEBRVM7NZ&lid=LSTMOBFDNHAEBRVM7NZMPAO4P&marketplace=FLIPKART&srno=s_1_2&otracker=search&otracker1=search&fm=SEARCH&iid=735f8b18-adff-42ef-b702-d43298438290.MOBFDNHAEBRVM7NZ.SEARCH&ppt=sp&ppn=sp&ssid=kd79x11mxc0000001588239984634&qH=fb1ffe56e7fcb30d'
    }



];
export default mobiles;