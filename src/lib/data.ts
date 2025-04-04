
export interface Author {
  id: number;
  name: string;
  hindiName?: string;
  bio: string;
}

export interface Genre {
  id: number;
  name: string;
  hindiName?: string;
}

export interface Book {
  id: number;
  title: string;
  hindiTitle?: string;
  author: Author;
  genres: Genre[];
  coverImage: string;
  publishedYear: number;
  description: string;
  readAvailable: boolean;
  previewText?: string;
  featured?: boolean;
}

export const authors: Author[] = [
  {
    id: 1,
    name: "Premchand",
    hindiName: "प्रेमचंद",
    bio: "Munshi Premchand was an Indian writer famous for his modern Hindi-Urdu literature. He is one of the most celebrated writers of the Indian subcontinent."
  },
  {
    id: 2,
    name: "Mahadevi Verma",
    hindiName: "महादेवी वर्मा",
    bio: "Mahadevi Verma was an Indian Hindi poet, freedom fighter and educationist from India. She is widely regarded as the modern Meera."
  },
  {
    id: 3,
    name: "Harivansh Rai Bachchan",
    hindiName: "हरिवंश राय बच्चन",
    bio: "Harivansh Rai Bachchan was an Indian poet of the Nayi Kavita literary movement of early 20th century Hindi literature."
  },
  {
    id: 4,
    name: "Ramdhari Singh Dinkar",
    hindiName: "रामधारी सिंह दिनकर",
    bio: "Ramdhari Singh Dinkar was an Indian Hindi poet, essayist, patriot and academic, who is considered as one of the most important modern Hindi poets."
  },
  {
    id: 5,
    name: "Mohan Rakesh",
    hindiName: "मोहन राकेश",
    bio: "Mohan Rakesh was one of the pioneers of the Nai Kahani literary movement of Hindi literature in the 1950s."
  }
];

export const genres: Genre[] = [
  {
    id: 1,
    name: "Novel",
    hindiName: "उपन्यास"
  },
  {
    id: 2,
    name: "Short Story",
    hindiName: "कहानी"
  },
  {
    id: 3,
    name: "Poetry",
    hindiName: "कविता"
  },
  {
    id: 4,
    name: "Drama",
    hindiName: "नाटक"
  },
  {
    id: 5,
    name: "Essay",
    hindiName: "निबंध"
  }
];

export const books: Book[] = [
  {
    id: 1,
    title: "Godaan",
    hindiTitle: "गोदान",
    author: authors[0],
    genres: [genres[0]],
    coverImage: "https://m.media-amazon.com/images/I/81hd9vAtB+L._AC_UF1000,1000_QL80_.jpg",
    publishedYear: 1936,
    description: "Godaan (The Gift of a Cow) is a Hindi novel by Munshi Premchand. It was first published in 1936 and is considered one of the greatest Hindi novels of modern Indian literature.",
    readAvailable: true,
    previewText: "होरी ने दोनों हाथ जोड़कर कहा — महाराज, मेरी गाय मर गई।\n\nदातादीन ने संतोष दिया — अब रोने से क्या होगा? मुआ हुआ फिर नहीं जीता। तुम्हारे कर्म का दोष था।\n\n'मैंने उसकी खूब सेवा की।'",
    featured: true
  },
  {
    id: 2,
    title: "Nirmala",
    hindiTitle: "निर्मला",
    author: authors[0],
    genres: [genres[0]],
    coverImage: "https://m.media-amazon.com/images/I/814n6+Ih9kL._AC_UF1000,1000_QL80_.jpg",
    publishedYear: 1928,
    description: "Nirmala is a Hindi fiction novel written by Indian writer Munshi Premchand. The novel highlights the issue of dowry system in India and other related issues like mismatched marriage and exploitation of women.",
    readAvailable: true,
    previewText: "उसे यह कहते शर्म आती थी कि उसके पिता अपनी लड़की के लिए वर कहाँ ढूँढ़ रहे हैं। वह अपनी सहेलियों के सामने सिर न उठा सकती थी। उसे अपनी दशा पर क्रोध आता था।"
  },
  {
    id: 3,
    title: "Madhushala",
    hindiTitle: "मधुशाला",
    author: authors[2],
    genres: [genres[2]],
    coverImage: "https://m.media-amazon.com/images/I/81-8bc7JtiL._AC_UF1000,1000_QL80_.jpg",
    publishedYear: 1935,
    description: "Madhushala is a book of 135 quatrains. The theme of this book is allegory of life and death, with the symbolism of the drinking house, the drinker, and the wine.",
    readAvailable: true,
    previewText: "मदिरालय जाने को घर से चलता है पीनेवाला,\n'किस पथ से जाऊँ?' असमंजस में है वह भोला भाला;",
    featured: true
  },
  {
    id: 4,
    title: "Rashmirathi",
    hindiTitle: "रश्मिरथी",
    author: authors[3],
    genres: [genres[2]],
    coverImage: "https://m.media-amazon.com/images/I/71XfZr5VbRL._AC_UF1000,1000_QL80_.jpg",
    publishedYear: 1952,
    description: "Rashmirathi is a Hindi epic poem by Ramdhari Singh Dinkar which was based on the character of Karna, a tragic hero from the Indian epic Mahabharata.",
    readAvailable: false,
    previewText: "क्षमा शोभती उस भुजंग को जिसके पास गरल हो,\nउसको क्या जो दंतहीन, विषरहित, विनीत, सरल हो!"
  },
  {
    id: 5,
    title: "Aadhe Adhure",
    hindiTitle: "आधे अधूरे",
    author: authors[4],
    genres: [genres[3]],
    coverImage: "https://m.media-amazon.com/images/I/71aHt7OdojL._AC_UF1000,1000_QL80_.jpg",
    publishedYear: 1969,
    description: "Aadhe Adhure is a play by Mohan Rakesh about a middle-class family. It explores the relationships of a middle-aged couple and their three children.",
    readAvailable: true,
    previewText: "सावित्री: कब से? और अब से पहले कहाँ थे?\nअशोक: कहीं नहीं, माँ।"
  },
  {
    id: 6,
    title: "Deep Jale",
    hindiTitle: "दीप जले",
    author: authors[1],
    genres: [genres[2]],
    coverImage: "https://m.media-amazon.com/images/I/71S4K3GTVBL._AC_UF1000,1000_QL80_.jpg",
    publishedYear: 1942,
    description: "Deep Jale is a collection of poems by Mahadevi Verma, one of the most important poets of modern Hindi literature.",
    readAvailable: false,
    previewText: "मैं नीर भरी दुख की बदली, विस्तृत नभ का कोई कोना,\nमेरा न किसी से कोई मोल उड़ा जाऊँ तो हँसता है कोई!"
  },
  {
    id: 7,
    title: "Gaban",
    hindiTitle: "गबन",
    author: authors[0],
    genres: [genres[0]],
    coverImage: "https://m.media-amazon.com/images/I/71aLi42OdWL._AC_UF1000,1000_QL80_.jpg",
    publishedYear: 1931,
    description: "Gaban is a Hindi novel by Munshi Premchand. The story revolves around Ramanath, a young man who marries Jalpa, a beautiful woman who loves jewelry.",
    readAvailable: true,
    previewText: "जालपा ने कहा — अच्छा, मैं जानती हूँ, क्यों नहीं बाजार जाना चाहते? दासी के लिए चूड़ियाँ लानी पड़ेंगी, इसलिए।",
    featured: true
  },
  {
    id: 8,
    title: "Yama",
    hindiTitle: "यामा",
    author: authors[1],
    genres: [genres[2]],
    coverImage: "https://m.media-amazon.com/images/I/61Wa9Jw0VbL._AC_UF1000,1000_QL80_.jpg",
    publishedYear: 1936,
    description: "Yama is a collection of poems by Mahadevi Verma that portrays the depth of human emotions through lyrical expressions.",
    readAvailable: false,
    previewText: "बीन भी हूँ मैं तुम्हारी रागिनी भी हूँ\nप्राण, मैं अनुगामिनी परिणाम की!"
  }
];

export const featuredBooks = books.filter(book => book.featured);

export const getBookById = (id: number): Book | undefined => {
  return books.find(book => book.id === id);
};

export const getBooksByGenre = (genreId: number): Book[] => {
  return books.filter(book => book.genres.some(genre => genre.id === genreId));
};

export const getBooksByAuthor = (authorId: number): Book[] => {
  return books.filter(book => book.author.id === authorId);
};
