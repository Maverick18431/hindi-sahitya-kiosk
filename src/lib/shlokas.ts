
export interface Shloka {
  id: number;
  sanskrit: string[];
  meaning: string;
  author?: string;
  source?: string;
}

export const shlokas: Shloka[] = [
  {
    id: 1,
    sanskrit: [
      "दैवस्य पथि चरतः, नृपाः सम्पूर्णमस्ति यः,",
      "किन्तु रामस्य साहस्य, स्वयंवरं पश्यति सदा?"
    ],
    meaning: "जो राजा देव के मार्ग पर चलता है वह संपूर्ण होता है, लेकिन राम के साहस का स्वयंवर हमेशा देखा जाता है। यह श्लोक राम के अद्वितीय साहस और धैर्य को दर्शाता है, जो देवताओं द्वारा भी प्रशंसित है।",
    source: "रामायण से प्रेरित"
  },
  {
    id: 2,
    sanskrit: [
      "न च प्राणसंज्ञो न वै पञ्चवायुः।",
      "न वा सप्तधातुः न वा पञ्चकोशः॥",
      "न वाक्पाणिपादं न चोपस्थपायुः।",
      "चिदानन्दरूपः शिवोऽहम् शिवोऽहम्॥"
    ],
    meaning: "मैं न प्राण हूँ, न पंच वायु (प्राण, अपान, व्यान, उदान, समान) हूँ। मैं न सप्त धातु (रस, रक्त, मांस, मेद, अस्थि, मज्जा, शुक्र), न पंचकोश (अन्नमय, प्राणमय, मनोमय, विज्ञानमय, आनंदमय) हूँ। मैं न वाणी, न हाथ-पैर, न उत्सर्जन अंग हूँ। मैं चैतन्य और आनंद स्वरूप हूँ - मैं शिव हूँ, मैं शिव हूँ।",
    author: "आदि शंकराचार्य",
    source: "निर्वाण षटकम्"
  },
  {
    id: 3,
    sanskrit: [
      "न मे द्वेषरागौ न मे लोभमोहौ।",
      "मदो नैव मे नैव मात्सर्यभावः॥",
      "न धर्मो न चार्थो न कामो न मोक्षः।",
      "चिदानन्दरूपः शिवोऽहम् शिवोऽहम्॥"
    ],
    meaning: "मुझमें न द्वेष है न राग, न लोभ है न मोह। मुझमें न अहंकार है, न ईर्ष्या का भाव है। मेरे लिए न धर्म है, न अर्थ, न काम और न मोक्ष है। मैं चैतन्य और आनंद स्वरूप हूँ - मैं शिव हूँ, मैं शिव हूँ।",
    author: "आदि शंकराचार्य",
    source: "निर्वाण षटकम्"
  },
  {
    id: 4,
    sanskrit: [
      "अधरं मधुरं वदनं मधुरं नयनं मधुरं हसितं मधुरम्",
      "वचनं मधुरं चरितं मधुरं वसनं मधुरं वलितं मधुरम्",
      "चलितं मधुरं भ्रमितं मधुरं मधुराधिपतेरखिलं मधुरम्",
      "नृत्यं मधुरं सख्यं मधुरं मधुराधिपतेरखिलं मधुरम्"
    ],
    meaning: "श्री कृष्ण के होंठ मधुर हैं, मुख मधुर है, नेत्र मधुर हैं, और मुस्कान मधुर है। उनके वचन मधुर हैं, चरित्र मधुर है, वस्त्र मधुर हैं, और उनकी चाल मधुर है। उनका चलना मधुर है, भ्रमण मधुर है - मधुरता के स्वामी का सब कुछ मधुर है। उनका नृत्य मधुर है, मित्रता मधुर है - मधुरता के स्वामी का सब कुछ मधुर है।",
    author: "श्री वल्लभाचार्य",
    source: "मधुराष्टकम्"
  }
];
