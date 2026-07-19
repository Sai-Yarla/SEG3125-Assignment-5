// Music Evolution Dataset — Genre shares (%) and Billboard Hot 100 top songs per decade
// DATA SOURCE: Synthetic dataset based on Billboard Hot 100 historical trends.
const musicData = [
  {
    decade: "1960s",
    genreShares: { Pop: 30, Rock: 40, HipHop: 0, RB: 18, Country: 10, Electronic: 2 },
    topSongs: [
      { year: 1963, title: "I Want to Hold Your Hand", artist: "The Beatles", genre: "Rock", weeksAtNo1: 7, totalChartWeeks: 15 },
      { year: 1964, title: "Oh, Pretty Woman", artist: "Roy Orbison", genre: "Rock", weeksAtNo1: 3, totalChartWeeks: 14 },
      { year: 1965, title: "(I Can't Get No) Satisfaction", artist: "The Rolling Stones", genre: "Rock", weeksAtNo1: 4, totalChartWeeks: 14 },
      { year: 1966, title: "You Can't Hurry Love", artist: "The Supremes", genre: "RB", weeksAtNo1: 2, totalChartWeeks: 12 },
      { year: 1967, title: "Respect", artist: "Aretha Franklin", genre: "RB", weeksAtNo1: 2, totalChartWeeks: 12 },
      { year: 1968, title: "Hey Jude", artist: "The Beatles", genre: "Rock", weeksAtNo1: 9, totalChartWeeks: 19 },
      { year: 1968, title: "People Got to Be Free", artist: "The Rascals", genre: "Pop", weeksAtNo1: 5, totalChartWeeks: 13 },
      { year: 1969, title: "Sugar, Sugar", artist: "The Archies", genre: "Pop", weeksAtNo1: 4, totalChartWeeks: 16 },
    ],
  },
  {
    decade: "1970s",
    genreShares: { Pop: 25, Rock: 38, HipHop: 0, RB: 20, Country: 12, Electronic: 5 },
    topSongs: [
      { year: 1971, title: "Joy to the World", artist: "Three Dog Night", genre: "Rock", weeksAtNo1: 6, totalChartWeeks: 15 },
      { year: 1972, title: "The First Time I Saw Your Face", artist: "Roberta Flack", genre: "RB", weeksAtNo1: 6, totalChartWeeks: 14 },
      { year: 1973, title: "Killing Me Softly", artist: "Roberta Flack", genre: "RB", weeksAtNo1: 5, totalChartWeeks: 16 },
      { year: 1975, title: "Love Will Keep Us Together", artist: "Captain & Tennille", genre: "Pop", weeksAtNo1: 4, totalChartWeeks: 18 },
      { year: 1975, title: "Rhinestone Cowboy", artist: "Glen Campbell", genre: "Country", weeksAtNo1: 2, totalChartWeeks: 13 },
      { year: 1976, title: "Silly Love Songs", artist: "Wings", genre: "Pop", weeksAtNo1: 5, totalChartWeeks: 17 },
      { year: 1977, title: "Best of My Love", artist: "The Emotions", genre: "RB", weeksAtNo1: 5, totalChartWeeks: 14 },
      { year: 1978, title: "I Feel Love", artist: "Donna Summer", genre: "Electronic", weeksAtNo1: 1, totalChartWeeks: 11 },
    ],
  },
  {
    decade: "1980s",
    genreShares: { Pop: 28, Rock: 32, HipHop: 5, RB: 15, Country: 10, Electronic: 10 },
    topSongs: [
      { year: 1981, title: "Bette Davis Eyes", artist: "Kim Carnes", genre: "Pop", weeksAtNo1: 9, totalChartWeeks: 20 },
      { year: 1982, title: "Physical", artist: "Olivia Newton-John", genre: "Pop", weeksAtNo1: 10, totalChartWeeks: 20 },
      { year: 1983, title: "Every Breath You Take", artist: "The Police", genre: "Rock", weeksAtNo1: 8, totalChartWeeks: 22 },
      { year: 1983, title: "Blue Eyes Crying in the Rain", artist: "Willie Nelson", genre: "Country", weeksAtNo1: 2, totalChartWeeks: 12 },
      { year: 1984, title: "When Doves Cry", artist: "Prince", genre: "Pop", weeksAtNo1: 5, totalChartWeeks: 18 },
      { year: 1984, title: "Blue Monday", artist: "New Order", genre: "Electronic", weeksAtNo1: 1, totalChartWeeks: 10 },
      { year: 1986, title: "Walk Like an Egyptian", artist: "The Bangles", genre: "Pop", weeksAtNo1: 4, totalChartWeeks: 15 },
      { year: 1988, title: "Faith", artist: "George Michael", genre: "Pop", weeksAtNo1: 4, totalChartWeeks: 16 },
    ],
  },
  {
    decade: "1990s",
    genreShares: { Pop: 22, Rock: 25, HipHop: 20, RB: 18, Country: 10, Electronic: 5 },
    topSongs: [
      { year: 1991, title: "Black or White", artist: "Michael Jackson", genre: "Pop", weeksAtNo1: 7, totalChartWeeks: 19 },
      { year: 1992, title: "End of the Road", artist: "Boyz II Men", genre: "RB", weeksAtNo1: 13, totalChartWeeks: 22 },
      { year: 1992, title: "Achy Breaky Heart", artist: "Billy Ray Cyrus", genre: "Country", weeksAtNo1: 5, totalChartWeeks: 17 },
      { year: 1994, title: "I'll Make Love to You", artist: "Boyz II Men", genre: "RB", weeksAtNo1: 14, totalChartWeeks: 23 },
      { year: 1995, title: "Gangsta's Paradise", artist: "Coolio", genre: "HipHop", weeksAtNo1: 3, totalChartWeeks: 16 },
      { year: 1997, title: "Candle in the Wind 1997", artist: "Elton John", genre: "Pop", weeksAtNo1: 14, totalChartWeeks: 14 },
      { year: 1997, title: "Around the World", artist: "Daft Punk", genre: "Electronic", weeksAtNo1: 1, totalChartWeeks: 9 },
      { year: 1999, title: "Believe", artist: "Cher", genre: "Pop", weeksAtNo1: 4, totalChartWeeks: 22 },
    ],
  },
  {
    decade: "2000s",
    genreShares: { Pop: 22, Rock: 15, HipHop: 28, RB: 18, Country: 10, Electronic: 7 },
    topSongs: [
      { year: 2000, title: "Breathe", artist: "Faith Hill", genre: "Country", weeksAtNo1: 2, totalChartWeeks: 14 },
      { year: 2002, title: "Lose Yourself", artist: "Eminem", genre: "HipHop", weeksAtNo1: 12, totalChartWeeks: 23 },
      { year: 2003, title: "In Da Club", artist: "50 Cent", genre: "HipHop", weeksAtNo1: 9, totalChartWeeks: 22 },
      { year: 2004, title: "Yeah!", artist: "Usher ft. Lil Jon", genre: "HipHop", weeksAtNo1: 12, totalChartWeeks: 28 },
      { year: 2005, title: "We Belong Together", artist: "Mariah Carey", genre: "RB", weeksAtNo1: 14, totalChartWeeks: 25 },
      { year: 2007, title: "Umbrella", artist: "Rihanna ft. Jay-Z", genre: "RB", weeksAtNo1: 7, totalChartWeeks: 26 },
      { year: 2008, title: "Before He Cheats", artist: "Carrie Underwood", genre: "Country", weeksAtNo1: 5, totalChartWeeks: 64 },
      { year: 2009, title: "Boom Boom Pow", artist: "Black Eyed Peas", genre: "Electronic", weeksAtNo1: 12, totalChartWeeks: 24 },
    ],
  },
  {
    decade: "2010s",
    genreShares: { Pop: 22, Rock: 8, HipHop: 35, RB: 12, Country: 8, Electronic: 15 },
    topSongs: [
      { year: 2012, title: "Somebody That I Used to Know", artist: "Gotye", genre: "Rock", weeksAtNo1: 8, totalChartWeeks: 40 },
      { year: 2013, title: "Get Lucky", artist: "Daft Punk ft. P. Williams", genre: "Electronic", weeksAtNo1: 2, totalChartWeeks: 32 },
      { year: 2014, title: "Happy", artist: "Pharrell Williams", genre: "Pop", weeksAtNo1: 10, totalChartWeeks: 52 },
      { year: 2014, title: "Cruise", artist: "Florida Georgia Line", genre: "Country", weeksAtNo1: 4, totalChartWeeks: 56 },
      { year: 2015, title: "Uptown Funk!", artist: "Mark Ronson ft. B. Mars", genre: "Pop", weeksAtNo1: 14, totalChartWeeks: 47 },
      { year: 2017, title: "Despacito", artist: "Luis Fonsi ft. J. Bieber", genre: "Pop", weeksAtNo1: 16, totalChartWeeks: 44 },
      { year: 2018, title: "God's Plan", artist: "Drake", genre: "HipHop", weeksAtNo1: 11, totalChartWeeks: 38 },
      { year: 2019, title: "Old Town Road", artist: "Lil Nas X", genre: "HipHop", weeksAtNo1: 19, totalChartWeeks: 34 },
    ],
  },
  {
    decade: "2020s",
    genreShares: { Pop: 18, Rock: 7, HipHop: 32, RB: 15, Country: 10, Electronic: 18 },
    topSongs: [
      { year: 2020, title: "Blinding Lights", artist: "The Weeknd", genre: "RB", weeksAtNo1: 4, totalChartWeeks: 90 },
      { year: 2020, title: "Rockstar", artist: "DaBaby ft. Roddy Ricch", genre: "HipHop", weeksAtNo1: 7, totalChartWeeks: 34 },
      { year: 2021, title: "Levitating", artist: "Dua Lipa", genre: "Pop", weeksAtNo1: 5, totalChartWeeks: 48 },
      { year: 2022, title: "As It Was", artist: "Harry Styles", genre: "Pop", weeksAtNo1: 15, totalChartWeeks: 50 },
      { year: 2023, title: "Last Night", artist: "Morgan Wallen", genre: "Country", weeksAtNo1: 16, totalChartWeeks: 46 },
      { year: 2023, title: "Flowers", artist: "Miley Cyrus", genre: "Pop", weeksAtNo1: 8, totalChartWeeks: 40 },
      { year: 2024, title: "Not Like Us", artist: "Kendrick Lamar", genre: "HipHop", weeksAtNo1: 3, totalChartWeeks: 28 },
      { year: 2024, title: "Espresso", artist: "Sabrina Carpenter", genre: "Pop", weeksAtNo1: 1, totalChartWeeks: 32 },
    ],
  },
];

// Consistent genre color palette used across all charts and UI elements
export const GENRE_COLORS = {
  Pop: "#D02020",
  Rock: "#1040C0",
  HipHop: "#F0C020",
  RB: "#8A2BE2",
  Country: "#00A86B",
  Electronic: "#FF6B6B",
};

export const GENRE_KEYS = ["Pop", "Rock", "HipHop", "RB", "Country", "Electronic"];

export default musicData;
