dataSetVersion = "2022-04-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
// dataSetVersion = "2024-10-04"
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  /* {
    name: "Filter by Group",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
		{ name: "=LOVE", tooltip: "=LOVE members", key: "takaneko" },
		{ name: "≠ME", tooltip: "≠ME members", key: "noimi" },
		{ name: "≒JOY", tooltip: "≒JOY members", key: "niajoi" }
    ]
  }, */
  {
    name: "Filter Activity Status",
    key: "activity_status",
    tooltip: "Check this to restrict members by activity status.",
    checked: true,
    sub: [
		{ name: "Active Member", tooltip: "Member who currently active as member", key: "active", tooltip: "Only currently active members", checked: true },
		{ name: "Graduated", tooltip: "Member who already graduated", key: "graduated", tooltip: "Graduated member(s)", checked: false }
    ]
  }

];

dataSet[dataSetVersion].characterData = [
  // Member name
  
  {
    name: "Kizuki Nao",
    img: "3.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Suzumi Su",
    img: "3.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  }
  
  
  /* ,
  {
    name: "Hashimoto Momoko",
    img: "xG53zkT/otoshima-risa.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Hazuki Saara",
    img: "V9KF7pm/saito-kiara.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Haruno Riri",
    img: "hW3w6S9/saito-nagisa.jpg",
    opts: {
      sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Higashiyama Erisa",
    img: "KbnGPZf/sasaki-maika.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Hinahata Hina",
    img: "BwdwDZv/satake-nonno-original.jpg",
    opts: {
      sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Hoshitani Mikuru",
    img: "4sxV7jS/takamatsu-hitomi.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Matsumoto Momona",
    img: "sVSLTmW/takiwaki-shoko.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Momiyama Himeri",
    img: "nnQpHJs/noguchi-iori.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  }
 */
];
