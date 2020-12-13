const db = require("./models");

const bookSeed = [
    {
        googleId: "-9F9WaXUhRYC",
        title: "The Night Circus",
        authors: [ "Erin Morgenstern" ],
        description: "Two starcrossed magicians engage in a deadly game of cunning in The Night Circus, the spellbinding New York Times best seller that has captured the world's imagination. The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not. Within the black-and-white striped canvas tents is an utterly unique experience full of breathtaking amazements. It is called Le Cirque des Rêves, and it is only open at night. But behind the scenes, a fierce competition is underway: a duel between two young magicians, Celia and Marco, who have been trained since childhood expressly for this purpose by their mercurial instructors. Unbeknownst to them both, this is a game in which only one can be left standing. Despite the high stakes, Celia and Marco soon tumble headfirst into love, setting off a domino effect of dangerous consequences, and leaving the lives of everyone, from the performers to the patrons, hanging in the balance. Look for Erin Morgenstern's new novel, The Starless Sea, available now.",
        image: "http://books.google.com/books/content?id=-9F9WaXUhRYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "https://play.google.com/store/books/details?id=-9F9WaXUhRYC&source=gbs_api"
    },
    {
        googleId: "aHazvhln7BsC",
        title: "A Town Like Alice",
        authors: ["Nevil Shute"],
        description: "Nevil Shute’s most beloved novel, a tale of love and war, follows its enterprising heroine from the Malayan jungle during World War II to the rugged Australian outback. Jean Paget, a young Englishwoman living in Malaya, is captured by the invading Japanese and forced on a brutal seven-month death march with dozens of other women and children. A few years after the war, Jean is back in England, the nightmare behind her. However, an unexpected inheritance inspires her to return to Malaya to give something back to the villagers who saved her life. But it turns out that they have a gift for her as well: the news that the young Australian soldier, Joe Harmon, who had risked his life to help the women, had miraculously survived. Jean’s search for Joe leads her to a desolate Australian outpost called Willstown, where she finds a challenge that will draw on all the resourcefulness and spirit that carried her through her war-time ordeals.",
        image: "http://books.google.com/books/content?id=aHazvhln7BsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "https://play.google.com/store/books/details?id=aHazvhln7BsC&source=gbs_api"
    },
    {
        googleId: "e_3cCgAAQBAJ",
        title: "Stamped from the Beginning",
        authors: [ "Ibram X. Kendi" ], 
        description: "The National Book Award winning history of how racist ideas were created, spread, and deeply rooted in American society. Some Americans insist that we're living in a post-racial society. But racist thought is not just alive and well in America -- it is more sophisticated and more insidious than ever. And as award-winning historian Ibram X. Kendi argues, racist ideas have a long and lingering history, one in which nearly every great American thinker is complicit. In this deeply researched and fast-moving narrative, Kendi chronicles the entire story of anti-black racist ideas and their staggering power over the course of American history. He uses the life stories of five major American intellectuals to drive this history: Puritan minister Cotton Mather, Thomas Jefferson, abolitionist William Lloyd Garrison, W.E.B. Du Bois, and legendary activist Angela Davis. As Kendi shows, racist ideas did not arise from ignorance or hatred. They were created to justify and rationalize deeply entrenched discriminatory policies and the nation's racial inequities. In shedding light on this history, Stamped from the Beginning offers us the tools we need to expose racist thinking. In the process, he gives us reason to hope.",
        image: "http://books.google.com/books/content?id=e_3cCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "https://play.google.com/store/books/details?id=e_3cCgAAQBAJ&source=gbs_api"
    }
]

db.Book.deleteMany({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });