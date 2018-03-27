var projects = [
        // ** ANIMATION **
        {
        type: 'animation',
        title: 'Abstract Film',
        image: 'sexy-film.gif',
        description: 'Abstract sexy gif',
        thumb: 'sexy-film.png'
    },
            {
        type: 'animation',
        title: 'Powerstick',
        description: 'Wherever Pete goes, he is never without his trusty Powerstick. Don\'t get stuck without your portable devices. Carry power with you just like Pete!',
        thumb: 'powerstick.png',
        videoEmbedUrls: ['www.youtube.com/embed/bsuD9j7QxKQ', 'www.youtube.com/embed/eTu6m1PpEI0', 'www.youtube.com/embed/oNGiLFF9dYY']
    },
        {
        type: 'animation',
        title: 'Dolphin',
        image: 'anim_dolphin.gif',
        description: 'Baaaayyyybbyyy dolphin...!',
        thumb: 'dolphin.gif'
    },
        {
        type: 'animation',
        title: 'Demo Reel',
        description: 'Demo reel',
        thumb: 'demo-reel.png',
        videoEmbedUrls: ['player.vimeo.com/video/259600005']
    },
        {
        type: 'animation',
        title: 'Birthday Wishes',
        description: 'Birthday Wishes for JibJab Facebook App',
        thumb: 'birthday-wishes.png',
        videoEmbedUrls: ['player.vimeo.com/video/259804841']
    },
        {
        type: 'animation',
        title: 'Enhanced Imagination',
        description: 'Animation spot for Enhanced Imagination',
        thumb: 'enhanced-imagination.png',
        videoEmbedUrls: ['player.vimeo.com/video/259804372']
    },
        {
        type: 'animation',
        title: 'Ground Zero',
        description: 'Commercial spot for Ground Zero (Toronto)',
        thumb: 'ground-zero.png',
        videoEmbedUrls: ['player.vimeo.com/video/259804261']
    },
        // ** ILLUSTRATION **
        {
        type: 'illustration',
        title: 'Berry Boat',
        images: ['berry-boat-1.png', 'berry-boat-2.png'],
        description: 'Children\'s book',
        thumb: 'berry-boat.png'
    },
        {
        type: 'illustration',
        title: 'Handsome Man',
        images: ['gerby-1.jpg', 'gerby-2.png'],
        description: 'Disney-fied',
        thumb: 'gerby.png'
    },
        {
        type: 'illustration',
        title: 'Abstract dancing girl',
        images: ['abstract-girl.png'],
        description: 'Colourful abstract naked dancing lady',
        thumb: 'abstract-girl.png'
    },
        {
        type: 'illustration',
        title: 'Animals',
        images: ['animals-1.png', 'animals-2.png'],
        description: 'Wild animals',
        thumb: 'animals.png'
    },
        // ** WEB **
        {
        type: 'web',
        title: 'Barking Teacup',
        images: ['barking-teacup-1.png', 'barking-teacup-2.png'],
        siteUrl: 'https://twitter.com/barkingteacup',
        description: 'Barking Teacup logo',
        thumb: 'barking-teacup.png'
    },
        {
        type: 'web',
        title: 'Big World Small Budget',
        images: ['bwsb.png'],
        siteUrl: 'http://bigworldsmallbudget.com/',
        description: 'Big World Small Budget logo',
        thumb: 'bwsb.png'
    },
        {
        type: 'web',
        title: 'DawnAyer.com',
        images: ['dawn-ayer-1.png', 'dawn-ayer-2.png', 'dawn-ayer-3.png'],
        siteUrl: 'http://dawnayer.com/',
        description: 'Commissioned by dawn ayer COMMUNICATIONS to design and develop a website promoting their services',
        thumb: 'dawn-ayer.png'
    }
]

// var projects = 
//     '{"animation": [' +
//         '{"title": "Sexy Film", "description": "Abstract sexy gif", "thumb": "sexy-film.png", "images": ["sexy-film.gif"]},' +
//         '{"title": "Dolphin", "description": "Baaaayyyybbyyy dolphin...!", "thumb": "dolphin.gif", "images": ["anim_dolphin.gif"]},' +
//         '{"title": "Demo Reel", "description": "Demo reel", "thumb": "demo-reel.png", "videoUrls": ["player.vimeo.com/video/259600005"]},' +
//         '{"title": "Powerstick", "description": "Wherever Pete goes, he is never without his trusty Powerstick. Don\'t get stuck without your portable devices. Carry power with you just like Pete!",' +
//             '"thumb": "powerstick.png", "videoUrls": ["www.youtube.com/embed/bsuD9j7QxKQ", "www.youtube.com/embed/eTu6m1PpEI0", "www.youtube.com/embed/oNGiLFF9dYY"]}' +
//         // {
//         //     // type: 'animation',
//         //     title: 'Powerstick 2',
//         //     description: 'Stay powered up just like Pete! Watch Pete charge his mobile devices with his solar-powered PowerBinder through rain or shine.',
//         //     thumb: 'powerstick.png',
//         //     videoEmbedUrl: 'www.youtube.com/embed/eTu6m1PpEI0'
//         // },
//         // {
//         //     // type: 'animation',
//         //     title: 'Powerstick 3',
//         //     description: 'Portable charging never sounded so good! The all-new PowerSound II is both a portable charger and Bluetooth speaker.',
//         //     thumb: 'powerstick.png',
//         //     videoEmbedUrl: 'www.youtube.com/embed/oNGiLFF9dYY'
//         // },
//         // {
//         //     // type: 'animation',
//         //     title: 'Birthday Wishes',
//         //     description: 'Birthday Wishes for JibJab Facebook App',
//         //     thumb: 'birthday-wishes.png',
//         //     videoEmbedUrl: 'player.vimeo.com/video/259804841'
//         // },
//         //     {
//         //     // type: 'animation',
//         //     title: 'Enhanced Imagination',
//         //     description: 'Animation spot for Enhanced Imagination',
//         //     thumb: 'enhanced-imagination.png',
//         //     videoEmbedUrl: 'player.vimeo.com/video/259804372'
//         // },
//         //     {
//         //     // type: 'animation',
//         //     title: 'Ground Zero',
//         //     description: 'Commercial spot for Ground Zero (Toronto)',
//         //     thumb: 'ground-zero.png',
//         //     videoEmbedUrl: 'player.vimeo.com/video/259804261'
//         // }
//     "]" +
//     // 'illustration': [
//     //     {
//     //     title: 'Berry Boat',
//     //     description: 'Children\'s book',
//     //     thumb: 'berry-boat.png',
//     //     images: ['berry-boat-1.png', 'berry-boat-2.png']
//     //     },
//     //     {
//     //     title: 'Handsome Man',
//     //     description: 'Disney-fied',
//     //     thumb: 'gerby.png',
//     //     images: ['gerby-1.jpg', 'gerby-2.png']
//     //     },
//     //     {
//     //     title: 'Animals',
//     //     description: 'Wild animals',
//     //     thumb: 'animals.png',
//     //     images: ['animals-1.png', 'animals-2.png']
//     //     }
//     // ],
//     // 'web': [
//     //     {
//     //     title: 'Barking Teacup',
//     //     description: 'Barking Teacup logo',
//     //     thumb: 'barking-teacup.png',
//     //     images: ['barking-teacup-1.png', 'barking-teacup-2.png'],
//     //     siteUrl: 'https://twitter.com/barkingteacup'
//     //     },
//     //     {
//     //     title: 'Big World Small Budget',
//     //     description: 'Big World Small Budget logo',
//     //     thumb: 'bwsb.png',
//     //     images: ['bwsb.png'],
//     //     siteUrl: 'http://bigworldsmallbudget.com/'
//     //     },
//     //     {
//     //     title: 'DawnAyer.com',
//     //     description: 'Commissioned by dawn ayer COMMUNICATIONS to design and develop a website promoting their services',
//     //     thumb: 'dawn-ayer.png',
//     //     images: ['dawn-ayer.png'],
//     //     siteUrl: 'http://dawnayer.com/'
//     //     }
//     // ]
// "}"

module.exports = projects;