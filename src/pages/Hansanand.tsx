
import React from 'react';
import Timeline from '../components/Timeline/Timeline';
import { LanguageProvider } from '../contexts/LanguageContext';

const Hansanand = () => {
  const timelineEvents = [
    {
      year: "14 जून 1982",
      yearEn: "14 June 1982",
      title: "जन्म और प्रारंभिक जीवन",
      titleEn: "Birth and Early Life",
      description: "महाराज जी का जन्म इंदौर, मध्यप्रदेश में हुआ। छह महीने बाद उनका परिवार दिल्ली चला गया, जहां उन्होंने अपना अधिकांश जीवन व्यतीत किया। बाल्यकाल से ही उन्होंने दो संकल्प लिए - खूब पढ़ाई करना और कभी विवाह न करना।",
      descriptionEn: "Maharaj ji was born in Indore, Madhya Pradesh. After six months, his family moved to Delhi, where he spent most of his life. From childhood itself, he made two resolutions - to study extensively and never to marry.",
      isActive: true,
      backgroundImage: "/lovable-uploads/3a9be7c0-f13c-40cc-b97d-8b2cda3bc3d3.png"
    },
    {
      year: "1998 (16 वर्ष की आयु)",
      yearEn: "1998 (Age 16)",
      title: "आध्यात्मिक जागृति",
      titleEn: "Spiritual Awakening",
      description: "16 वर्ष की अल्प आयु से ही उन्होंने आध्यात्मिक साधनाओं और पुस्तकों का अध्ययन शुरू किया। बचपन से ही अध्यात्म के प्रति गहरी रुचि थी, जो विभिन्न देवी-देवताओं के चित्र बनाने और आध्यात्मिक कविताएँ लिखने में परिलक्षित होती थी।",
      descriptionEn: "From the tender age of 16, he began studying spiritual practices and books. He had a deep interest in spirituality since childhood, which was reflected in drawing pictures of various deities and writing spiritual poetry.",
      isActive: false,
      backgroundImage: "/lovable-uploads/63d4ad27-e4c9-4979-b2bd-c0f83f4fc7b7.png"
    },
    {
      year: "2004",
      title: "शिक्षा पूर्णता और व्यवसायिक जीवन",
      titleEn: "Education Completion and Professional Life",
      description: "दिल्ली में बी. टेक. की पढ़ाई पूरी करने के बाद, उन्होंने एक प्रतिष्ठित कंपनी में साढ़े चार वर्ष तक कार्य किया। इस दौरान भी सत्य की खोज में वे विभिन्न धार्मिक सम्प्रदायों, संस्थाओं और साधकों से संपर्क करते रहे।",
      descriptionEn: "After completing his B.Tech studies in Delhi, he worked in a prestigious company for four and a half years. Even during this period, in his search for truth, he continued to connect with various religious sects, institutions, and spiritual seekers.",
      isActive: false,
      backgroundImage: "/lovable-uploads/e51f14d9-2a5b-4896-b6e5-2e76d06ffa83.png"
    },
    {
      year: "2010",
      title: "संन्यास ग्रहण",
      titleEn: "Embracing Renunciation",
      description: "अपने अभी तक के अनुत्तरित आध्यात्मिक प्रश्नों और साधनाओं के समुचित समाधान के लिए सन् 2010 में उन्होंने संन्यासी जीवन अपनाया। किसी भी सांप्रदायिक खूँटे से नहीं बंधे और हमेशा प्रयोगशील रहे।",
      descriptionEn: "In 2010, he embraced the life of a renunciant for the proper resolution of his unanswered spiritual questions and practices. He remained unbound by any sectarian ties and always stayed experimental.",
      isActive: false,
      backgroundImage: "/lovable-uploads/3a9be7c0-f13c-40cc-b97d-8b2cda3bc3d3.png"
    },
    {
      year: "2010 - वर्तमान",
      yearEn: "2010 - Present",
      title: "साधना काल और तीर्थयात्राएं",
      titleEn: "Period of Spiritual Practice and Pilgrimages",
      description: "बिना किसी साधन और बिना भोजन की याचना किए, उन्होंने गंगा, गोदावरी, नर्मदा, यमुना आदि नदियों के किनारों पर विचरण, साधना एवं चिंतन करते हुए सैकड़ों किलोमीटर की पैदल यात्रा की। साधना के मार्ग में अपने अनुभवों का शास्त्रों से मिलान करते रहे।",
      descriptionEn: "Without any means and without begging for food, he wandered along the banks of rivers like Ganga, Godavari, Narmada, Yamuna, practicing spiritual disciplines and contemplation while walking hundreds of kilometers on foot. Throughout his spiritual journey, he continued to match his experiences with the scriptures.",
      isActive: false,
      backgroundImage: "/lovable-uploads/63d4ad27-e4c9-4979-b2bd-c0f83f4fc7b7.png"
    },
    {
      year: "वर्तमान समय",
      yearEn: "Present Time",
      title: "एकांत निवास और शिक्षाएं",
      titleEn: "Solitary Residence and Teachings",
      description: "महाराज जी आज भी जनसंपर्क से दूर एकांत में साधारण कुटी में निवास कर रहे हैं। हाल ही में, अपने प्रेमी-भक्तों के आग्रह पर, उन्होंने अपने चिंतन और अनुभवों को यूट्यूब चैनल 'सत्य की ओर' के माध्यम से साझा करना स्वीकार किया है।",
      descriptionEn: "Maharaj ji still resides in solitude in a simple hut, away from public contact. Recently, at the insistence of his loving devotees, he has agreed to share his contemplations and experiences through the YouTube channel 'Satya Ki Or' (Towards Truth).",
      isActive: false,
      backgroundImage: "/lovable-uploads/e51f14d9-2a5b-4896-b6e5-2e76d06ffa83.png"
    }
  ];

  return (
    <LanguageProvider>
      <Timeline 
        events={timelineEvents}
        title="हंसानंद जी महाराज का जीवन परिचय"
        titleEn="Life Introduction of Hansanand ji Maharaj"
        subtitle="एक प्रखर मेधा एवं अंतर्मुखी स्वभाव के धनी संन्यासी, जिन्होंने अपने जीवन को सत्य की खोज और आध्यात्मिक साधनाओं के लिए समर्पित कर दिया है।"
        subtitleEn="A brilliant intellect and introspective renunciant who has dedicated his life to the search for truth and spiritual practices."
      />
    </LanguageProvider>
  );
};

export default Hansanand;
