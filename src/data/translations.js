// Bilingual translations dictionary — EN / FR
const translations = {
  en: {
    locale: "en-US",

    // Header
    dashboardTitle: "Mainstream Music Evolution",
    dashboardSubtitle: "Billboard Hot 100 · Genre Trends · 1960s – 2020s",
    designerCredit: "Designed by Sai Yarlagadda — 300283438",

    // Intro
    introText:
      "This interactive dashboard explores how mainstream music genres have shifted in cultural dominance over the past six decades. The macro-level line chart tracks genre share trends, while the micro-level bar chart highlights individual Billboard Hot 100 chart-toppers and their weeks at #1.",

    // Chart Titles
    chart1Title: "Genre Share Over the Decades (%)",
    chart2Title: "Top Songs — Peak Weeks at #1",

    // Chart Descriptions (3Cs — Context)
    chart1Desc:
      "Each line represents a genre's estimated share of the Billboard Hot 100 by decade. Use the genre filter buttons above to isolate specific trends and compare how genres rose or declined over time.",
    chart2Desc:
      "Each bar shows a chart-topping song and how many weeks it held the #1 position. Colors indicate genre. Use the decade selector and genre filters to narrow the view.",

    // Axis Labels
    axisDecade: "Decade",
    axisGenreShare: "Genre Share (%)",
    axisWeeksAtNo1: "Weeks at #1",
    axisSong: "Song",

    // Genres
    genreLabels: {
      Pop: "Pop",
      Rock: "Rock",
      HipHop: "Hip-Hop",
      RB: "R&B",
    },

    // Filters
    filterAllDecades: "All Decades",
    filterDecadeLabel: "Decade",
    filterGenreLabel: "Filter by Genre",
    selectAll: "Select All",
    clearSelection: "Clear",

    // Tooltips
    tooltipArtist: "Artist",
    tooltipYear: "Year",
    tooltipGenre: "Genre",
    tooltipWeeks: "Weeks at #1",
    tooltipShare: "Share",

    // Language Toggle
    langToggle: "Français",
    langFlag: "🇫🇷",

    // Stats Cards
    statSongsTracked: "Songs Tracked",
    statDecadesCovered: "Decades Covered",
    statTopGenre: "Top Genre",
    statAvgWeeks: "Avg. Weeks at #1",

    // Footer
    footerDataSource: "Data Source: Synthetic dataset based on Billboard Hot 100 historical trends.",
    footerDisclaimer: "Note: All data presented is synthetic and for educational purposes only.",
    footerDesigner: "SEG3125 — University of Ottawa",
  },

  fr: {
    locale: "fr-FR",

    // Header
    dashboardTitle: "L'Évolution de la Musique Populaire",
    dashboardSubtitle: "Billboard Hot 100 · Tendances des Genres · 1960 – 2020",
    designerCredit: "Conçu par Sai Yarlagadda — 300283438",

    // Intro
    introText:
      "Ce tableau de bord interactif explore comment les genres musicaux populaires ont changé de dominance culturelle au cours des six dernières décennies. Le graphique linéaire macro montre l'évolution des parts de genre, tandis que le graphique à barres micro met en évidence les chansons phares du Billboard Hot 100 et leurs semaines au numéro 1.",

    // Chart Titles
    chart1Title: "Part des Genres par Décennie (%)",
    chart2Title: "Chansons Phares — Semaines au #1",

    // Chart Descriptions (3Cs — Context)
    chart1Desc:
      "Chaque ligne représente la part estimée d'un genre dans le Billboard Hot 100 par décennie. Utilisez les boutons de filtre de genre ci-dessus pour isoler des tendances spécifiques et comparer comment les genres ont évolué au fil du temps.",
    chart2Desc:
      "Chaque barre montre une chanson en tête du classement et le nombre de semaines qu'elle a occupé la position #1. Les couleurs indiquent le genre. Utilisez le sélecteur de décennie et les filtres de genre pour affiner la vue.",

    // Axis Labels
    axisDecade: "Décennie",
    axisGenreShare: "Part du Genre (%)",
    axisWeeksAtNo1: "Semaines au #1",
    axisSong: "Chanson",

    // Genres
    genreLabels: {
      Pop: "Pop",
      Rock: "Rock",
      HipHop: "Hip-Hop",
      RB: "R&B",
    },

    // Filters
    filterAllDecades: "Toutes les Décennies",
    filterDecadeLabel: "Décennie",
    filterGenreLabel: "Filtrer par Genre",
    selectAll: "Tout Sélectionner",
    clearSelection: "Effacer",

    // Tooltips
    tooltipArtist: "Artiste",
    tooltipYear: "Année",
    tooltipGenre: "Genre",
    tooltipWeeks: "Semaines au #1",
    tooltipShare: "Part",

    // Language Toggle
    langToggle: "English",
    langFlag: "🇬🇧",

    // Stats Cards
    statSongsTracked: "Chansons Suivies",
    statDecadesCovered: "Décennies Couvertes",
    statTopGenre: "Genre Principal",
    statAvgWeeks: "Moy. Semaines au #1",

    // Footer
    footerDataSource: "Source des Données : Jeu de données synthétique basé sur les tendances historiques du Billboard Hot 100.",
    footerDisclaimer: "Remarque : Toutes les données présentées sont synthétiques et à des fins éducatives uniquement.",
    footerDesigner: "SEG3125 — Université d'Ottawa",
  },
};

export default translations;
