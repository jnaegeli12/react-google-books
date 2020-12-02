const db = require("./models");

const bookSeed = [
    {
        googleId: "ZzrVDwAAQBAJ",
        title: "The Voyage of the Dawn Treader",
        authors: ["C.S. Lewis"],
        description: "C. S. Lewis was a British author, lay theologian, and contemporary of J.R.R. Tolkien. The Voyage of the Dawn Treader is about a journey east across the sea from Narnia to the end of the world.",
        image: "http://books.google.com/books/content?id=ZzrVDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=ZzrVDwAAQBAJ&dq=narnia&hl=&source=gbs_api"
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
        googleId: "iHy75F9qO_4C",
        title: "Emma",
        authors: ["Jane Austen"],
        description: "A timeless coming-of-age story follows the adventures of the self-assured and accomplished Emma, a twenty-one-year-old girl of privilege who believes she is immune to romance and has several chaotic and often humorous experiences.",
        image: "http://books.google.com/books/content?id=iHy75F9qO_4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=iHy75F9qO_4C&dq=Emma&hl=&source=gbs_api"
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