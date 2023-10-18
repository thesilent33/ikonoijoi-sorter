dataSetVersion = "2022-04-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
// dataSetVersion = "2023-10-18"
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
		{ name: "=LOVE", tooltip: "=LOVE members", key: "ikorabu" },
		{ name: "≠ME", tooltip: "≠ME members", key: "noimi" },
		{ name: "≒JOY", tooltip: "≒JOY members", key: "niajoi" }
    ]
  },
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
  
  /*,
	{
		name: "Filter by Single",
		key: "single",
		tooltip: "Select this to restrict to sort Singles.",
		checked: false,
		sub:
		[
			{ name: "1st - 25th Single", key: "singles" }
		]
	},
	{
		name: "Filter by Single (embed BETA)",
		key: "sembed",
		tooltip: "Select this to restric to sort Singles with song samples.",
		checked: false,
		sub:
		[
			{ name: "1st - 25th Single", key: "sembeds" }
		]
	}
	*/
	/*,
  {
    name: "Filter by Year/Single",
    key: "single",
    tooltip: "Check this to restrict to certain singles.",
    checked: false,
    sub: 
		[
      { name: "1st generation", key: "1gen" },
      { name: "2nd generation", key: "2gen" },
      { name: "3rd generation", key: "3gen" },
      { name: "4th generation", key: "4gen" },
    ]
  },
  {
    name: "Filter by Member",
    key: "indivd",
    tooltip: "Check this to restrict to certain members.",
    checked: false,
    sub: [
      { name: "Suzuki Ayane", key: "ayamine" }
    ]
  }*/
];

dataSet[dataSetVersion].characterData = [
  // ≠ME members

  {
    name: "Ogi Hana",
    img: "TckP0X/ogi-hana-thumb.jpg",
    opts: {
      groups: [ "noimi" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Ochiai Kirari",
    img: "sm6cD9J/ochiai-kirari-thumb.jpg",
    opts: {
      groups: [ "noimi" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kanisawa Moeko",
    img: "34cryPQ/kanisawa-moeko-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kawaguchi Natsune",
    img: "PMTzVV6/kawaguchi-natsune-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Kawanago Natsumi",
    img: "hMSstHr/kawanago-natsumi-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Sakurai Momo",
    img: "yXZ4mFQ/sakurai-momo-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Suganami Mirei",
    img: "1q0D216/suganami-mirei-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Suzuki Hitomi",
    img: "9v3Xw20/suzuki-hitomi-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Tanizaki Saya",
    img: "g4JFrf4/tanizaki-saya-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Tomita Nanaka",
    img: "yfGkVZt/tomita-nanaka-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Nagata Shiori",
    img: "vXdYZXS/nagata-shiori-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Honda Miyuki",
    img: "1nThDLQ/honda-miyuki-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },

  // =LOVE members
  
  {
    name: "Otani Emiri",
    img: "6Xpt0wt/otani-emiri.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Oba Hana",
    img: "GxMfx4x/oba-hana.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Otoshima Risa",
    img: "Fq82PLy/otoshima-risa.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Saito Kiara",
    img: "zWg4BRS/saito-kiara-original-2.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Saito Nagisa",
    img: "hW3w6S9/saito-nagisa.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Sasaki Maika",
    img: "SRG6Nwg/sasaki-maika.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Satake Nonno",
    img: "BwdwDZv/satake-nonno-original.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Takamatsu Hitomi",
    img: "BVGHYtY/takamatsu-hitomi.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Takiwaki Shoko",
    img: "JBsVdh0/takiwaki-shoko.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Noguchi Iori",
    img: "vwHYDPP/noguchi-iori.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Morohashi Sana",
    img: "3CvLCkS/morohashi-sana.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamamoto Anna",
    img: "MPmCZnM/yamamoto-anna.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  
  // ≒JOY members
  
  {
    name: "Aida Jurii",
    img: "MM4JjFx/aida-jurii.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  }, 
  {
    name: "Amano Konoa",
    img: "cCjDjnh/amano-konoa.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Ichihara Ayumi",
    img: "Vgv1vB9/ichihara-ayumi.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Esumi Renon",
    img: "3WwswL5/esumi-renon.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Oshida Mitsuki",
    img: "C0PvjBF/oshida-mitsuki.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Onishi Aoi",
    img: "tXV2jZN/onishi-aoi.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Takahashi Mai",
    img: "ZSbjjb5/takahashi-mai.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Fukuyama Moeka",
    img: "Wzxfk00/fukuyama-moeka.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Fujisawa Riko",
    img: "CQPTxPc/fujisawa-riko.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Murayama Yuuka",
    img: "SXSwvHz/murayama-yuuka.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamada Momoka",
    img: "v1RhSWJ/yamada-momoka.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamano Arisu",
    img: "mv7wDSK/yamano-arisu.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
	name: "Ozawa Aimi",
	img: "nsF1T8q/ozawa-aimi.jpg",
	opts: {
	  groups: ["niajoi"],
	  sub_unit: [""], activity_status: ["active"]
	}
  }


];
