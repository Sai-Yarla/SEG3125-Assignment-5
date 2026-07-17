// Music Evolution Dataset — Genre shares (%) and Billboard Hot 100 top songs per decade
const musicData = [
  {
    decade: "1960s",
    genreShares: { Pop: 35, Rock: 45, HipHop: 0, RB: 20 },
    topSongs: [
      { year: 1963, title: "I Want to Hold Your Hand", artist: "The Beatles", genre: "Rock", weeksAtNo1: 7 },
      { year: 1965, title: "(I Can't Get No) Satisfaction", artist: "The Rolling Stones", genre: "Rock", weeksAtNo1: 4 },
      { year: 1966, title: "You Can't Hurry Love", artist: "The Supremes", genre: "RB", weeksAtNo1: 2 },
      { year: 1967, title: "Respect", artist: "Aretha Franklin", genre: "RB", weeksAtNo1: 2 },
      { year: 1969, title: "Sugar, Sugar", artist: "The Archies", genre: "Pop", weeksAtNo1: 4 },
    ],
  },
  {
    decade: "1970s",
    genreShares: { Pop: 30, Rock: 45, HipHop: 0, RB: 20 },
    topSongs: [
      { year: 1971, title: "Joy to the World", artist: "Three Dog Night", genre: "Rock", weeksAtNo1: 6 },
      { year: 1973, title: "Killing Me Softly", artist: "Roberta Flack", genre: "RB", weeksAtNo1: 5 },
      { year: 1975, title: "Love Will Keep Us Together", artist: "Captain & Tennille", genre: "Pop", weeksAtNo1: 4 },
      { year: 1976, title: "Silly Love Songs", artist: "Wings", genre: "Pop", weeksAtNo1: 5 },
      { year: 1977, title: "Best of My Love", artist: "The Emotions", genre: "RB", weeksAtNo1: 5 },
    ],
  },
  {
    decade: "1980s",
    genreShares: { Pop: 30, Rock: 40, HipHop: 5, RB: 15 },
    topSongs: [
      { year: 1982, title: "Physical", artist: "Olivia Newton-John", genre: "Pop", weeksAtNo1: 10 },
      { year: 1983, title: "Every Breath You Take", artist: "The Police", genre: "Rock", weeksAtNo1: 8 },
      { year: 1984, title: "When Doves Cry", artist: "Prince", genre: "Pop", weeksAtNo1: 5 },
      { year: 1986, title: "Walk Like an Egyptian", artist: "The Bangles", genre: "Pop", weeksAtNo1: 4 },
      { year: 1988, title: "Faith", artist: "George Michael", genre: "Pop", weeksAtNo1: 4 },
    ],
  },
  {
    decade: "1990s",
    genreShares: { Pop: 25, Rock: 30, HipHop: 20, RB: 20 },
    topSongs: [
      { year: 1991, title: "Black or White", artist: "Michael Jackson", genre: "Pop", weeksAtNo1: 7 },
      { year: 1992, title: "End of the Road", artist: "Boyz II Men", genre: "RB", weeksAtNo1: 13 },
      { year: 1994, title: "I'll Make Love to You", artist: "Boyz II Men", genre: "RB", weeksAtNo1: 14 },
      { year: 1995, title: "Gangsta's Paradise", artist: "Coolio", genre: "HipHop", weeksAtNo1: 3 },
      { year: 1999, title: "Believe", artist: "Cher", genre: "Pop", weeksAtNo1: 4 },
    ],
  },
  {
    decade: "2000s",
    genreShares: { Pop: 25, Rock: 20, HipHop: 30, RB: 20 },
    topSongs: [
      { year: 2000, title: "Breathe", artist: "Faith Hill", genre: "Pop", weeksAtNo1: 2 },
      { year: 2003, title: "In Da Club", artist: "50 Cent", genre: "HipHop", weeksAtNo1: 9 },
      { year: 2004, title: "Yeah!", artist: "Usher ft. Lil Jon", genre: "HipHop", weeksAtNo1: 12 },
      { year: 2007, title: "Umbrella", artist: "Rihanna ft. Jay-Z", genre: "RB", weeksAtNo1: 7 },
      { year: 2009, title: "Boom Boom Pow", artist: "Black Eyed Peas", genre: "HipHop", weeksAtNo1: 12 },
    ],
  },
  {
    decade: "2010s",
    genreShares: { Pop: 25, Rock: 10, HipHop: 45, RB: 15 },
    topSongs: [
      { year: 2012, title: "Somebody That I Used to Know", artist: "Gotye", genre: "Rock", weeksAtNo1: 8 },
      { year: 2014, title: "Happy", artist: "Pharrell Williams", genre: "Pop", weeksAtNo1: 10 },
      { year: 2015, title: "Uptown Funk!", artist: "Mark Ronson ft. Bruno Mars", genre: "Pop", weeksAtNo1: 14 },
      { year: 2017, title: "Despacito", artist: "Luis Fonsi ft. J. Bieber", genre: "Pop", weeksAtNo1: 16 },
      { year: 2019, title: "Old Town Road", artist: "Lil Nas X", genre: "HipHop", weeksAtNo1: 19 },
    ],
  },
  {
    decade: "2020s",
    genreShares: { Pop: 20, Rock: 8, HipHop: 40, RB: 18 },
    topSongs: [
      { year: 2020, title: "Blinding Lights", artist: "The Weeknd", genre: "RB", weeksAtNo1: 4 },
      { year: 2021, title: "Levitating", artist: "Dua Lipa", genre: "Pop", weeksAtNo1: 5 },
      { year: 2022, title: "As It Was", artist: "Harry Styles", genre: "Pop", weeksAtNo1: 15 },
      { year: 2023, title: "Last Night", artist: "Morgan Wallen", genre: "Rock", weeksAtNo1: 16 },
      { year: 2024, title: "Not Like Us", artist: "Kendrick Lamar", genre: "HipHop", weeksAtNo1: 3 },
    ],
  },
];

// Consistent genre color palette used across all charts and UI elements
export const GENRE_COLORS = {
  Pop: "#E63946",
  Rock: "#457B9D",
  HipHop: "#F4A261",
  RB: "#9B5DE5",
};

export const GENRE_KEYS = ["Pop", "Rock", "HipHop", "RB"];

export default musicData;
