dataSetVersion = "2022-04-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
// dataSetVersion = "2024-10-04"
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
  // =LOVE members
  
  {
    name: "Otani Emiri",
    img: "ncskxFG/otani-emiri.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Oba Hana",
    img: "T1Xc9xt/oba-hana.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Otoshima Risa",
    img: "xG53zkT/otoshima-risa.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Saito Kiara",
    img: "V9KF7pm/saito-kiara.jpg",
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
    img: "KbnGPZf/sasaki-maika.jpg",
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
    img: "4sxV7jS/takamatsu-hitomi.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Takiwaki Shoko",
    img: "sVSLTmW/takiwaki-shoko.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Noguchi Iori",
    img: "nnQpHJs/noguchi-iori.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Morohashi Sana",
    img: "LnYBmzj/morohashi-sana.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamamoto Anna",
    img: "F6ydSY2/yamamoto-anna.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },


  // ≠ME members

  {
    name: "Ogi Hana",
    img: "frGTMpj/ogi-hana-thumb.jpg",
    opts: {
      groups: [ "noimi" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Ochiai Kirari",
    img: "ynsW6n5/ochiai-kirari-thumb.jpg",
    opts: {
      groups: [ "noimi" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kanisawa Moeko",
    img: "j63XWq7/kanisawa-moeko-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kawaguchi Natsune",
    img: "WDwS8h4/kawaguchi-natsune-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Kawanago Natsumi",
    img: "f21qQhB/kawanago-natsumi-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Sakurai Momo",
    img: "2kWhJqM/sakurai-momo-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Suganami Mirei",
    img: "b7r2kc9/suganami-mirei-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Suzuki Hitomi",
    img: "fXhvTXQ/suzuki-hitomi-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Tanizaki Saya",
    img: "hZqphRv/tanizaki-saya-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Tomita Nanaka",
    img: "TY20bQD/tomita-nanaka-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Nagata Shiori",
    img: "26DsQjV/nagata-shiori-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Honda Miyuki",
    img: "9NZz8Cv/honda-miyuki-thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },

  
  
  // ≒JOY members
  
  {
    name: "Aida Jurii",
    img: "YysfhQS/aida-jurii.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  }, 
  {
    name: "Amano Konoa",
    img: "n1zFtCB/amano-konoa.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Ichihara Ayumi",
    img: "hdSmRLv/ichihara-ayumi.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Esumi Renon",
    img: "nrvFbWD/esumi-renon.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Oshida Mitsuki",
    img: "qjShRG6/oshida-mitsuki.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Onishi Aoi",
    img: "dMpJyrD/onishi-aoi.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Takahashi Mai",
    img: "rQ23xHt/takahashi-mai.jpg",
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
    img: "svyJ0nB/fujisawa-riko.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Murayama Yuuka",
    img: "MSxqSD3/murayama-yuuka.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamada Momoka",
    img: "DGyGNqx/yamada-momoka.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamano Arisu",
    img: "cg9gdgb/yamano-arisu.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
	name: "Ozawa Aimi",
	img: "82gHwfr/ozawa-aimi.jpg",
	opts: {
	  groups: ["niajoi"],
	  sub_unit: [""], activity_status: ["active"]
	}
  }


];
