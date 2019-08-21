const projects = {
  animation: [
    {
      title: "Jellyegg",
      imagePaths: ["jellyegg.gif"],
      description: "Floating in space",
      thumbPath: "jellyegg.gif"
    },
    {
      title: "Panda Robot",
      imagePaths: ["panda-robot.gif"],
      description: "Panda robot being electrocuted",
      thumbPath: "panda-robot.gif"
    },
    {
      title: "Dolphin",
      imagePaths: ["anim_dolphin.gif"],
      description: "Baaaayyyybbyyy dolphin...!",
      thumbPath: "dolphin.gif"
    },
    {
      title: "Abstract Film",
      imagePaths: ["sexy-film.gif"],
      description: "Abstract sexy gif",
      thumbPath: "sexy-film.gif"
    },
    {
      title: "Powerstick",
      description:
        "Wherever Pete goes, he is never without his trusty Powerstick. Don't get stuck without your portable devices. Carry power with you just like Pete!",
      thumbPath: "powerstick.png",
      embedUrls: [
        "youtube.com/embed/bsuD9j7QxKQ",
        "youtube.com/embed/eTu6m1PpEI0",
        "youtube.com/embed/oNGiLFF9dYY"
      ]
    },
    {
      title: "Demo Reel",
      description: "Demo reel",
      thumbPath: "demo-reel.png",
      embedUrls: ["player.vimeo.com/video/259600005"]
    }
    // {
    //   title: "Birthday Wishes",
    //   description: "Birthday Wishes for JibJab Facebook App",
    //   thumbPath: "birthday-wishes.png",
    //   embedUrls: ["player.vimeo.com/video/259804841"]
    // },
    // {
    //   title: "Enhanced Imagination",
    //   description: "Animation spot for Enhanced Imagination",
    //   thumbPath: "enhanced-imagination.png",
    //   embedUrls: ["player.vimeo.com/video/259804372"]
    // },
    // {
    //   title: "Ground Zero",
    //   description: "Commercial spot for Ground Zero (Toronto)",
    //   thumbPath: "ground-zero.png",
    //   embedUrls: ["player.vimeo.com/video/259804261"]
    // }
  ],
  illustration: [
    {
      title: "Berry Boat",
      imagePaths: ["berry-boat-1.png", "berry-boat-2.png"],
      description: "Children's book",
      thumbPath: "berry-boat.png"
    },
    {
      title: "Handsome Man",
      imagePaths: ["gerby-1.jpg", "gerby-2.png"],
      description: "Disney-fied",
      thumbPath: "gerby.png"
    },
    {
      title: "Abstract dancing girl",
      imagePaths: ["abstract-girl.png"],
      description: "Colourful abstract naked dancing lady",
      thumbPath: "abstract-girl.png"
    },
    {
      title: "Animals",
      imagePaths: ["animals-1.png", "animals-2.png"],
      description: "Wild animals",
      thumbPath: "animals.png"
    },
    {
      title: "FOG Logo",
      imagePaths: ["fog.jpg"],
      description:
        "Logo created for Hamilton-based motorcycle enthusiast group",
      thumbPath: "fog.png"
    }
  ],
  web: [
    {
      title: "Takla Fish Tracker",
      imagePaths: [
        "tft1.png",
        "tft2.png",
        "tft3.png",
        "tft4.png",
        "tft5.png",
        "tft6.png"
      ],
      siteUrl: "https://play.google.com/store/apps/details?id=ca.taklafn.taklafishtracker",
      description:
        "Flutter, Dart. Track your catches and win prizes! Available on both Android and iOS. Features authentication through Firebase, connects to real-time database, and functions online and offline.",
      thumbPath: "tft.png"
    },
    {
      title: "Gloomhaven Companion",
      imagePaths: [
        "gec-1.png",
        "gec-2.png",
        "gec-3.png",
        "gec-4.png"
      ],
      siteUrl: "https://play.google.com/store/apps/details?id=tomkatcreative.gloomhavenenhancementcalc",
      description:
        "Flutter, Dart. Easily calculate the cost of that card enhancement you have your eye on! Includes a full list of available enhancements and their eligible abilities",
      thumbPath: "gec.png"
    },
    {
      title: "Junk App 2.0",
      imagePaths: [
        "roi-user_auth.gif",
        "roi-create_journal.gif",
        "roi-add_view_job.gif",
        "roi-add_view_dump.gif",
        "roi-custom_calc.gif",
        "roi-dump_info.gif",
        "roi-archive_journal.gif"
      ],
      siteUrl: "https://play.google.com/store/apps/details?id=com.garrisonthomas.junkapp",
      description:
        "Java, Firebase, Material Design. Logistics app created for a junk removal company in Toronto (https://www.ridofittoronto.com/). Connects to Google Firebase database and features user authentication, real-time data-sync, and Material Design",
      thumbPath: "roi.png"
    },
    {
      title: "Travel Advisories",
      imagePaths: [
        "travel-advisories-1.png",
        "travel-advisories-2.png",
        "travel-advisories-3.png",
        "travel-advisories-4.png",
        "travel-advisories-5.png"
      ],
      siteUrl: "https://github.com/Garrison88/travel-advisories",
      description:
        "Kotlin, Room, REST APIs. Add upcoming trips and view travel advisories.",
      thumbPath: "ta.png"
    },
    {
      title: "RGB Guessing Game",
      siteUrl:
        "https://rgb-guessing-game-garrison.herokuapp.com/game-page.html",
      embedUrls: ["rgb-guessing-game-garrison.herokuapp.com/game-page.html"],
      description:
        "Guess the colour based on RGB values from 3 or 6 options. A correct answer will yield the closet colour name. Play with either your mouse or keyboard!",
      thumbPath: "colour-game.png"
    },
    {
      title: "YelpCamp",
      siteUrl: "https://fast-cliffs-46179.herokuapp.com/",
      embedUrls: ["fast-cliffs-46179.herokuapp.com/"],
      description:
        "RESTful Express app for submitting and reviewing campsites. Features user authentication through Passport, CRUD routing, Bootstrap styling, EJS, JQuery, and NodeJS.",
      thumbPath: "yelp-camp.png"
    },
    {
      title: "Barking Teacup",
      imagePaths: ["barking-teacup-1.png", "barking-teacup-2.png"],
      siteUrl: "https://twitter.com/barkingteacup",
      description: "Barking Teacup logo",
      thumbPath: "barking-teacup.png"
    },
    {
      title: "Big World Small Budget",
      imagePaths: ["bwsb.png"],
      siteUrl: "http://bigworldsmallbudget.com/",
      description: "Big World Small Budget logo",
      thumbPath: "bwsb.png"
    },
    {
      title: "DawnAyer.com",
      siteUrl: "https://dawnayer.com/",
      embedUrls: ["dawnayer.com/"],
      description:
        "Commissioned by dawn ayer COMMUNICATIONS to design and develop a website promoting their services",
      thumbPath: "dawn-ayer.png"
    }
  ]
};

module.exports = projects;
