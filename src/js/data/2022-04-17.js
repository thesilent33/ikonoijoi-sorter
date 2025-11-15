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
		{ name: "≒JOY", tooltip: "≒JOY members", key: "niajoy" }
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
    img: "otani_emiri.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Oba Hana",
    img: "oba_hana.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Otoshima Risa",
    img: "otoshima_risa.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Saito Kiara",
    img: "saito_kiara.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Saito Nagisa",
    img: "saito_nagisa.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Sasaki Maika",
    img: "sasaki_maika.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Satake Nonno",
    img: "satake_nonno.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Takamatsu Hitomi",
    img: "takamatsu_hitomi.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Takiwaki Shoko",
    img: "takiwaki_shoko.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Noguchi Iori",
    img: "noguchi_iori.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Morohashi Sana",
    img: "morohashi_sana.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamamoto Anna",
    img: "yamamoto_anna.jpg",
    opts: {
      groups: ["ikorabu"],
      sub_unit: [""], activity_status: ["active"]
    }
  },


  // ≠ME members

  {
    name: "Ogi Hana",
    img: "ogi_hana_thumb.jpg",
    opts: {
      groups: [ "noimi" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Ochiai Kirari",
    img: "ochiai_kirari_thumb.jpg",
    opts: {
      groups: [ "noimi" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kanisawa Moeko",
    img: "kanisawa_moeko_thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kawaguchi Natsune",
    img: "kawaguchi_natsune_thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Kawanago Natsumi",
    img: "kawanago_natsumi_thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Sakurai Momo",
    img: "sakurai_momo_thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Suganami Mirei",
    img: "suganami_mirei_thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: ["", ""], activity_status: ["active"]
    }
  },
  {
    name: "Suzuki Hitomi",
    img: "suzuki_hitomi_thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Tanizaki Saya",
    img: "tanizaki_saya_thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Tomita Nanaka",
    img: "tomita_nanaka_thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Nagata Shiori",
    img: "nagata_shiori_thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Honda Miyuki",
    img: "honda_miyuki_thumb.jpg",
    opts: {
      groups: ["noimi"],
      sub_unit: [""], activity_status: ["active"]
    }
  },

  
  
  // ≒JOY members
  
  {
    name: "Aida Jurii",
    img: "aida_jurii.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  }, 
  {
    name: "Amano Konoa",
    img: "amano_konoa.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Ichihara Ayumi",
    img: "ichihara_ayumi.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Esumi Renon",
    img: "esumi_renon.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Oshida Mitsuki",
    img: "oshida_mitsuki.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Onishi Aoi",
    img: "onishi_aoi.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Takahashi Mai",
    img: "takahashi_mai.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Fukuyama Moeka",
    img: "fukuyama_moeka.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["graduated"]
    }
  },
  {
    name: "Fujisawa Riko",
    img: "fujisawa_riko.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Murayama Yuuka",
    img: "murayama_yuuka.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamada Momoka",
    img: "yamada_momoka.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Yamano Arisu",
    img: "yamano_arisu.jpg",
    opts: {
      groups: ["niajoy"],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
	name: "Ozawa Aimi",
	img: "ozawa_aimi.jpg",
	opts: {
	  groups: ["niajoy"],
	  sub_unit: [""], activity_status: ["active"]
	}
  }


];
