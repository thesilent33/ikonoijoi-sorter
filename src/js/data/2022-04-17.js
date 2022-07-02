dataSetVersion = "2021-04-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
// dataSetVersion = "2022-07-02"
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
    img: "0Vh63bX/ogi-hana.jpg",
    opts: {
      groups: [ "noimi" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Ochiai Kirari",
    img: "NLjV49Z/ochiai-kirari.jpg",
    opts: {
      groups: [ "noimi" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kanisawa Moeko",
    img: "WK8MXn9/kanisawa-moeko.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kawaguchi Natsune",
    img: "qj9gbZx/kawaguchi-natsune.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Kawanago Natsumi",
    img: "TvfNhkb/kawanago-natsumi.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Sakurai Momo",
    img: "q584Jrz/sakurai-momo.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Suganami Mirei",
    img: "w0wFx43/suganami-mirei.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Suzuki Hitomi",
    img: "51sms39/suzuki-hitomi.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Tanizaki Saya",
    img: "K6XVvQR/tanizaki-saya.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Tomita Nanaka",
    img: "rtyTmcg/tomita-nanaka.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Nagata Shiori",
    img: "3C6n6v7/nagata-shiori.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Honda Miyuki",
    img: "rxkPLXq/honda-miyuki.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },

  // =LOVE members
  
  {
    name: "Otani Emiri",
    img: "QbdF1Yk/otani-emiri-original-1.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Oba Hana",
    img: "vV4jRN2/oba-hana-original-1.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Otoshima Risa",
    img: "H7448QC/otoshima-risa-original-1.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Saito Kiara",
    img: "zbNpVhr/saito-kiara-original-2.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Saito Nagisa",
    img: "hW3w6S9/saito-nagisa-original-1.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Sasaki Maika",
    img: "68kPv39/sasaki-maika-original-1.jpg",
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
    img: "1rmxqXt/takamatsu-hitomi-original-1.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Takiwaki Shoko",
    img: "mt4bcvq/takiwaki-shoko-original-1.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Noguchi Iori",
    img: "k4zXqnD/noguchi-iori-original-1.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Morohashi Sana",
    img: "bKNLh81/morohashi-sana-original-1.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamamoto Anna",
    img: "F3fryTq/yamamoto-anna-original-1.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  
  // ≒JOY members
  
  {
    name: "Aida Jurii",
    img: "pJnBkJq/1-20220219-C1-0841-1.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Amano Konoa",
    img: "QvyZZr6/2-20220219-C1-1261-1.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Ichihara Ayumi",
    img: "JcptFn8/3-20220212-A1-1386-1.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Esumi Renon",
    img: "ZdJd2jM/4-20220212-A1-0456-1.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Oshida Mitsuki",
    img: "0FFmtGs/5-20220219-C1-0544-1.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Onishi Aoi",
    img: "cwqtV0q/6-20220219-C1-0586-1.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Takahashi Mai",
    img: "jWT2Xzh/7-20220212-A1-0484-1.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Fukuyama Moeka",
    img: "wW41K0X/8-20220219-C1-1012-1.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Fujisawa Riko",
    img: "dp2F3VZ/9-20220212-A1-0067-1.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Murayama Yuuka",
    img: "XYw8JXn/10-20220212-A1-0790-re-1.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamada Momoka",
    img: "NKt6pDZ/11-20220219-C1-0015-1.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamano Arisu",
    img: "vjyH2sq/12-20220307-KS-A1-2042-1.jpg",
    opts: {
      groups: ["niajoi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
	name: "Ozawa Aimi",
	img: "hD79kLb/Remini20220702152923127.jpg",
	opts: {
	  groups: ["niajoi"],
	  sub_unit: [""], activity_status: ["active"]
	}
  }


];
