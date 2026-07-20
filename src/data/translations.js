// Bilingual translations dictionary — EN / FR
const translations = {
  en: {
    locale: "en-US",

    // Header
    dashboardTitle: "Mainstream Music Evolution",
    dashboardSubtitle: "Billboard Hot 100 · Genre Trends · 1960s – 2020s",
    designerCredit: "Sai Yarlagadda — 300283438",

    // Intro
    introText:
      "This interactive dashboard explores how mainstream music genres have shifted in cultural dominance over the past six decades. Use the controls below to filter, sort, and compare genre trends and chart-topping songs from the Billboard Hot 100.",

    // Chart Titles
    chart1Title: "Genre Share Over the Decades (%)",
    chart2Title: "Top Songs — Peak Weeks at #1",

    // Chart Descriptions (3Cs — Context)
    chart1Desc:
      "Each line represents a genre's estimated share of the Billboard Hot 100 by decade. Toggle between Line, Area, and Stacked views.",
    chart2Desc:
      "Horizontal bars show chart-topping songs ranked by weeks at #1. Sort and filter to explore the data.",

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
      Country: "Country",
      Electronic: "Electronic",
    },

    // Decade Labels (localized)
    decadeLabels: {
      "1960s": "1960s",
      "1970s": "1970s",
      "1980s": "1980s",
      "1990s": "1990s",
      "2000s": "2000s",
      "2010s": "2010s",
      "2020s": "2020s",
    },

    // Filters
    filterAllDecades: "All",
    filterDecadeLabel: "Decade",
    filterGenreLabel: "Genres",
    selectAll: "Select All",
    clearSelection: "Clear",

    // Sort options (Chart 2)
    sortByWeeks: "Weeks at #1",
    sortByChartWeeks: "Chart Weeks",
    sortByYear: "By Year",
    sortByName: "A → Z",
    sortLabel: "Sort",

    // Top-N filter (Chart 2)
    topN5: "Top 5",
    topN10: "Top 10",
    topNAll: "All",
    showLabel: "Show",

    // Chart 1 view toggle
    viewLine: "Line",
    viewArea: "Area",
    viewStacked: "Stacked",
    showValues: "Values",

    // Annotations (Chart 1)
    annotationHipHop: "Rise of Hip-Hop",
    annotationStreaming: "Streaming Era",

    // Empty state
    noDataMessage: "No songs match the current filters.",

    // Tooltips
    tooltipArtist: "Artist",
    tooltipYear: "Year",
    tooltipGenre: "Genre",
    tooltipWeeks: "Weeks at #1",
    tooltipChartWeeks: "Total Chart Weeks",
    tooltipShare: "Share",

    // Language Toggle
    langToggle: "Français",
    langFlag: "🇫🇷",

    // Stats Cards
    statSongsTracked: "Songs Tracked",
    statSongsTrackedSingular: "Song Tracked",
    statDecadesCovered: "Decades Covered",
    statDecadesCoveredSingular: "Decade Covered",
    statTopGenre: "Top Genre",
    statAvgWeeks: "Avg. Weeks at #1",

    // Key Insights
    insightLongestNo1: "{song} by {artist} held #1 for {weeks} weeks — the longest in this view.",
    insightGenreGrowth: "{genre} grew from {from}% to {to}% between the {startDecade} and {endDecade}.",
    insightMostPersistent: "{genre} appears in every decade, making it the most persistent genre.",
    insightTitle: "Key Insights",

    // Filter Summary
    filterSummaryShowing: "Showing",
    filterSummaryAllGenres: "All Genres",
    filterSummaryAllDecades: "All Decades",
    resetAll: "Reset All",

    // Footer
    footerDataSource: "Data Source: Synthetic dataset based on Billboard Hot 100 historical trends.",
    footerDisclaimer: "Note: All data presented is synthetic and for educational purposes only.",
    footerDesigner: "Designed by Sai Yarlagadda — 300283438",
  },

  fr: {
    locale: "fr-FR",

    // Header
    dashboardTitle: "L'Évolution de la Musique Populaire",
    dashboardSubtitle: "Billboard Hot 100 · Tendances des Genres · 1960 – 2020",
    designerCredit: "Sai Yarlagadda — 300283438",

    // Intro
    introText:
      "Ce tableau de bord interactif explore comment les genres musicaux populaires ont changé de dominance culturelle au cours des six dernières décennies. Utilisez les contrôles ci-dessous pour filtrer, trier et comparer les tendances de genre et les chansons phares du Billboard Hot 100.",

    // Chart Titles
    chart1Title: "Part des Genres par Décennie (%)",
    chart2Title: "Chansons Phares — Semaines au #1",

    // Chart Descriptions (3Cs — Context)
    chart1Desc:
      "Chaque ligne représente la part estimée d'un genre dans le Billboard Hot 100 par décennie. Basculez entre les vues Ligne, Aire et Empilée.",
    chart2Desc:
      "Les barres horizontales montrent les chansons classées par semaines au #1. Triez et filtrez pour explorer les données.",

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
      Country: "Country",
      Electronic: "Électronique",
    },

    // Decade Labels (localized)
    decadeLabels: {
      "1960s": "Années 60",
      "1970s": "Années 70",
      "1980s": "Années 80",
      "1990s": "Années 90",
      "2000s": "Années 2000",
      "2010s": "Années 2010",
      "2020s": "Années 2020",
    },

    // Filters
    filterAllDecades: "Toutes",
    filterDecadeLabel: "Décennie",
    filterGenreLabel: "Genres",
    selectAll: "Tout Sélectionner",
    clearSelection: "Effacer",

    // Sort options (Chart 2)
    sortByWeeks: "Semaines au #1",
    sortByChartWeeks: "Sem. au Classement",
    sortByYear: "Par Année",
    sortByName: "A → Z",
    sortLabel: "Trier",

    // Top-N filter (Chart 2)
    topN5: "Top 5",
    topN10: "Top 10",
    topNAll: "Tous",
    showLabel: "Afficher",

    // Chart 1 view toggle
    viewLine: "Ligne",
    viewArea: "Aire",
    viewStacked: "Empilée",
    showValues: "Valeurs",

    // Annotations (Chart 1)
    annotationHipHop: "Essor du Hip-Hop",
    annotationStreaming: "Ère du Streaming",

    // Empty state
    noDataMessage: "Aucune chanson ne correspond aux filtres actuels.",

    // Tooltips
    tooltipArtist: "Artiste",
    tooltipYear: "Année",
    tooltipGenre: "Genre",
    tooltipWeeks: "Semaines au #1",
    tooltipChartWeeks: "Semaines au Classement",
    tooltipShare: "Part",

    // Language Toggle
    langToggle: "English",
    langFlag: "🇬🇧",

    // Stats Cards
    statSongsTracked: "Chansons Suivies",
    statSongsTrackedSingular: "Chanson Suivie",
    statDecadesCovered: "Décennies Couvertes",
    statDecadesCoveredSingular: "Décennie Couverte",
    statTopGenre: "Genre Principal",
    statAvgWeeks: "Moy. Semaines au #1",

    // Key Insights
    insightLongestNo1: "{song} par {artist} est resté #1 pendant {weeks} semaines — le plus long dans cette vue.",
    insightGenreGrowth: "{genre} est passé de {from}% à {to}% entre les {startDecade} et {endDecade}.",
    insightMostPersistent: "{genre} apparaît dans chaque décennie, ce qui en fait le genre le plus persistant.",
    insightTitle: "Points Clés",

    // Filter Summary
    filterSummaryShowing: "Affichage",
    filterSummaryAllGenres: "Tous les Genres",
    filterSummaryAllDecades: "Toutes les Décennies",
    resetAll: "Réinitialiser",

    // Footer
    footerDataSource: "Source des Données : Jeu de données synthétique basé sur les tendances historiques du Billboard Hot 100.",
    footerDisclaimer: "Remarque : Toutes les données présentées sont synthétiques et à des fins éducatives uniquement.",
    footerDesigner: "Conçu par Sai Yarlagadda — 300283438",
  },
};

export default translations;
