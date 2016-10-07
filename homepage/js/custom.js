/**
 *  * Created by eacon on 10/5/16.
 *   */

function writeRandImage() {
    var bgiUrls = [
        'http://oek053c4l.bkt.clouddn.com/img/hlm-1-1.jpg',
        //'http://oek053c4l.bkt.clouddn.com/img/hlm-2-1.jpg',
        'http://oek053c4l.bkt.clouddn.com/img/hlm-3-1.jpg',
        //'http://oek053c4l.bkt.clouddn.com/img/hlm-4-1.jpg',
        'http://oek053c4l.bkt.clouddn.com/img/hlm-5-1.jpg'
    ];
    
    _url = bgiUrls[Math.floor(Math.random() * bgiUrls.length)];
    var headerBgi = '<header id="header-bgi" style="background-image: url(\'{imgUrl}\')">';

    document.write(headerBgi.replace("{imgUrl}", _url));
}

