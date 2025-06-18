document.addEventListener("DOMContentLoaded", () => {
    // Translations object
    const translations = {
        'en': {
            'hero-title': 'Unlimited movies, TV shows and more',
            'hero-subtitle': 'Starts at ₹149. Cancel at any time.',
            'hero-text': 'Ready to watch? Enter your email to create or restart your membership.',
            'email-placeholder': 'Email Address',
            'get-started': 'Get Started >',
            'trending-title': 'Trending Now',
            'new-releases-title': 'New Releases',
            'popular-title': 'Popular on Netflix',
            'featured-title': 'Featured Movies',
            'enjoy-tv-title': 'Enjoy on your TV',
            'enjoy-tv-text': 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            'download-title': 'Download your shows to watch offline',
            'download-text': 'Save your favourites easily and always have something to watch.',
            'watch-everywhere-title': 'Watch everywhere',
            'watch-everywhere-text': 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            'kids-title': 'Create profiles for kids',
            'kids-text': 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
            'faq-title': 'Frequently Asked Questions',
            'faq-1': 'What is Netflix?',
            'faq-2': 'How much does Netflix cost?',
            'faq-3': 'What can I watch on Netflix?',
            'faq-4': 'Where can I watch?',
            'faq-answer-1': 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
            'faq-answer-2': 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.',
            'faq-answer-3': 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
            'faq-answer-4': 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app.'
        },
        'hi': {
            'hero-title': 'अनलिमिटेड मूवीज़, टीवी शोज़ और बहुत कुछ',
            'hero-subtitle': '₹149 से शुरू। कभी भी कैंसल करें।',
            'hero-text': 'देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें।',
            'email-placeholder': 'ईमेल एड्रेस',
            'get-started': 'शुरू करें >',
            'trending-title': 'ट्रेंडिंग नाउ',
            'new-releases-title': 'नए रिलीज़',
            'popular-title': 'नेटफ्लिक्स पर पॉपुलर',
            'featured-title': 'फीचर्ड मूवीज़',
            'enjoy-tv-title': 'अपने टीवी पर एन्जॉय करें',
            'enjoy-tv-text': 'स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स, क्रोमकास्ट, एप्पल टीवी, ब्लू-रे प्लेयर्स और बहुत कुछ पर देखें।',
            'download-title': 'ऑफलाइन देखने के लिए अपने शो डाउनलोड करें',
            'download-text': 'अपने पसंदीदा शोज़ को आसानी से सेव करें और हमेशा कुछ न कुछ देखने के लिए रखें।',
            'watch-everywhere-title': 'हर जगह देखें',
            'watch-everywhere-text': 'उपन्नत टीवी, प्लेस्टेशन, एक्सबॉक्स, क्रोमकास्ट, आप्पल टीवी, ब्लू-रे प्लेयर्स और अन्य उपकरणों पर देखें।',
            'kids-title': 'बच्चों के लिए प्रोफाइल बनाएं',
            'kids-text': 'बच्चों को उनके पसंदीदा कैरेक्टर्स के साथ एडवेंचर्स पर भेजें, एक ऐसी जगह में जो सिर्फ उनके लिए बनाई गई है—आपकी मेंबरशिप के साथ फ्री।',
            'faq-title': 'अक्सर पूछे जाने वाले प्रश्न',
            'faq-1': 'नेटफ्लिक्स क्या है?',
            'faq-2': 'नेटफ्लिक्स की लागत कितनी है?',
            'faq-3': 'नेटफ्लिक्स पर मैं क्या देख सकता हूं?',
            'faq-4': 'मैं कहां देख सकता हूं?',
            'faq-answer-1': 'नेटफ्लिक्स एक स्ट्रीमिंग सर्विस है जो हजारों इंटरनेट-कनेक्टेड डिवाइसों पर अवार्ड-विनिंग टीवी शो, फिल्में, एनीमे, डॉक्यूमेंट्री और बहुत कुछ प्रदान करती है।',
            'faq-answer-2': 'अपने स्मार्टफोन, टैबलेट, स्मार्ट टीवी, लैपटॉप या स्ट्रीमिंग डिवाइस पर नेटफ्लिक्स देखें, सभी एक निश्चित मासिक शुल्क के लिए। प्लान ₹149 से ₹649 प्रति माह तक हैं। कोई अतिरिक्त लागत नहीं, कोई अनुबंध नहीं।',
            'faq-answer-3': 'नेटफ्लिक्स में फीचर फिल्मों, डॉक्यूमेंट्री, टीवी शो, एनीमे, पुरस्कार विजेता नेटफ्लिक्स ओरिजिनल्स और बहुत कुछ का विशाल संग्रह है। जितना चाहें उतना देखें, जब चाहें तब देखें।',
            'faq-answer-4': 'कहीं भी, कभी भी देखें। अपने नेटफ्लिक्स अकाउंट से साइन इन करें और अपने पर्सनल कंप्यूटर पर netflix.com से या नेटफ्लिक्स ऐप प्रदान करने वाले किसी भी इंटरनेट-कनेक्टेड डिवाइस पर तुरंत देखें।'
        },
        'te': {
            'hero-title': 'అపరిమిత సినిమాలు, టీవీ షోలు మరియు మరిన్ని',
            'hero-subtitle': '₹149 నుండి మొదలవుతుంది. ఎప్పుడైనా రద్దు చేయండి.',
            'hero-text': 'చూడటానికి సిద్ధంగా ఉన్నారా? మీ సభ్యత్వాన్ని సృష్టించడానికి లేదా పునఃప్రారంభించడానికి మీ ఇమెయిల్ నమోదు చేయండి.',
            'email-placeholder': 'ఇమెయిల్ చిరునామా',
            'get-started': 'మొదలుపెట్టండి >',
            'trending-title': 'ట్రെండింగ్ నవ్',
            'new-releases-title': 'పుతియ రిలీస్‌లు',
            'popular-title': 'నెట్‌ఫ్లిక్స్‌లో జనప്రియమాయవ',
            'featured-title': 'ఫీచ్చ౼ చిత్రఙ్కలు',
            'enjoy-tv-title': 'నిఙ్ఙళు టివిలో ఆస్వదించండి',
            'enjoy-tv-text': 'స్మార్ట్ టివిలు, ప్లేస్టేషన్, ఎక్స్బోక్స్, క్రోంకాస్ట్, ఆప്పిళ్ టివి, బ్లూ-రే ప్లేయర్లు మరియు అన్ని వాటిపై చూడండి.',
            'download-title': 'ఓఫ్‌లాయినిలో కాణానికి నిఙ్ఙళు షోలు డౌన్లోడ్ చేయండి',
            'download-text': 'నిఙ్ఙళు ప్రియ షోలులను సులభంగా సేవ് చേయండి, ఎప్పుడూ కాణానికి ఏదో సూక్షించండి.',
            'watch-everywhere-title': 'ఎవిటే కాణൂ',
            'watch-everywhere-text': 'నిఙ్ఙళు ఫోన్, టേబులెట్, ల్యాప్టాప్ మరియు టివిలో అపరిమిత సినిమాలు మరియు టివి షోలులను స్ట్రీమ్ చేయండి.',
            'kids-title': 'కుట్టిలుక్కు ప్రొఫൈలുకൾ సృష్టించండి',
            'kids-text': 'కుట్టిలులు అవరుల ప్రియ చరిత్రలతో సాహసిక యాత్రలకు అయయ్క్కో, అవరుల జనకాలు మాత్రమే నిర్మించిన స్థలతో—నిఙ్ఙళు సదస్యత్వతో స౗జన్యం.',
            'faq-title': 'తరచుగా అడిగే ప్రశ్నలు',
            'faq-1': 'నెట్‌ఫ్లిక్స్ అంటే ఏమిటి?',
            'faq-2': 'నెట్‌ఫ్లిక్స్ ఖర్చు ఎంత?',
            'faq-3': 'నెట్‌ఫ్లిక్స్‌లో నేను ఏమి చూడగలను?',
            'faq-4': 'నేను ఎక్కడ చూడగలను?',
            'faq-answer-1': 'నెట్‌ఫ్లిక్స్ అనేది వేలాది ఇంటర్నెట్-కనెక్ట్ చేయబడిన పరికరాలపై అవార్డు గెలుచుకున్న టీవీ షోలు, సినిమాలు, అనిమే, డాక్యుమెంటరీలు మరియు మరిన్ని వాటిని అందించే స్ట్రీమింగ్ సేవ.',
            'faq-answer-2': 'మీ స్మార్ట్‌ఫోన్, టాబ్లెట్, స్మార్ట్ టివి, ల్యాప్‌టాప్ లేదా స్ట్రీమింగ్ పరికరంపై నెట్‌ఫ్లిక్స్‌ని చూడండి, అన్నీ ఒక నిర్దిష్ట నెలవారీ రుసుముతో. ప్లాన్లు ₹149 నుండి ₹649 వరకు ఉంటాయి. అదనపు ఖర్చులు లేవు, ఒప్పందాలు లేవు.',
            'faq-answer-3': 'నెట్‌ఫ్లిక్స్‌లో ఫీచర్ ఫిల్ములు, డോక్యుమെంటరీలు, టీవీ షోలు, అనిమే, అవార్డు గెలుచుకున్న నెట్‌ఫ్లిక్స్ ఒరిజినలുకൾ మరియు మరిన్ని వాటి విస్తృత లైబ్రరీ ఉంది. మీరు కోరుకున్నంత చూడండి, ఎప్పుడు కోరుకుంటే అప్పుడు చూడండి.',
            'faq-answer-4': 'ఎక్కడైనా, ఎప్పుడైనా చూడండి. మీ నెట్‌ఫ్లిక్స్ అకౌంట్‌తో సైన్ ఇన్ చേసి netflix.com వెబ్‌సైట్‌లో మీ పర్సనల్ కంప్యూటర్‌లో లేదా నెట్‌ఫ్లిక్స్ యాప్‌ని అందించే ఏదైనా ఇన్టర్నెట్-కనెక్ట్ చేయబడిన పరికరంపై తక్షణమే చూడండి.'
        },
        'ta': {
            'hero-title': 'வரம்பற்ற திரைப்படங்கள், தொலைக்காட்சி நிகழ்ச்சிகள் மற்றும் பல',
            'hero-subtitle': '₹149 முதல் தொடங்குகிறது. எப்போது வேண்டுமானாலும் ரத்து செய்யலாம்.',
            'hero-text': 'பார்க்க தயாரா? உங்கள் உறுப்பினர் பதிவை உருவாக்க அல்லது மீண்டும் தொடங்க உங்கள் மின்னஞ்சலை உள்ளிடவும்.',
            'email-placeholder': 'மின்னஞ்சல் முகவரி',
            'get-started': 'தொடங்கு >',
            'trending-title': 'ட்ரென்டிங் நவ்',
            'new-releases-title': 'புதிய ரிலிச்சிகள்',
            'popular-title': 'நெட்ஃபிக்ஸில் ஜநப்பியமாயவ',
            'featured-title': 'பிசில்ட் முவிகள்',
            'enjoy-tv-title': 'நிங்கள் டிவில் ஆஸ்வாத்துடன்',
            'enjoy-tv-text': 'ஸ்மார்ட் டிவிகள், ப்ளேஸ்டேஷன், எக்ஸ்போக்ஸ், க்ரோம்காஸ்ட், அப்பிள் டிவி, ப்ளூ-ரே ப்லேயர்கள் மற்றும் அனைத்து வாடிக்கைகளில் பாருங்கள்.',
            'download-title': 'ஓஃப்லைனில் காணாந்த ஷோலுகளை டௌன்லோட் செய்யுங்கள்',
            'download-text': 'நிங்கள் பிடித்த ஷோலுகளை எளிதாக சேமித்து, எப்போதும் காணாந்த ஏதாவது ராசிக்குங்கள்.',
            'watch-everywhere-title': 'எங்கே வேண்டுமானாலும் பாருங்கள்',
            'watch-everywhere-text': 'நிங்கள் தொலைபேசி, டேப்லெட், ல்யாப்டோப் மற்றும் டிவியில் அபரிமிதமாய முவிகள் மற்றும் டிவிஷோலுகளை ஸ்ட்ரீம் செய்யுங்கள்.',
            'kids-title': 'குழந்தைகளுக்கு ப்ரொஃபைல்களை உருவாக்குங்கள்',
            'kids-text': 'குழந்தைகளை அவர்கள் பிடித்த கதாபாத்ரங்களுடன் ஸாகசங்களுக்கு அனுப்புங்கள், அவர்களுக்கு மட்டும் உருவாக்கப்பட்ட இடத்தில்—நிங்கள் ஸ஦ஸ்யத்தோடு இலவசம்.',
            'faq-title': 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
            'faq-1': 'நெட்ஃபிக்ஸ் என்றால் என்ன?',
            'faq-2': 'நெட்ஃபிக்ஸ் செலவு எவ்வளவு?',
            'faq-3': 'நெட்ஃபிக்ஸில் நான் என்ன பார்க்க முடியும்?',
            'faq-4': 'நான் எங்கே பார்க்க முடியும்?',
            'faq-answer-1': 'நெட்ஃபிக்ஸ் என்பது ஆயிரக்கணக்கான இணைய-இணைக்கப்பட்ட சாதனங்களில் விருது பெற்ற தொலைக்காட்சி நிகழ்ச்சிகள், திரைப்படங்கள், அனிமே, ஆவணப்படங்கள் மற்றும் பலவற்றை வழங்கும் ஸ்ட்ரீமிங் சேவை.',
            'faq-answer-2': 'உங்கள் ஸ்மார்ட்போன், டேப்லெட், ஸ்மார்ட் டிவி, லேப்டாப் அல்லது ஸ்ட்ரீமிங் சாதனத்தில் நெட்ஃபிக்ஸைப் பாருங்கள், அனைத்தும் ஒரு நிலையான மாதாந்திர கட்டணத்திற்கு. திட்டங்கள் ₹149 முதல் ₹649 வரை மாதத்திற்கு. கூடுதல் செலவுகள் இல்லை, ஒப்பந்தங்கள் இல்லை.',
            'faq-answer-3': 'நெட்ஃபிக்ஸில் சிறந்த திரைப்படங்கள், ஆவணப்படங்கள், தொலைக்காட்சி நிகழ்ச்சிகள், அனிமே, விருது பெற்ற நெட்ஃபிக்ஸ் ஒரிஜினல்ஸ் மற்றும் பலவற்றின் விரிவான நூலகம் உள்ளது. நீங்கள் விரும்பும் அளவு, விரும்பும் நேரத்தில் பாருங்கள்.',
            'faq-answer-4': 'எங்கே வேண்டுமானாலும், எப்போது வேண்டுமானாலும் பாருங்கள். உங்கள் நெட்ஃபிக்ஸ் கணக்கில் உள்நுழைந்து netflix.com இல் உங்கள் தனிப்பட்ட கணினியில் அல்லது நெட்ஃபிக்ஸ் செயலியை வழங்கும் எந்த இணைய-இணைக்கப்பட்ட சாதனத்திலும் உடனடியாக பாருங்கள்.'
        },
        'ml': {
            'hero-title': 'അപരിമിതമായ സിനിമകൾ, ടിവി ഷോകൾ, മറ്റു പലതും',
            'hero-subtitle': '₹149 മുതൽ ആരംഭിക്കുന്നു. എപ്പോൾ വേണമെങ്കിലും റദ്ദാക്കാം.',
            'hero-text': 'കാണാൻ തയ്യാറാണോ? നിങ്ങളുടെ അംഗത്വം സൃഷ്ടിക്കാൻ അല്ലെങ്കിൽ വീണ്ടും ആരംഭിക്കാൻ നിങ്ങളുടെ ഇമെയിൽ നൽകുക.',
            'email-placeholder': 'ഇമെയിൽ വിലാസം',
            'get-started': 'ആരംഭിക്കുക >',
            'trending-title': 'ട്രെൻഡിംഗ് നൗ',
            'new-releases-title': 'പുതിയ റിലീസുകൾ',
            'popular-title': 'നെറ്റ്ഫ్ലിക్സിൽ ജനപ്രിയമായവ',
            'featured-title': 'ഫీച్ച౼ ചിത్രങ్ങൾ',
            'enjoy-tv-title': 'നിങ്ങളు ടിവില് ആസ്വദിക്കൂ',
            'enjoy-tv-text': 'സ്മാര്ട്ട് ടിവികൾ, പ്ലേസ്റ്റേഷൻ, എക్സ്ബോക്സ്, ക്രോംകാസ്റ്റ്, ആപ്പിൾ ടിവി, ബ്ലൂ-റേ പ്ലേയറുകൾ എന്നിവയില് കാണുക.',
            'download-title': 'ഓഫ్ലൈനിൽ കാണാൻ നിങ്ങളുടെ ഷോലുകൾ ഡൗൺലോഡ് ചെയ്യൂ',
            'download-text': 'നിങ്ങളുടെ പ്രിയ ഷോലుലു എളുപ്പത്തിൽ സേവ് ചെയ്യൂ, എപ്പോഴും കാണാൻ ഏന്തെങ്കിലും സൂക്ഷിക്കൂ.',
            'watch-everywhere-title': 'എവിടെയും കാണൂ',
            'watch-everywhere-text': 'നിങ്ങളുടെ ഫോണ്, ടേബ്ലെറ്റ്, ല്യാപ്ടോപ്പ്, ടിവി എന്നിവയില് അപരിമിതമായ സിനിമകളും ടിവി ഷോകളും സ്ട്രീം ചെയ്യൂ.',
            'kids-title': 'കുട്ടിലుക్കు പ്രൊഫൈലുകൾ സൃഷ്ടിക്കൂ',
            'kids-text': 'കുട്ടിലുകൾക്കു അവരుടെ പ്രിയപ്പെട്ട കഥാപാത്രങ്ങളുമായി സാഹസിക യാത്രയിലേക്ക് അയയ്ക്കൂ, അവരుക്ക് വേണ്ടി മാത്രം നിര്മിച്ച സ്ഥലത്ത്—നിങ്ങളുടെ അംഗത്വത്തോടെ സൗജന്യം.',
            'faq-title': 'പതിവ് ചോദ്യങ്ങൾ',
            'faq-1': 'നെറ്റ്ഫ్ലിക్സ് എന്താണ്?',
            'faq-2': 'നെറ്റ്ഫ్ലിക్സിന്റെ വില എത്ര?',
            'faq-3': 'നെറ്റ്ഫ్ലിക్സിൽ എന്തെല്ലാം കാണാൻ കഴിയും?',
            'faq-4': 'എവിടെ കാണാൻ കഴിയും?',
            'faq-answer-1': 'നെറ്റ്ഫ్ലിക്സ് ആയിരക്കണക്കിന് ഇന്റർനെറ്റ്-കണക്റ്റഡ് ഉപകരണങ്ങളിൽ അവാർഡ് നേടിയ ടിവി ഷോകൾ, സിനിമകൾ, ആനിമേ, ഡോക്യുമെന്ററികൾ മുതലായവ വാഗ്ദാനം ചെയ്യുന്ന ഒരു സ്ട്രീമിംഗ് സേവനമാണ്.',
            'faq-answer-2': 'നിങ്ങളുടെ സ്മാർട്ട്ഫോൺ, ടാബ്‌ലെറ്റ്, സ്മാർട്ട് ടിവി, ലാപ്‌ടോപ്പ് അല്ലെങ്കിൽ സ്ട്രീമിംഗ് ഉപകരണത്തിൽ നെറ്റ്ഫ്ലിക്സ് കാണൂ, എല്ലാം ഒരു നിശ്ചിത പ്രതിമാസ ഫീസിന്. പ്ലാനുകൾ ₹149 മുതൽ ₹649 വരെ മാസത്തിൽ. അധിക ചെലവുകളില്ല, കരാറുകളില്ല.',
            'faq-answer-3': 'നെറ്റ്ഫ്ലിക്സിൽ ഫീച്ചർ ഫിലിംസ്, ഡോക്യുമെന്ററികൾ, ടിവി ഷോകൾ, ആനിമേ, അവാർഡ് നേടിയ നെറ്റ്ഫ്ലിക്സ് ഒറിജിനലുകൾ എന്നിവയുടെ വിപുലമായ ലൈബ്രറി ഉണ്ട്. നിങ്ങൾക്ക് ഇഷ്ടമുള്ളത് എത്ര വേണമെങ്കിലും, എപ്പോഴും കാണൂ.',
            'faq-answer-4': 'എവിടെയും, എപ്പോഴും കാണൂ. നിങ്ങളുടെ നെറ്റ്ഫ്ലിക്സ് അക്കൗണ്ടിൽ സൈൻ ഇൻ ചെയ്ത് netflix.com-ൽ നിങ്ങളുടെ പേഴ്സണൽ കമ്പ്യൂട്ടറിൽ അല്ലെങ്കിൽ നെറ്റ്ഫ്ലിക്സ് ആപ്പ് വാഗ്ദാനം ചെയ്യുന്ന ഏതെങ്കിലും ഇന്റർനെറ്റ്-കണക്റ്റഡ് ഉപകരണത്തിൽ ഉടനെ കാണൂ.'
        },
        'bn': {
            'hero-title': 'অসীমিত মুভি, টিভি শো এবং আরও অনেক কিছু',
            'hero-subtitle': '₹149 থেকে শুরু। যেকোনো সময় বাতিল করুন।',
            'hero-text': 'দেখার জন্য প্রস্তুত? আপনার সদস্যতা তৈরি করতে বা পুনরায় শুরু করতে আপনার ইমেইল দিন।',
            'email-placeholder': 'ইমেইল ঠিকানা',
            'get-started': 'শুরু করুন >',
            'trending-title': 'ট্রেন্ডিং নাও',
            'new-releases-title': 'নতুন রিলিজ',
            'popular-title': 'নেটফ্লিক্সে জনপ্রিয়',
            'featured-title': 'ফিচার্ড মুভি',
            'enjoy-tv-title': 'আপনার টিভিতে আস্঵াদ করুন',
            'enjoy-tv-text': 'স্মার্ট টিভি, প্লেস্টেশন, এক্সবক্স, ক্রোমকাস্ট, আপিল টিভি, ব্লু-রে প্লেয়ার এবং অন্যান্য উপকরণে দেখুন।',
            'download-title': 'অফলাইনে দেখার জন্য আপনার শো ডাউনলোড করুন',
            'download-text': 'আপনার প্রিয় শোগুলি সহজেই সেভ করুন এবং সবসময় দেখার জন্য কিছু রাখুন।',
            'watch-everywhere-title': 'যেখানে খুশি দেখুন',
            'watch-everywhere-text': 'আপনার ফোন, ট্যাবলেট, ল্যাপটপ এবং টিভিতে অসীমিত মুভি এবং টিভি শো স্ট্রিম করুন।',
            'kids-title': 'বাচ্চাদের জন্য প্রোফাইল তৈরি করুন',
            'kids-text': 'বাচ্চাদের তাদের প্রিয় চরিত্রগুলির সাথে অ্যাডভেঞ্চারে পাঠান, তাদের জন্য তৈরি করা একটি জায়গায়—আপনার সদস্যতার সাথে বিনামূল্যে।',
            'faq-title': 'সচরাচর জিজ্ঞাসা',
            'faq-1': 'নেটফ্লিক্স কী?',
            'faq-2': 'নেটফ্লিক্সের খরচ কত?',
            'faq-3': 'নেটফ্লিক্সে আমি কী দেখতে পারি?',
            'faq-4': 'আমি কোথায় দেখতে পারি?',
            'faq-answer-1': 'নেটফ্লিক্স একটি স্ট্রিমিং পরিষেবা যা হাজার হাজার ইন্টারনেট-সংযুক্ত ডিভাইসে পুরস্কার বিজয়ী টিভি শো, মুভি, অ্যানিমে, ডকুমেন্টারি এবং আরও অনেক কিছু অফার করে।',
            'faq-answer-2': 'আপনার স্মার্টফোন, ট্যাবলেট, স্মার্ট টিভি, ল্যাপটপ বা স্ট্রিমিং ডিভাইসে নেটফ্লিক্স দেখুন, সবই একটি নির্দিষ্ট মাসিক ফির জন্য। প্ল্যানগুলি ₹149 থেকে ₹649 প্রতি মাসে। কোন অতিরিক্ত খরচ নেই, কোন চুক্তি নেই।',
            'faq-answer-3': 'নেটফ্লিক্সে ফিচার ফিল্ম, ডকুমেন্টারি, টিভি শো, অ্যানিমে, পুরস্কার বিজয়ী নেটফ্লিক্স অরিজিনাল এবং আরও অনেক কিছুর বিস্তৃত লাইব্রেরি রয়েছে। আপনি যত খুশি দেখতে পারেন, যখন খুশি দেখতে পারেন।',
            'faq-answer-4': 'যেখানে খুশি, যখন খুশি দেখুন। আপনার নেটফ্লিক্স অ্যাকাউন্টে সাইন ইন করে netflix.com এ আপনার ব্যক্তিগত কম্পিউটারে বা নেটফ্লিক্স অ্যাপ অফার করে এমন যেকোনো ইন্টারনেট-সংযুক্ত ডিভাইসে তৎক্ষণাৎ দেখুন।'
        }
    };

    // Function to update page content based on selected language
    function updatePageLanguage(language) {
        const elements = {
            'hero-title': document.querySelector('.hero h1'),
            'hero-subtitle': document.querySelector('.hero span:nth-child(2)'),
            'hero-text': document.querySelector('.hero span:nth-child(3)'),
            'email-placeholder': document.querySelector('.hero input[type="text"]'),
            'get-started': document.querySelector('.hero .btn-red'),
            'trending-title': document.querySelector('#trending h2'),
            'new-releases-title': document.querySelector('#newReleases h2'),
            'popular-title': document.querySelector('#popular h2'),
            'featured-title': document.querySelector('#movies h2'),
            'enjoy-tv-title': document.querySelector('.first:not(.second):not(.third) div span:first-child'),
            'enjoy-tv-text': document.querySelector('.first:not(.second):not(.third) div span:nth-child(2)'),
            'download-title': document.querySelector('.first.second div span:first-child'),
            'download-text': document.querySelector('.first.second div span:nth-child(2)'),
            'watch-everywhere-title': document.querySelector('.first.third div span:first-child'),
            'watch-everywhere-text': document.querySelector('.first.third div span:nth-child(2)'),
            'faq-title': document.querySelector('.faq h2')
        };

        // Update text content for each element except FAQ questions and kids section
        for (const [key, element] of Object.entries(elements)) {
            if (element && translations[language] && translations[language][key]) {
                if (key === 'email-placeholder') {
                    element.placeholder = translations[language][key];
                } else {
                    element.textContent = translations[language][key];
                }
            }
        }

        // Update kids section (second .first.second section)
        const kidsSections = document.querySelectorAll('section.first.second');
        if (kidsSections.length > 1) {
            const kidsSpans = kidsSections[1].querySelectorAll('div span');
            if (kidsSpans.length > 1 && translations[language]) {
                if (translations[language]['kids-title']) {
                    kidsSpans[0].textContent = translations[language]['kids-title'];
                }
                if (translations[language]['kids-text']) {
                    kidsSpans[1].textContent = translations[language]['kids-text'];
                }
            }
        }

        // Update FAQ questions in order
        const faqQuestions = document.querySelectorAll('.faqbox .question span');
        for (let i = 0; i < faqQuestions.length; i++) {
            const key = `faq-${i + 1}`;
            if (translations[language] && translations[language][key]) {
                faqQuestions[i].textContent = translations[language][key];
            }
        }

        // Update FAQ answers if present
        const faqAnswers = document.querySelectorAll('.faq-answer');
        faqAnswers.forEach((answer, index) => {
            const key = `faq-answer-${index + 1}`;
            if (translations[language] && translations[language][key]) {
                answer.textContent = translations[language][key];
            }
        });
    }

    // Initialize movies
    initializeMovies();
    
    // Language selector enhancement
    const languageSelect = document.querySelector('.language-select');
    const languageWrapper = document.querySelector('.language-wrapper');
    const arrowIcon = document.querySelector('.arrow-icon');
  
    if (languageSelect) {
      languageSelect.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        localStorage.setItem('preferred_language', selectedLanguage);
        updatePageLanguage(selectedLanguage);
      });
  
      languageSelect.addEventListener('focus', () => {
        languageWrapper.style.background = 'rgba(0, 0, 0, 0.8)';
        arrowIcon.style.transform = 'rotate(180deg)';
      });
  
      languageSelect.addEventListener('blur', () => {
        languageWrapper.style.background = '';
        arrowIcon.style.transform = '';
      });
  
      // Check for saved language preference and apply it
      const savedLanguage = localStorage.getItem('preferred_language');
      if (savedLanguage) {
        languageSelect.value = savedLanguage;
        updatePageLanguage(savedLanguage);
      }
    }
  
    // Email validation
    const emailInput = document.querySelector(".hero input[type='text']");
    const getStartedBtn = document.querySelector(".hero .btn-red");
    const emailFeedback = document.querySelector(".email-feedback") || document.createElement("div");
    
    if (!emailFeedback.classList.contains("email-feedback")) {
      emailFeedback.className = "email-feedback";
      emailInput.parentNode.appendChild(emailFeedback);
    }
  
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    function showEmailFeedback(isValid, message) {
      emailFeedback.textContent = message;
      emailFeedback.classList.add("show");
      
      if (isValid) {
        emailInput.classList.remove("error");
        emailInput.classList.add("valid");
        emailFeedback.style.color = "#5fa53f";
      } else {
        emailInput.classList.remove("valid");
        emailInput.classList.add("error");
        emailFeedback.style.color = "#e87c03";
      }
    }
  
    function hideEmailFeedback() {
      emailFeedback.classList.remove("show");
      emailInput.classList.remove("error", "valid");
    }
  
    // Clear error state when user starts typing
    emailInput.addEventListener("input", () => {
      hideEmailFeedback();
    });
  
    // Get Started button functionality
    if (getStartedBtn) {
      getStartedBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();
        
        if (email === "") {
          showEmailFeedback(false, "Please enter an email address.");
          return;
        }
        
        if (validateEmail(email)) {
          showEmailFeedback(true, "Valid email address!");
          localStorage.setItem("userEmail", email);
          // Wait for the success message to be visible before showing profile selection
          setTimeout(() => {
            showProfileSelection();
          }, 1000);
        } else {
          showEmailFeedback(false, "Please enter a valid email address.");
        }
      });
    }
  
    // Profile Selection
    function showProfileSelection() {
      const profiles = [
        { 
          name: "User 1", 
          img: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
        },
        { 
          name: "User 2", 
          img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        },
        { 
          name: "Kids", 
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNEL_ag00iUGjMftbK9b3yoWl-bNahVaxoQ&s"
        },
        { 
          name: "Add Profile", 
          img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='11' fill='transparent' stroke='%23666' stroke-width='1'/%3E%3Cpath d='M12 7v10M7 12h10' stroke='%23666' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",
          isAdd: true
        }
      ];
  
      const profileScreen = document.createElement("div");
      profileScreen.className = "profile-selection";
      profileScreen.innerHTML = `
        <h1>Who's watching?</h1>
        <div class="profiles-container">
          ${profiles.map(profile => `
            <div class="profile ${profile.isAdd ? 'add-profile' : ''}" onclick="selectProfile('${profile.name}')">
              <div class="profile-icon">
                <img src="${profile.img}" alt="${profile.name}">
              </div>
              <span>${profile.name}</span>
            </div>
          `).join("")}
        </div>
      `;
  
      document.body.appendChild(profileScreen);
    }
  
    // Sample movies data
    const sampleMovies = [
        {
            title: "Inception",
            year: 2010,
            poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
        },
        {
            title: "Interstellar",
            year: 2014,
            poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg"
        },
        {
            title: "The Dark Knight",
            year: 2008,
            poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
        },
        {
            title: "Pulp Fiction",
            year: 1994,
            poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
        },
        {
            title: "The Shawshank Redemption",
            year: 1994,
            poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
        }
    ];

    // Display movies
    displayMovies(sampleMovies);

    // FAQ functionality with improved animations
    const faqBoxes = document.querySelectorAll(".faqbox");
    const faqAnswers = {
      "What is Netflix?": "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      "How much does Netflix cost?": "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
      "What can I watch on Netflix?": "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      "Where can I watch?": "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app."
    };

    faqBoxes.forEach(box => {
      const question = box.querySelector(".question span").textContent;
      const answerDiv = document.createElement("div");
      answerDiv.className = "faq-answer";
      answerDiv.textContent = faqAnswers[question];
      box.appendChild(answerDiv);

      box.addEventListener("click", () => {
        const isActive = box.classList.contains("active");
        
        // Close all boxes
        faqBoxes.forEach(b => {
          if (b !== box) {
            b.classList.remove("active");
            const answer = b.querySelector(".faq-answer");
            if (answer) {
              answer.style.maxHeight = "0px";
              answer.style.opacity = "0";
              answer.style.transform = "translateY(-10px)";
            }
          }
        });

        if (!isActive) {
          box.classList.add("active");
          const answer = box.querySelector(".faq-answer");
          if (answer) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.opacity = "1";
            answer.style.transform = "translateY(0)";
          }
        } else {
          box.classList.remove("active");
          const answer = box.querySelector(".faq-answer");
          if (answer) {
            answer.style.maxHeight = "0px";
            answer.style.opacity = "0";
            answer.style.transform = "translateY(-10px)";
          }
        }
      });
    });
  });
  
  // Profile selection handler (needs to be in global scope)
  function selectProfile(profileName) {
    const profileScreen = document.querySelector('.profile-selection');
    if (profileScreen) {
      profileScreen.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(() => {
        profileScreen.remove();
        // Here you would typically redirect to the main Netflix interface
        alert(`Selected profile: ${profileName}`);
      }, 300);
    }
  }
  
  // Movies Data and Functionality
  const moviesData = {
    trending: [
      { title: "Stranger Things 4", year: "2022", image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/02/17/16451324297651.jpg" },
      { title: "Wednesday", year: "2022", image: "https://miro.medium.com/v2/resize:fit:1400/0*WvavbnDNqIAJ4hA1" },
      { title: "The Witcher", year: "2021", image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/the-witcher-season-2-release-date-social-featured.jpg" },
      { title: "Money Heist", year: "2021", image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/money-heist-season-5.jpg" },
      { title: "Dark", year: "2020", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUlQeNjFygtoqANITc9el-7o-8NITO6CJIQ&s" },
      { title: "The Crown", year: "2022", image: "https://saratogafalcon.org/wp-content/uploads/2020/04/TTV-SELECTS-NETFLIX-THE-CROWN-SEASON-2.jpg" }
    ],
    newReleases: [
      { title: "Red Notice", year: "2023", image: "https://cordcuttersnews.com/wp-content/uploads/2021/12/red-notice-netflix-1.png" },
      { title: "Don't Look Up", year: "2023", image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/dont-look-up-movie.jpg" },
      { title: "The Gray Man", year: "2023", image: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf7OOTkWQFDksCGHstyRoAOnLHeC13jjSmcCHw5d0UzbqawGsNEGBezKOpfOpxTJagel-JFfmM2xg0a9Nyt71bl22QI2z3P4nbOnflcNh6s_TFJOU1VeNrw8PT2LcHeW8EjNDg.webp?r=fb8" },
      { title: "The Adam Project", year: "2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnk9ZGMNg_8su3sPp2ymUyZVbjs8U2FUGxdg&s" },
      { title: "Glass Onion", year: "2023", image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63d1c5b2d56c6c001de3c5f2.jpg" },
      { title: "Enola Holmes 2", year: "2023", image: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSx4vOSojK2t6YUwOJvIk3Fe-lYR-s248Ufx8KoHh_2bKwzPjzYrp7Qcu-lHvDasy5bLSfQzjPDXd4xXn6O0oy-yBzRgL1K5G_s5.jpg?r=ce4" },
      { title: "Army of the Dead", year: "2023", image: "https://ntvb.tmsimg.com/assets/p19604263_v_h8_aa.jpg?w=1280&h=720" }
    ],
    popular: [
      { title: "Extraction 2", year: "2023", image: "https://ntvb.tmsimg.com/assets/p23711562_v_h8_ad.jpg?w=960&h=540" },
      { title: "Purple Hearts", year: "2022", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1rZc-YKZsf9OZJilR7GJadB167QmjFCUug&s" },
      { title: "The Mother", year: "2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMvoKeBFcyDjfc4zGSA2Vl-1ETTvX_uZ-mg&s" },
      { title: "Luther", year: "2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3tnnw9YMgEzrKrMdQpdiOjik6rlHCOzekA&s" },
      { title: "Heart of Stone", year: "2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMIU2oKXdXg8XEKYWeooGG0j6YF1619FtecQ&s" },
      { title: "Bridgerton", year: "2022", image: "https://mads.de/wp-content/uploads/2021/01/6724099e82-1280x640.jpg" },
      { title: "Squid Game", year: "2021", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLG6gdhvdLJopVqSiD0sajQrReV80XL6bfQ&s" }
    ]
  };
  
  function initializeMovies() {
    // Populate movie cards for each category
    Object.keys(moviesData).forEach(category => {
      const movieCards = document.querySelector(`#${category} .movie-cards`);
      if (!movieCards) {
        console.error(`Could not find movie-cards container for category: ${category}`);
        return;
      }
  
      // Clear existing content
      movieCards.innerHTML = '';
  
      // Add movies
      moviesData[category].forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
          <img src="${movie.image}" alt="${movie.title}" loading="lazy">
          <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
          </div>
        `;
        movieCards.appendChild(movieCard);
      });
  
      // Initialize slider functionality
      const slider = movieCards.closest('.movie-slider');
      const leftArrow = slider.querySelector('.slider-arrow.left');
      const rightArrow = slider.querySelector('.slider-arrow.right');
      const cardWidth = 248; // card width + gap
  
      leftArrow.addEventListener('click', () => {
        movieCards.scrollBy({
          left: -cardWidth * 2,
          behavior: 'smooth'
        });
      });
  
      rightArrow.addEventListener('click', () => {
        movieCards.scrollBy({
          left: cardWidth * 2,
          behavior: 'smooth'
        });
      });
    });

    // Update featured movies section
    const featuredMovies = [
      ...moviesData.trending.slice(0, 2),
      ...moviesData.newReleases.slice(0, 2),
      ...moviesData.popular.slice(0, 2)
    ];
    displayMovies(featuredMovies);
  }
  
  // Make sure the DOM is loaded before initializing
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMovies);
  } else {
    initializeMovies();
  }
  
  // Add the displayMovies function
  function displayMovies(movies) {
    const movieList = document.getElementById("movie-list");
    if (!movieList) return;
    
    movieList.innerHTML = "";

    movies.forEach((movie) => {
        const li = document.createElement("li");
        li.className = "featured-movie";

        const img = document.createElement("img");
        img.src = movie.image || movie.poster;
        img.alt = `${movie.title} Poster`;
        img.classList.add("movie-poster");

        const title = document.createElement("p");
        title.textContent = `${movie.title} (${movie.year})`;

        li.appendChild(img);
        li.appendChild(title);
        movieList.appendChild(li);
    });
  }
  