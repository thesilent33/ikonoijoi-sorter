dataSetVersion = "2022-04-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
// dataSetVersion = "2024-10-09"
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
    img: "kizuki_nao.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Suzumi Su",
    img: "suzumi_su.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Hashimoto Momoko",
    img: "hashimoto_momoko.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Hazuki Saara",
    img: "hazuki_saara.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Haruno Riri",
    img: "haruno_riri.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Higashiyama Erisa",
    img: "higashiyama_erisa.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Hinahata Hina",
    img: "hinata_hina.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Hoshitani Mikuru",
    img: "hoshitani_mikuru.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Matsumoto Momona",
    img: "matsumoto_momona.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Momiyama Himeri",
    img: "momiyama_himeri.jpg",
    opts: {
      sub_unit: [""], activity_status: ["active"]
    }
  }

];
