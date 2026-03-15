// dua-arsivi.js

window.DuaModule = (function () {

  const DAILY_DUAS = [

    // 0. Gün — Başlangıç duası
    {
      ar: "اللهم أعنا على ذكرك وشكرك وحسن عبادتك",
      tr: "Allah’ım! Seni zikretmek, Sana şükretmek ve Sana güzelce ibadet etmek için bize yardım et.",
      de: "O Allah, hilf uns, Deiner zu gedenken, Dir zu danken und Dich auf beste Weise zu dienen."
    },

    // 1. Gün — Kur’an (Taha 114)
    {
      source: "KURAN",
      ar: "رَبِّ زِدْنِي عِلْمًا",
      tr: "Rabbim! İlmimi artır.",
      de: "Mein Herr, mehre mein Wissen."
    },

    // 2. Gün — Hadis (Tirmizi)
    {
      source: "HADIS",
      ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
      tr: "Allah’ım! Senden hidayet, takva, iffet ve gönül zenginliği isterim.",
      de: "O Allah, ich bitte Dich um Rechtleitung, Gottesfurcht, Keuschheit und Genügsamkeit."
    },

    // 3. Gün — Kur’an (Bakara 286)
    {
      source: "KURAN",
      ar: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ...",
      tr: "Rabbimiz! Unutur veya yanılırsak bizi sorumlu tutma...",
      de: "Unser Herr, belaste uns nicht, wenn wir vergessen oder einen Fehler machen..."
    },

    // 4. Gün — Hadis (Müslim)
    {
      source: "HADIS",
      ar: "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي",
      tr: "Allah’ım! Beni bağışla, bana merhamet et, beni hidayete erdir, beni afiyet içinde kıl ve bana rızık ver.",
      de: "O Allah, vergib mir, erbarme Dich meiner, leite mich, gewähre mir Gesundheit und versorge mich."
    },

    // 5. Gün — Kur’an (A’râf 23)
    {
      source: "KURAN",
      ar: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا ...",
      tr: "Rabbimiz! Biz kendimize zulmettik...",
      de: "Unser Herr, wir haben uns selbst Unrecht getan..."
    },

    // 6. Gün — Hadis (Buhari)
    {
      source: "HADIS",
      ar: "اللَّهُمَّ بَارِكْ لِي فِيمَا رَزَقْتَنِي وَقِنِي عَذَابَ النَّارِ",
      tr: "Allah’ım! Bana verdiğin rızıkta bereket kıl ve beni cehennem azabından koru.",
      de: "O Allah, segne das, womit Du mich versorgt hast, und bewahre mich vor der Strafe des Feuers."
    },

    // 7. Gün — Kur’an (Furkan 74)
    {
      source: "KURAN",
      ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا ...",
      tr: "Rabbimiz! Eşlerimizi ve çocuklarımızı bize göz aydınlığı kıl...",
      de: "Unser Herr, schenke uns Freude durch unsere Ehepartner und Kinder..."
    },

    // 8. Gün — Hadis (Tirmizi)
    {
      source: "HADIS",
      ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ ...",
      tr: "Allah’ım! Nimetinin yok olmasından ve afiyetinin değişmesinden Sana sığınırım.",
      de: "O Allah, ich suche Zuflucht bei Dir vor dem Schwinden Deiner Gunst..."
    },

    // 9. Gün — Kur’an (İbrahim 40)
    {
      source: "KURAN",
      ar: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ ...",
      tr: "Rabbim! Beni ve soyumu namazı dosdoğru kılanlardan eyle...",
      de: "Mein Herr, mache mich und meine Nachkommen zu denen, die das Gebet verrichten..."
    },

    // 10. Gün — Hadis (Müslim)
    {
      source: "HADIS",
      ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ...",
      tr: "Allah’ım! Nefsimin şerrinden ve bütün varlıkların şerrinden Sana sığınırım.",
      de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel meiner Seele..."
    },

   // 11. Gün — Kur’an (Ali İmran 8)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
  tr: "Rabbimiz! Bizi hidayete erdirdikten sonra kalplerimizi eğriltme. Bize katından rahmet bağışla. Şüphesiz bağışı en çok olan Sensin.",
  de: "Unser Herr, lass unsere Herzen nicht abirren, nachdem Du uns rechtgeleitet hast, und schenke uns Barmherzigkeit von Dir. Du bist wahrlich der Großzügige."
},

// 12. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ",
  tr: "Allah’ım! Kederden, hüzünden, acizlikten ve tembellikten Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor Kummer, Traurigkeit, Unfähigkeit und Trägheit."
},

// 13. Gün — Kur’an (Bakara 250)
{
  source: "KURAN",
  ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا",
  tr: "Rabbimiz! Üzerimize sabır yağdır ve ayaklarımızı sabit kıl.",
  de: "Unser Herr, gieße Geduld über uns aus und festige unsere Schritte."
},

// 14. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ طَهِّرْ قَلْبِي وَحَصِّنْ فَرْجِي وَاغْفِرْ لِي ذَنْبِي",
  tr: "Allah’ım! Kalbimi temizle, iffetimi koru ve günahımı bağışla.",
  de: "O Allah, reinige mein Herz, bewahre meine Keuschheit und vergib mir meine Sünden."
},

// 15. Gün — Kur’an (Kasas 24)
{
  source: "KURAN",
  ar: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
  tr: "Rabbim! Bana indireceğin her hayra muhtacım.",
  de: "Mein Herr, ich bin bedürftig nach jedem Guten, das Du zu mir herabsendest."
},

// 16. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
  tr: "Allah’ım! Dünya ve ahirette afiyet isterim.",
  de: "O Allah, ich bitte Dich um Wohlbefinden im Diesseits und im Jenseits."
},

// 17. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Rabbim! Bağışla, merhamet et. Merhametlilerin en hayırlısı Sensin.",
  de: "Mein Herr, vergib und erbarme Dich. Du bist der Beste der Barmherzigen."
},

// 18. Gün — Hadis (Nesai)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ",
  tr: "Allah’ım! Rızanı ve cennetini isterim.",
  de: "O Allah, ich bitte Dich um Dein Wohlgefallen und das Paradies."
},

// 19. Gün — Kur’an (İbrahim 41)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
  tr: "Rabbim! Hesap gününde beni, anne-babamı ve bütün müminleri bağışla.",
  de: "Mein Herr, vergib mir, meinen Eltern und den Gläubigen am Tage der Abrechnung."
},

// 20. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ",
  tr: "Allah’ım! Şiddetli beladan ve kötü akıbetten Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor schwerer Prüfung und unheilvollem Ausgang."
},

// 21. Gün — Kur’an (A’râf 89)
{
  source: "KURAN",
  ar: "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
  tr: "Rabbimiz! Bizimle kavmimiz arasında hak ile hükmet. Sen hükmedenlerin en hayırlısısın.",
  de: "Unser Herr, entscheide zwischen uns und unserem Volk mit der Wahrheit. Du bist der Beste der Entscheidenden."
},

// 22. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نَفْسًا مُطْمَئِنَّةً تُؤْمِنُ بِلِقَائِكَ وَتَرْضَى بِقَضَائِكَ",
  tr: "Allah’ım! Sana kavuşmaya iman eden ve hükmüne razı olan huzurlu bir nefis isterim.",
  de: "O Allah, ich bitte Dich um eine zufriedene Seele, die an Deine Begegnung glaubt und mit Deinem Urteil zufrieden ist."
},

// 23. Gün — Kur’an (Mümin 7)
{
  source: "KURAN",
  ar: "رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَّحْمَةً وَعِلْمًا فَاغْفِرْ لِلَّذِينَ تَابُوا",
  tr: "Rabbimiz! Senin rahmetin ve ilmin her şeyi kuşatmıştır. Tevbe edenleri bağışla.",
  de: "Unser Herr, Deine Barmherzigkeit und Dein Wissen umfassen alles. Vergib denen, die bereuen."
},

// 24. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْبُخْلِ وَأَعُوذُ بِكَ مِنْ الْجُبْنِ",
  tr: "Allah’ım! Cimrilikten ve korkaklıktan Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor Geiz und Feigheit."
},

// 25. Gün — Kur’an (Furkan 65)
{
  source: "KURAN",
  ar: "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا",
  tr: "Rabbimiz! Cehennem azabını bizden uzaklaştır. Onun azabı gerçekten çok çetindir.",
  de: "Unser Herr, wende die Strafe der Hölle von uns ab. Ihre Strafe ist wahrlich unentrinnbar."
},

// 26. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي",
  tr: "Allah’ım! İşimin dayanağı olan dinimi ıslah eyle.",
  de: "O Allah, verbessere für mich meine Religion, die der Halt meiner Angelegenheiten ist."
},

// 27. Gün — Kur’an (Yunus 85)
{
  source: "KURAN",
  ar: "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
  tr: "Rabbimiz! Sana güvendik, Sana yöneldik ve dönüşümüz Sanadır.",
  de: "Unser Herr, auf Dich vertrauen wir, zu Dir wenden wir uns und zu Dir ist die Heimkehr."
},

// 28. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ قَلْبًا سَلِيمًا",
  tr: "Allah’ım! Senden selim bir kalp isterim.",
  de: "O Allah, ich bitte Dich um ein reines Herz."
},

// 29. Gün — Kur’an (Baqarah 127)
{
  source: "KURAN",
  ar: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
  tr: "Rabbimiz! Bizden kabul buyur. Şüphesiz Sen işiten ve bilensin.",
  de: "Unser Herr, nimm es von uns an. Du bist wahrlich der Hörende, der Wissende."
},

// 30. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رَحْمَةً مِنْ عِنْدِكَ تَهْدِي بِهَا قَلْبِي",
  tr: "Allah’ım! Kalbimi hidayete erdirecek katından bir rahmet isterim.",
  de: "O Allah, ich bitte Dich um eine Barmherzigkeit von Dir, durch die Du mein Herz leitest."
},

// 31. Gün — Kur’an (Baqarah 286 — dua son kısmı)
{
  source: "KURAN",
  ar: "رَبَّنَا وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
  tr: "Rabbimiz! Bizi affet, bizi bağışla, bize merhamet et. Sen bizim Mevlâmızsın. Kâfirler topluluğuna karşı bize yardım et.",
  de: "Unser Herr, verzeihe uns, vergib uns und erbarme Dich unser. Du bist unser Beschützer, so hilf uns gegen das ungläubige Volk."
},

// 32. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ فِي الْأَمْرِ وَالْعَزِيمَةَ عَلَى الرُّشْدِ",
  tr: "Allah’ım! İşlerimde sebat ve doğruya yönelme azmi isterim.",
  de: "O Allah, ich bitte Dich um Standhaftigkeit in meinen Angelegenheiten und Entschlossenheit zum rechten Weg."
},

// 33. Gün — Kur’an (A’râf 126)
{
  source: "KURAN",
  ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
  tr: "Rabbimiz! Üzerimize sabır yağdır ve bizi Müslümanlar olarak vefat ettir.",
  de: "Unser Herr, gieße Geduld über uns aus und lass uns als Muslime sterben."
},

// 34. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ",
  tr: "Allah’ım! Senden cenneti ve ona yaklaştıran söz ve amelleri isterim.",
  de: "O Allah, ich bitte Dich um das Paradies und um Worte und Taten, die dazu führen."
},

// 35. Gün — Kur’an (İsra 80)
{
  source: "KURAN",
  ar: "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ",
  tr: "Rabbim! Beni doğrulukla girdireceğin yere girdir ve doğrulukla çıkaracağın yerden çıkar.",
  de: "Mein Herr, lass mich aufrichtig eintreten und aufrichtig hinausgehen."
},

// 36. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ",
  tr: "Allah’ım! Açık ve gizli fitnelerden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor den Versuchungen, den offensichtlichen und den verborgenen."
},

// 37. Gün — Kur’an (Müminun 97–98)
{
  source: "KURAN",
  ar: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ",
  tr: "Rabbim! Şeytanların vesveselerinden Sana sığınırım. Rabbim! Yanımda bulunmalarından da Sana sığınırım.",
  de: "Mein Herr, ich suche Zuflucht bei Dir vor den Einflüsterungen der Satane und davor, dass sie bei mir erscheinen."
},

// 38. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي قَلْبِي وَنُورًا فِي بَصَرِي",
  tr: "Allah’ım! Kalbime nur, gözüme nur ver.",
  de: "O Allah, gib meinem Herzen Licht und meinem Blick Licht."
},

// 39. Gün — Kur’an (Tahrim 8)
{
  source: "KURAN",
  ar: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
  tr: "Rabbimiz! Nurumuzu tamamla ve bizi bağışla. Şüphesiz Sen her şeye kadirsin.",
  de: "Unser Herr, vollende unser Licht und vergib uns. Du hast wahrlich Macht über alle Dinge."
},

// 40. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُسْنَ الْخَاتِمَةِ",
  tr: "Allah’ım! Senden güzel bir son isterim.",
  de: "O Allah, ich bitte Dich um ein gutes Ende."
},

// 41. Gün — Kur’an (Yunus 86)
{
  source: "KURAN",
  ar: "وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ",
  tr: "Bizi rahmetinle inkârcı topluluktan kurtar.",
  de: "Rette uns durch Deine Barmherzigkeit vor dem ungläubigen Volk."
},

// 42. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ فِعْلَ الْخَيْرَاتِ وَتَرْكَ الْمُنْكَرَاتِ",
  tr: "Allah’ım! Hayırlı işler yapmayı ve kötülüklerden uzak durmayı isterim.",
  de: "O Allah, ich bitte Dich um gute Taten und darum, das Schlechte zu meiden."
},

// 43. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ",
  tr: "Rabbimiz! Gizlediğimizi de açıkladığımızı da Sen bilirsin.",
  de: "Unser Herr, Du weißt, was wir verbergen und was wir offenlegen."
},

// 44. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ",
  tr: "Allah’ım! Af ve afiyet isterim.",
  de: "O Allah, ich bitte Dich um Vergebung und Wohlbefinden."
},

// 45. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ لِي وَلِأَخِي وَأَدْخِلْنَا فِي رَحْمَتِكَ",
  tr: "Rabbim! Beni ve kardeşimi bağışla, bizi rahmetine dahil et.",
  de: "Mein Herr, vergib mir und meinem Bruder und nimm uns in Deine Barmherzigkeit auf."
},

// 46. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْحُمُومِ وَالْغُمُومِ",
  tr: "Allah’ım! Gam ve kederden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor Sorgen und Bedrückung."
},

// 47. Gün — Kur’an (Mümin 8)
{
  source: "KURAN",
  ar: "رَبَّنَا وَأَدْخِلْهُمْ جَنَّاتِ عَدْنٍ الَّتِي وَعَدْتَّهُمْ",
  tr: "Rabbimiz! Onları, kendilerine vaad ettiğin Adn cennetlerine koy.",
  de: "Unser Herr, lass sie in die Gärten von Eden eingehen, die Du ihnen versprochen hast."
},

// 48. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِزْقًا طَيِّبًا",
  tr: "Allah’ım! Helal ve temiz rızık isterim.",
  de: "O Allah, ich bitte Dich um gute und erlaubte Versorgung."
},

// 49. Gün — Kur’an (Baqarah 201)
{
  source: "KURAN",
  ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
  tr: "Rabbimiz! Bize dünyada iyilik ver, ahirette de iyilik ver ve bizi ateş azabından koru.",
  de: "Unser Herr, gib uns Gutes im Diesseits und Gutes im Jenseits und bewahre uns vor der Strafe des Feuers."
},

// 50. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ",
  tr: "Allah’ım! Peygamberin Muhammed’in Senden istediği hayırların tamamını Senden isterim.",
  de: "O Allah, ich bitte Dich um all das Gute, um das Dein Prophet Muhammad Dich gebeten hat."
},

// 51. Gün — Kur’an (Taha 25–28)
{
  source: "KURAN",
  ar: "رَبِّ اشْرَحْ لِي صَدْرِي * وَيَسِّرْ لِي أَمْرِي * وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي * يَفْقَهُوا قَوْلِي",
  tr: "Rabbim! Göğsüme genişlik ver. İşimi bana kolaylaştır. Dilimdeki düğümü çöz ki sözümü anlasınlar.",
  de: "Mein Herr, öffne mir meine Brust, erleichtere mir meine Angelegenheit, löse den Knoten in meiner Zunge, damit sie meine Worte verstehen."
},

// 52. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
  tr: "Allah’ım! Faydalı ilim, helal rızık ve kabul edilen amel isterim.",
  de: "O Allah, ich bitte Dich um nützliches Wissen, erlaubte Versorgung und angenommene Taten."
},

// 53. Gün — Kur’an (Saffat 100)
{
  source: "KURAN",
  ar: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
  tr: "Rabbim! Bana salih evlatlar bağışla.",
  de: "Mein Herr, schenke mir rechtschaffene Nachkommen."
},

// 54. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ قَلْبًا خَاشِعًا وَدُعَاءً مُسْتَجَابًا",
  tr: "Allah’ım! Huşu sahibi bir kalp ve kabul edilen bir dua isterim.",
  de: "O Allah, ich bitte Dich um ein demütiges Herz und ein erhörtes Gebet."
},

// 55. Gün — Kur’an (Baqarah 128)
{
  source: "KURAN",
  ar: "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ",
  tr: "Rabbimiz! Bizi Sana teslim olmuş kimseler kıl. Soyumuzdan da Sana teslim olmuş bir ümmet çıkar.",
  de: "Unser Herr, mache uns zu Dir ergebenen Muslimen und aus unserer Nachkommenschaft eine Dir ergebene Gemeinschaft."
},

// 56. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ صِدْقًا فِي الْقَوْلِ وَالْعَمَلِ",
  tr: "Allah’ım! Sözde ve amelde doğruluk isterim.",
  de: "O Allah, ich bitte Dich um Aufrichtigkeit in Wort und Tat."
},

// 57. Gün — Kur’an (A’râf 155)
{
  source: "KURAN",
  ar: "أَنتَ وَلِيُّنَا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الْغَافِرِينَ",
  tr: "Sen bizim velimizsin. Bizi bağışla, bize merhamet et. Sen bağışlayanların en hayırlısısın.",
  de: "Du bist unser Beschützer. Vergib uns und erbarme Dich unser. Du bist der Beste der Vergeber."
},

// 58. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضًا بَعْدَ الْقَضَاءِ",
  tr: "Allah’ım! Hükmünden sonra rızanı isterim.",
  de: "O Allah, ich bitte Dich um Zufriedenheit nach Deinem Urteil."
},

// 59. Gün — Kur’an (Müminun 109)
{
  source: "KURAN",
  ar: "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Rabbimiz! İman ettik. Bizi bağışla, bize merhamet et. Sen merhametlilerin en hayırlısısın.",
  de: "Unser Herr, wir haben geglaubt. Vergib uns und erbarme Dich unser. Du bist der Beste der Barmherzigen."
},

// 60. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ سَعَادَةً لَا تَشْقَى بَعْدَهَا أَبَدًا",
  tr: "Allah’ım! Sonu bedbahtlık olmayan bir saadet isterim.",
  de: "O Allah, ich bitte Dich um ein Glück, dem niemals Unglück folgt."
},

// 61. Gün — Kur’an (Tahrim 11)
{
  source: "KURAN",
  ar: "رَبِّ ابْنِ لِي عِندَكَ بَيْتًا فِي الْجَنَّةِ",
  tr: "Rabbim! Katında bana cennette bir ev yap.",
  de: "Mein Herr, errichte mir bei Dir ein Haus im Paradies."
},

// 62. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نَفْسًا مُطْمَئِنَّةً",
  tr: "Allah’ım! Senden huzurlu bir nefis isterim.",
  de: "O Allah, ich bitte Dich um eine zufriedene und ruhige Seele."
},

// 63. Gün — Kur’an (Baqarah 286 — dua orta kısmı)
{
  source: "KURAN",
  ar: "رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ",
  tr: "Rabbimiz! Gücümüzün yetmediği şeyleri bize yükleme.",
  de: "Unser Herr, belaste uns nicht mit dem, was wir nicht tragen können."
},

// 64. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ قَلْبًا نَقِيًّا",
  tr: "Allah’ım! Senden tertemiz bir kalp isterim.",
  de: "O Allah, ich bitte Dich um ein reines, lauteres Herz."
},

// 65. Gün — Kur’an (A’râf 89 — dua son kısmı)
{
  source: "KURAN",
  ar: "عَلَى اللَّهِ تَوَكَّلْنَا رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ",
  tr: "Allah’a tevekkül ettik. Rabbimiz! Bizimle kavmimiz arasında hak ile hükmet.",
  de: "Auf Allah vertrauen wir. Unser Herr, entscheide zwischen uns und unserem Volk mit der Wahrheit."
},

// 66. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ",
  tr: "Allah’ım! Nimetinin yok olmasından Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Schwinden Deiner Gunst."
},

// 67. Gün — Kur’an (İbrahim 40–41)
{
  source: "KURAN",
  ar: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ * رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ",
  tr: "Rabbim! Beni ve soyumdan gelenleri namazı dosdoğru kılanlardan eyle. Rabbimiz! Duamı kabul buyur. Rabbimiz! Beni ve anne-babamı bağışla.",
  de: "Mein Herr, mache mich und meine Nachkommen zu denen, die das Gebet verrichten. Unser Herr, nimm mein Gebet an. Unser Herr, vergib mir und meinen Eltern."
},

// 68. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ صِحَّةً فِي إِيمَانٍ",
  tr: "Allah’ım! İmanla birlikte sağlık isterim.",
  de: "O Allah, ich bitte Dich um Gesundheit im Glauben."
},

// 69. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Rabbim! Bağışla, merhamet et. Merhametlilerin en hayırlısı Sensin.",
  de: "Mein Herr, vergib und erbarme Dich. Du bist der Beste der Barmherzigen."
},

// 70. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا يَهْدِينِي",
  tr: "Allah’ım! Bana hidayet edecek bir nur isterim.",
  de: "O Allah, ich bitte Dich um ein Licht, das mich leitet."
},

// 71. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
  tr: "Rabbimiz! Biz kendimize zulmettik. Eğer bizi bağışlamaz ve bize merhamet etmezsen mutlaka ziyana uğrayanlardan oluruz.",
  de: "Unser Herr, wir haben uns selbst Unrecht getan. Wenn Du uns nicht vergibst und Dich nicht unser erbarmst, werden wir zu den Verlierern gehören."
},

// 72. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رَوْحًا وَرَاحَةً فِي الدُّنْيَا وَالْآخِرَةِ",
  tr: "Allah’ım! Dünya ve ahirette huzur ve ferahlık isterim.",
  de: "O Allah, ich bitte Dich um Ruhe und Erleichterung im Diesseits und im Jenseits."
},

// 73. Gün — Kur’an (İbrahim 41)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
  tr: "Rabbim! Hesap gününde beni, anne-babamı ve bütün müminleri bağışla.",
  de: "Mein Herr, vergib mir, meinen Eltern und den Gläubigen am Tage der Abrechnung."
},

// 74. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ وَأَعُوذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ",
  tr: "Allah’ım! Rızanı ve cennetini isterim; gazabından ve cehenneminden Sana sığınırım.",
  de: "O Allah, ich bitte Dich um Dein Wohlgefallen und das Paradies und suche Zuflucht vor Deinem Zorn und dem Feuer."
},

// 75. Gün — Kur’an (Müminun 109)
{
  source: "KURAN",
  ar: "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Rabbimiz! İman ettik. Bizi bağışla, bize merhamet et. Sen merhametlilerin en hayırlısısın.",
  de: "Unser Herr, wir haben geglaubt. Vergib uns und erbarme Dich unser. Du bist der Beste der Barmherzigen."
},

// 76. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نَفْسًا رَاضِيَةً",
  tr: "Allah’ım! Razı olan bir nefis isterim.",
  de: "O Allah, ich bitte Dich um eine zufriedene Seele."
},

// 77. Gün — Kur’an (Baqarah 286 — dua başlangıcı)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
  tr: "Rabbimiz! Unutur veya yanılırsak bizi sorumlu tutma.",
  de: "Unser Herr, belaste uns nicht, wenn wir vergessen oder einen Fehler machen."
},

// 78. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ قَلْبًا سَلِيمًا وَلِسَانًا صَادِقًا",
  tr: "Allah’ım! Senden selim bir kalp ve doğru bir dil isterim.",
  de: "O Allah, ich bitte Dich um ein reines Herz und eine wahrhaftige Zunge."
},

// 79. Gün — Kur’an (Furkan 74)
{
  source: "KURAN",
  ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
  tr: "Rabbimiz! Eşlerimizi ve çocuklarımızı bize göz aydınlığı kıl.",
  de: "Unser Herr, schenke uns Freude durch unsere Ehepartner und Kinder."
},

// 80. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالسَّدَادَ",
  tr: "Allah’ım! Senden hidayet ve isabetli kararlar isterim.",
  de: "O Allah, ich bitte Dich um Rechtleitung und richtige Entscheidungen."
},

// 81. Gün — Kur’an (Yunus 85–86)
{
  source: "KURAN",
  ar: "عَلَى اللَّهِ تَوَكَّلْنَا رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظَّالِمِينَ * وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ",
  tr: "Allah’a tevekkül ettik. Rabbimiz! Bizi zalim topluluk için bir fitne kılma. Bizi rahmetinle inkârcı topluluktan kurtar.",
  de: "Auf Allah vertrauen wir. Unser Herr, mache uns nicht zur Versuchung für das ungerechte Volk. Und rette uns durch Deine Barmherzigkeit vor dem ungläubigen Volk."
},

// 82. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ صِدْقَ التَّوَكُّلِ عَلَيْكَ",
  tr: "Allah’ım! Senden Sana tam bir tevekkül isterim.",
  de: "O Allah, ich bitte Dich um aufrichtiges Vertrauen auf Dich."
},

// 83. Gün — Kur’an (İsra 24)
{
  source: "KURAN",
  ar: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
  tr: "Rabbim! Onlar beni küçükken yetiştirdikleri gibi Sen de onlara merhamet et.",
  de: "Mein Herr, erbarme Dich ihrer, wie sie sich meiner annahmen, als ich klein war."
},

// 84. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نَفْسًا تَقِيَّةً",
  tr: "Allah’ım! Senden takvâ sahibi bir nefis isterim.",
  de: "O Allah, ich bitte Dich um eine gottesfürchtige Seele."
},

// 85. Gün — Kur’an (A’râf 126)
{
  source: "KURAN",
  ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
  tr: "Rabbimiz! Üzerimize sabır yağdır ve bizi Müslümanlar olarak vefat ettir.",
  de: "Unser Herr, gieße Geduld über uns aus und lass uns als Muslime sterben."
},

// 86. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِقَّةَ الْقَلْبِ",
  tr: "Allah’ım! Kalp yumuşaklığı isterim.",
  de: "O Allah, ich bitte Dich um Sanftheit des Herzens."
},

// 87. Gün — Kur’an (Baqarah 286 — dua son kısmı)
{
  source: "KURAN",
  ar: "رَبَّنَا وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلَانَا",
  tr: "Rabbimiz! Bizi affet, bizi bağışla, bize merhamet et. Sen bizim Mevlâmızsın.",
  de: "Unser Herr, verzeihe uns, vergib uns und erbarme Dich unser. Du bist unser Beschützer."
},

// 88. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي وَجْهِي وَنُورًا فِي قَلْبِي",
  tr: "Allah’ım! Yüzüme nur, kalbime nur ver.",
  de: "O Allah, gib meinem Gesicht Licht und meinem Herzen Licht."
},

// 89. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ",
  tr: "Rabbimiz! Gizlediğimizi de açıkladığımızı da Sen bilirsin.",
  de: "Unser Herr, Du weißt, was wir verbergen und was wir offenlegen."
},

// 90. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضًا لَا سَخَطَ بَعْدَهُ",
  tr: "Allah’ım! Ardından gazap olmayan bir rıza isterim.",
  de: "O Allah, ich bitte Dich um ein Wohlgefallen, dem kein Zorn folgt."
},

// 91. Gün — Kur’an (A’râf 89)
{
  source: "KURAN",
  ar: "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
  tr: "Rabbimiz! Bizimle kavmimiz arasında hak ile hükmet. Sen hükmedenlerin en hayırlısısın.",
  de: "Unser Herr, entscheide zwischen uns und unserem Volk mit der Wahrheit. Du bist der Beste der Entscheidenden."
},

// 92. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رَحْمَةً تُهْدِي بِهَا قَلْبِي",
  tr: "Allah’ım! Kalbimi hidayete erdirecek bir rahmet isterim.",
  de: "O Allah, ich bitte Dich um eine Barmherzigkeit, durch die Du mein Herz leitest."
},

// 93. Gün — Kur’an (İbrahim 40)
{
  source: "KURAN",
  ar: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي",
  tr: "Rabbim! Beni ve soyumdan gelenleri namazı dosdoğru kılanlardan eyle.",
  de: "Mein Herr, mache mich und meine Nachkommen zu denen, die das Gebet verrichten."
},

// 94. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِقَّةَ الْقَلْبِ وَذِكْرَكَ دَائِمًا",
  tr: "Allah’ım! Kalp yumuşaklığı ve Seni sürekli zikretmeyi isterim.",
  de: "O Allah, ich bitte Dich um Sanftheit des Herzens und ständiges Gedenken an Dich."
},

// 95. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Rabbim! Bağışla, merhamet et. Merhametlilerin en hayırlısı Sensin.",
  de: "Mein Herr, vergib und erbarme Dich. Du bist der Beste der Barmherzigen."
},

// 96. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي دِينِي وَدُنْيَايَ",
  tr: "Allah’ım! Dinimde ve dünyamda afiyet isterim.",
  de: "O Allah, ich bitte Dich um Wohlbefinden in meiner Religion und in meinem weltlichen Leben."
},

// 97. Gün — Kur’an (Baqarah 127)
{
  source: "KURAN",
  ar: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
  tr: "Rabbimiz! Bizden kabul buyur. Şüphesiz Sen işiten ve bilensin.",
  de: "Unser Herr, nimm es von uns an. Du bist wahrlich der Hörende, der Wissende."
},

// 98. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي سَمْعِي وَنُورًا فِي بَصَرِي",
  tr: "Allah’ım! İşitmemde nur, görmemde nur ver.",
  de: "O Allah, gib meinem Gehör Licht und meinem Blick Licht."
},

// 99. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ لِي وَلِأَخِي وَأَدْخِلْنَا فِي رَحْمَتِكَ",
  tr: "Rabbim! Beni ve kardeşimi bağışla, bizi rahmetine dahil et.",
  de: "Mein Herr, vergib mir und meinem Bruder und nimm uns in Deine Barmherzigkeit auf."
},

// 100. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ سَعَادَةً لَا تَشْقَى بَعْدَهَا",
  tr: "Allah’ım! Ardından bedbahtlık gelmeyen bir saadet isterim.",
  de: "O Allah, ich bitte Dich um ein Glück, dem kein Unglück folgt."
},

// 101. Gün — Kur’an (Taha 114)
{
  source: "KURAN",
  ar: "رَبِّ زِدْنِي عِلْمًا",
  tr: "Rabbim! İlmimi artır.",
  de: "Mein Herr, mehre mein Wissen."
},

// 102. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى",
  tr: "Allah’ım! Senden hidayet ve takva isterim.",
  de: "O Allah, ich bitte Dich um Rechtleitung und Gottesfurcht."
},

// 103. Gün — Kur’an (Bakara 286)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
  tr: "Rabbimiz! Unutur veya yanılırsak bizi sorumlu tutma.",
  de: "Unser Herr, belaste uns nicht, wenn wir vergessen oder einen Fehler machen."
},

// 104. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي وَوَسِّعْ لِي فِي دَارِي",
  tr: "Allah’ım! Günahımı bağışla ve evimde genişlik ver.",
  de: "O Allah, vergib mir meine Sünden und erweitere mein Heim."
},

// 105. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا",
  tr: "Rabbimiz! Biz kendimize zulmettik.",
  de: "Unser Herr, wir haben uns selbst Unrecht getan."
},

// 106. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ بَارِكْ لِي فِيمَا رَزَقْتَنِي",
  tr: "Allah’ım! Bana verdiğin rızıkta bereket kıl.",
  de: "O Allah, segne das, womit Du mich versorgt hast."
},

// 107. Gün — Kur’an (Furkan 74)
{
  source: "KURAN",
  ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
  tr: "Rabbimiz! Eşlerimizi ve çocuklarımızı bize göz aydınlığı kıl.",
  de: "Unser Herr, schenke uns Freude durch unsere Ehepartner und Kinder."
},

// 108. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ",
  tr: "Allah’ım! Nimetinin yok olmasından Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Schwinden Deiner Gunst."
},

// 109. Gün — Kur’an (İbrahim 40)
{
  source: "KURAN",
  ar: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ",
  tr: "Rabbim! Beni namazı dosdoğru kılanlardan eyle.",
  de: "Mein Herr, mache mich zu denen, die das Gebet verrichten."
},

// 110. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي",
  tr: "Allah’ım! Nefsimin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel meiner Seele."
},

// 111. Gün — Kur’an (Ali İmran 8)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
  tr: "Rabbimiz! Bizi hidayete erdirdikten sonra kalplerimizi eğriltme.",
  de: "Unser Herr, lass unsere Herzen nicht abirren, nachdem Du uns rechtgeleitet hast."
},

// 112. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ",
  tr: "Allah’ım! Kederden ve hüzünden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor Kummer und Traurigkeit."
},

// 113. Gün — Kur’an (Bakara 250)
{
  source: "KURAN",
  ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا",
  tr: "Rabbimiz! Üzerimize sabır yağdır.",
  de: "Unser Herr, gieße Geduld über uns aus."
},

// 114. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ طَهِّرْ قَلْبِي",
  tr: "Allah’ım! Kalbimi temizle.",
  de: "O Allah, reinige mein Herz."
},

// 115. Gün — Kur’an (Kasas 24)
{
  source: "KURAN",
  ar: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
  tr: "Rabbim! Bana indireceğin her hayra muhtacım.",
  de: "Mein Herr, ich bin bedürftig nach jedem Guten, das Du zu mir herabsendest."
},

// 116. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ",
  tr: "Allah’ım! Afiyet isterim.",
  de: "O Allah, ich bitte Dich um Wohlbefinden."
},

// 117. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ وَارْحَمْ",
  tr: "Rabbim! Bağışla, merhamet et.",
  de: "Mein Herr, vergib und erbarme Dich."
},

// 118. Gün — Hadis (Nesai)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضَاكَ",
  tr: "Allah’ım! Rızanı isterim.",
  de: "O Allah, ich bitte Dich um Dein Wohlgefallen."
},

// 119. Gün — Kur’an (İbrahim 41)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ",
  tr: "Rabbim! Beni ve anne-babamı bağışla.",
  de: "Mein Herr, vergib mir und meinen Eltern."
},

// 120. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ",
  tr: "Allah’ım! Şiddetli beladan Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor schwerer Prüfung."
},

// 121. Gün — Kur’an (A’râf 89)
{
  source: "KURAN",
  ar: "عَلَى اللَّهِ تَوَكَّلْنَا",
  tr: "Biz Allah’a tevekkül ettik.",
  de: "Auf Allah vertrauen wir."
},

// 122. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ النُّورِ",
  tr: "Allah’ım! Beni nur ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Lichts."
},

// 123. Gün — Kur’an (Taha 25–28)
{
  source: "KURAN",
  ar: "رَبِّ اشْرَحْ لِي صَدْرِي * وَيَسِّرْ لِي أَمْرِي",
  tr: "Rabbim! Göğsüme genişlik ver, işimi kolaylaştır.",
  de: "Mein Herr, öffne mir meine Brust und erleichtere mir meine Angelegenheit."
},

// 124. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ قَلْبِي",
  tr: "Allah’ım! Kalbimi nurlandır.",
  de: "O Allah, erleuchte mein Herz."
},

// 125. Gün — Kur’an (İsra 80)
{
  source: "KURAN",
  ar: "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ",
  tr: "Rabbim! Beni doğrulukla girdireceğin yere girdir.",
  de: "Mein Herr, lass mich aufrichtig eintreten."
},

// 126. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ قَلْبًا خَاشِعًا",
  tr: "Allah’ım! Huşu sahibi bir kalp isterim.",
  de: "O Allah, ich bitte Dich um ein demütiges Herz."
},

// 127. Gün — Kur’an (İsra 24)
{
  source: "KURAN",
  ar: "رَبِّ ارْحَمْهُمَا",
  tr: "Rabbim! Onlara merhamet et.",
  de: "Mein Herr, erbarme Dich ihrer."
},

// 128. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ بَصَرِي",
  tr: "Allah’ım! Gözümü nurlandır.",
  de: "O Allah, erleuchte meinen Blick."
},

// 129. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ لِي وَلِأَخِي",
  tr: "Rabbim! Beni ve kardeşimi bağışla.",
  de: "Mein Herr, vergib mir und meinem Bruder."
},

// 130. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الرَّحْمَةِ",
  tr: "Allah’ım! Beni merhamet ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Barmherzigkeit."
},

// 131. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ وَارْحَمْ",
  tr: "Rabbim! Bağışla, merhamet et.",
  de: "Mein Herr, vergib und erbarme Dich."
},

// 132. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ",
  tr: "Allah’ım! Yaptığım kötülüklerin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel dessen, was ich getan habe."
},

// 133. Gün — Kur’an (Baqarah 201)
{
  source: "KURAN",
  ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً",
  tr: "Rabbimiz! Bize dünyada iyilik ver.",
  de: "Unser Herr, gib uns Gutes im Diesseits."
},

// 134. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الصِّدْقِ",
  tr: "Allah’ım! Beni doğruluk ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Wahrhaftigkeit."
},

// 135. Gün — Kur’an (İsra 80)
{
  source: "KURAN",
  ar: "وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ",
  tr: "Beni doğrulukla çıkaracağın yerden çıkar.",
  de: "Lass mich aufrichtig hinausgehen."
},

// 136. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ صَدْرِي",
  tr: "Allah’ım! Göğsümü nurlandır.",
  de: "O Allah, erleuchte meine Brust."
},

// 137. Gün — Kur’an (A’râf 155)
{
  source: "KURAN",
  ar: "أَنتَ وَلِيُّنَا فَاغْفِرْ لَنَا",
  tr: "Sen bizim velimizsin. Bizi bağışla.",
  de: "Du bist unser Beschützer. Vergib uns."
},

// 138. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رَوْحًا وَرَاحَةً",
  tr: "Allah’ım! Huzur ve ferahlık isterim.",
  de: "O Allah, ich bitte Dich um Ruhe und Erleichterung."
},

// 139. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي",
  tr: "Rabbimiz! Gizlediğimizi Sen bilirsin.",
  de: "Unser Herr, Du weißt, was wir verbergen."
},

// 140. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي سَمْعِي",
  tr: "Allah’ım! İşitmemde nur isterim.",
  de: "O Allah, gib meinem Gehör Licht."
},

// 141. Gün — Kur’an (Tahrim 8)
{
  source: "KURAN",
  ar: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا",
  tr: "Rabbimiz! Nurumuzu tamamla.",
  de: "Unser Herr, vollende unser Licht."
},

// 142. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْقُرْآنِ",
  tr: "Allah’ım! Beni Kur’an ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Qurans."
},

// 143. Gün — Kur’an (İsra 24)
{
  source: "KURAN",
  ar: "وَقُل رَّبِّ ارْحَمْهُمَا",
  tr: "De ki: Rabbim! Onlara merhamet et.",
  de: "Sprich: Mein Herr, erbarme Dich ihrer."
},

// 144. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ وَجْهِي",
  tr: "Allah’ım! Yüzümü nurlandır.",
  de: "O Allah, erleuchte mein Gesicht."
},

// 145. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَأَدْخِلْنَا فِي رَحْمَتِكَ",
  tr: "Bizi rahmetine dahil et.",
  de: "Nimm uns in Deine Barmherzigkeit auf."
},

// 146. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ قَلْبًا نَقِيًّا",
  tr: "Allah’ım! Tertemiz bir kalp isterim.",
  de: "O Allah, ich bitte Dich um ein reines Herz."
},

// 147. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Rabbim! Bağışla, merhamet et. Merhametlilerin en hayırlısı Sensin.",
  de: "Mein Herr, vergib und erbarme Dich. Du bist der Beste der Barmherzigen."
},

// 148. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي قَلْبِي",
  tr: "Allah’ım! Kalbime nur ver.",
  de: "O Allah, gib meinem Herzen Licht."
},

// 149. Gün — Kur’an (İbrahim 41)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ",
  tr: "Rabbim! Beni, anne-babamı ve müminleri bağışla.",
  de: "Mein Herr, vergib mir, meinen Eltern und den Gläubigen."
},

// 150. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضًا بَعْدَ الْقَضَاءِ",
  tr: "Allah’ım! Hükmünden sonra rızanı isterim.",
  de: "O Allah, ich bitte Dich um Zufriedenheit nach Deinem Urteil."
},

// 151. Gün — Kur’an (Taha 25–28)
{
  source: "KURAN",
  ar: "رَبِّ اشْرَحْ لِي صَدْرِي * وَيَسِّرْ لِي أَمْرِي",
  tr: "Rabbim! Göğsüme genişlik ver, işimi kolaylaştır.",
  de: "Mein Herr, öffne mir meine Brust und erleichtere mir meine Angelegenheit."
},

// 152. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ سَمْعِي وَبَصَرِي",
  tr: "Allah’ım! İşitmemi ve görmemi nurlandır.",
  de: "O Allah, erleuchte mein Gehör und meinen Blick."
},

// 153. Gün — Kur’an (A’râf 155)
{
  source: "KURAN",
  ar: "فَاغْفِرْ لَنَا وَارْحَمْنَا",
  tr: "Bizi bağışla ve bize merhamet et.",
  de: "Vergib uns und erbarme Dich unser."
},

// 154. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ صِدْقًا فِي الْقَوْلِ وَالْعَمَلِ",
  tr: "Allah’ım! Sözde ve amelde doğruluk isterim.",
  de: "O Allah, ich bitte Dich um Aufrichtigkeit in Wort und Tat."
},

// 155. Gün — Kur’an (İsra 80)
{
  source: "KURAN",
  ar: "وَاجْعَل لِّي مِن لَّدُنكَ سُلْطَانًا نَّصِيرًا",
  tr: "Bana katından yardımcı bir güç ver.",
  de: "Gib mir von Dir eine unterstützende Kraft."
},

// 156. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِقَّةَ الْقَلْبِ",
  tr: "Allah’ım! Kalp yumuşaklığı isterim.",
  de: "O Allah, ich bitte Dich um Sanftheit des Herzens."
},

// 157. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ",
  tr: "Rabbimiz! Gizlediğimizi de açıkladığımızı da Sen bilirsin.",
  de: "Unser Herr, Du weißt, was wir verbergen und was wir offenlegen."
},

// 158. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ النُّورِ",
  tr: "Allah’ım! Beni nur ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Lichts."
},

// 159. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ وَارْحَمْ",
  tr: "Rabbim! Bağışla, merhamet et.",
  de: "Mein Herr, vergib und erbarme Dich."
},

// 160. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ",
  tr: "Allah’ım! Yaptığım kötülüklerin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel dessen, was ich getan habe."
},

// 161. Gün — Kur’an (Baqarah 286)
{
  source: "KURAN",
  ar: "رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا",
  tr: "Rabbimiz! Bize ağır yük yükleme.",
  de: "Unser Herr, lege uns keine schwere Last auf."
},

// 162. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِقَّةَ الْقَلْبِ وَصِدْقَ اللِّسَانِ",
  tr: "Allah’ım! Kalp yumuşaklığı ve doğru bir dil isterim.",
  de: "O Allah, ich bitte Dich um Sanftheit des Herzens und Wahrhaftigkeit der Zunge."
},

// 163. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا",
  tr: "Eğer bizi bağışlamaz ve bize merhamet etmezsen...",
  de: "Wenn Du uns nicht vergibst und Dich unser nicht erbarmst..."
},

// 164. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ قَلْبِي وَصَدْرِي",
  tr: "Allah’ım! Kalbimi ve göğsümü nurlandır.",
  de: "O Allah, erleuchte mein Herz und meine Brust."
},

// 165. Gün — Kur’an (İbrahim 40)
{
  source: "KURAN",
  ar: "وَمِنْ ذُرِّيَّتِي",
  tr: "Soyumdan gelenleri de (namazı kılanlardan eyle).",
  de: "Und auch meine Nachkommen (zu Betenden mache)."
},

// 166. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْإِيمَانِ",
  tr: "Allah’ım! Beni iman ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Glaubens."
},

// 167. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Sen merhametlilerin en hayırlısısın.",
  de: "Du bist der Beste der Barmherzigen."
},

// 168. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا فِي النَّفْسِ",
  tr: "Allah’ım! Nefsimdeki kötülüklerden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel in meiner Seele."
},

// 169. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَارْحَمْنَا",
  tr: "Bize merhamet et.",
  de: "Erbarme Dich unser."
},

// 170. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا يَهْدِينِي",
  tr: "Allah’ım! Bana hidayet edecek bir nur isterim.",
  de: "O Allah, ich bitte Dich um ein Licht, das mich leitet."
},

// 171. Gün — Kur’an (İsra 24)
{
  source: "KURAN",
  ar: "كَمَا رَبَّيَانِي صَغِيرًا",
  tr: "Onlar beni küçükken yetiştirdikleri gibi...",
  de: "Wie sie mich aufzogen, als ich klein war..."
},

// 172. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ طَهِّرْ نَفْسِي",
  tr: "Allah’ım! Nefsimi temizle.",
  de: "O Allah, reinige meine Seele."
},

// 173. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "وَمَا نُعْلِنُ",
  tr: "Açıkladığımızı da (Sen bilirsin).",
  de: "Und was wir offenlegen."
},

// 174. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الرَّحْمَةِ",
  tr: "Allah’ım! Beni merhamet ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Barmherzigkeit."
},

// 175. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ",
  tr: "Rabbim! Bağışla.",
  de: "Mein Herr, vergib."
},

// 176. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ",
  tr: "Allah’ım! Yaptığım kötülüklerin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel dessen, was ich getan habe."
},

// 177. Gün — Kur’an (A’râf 155)
{
  source: "KURAN",
  ar: "أَنتَ وَلِيُّنَا",
  tr: "Sen bizim velimizsin.",
  de: "Du bist unser Beschützer."
},

// 178. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رَوْحًا وَرَاحَةً",
  tr: "Allah’ım! Huzur ve ferahlık isterim.",
  de: "O Allah, ich bitte Dich um Ruhe und Erleichterung."
},

// 179. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "رَبَّنَا إِنَّكَ تَعْلَمُ",
  tr: "Rabbimiz! Sen bilirsin.",
  de: "Unser Herr, Du weißt."
},

// 180. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ وَجْهِي",
  tr: "Allah’ım! Yüzümü nurlandır.",
  de: "O Allah, erleuchte mein Gesicht."
},

// 181. Gün — Kur’an (Tahrim 8)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لَنَا",
  tr: "Bizi bağışla.",
  de: "Vergib uns."
},

// 182. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْقُرْآنِ",
  tr: "Allah’ım! Beni Kur’an ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Qurans."
},

// 183. Gün — Kur’an (İsra 24)
{
  source: "KURAN",
  ar: "وَقُل رَّبِّ ارْحَمْهُمَا",
  tr: "De ki: Rabbim! Onlara merhamet et.",
  de: "Sprich: Mein Herr, erbarme Dich ihrer."
},

// 184. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ صَدْرِي",
  tr: "Allah’ım! Göğsümü nurlandır.",
  de: "O Allah, erleuchte meine Brust."
},

// 185. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لِي",
  tr: "Beni bağışla.",
  de: "Vergib mir."
},

// 186. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ قَلْبًا سَلِيمًا",
  tr: "Allah’ım! Selim bir kalp isterim.",
  de: "O Allah, ich bitte Dich um ein reines Herz."
},

// 187. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَارْحَمْ",
  tr: "Merhamet et.",
  de: "Erbarme Dich."
},

// 188. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي",
  tr: "Allah’ım! Nefsimin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel meiner Seele."
},

// 189. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "مَا نُخْفِي وَمَا نُعْلِنُ",
  tr: "Gizlediğimizi de açıkladığımızı da (Sen bilirsin).",
  de: "Was wir verbergen und was wir offenlegen."
},

// 190. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الرِّضَا",
  tr: "Allah’ım! Beni rıza ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Zufriedenheit."
},

// 191. Gün — Kur’an (A’râf 155)
{
  source: "KURAN",
  ar: "فَاغْفِرْ لَنَا",
  tr: "Bizi bağışla.",
  de: "Vergib uns."
},

// 192. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ قَلْبِي",
  tr: "Allah’ım! Kalbimi nurlandır.",
  de: "O Allah, erleuchte mein Herz."
},

// 193. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "رَبَّنَا إِنَّكَ تَعْلَمُ",
  tr: "Rabbimiz! Sen bilirsin.",
  de: "Unser Herr, Du weißt."
},

// 194. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رَوْحًا وَرَاحَةً",
  tr: "Allah’ım! Huzur ve ferahlık isterim.",
  de: "O Allah, ich bitte Dich um Ruhe und Erleichterung."
},

// 195. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Sen merhametlilerin en hayırlısısın.",
  de: "Du bist der Beste der Barmherzigen."
},

// 196. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ",
  tr: "Allah’ım! Yaptığım kötülüklerin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel dessen, was ich getan habe."
},

// 197. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَارْحَمْنَا",
  tr: "Bize merhamet et.",
  de: "Erbarme Dich unser."
},

// 198. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ النُّورِ",
  tr: "Allah’ım! Beni nur ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Lichts."
},

// 199. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "مَا نُخْفِي وَمَا نُعْلِنُ",
  tr: "Gizlediğimizi de açıkladığımızı da Sen bilirsin.",
  de: "Was wir verbergen und was wir offenlegen."
},

// 200. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ وَجْهِي وَقَلْبِي",
  tr: "Allah’ım! Yüzümü ve kalbimi nurlandır.",
  de: "O Allah, erleuchte mein Gesicht und mein Herz."
},

// 201. Gün — Kur’an (Baqarah 286)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ",
  tr: "Rabbimiz! Gücümüzün yetmediği şeyleri bize yükleme.",
  de: "Unser Herr, belaste uns nicht mit dem, was wir nicht tragen können."
},

// 202. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ زَيِّنِّي بِزِينَةِ الْإِيمَانِ",
  tr: "Allah’ım! Beni iman ziynetiyle süsle.",
  de: "O Allah, schmücke mich mit dem Schmuck des Glaubens."
},

// 203. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
  tr: "Ziyana uğrayanlardan oluruz.",
  de: "Wir würden zu den Verlierern gehören."
},

// 204. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ طَهِّرْ قَلْبِي مِنَ النِّفَاقِ",
  tr: "Allah’ım! Kalbimi nifaktan temizle.",
  de: "O Allah, reinige mein Herz von Heuchelei."
},

// 205. Gün — Kur’an (İbrahim 40)
{
  source: "KURAN",
  ar: "رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
  tr: "Rabbimiz! Duamı kabul buyur.",
  de: "Unser Herr, nimm mein Gebet an."
},

// 206. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الصِّدْقِ",
  tr: "Allah’ım! Beni doğruluk ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Wahrhaftigkeit."
},

// 207. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ",
  tr: "Rabbim! Bağışla.",
  de: "Mein Herr, vergib."
},

// 208. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ دَابَّةٍ",
  tr: "Allah’ım! Yaratılmış her canlının şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel aller Geschöpfe."
},

// 209. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَارْحَمْنَا",
  tr: "Bize merhamet et.",
  de: "Erbarme Dich unser."
},

// 210. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي طَرِيقِي",
  tr: "Allah’ım! Yoluma nur ver.",
  de: "O Allah, gib meinem Weg Licht."
},

// 211. Gün — Kur’an (İsra 24)
{
  source: "KURAN",
  ar: "وَقُل رَّبِّ ارْحَمْهُمَا",
  tr: "De ki: Rabbim! Onlara merhamet et.",
  de: "Sprich: Mein Herr, erbarme Dich ihrer."
},

// 212. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ بَصَرِي وَسَمْعِي",
  tr: "Allah’ım! Gözümü ve kulağımı nurlandır.",
  de: "O Allah, erleuchte mein Gehör und meinen Blick."
},

// 213. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "إِنَّكَ تَعْلَمُ مَا نُخْفِي",
  tr: "Şüphesiz gizlediğimizi Sen bilirsin.",
  de: "Du weißt, was wir verbergen."
},

// 214. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الرَّحْمَةِ",
  tr: "Allah’ım! Beni merhamet ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Barmherzigkeit."
},

// 215. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَارْحَمْ",
  tr: "Merhamet et.",
  de: "Erbarme Dich."
},

// 216. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي",
  tr: "Allah’ım! Nefsimin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel meiner Seele."
},

// 217. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لِي",
  tr: "Beni bağışla.",
  de: "Vergib mir."
},

// 218. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ قَلْبًا سَلِيمًا",
  tr: "Allah’ım! Selim bir kalp isterim.",
  de: "O Allah, ich bitte Dich um ein reines Herz."
},

// 219. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "وَمَا نُعْلِنُ",
  tr: "Açıkladığımızı da Sen bilirsin.",
  de: "Und was wir offenlegen."
},

// 220. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ وَجْهِي",
  tr: "Allah’ım! Yüzümü nurlandır.",
  de: "O Allah, erleuchte mein Gesicht."
},

// 221. Gün — Kur’an (Tahrim 8)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لَنَا",
  tr: "Bizi bağışla.",
  de: "Vergib uns."
},

// 222. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْقُرْآنِ",
  tr: "Allah’ım! Beni Kur’an ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Qurans."
},

// 223. Gün — Kur’an (İsra 24)
{
  source: "KURAN",
  ar: "كَمَا رَبَّيَانِي صَغِيرًا",
  tr: "Onlar beni küçükken yetiştirdikleri gibi...",
  de: "Wie sie mich aufzogen, als ich klein war..."
},

// 224. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ صَدْرِي",
  tr: "Allah’ım! Göğsümü nurlandır.",
  de: "O Allah, erleuchte meine Brust."
},

// 225. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَارْحَمْنَا",
  tr: "Bize merhamet et.",
  de: "Erbarme Dich unser."
},

// 226. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِقَّةَ الْقَلْبِ",
  tr: "Allah’ım! Kalp yumuşaklığı isterim.",
  de: "O Allah, ich bitte Dich um Sanftheit des Herzens."
},

// 227. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Sen merhametlilerin en hayırlısısın.",
  de: "Du bist der Beste der Barmherzigen."
},

// 228. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ",
  tr: "Allah’ım! Yaptığım kötülüklerin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel dessen, was ich getan habe."
},

// 229. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لِي",
  tr: "Beni bağışla.",
  de: "Vergib mir."
},

// 230. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الرِّضَا",
  tr: "Allah’ım! Beni rıza ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Zufriedenheit."
},

// 231. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "رَبَّنَا إِنَّكَ تَعْلَمُ",
  tr: "Rabbimiz! Sen bilirsin.",
  de: "Unser Herr, Du weißt."
},

// 232. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ قَلْبِي",
  tr: "Allah’ım! Kalbimi nurlandır.",
  de: "O Allah, erleuchte mein Herz."
},

// 233. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَارْحَمْ",
  tr: "Merhamet et.",
  de: "Erbarme Dich."
},

// 234. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رَوْحًا وَرَاحَةً",
  tr: "Allah’ım! Huzur ve ferahlık isterim.",
  de: "O Allah, ich bitte Dich um Ruhe und Erleichterung."
},

// 235. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَارْحَمْنَا",
  tr: "Bize merhamet et.",
  de: "Erbarme Dich unser."
},

// 236. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي",
  tr: "Allah’ım! Nefsimin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel meiner Seele."
},

// 237. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "مَا نُخْفِي وَمَا نُعْلِنُ",
  tr: "Gizlediğimizi de açıkladığımızı da Sen bilirsin.",
  de: "Was wir verbergen und was wir offenlegen."
},

// 238. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ النُّورِ",
  tr: "Allah’ım! Beni nur ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Lichts."
},

// 239. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ",
  tr: "Rabbim! Bağışla.",
  de: "Mein Herr, vergib."
},

// 240. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ وَجْهِي وَقَلْبِي",
  tr: "Allah’ım! Yüzümü ve kalbimi nurlandır.",
  de: "O Allah, erleuchte mein Gesicht und mein Herz."
},

// 241. Gün — Kur’an (Baqarah 286)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا",
  tr: "Rabbimiz! Unutursak bizi sorumlu tutma.",
  de: "Unser Herr, belaste uns nicht, wenn wir vergessen."
},

// 242. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ زَيِّنِّي بِزِينَةِ الْإِيمَانِ",
  tr: "Allah’ım! Beni iman ziynetiyle süsle.",
  de: "O Allah, schmücke mich mit dem Schmuck des Glaubens."
},

// 243. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "ظَلَمْنَا أَنْفُسَنَا",
  tr: "Biz kendimize zulmettik.",
  de: "Wir haben uns selbst Unrecht getan."
},

// 244. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ طَهِّرْ قَلْبِي",
  tr: "Allah’ım! Kalbimi temizle.",
  de: "O Allah, reinige mein Herz."
},

// 245. Gün — Kur’an (İbrahim 40)
{
  source: "KURAN",
  ar: "وَمِنْ ذُرِّيَّتِي",
  tr: "Soyumdan gelenleri de (namazı kılanlardan eyle).",
  de: "Und auch meine Nachkommen (zu Betenden mache)."
},

// 246. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْإِيمَانِ",
  tr: "Allah’ım! Beni iman ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Glaubens."
},

// 247. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَارْحَمْ",
  tr: "Merhamet et.",
  de: "Erbarme Dich."
},

// 248. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ دَابَّةٍ",
  tr: "Allah’ım! Yaratılmış her canlının şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel aller Geschöpfe."
},

// 249. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لِي",
  tr: "Beni bağışla.",
  de: "Vergib mir."
},

// 250. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي طَرِيقِي",
  tr: "Allah’ım! Yoluma nur ver.",
  de: "O Allah, gib meinem Weg Licht."
},

// 251. Gün — Kur’an (Baqarah 286)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا",
  tr: "Rabbimiz! Bizden öncekilere yüklediğin gibi bize ağır yük yükleme.",
  de: "Unser Herr, lege uns keine Last auf wie denen vor uns."
},

// 252. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ زَيِّنِّي بِزِينَةِ الصَّالِحِينَ",
  tr: "Allah’ım! Beni salih kullarının ziynetiyle süsle.",
  de: "O Allah, schmücke mich mit dem Schmuck der Rechtschaffenen."
},

// 253. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "وَإِن لَّمْ تَغْفِرْ لَنَا",
  tr: "Eğer bizi bağışlamazsan...",
  de: "Wenn Du uns nicht vergibst..."
},

// 254. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ طَهِّرْ نَفْسِي وَقَلْبِي",
  tr: "Allah’ım! Nefsimi ve kalbimi temizle.",
  de: "O Allah, reinige meine Seele und mein Herz."
},

// 255. Gün — Kur’an (İbrahim 40)
{
  source: "KURAN",
  ar: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ",
  tr: "Rabbim! Beni namazı dosdoğru kılanlardan eyle.",
  de: "Mein Herr, mache mich zu denen, die das Gebet verrichten."
},

// 256. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْخَيْرِ",
  tr: "Allah’ım! Beni hayır ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Guten."
},

// 257. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَارْحَمْ",
  tr: "Merhamet et.",
  de: "Erbarme Dich."
},

// 258. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا فِي النَّفْسِ",
  tr: "Allah’ım! Nefsimdeki kötülüklerden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel in meiner Seele."
},

// 259. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لِي",
  tr: "Beni bağışla.",
  de: "Vergib mir."
},

// 260. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي قَلْبِي",
  tr: "Allah’ım! Kalbime nur ver.",
  de: "O Allah, gib meinem Herzen Licht."
},

// 261. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "إِنَّكَ تَعْلَمُ مَا نُخْفِي",
  tr: "Şüphesiz gizlediğimizi Sen bilirsin.",
  de: "Du weißt, was wir verbergen."
},

// 262. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ بَصَرِي",
  tr: "Allah’ım! Gözümü nurlandır.",
  de: "O Allah, erleuchte meinen Blick."
},

// 263. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Sen merhametlilerin en hayırlısısın.",
  de: "Du bist der Beste der Barmherzigen."
},

// 264. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الرَّحْمَةِ",
  tr: "Allah’ım! Beni merhamet ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Barmherzigkeit."
},

// 265. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَارْحَمْنَا",
  tr: "Bize merhamet et.",
  de: "Erbarme Dich unser."
},

// 266. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ",
  tr: "Allah’ım! Yaptığım kötülüklerin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel dessen, was ich getan habe."
},

// 267. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "مَا نُعْلِنُ",
  tr: "Açıkladığımızı da Sen bilirsin.",
  de: "Und was wir offenlegen."
},

// 268. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ النُّورِ",
  tr: "Allah’ım! Beni nur ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Lichts."
},

// 269. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ",
  tr: "Rabbim! Bağışla.",
  de: "Mein Herr, vergib."
},

// 270. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ وَجْهِي",
  tr: "Allah’ım! Yüzümü nurlandır.",
  de: "O Allah, erleuchte mein Gesicht."
},

// 271. Gün — Kur’an (Baqarah 286)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا",
  tr: "Rabbimiz! Unutursak bizi sorumlu tutma.",
  de: "Unser Herr, belaste uns nicht, wenn wir vergessen."
},

// 272. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ زَيِّنِّي بِزِينَةِ الْإِيمَانِ",
  tr: "Allah’ım! Beni iman ziynetiyle süsle.",
  de: "O Allah, schmücke mich mit dem Schmuck des Glaubens."
},

// 273. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "ظَلَمْنَا أَنْفُسَنَا",
  tr: "Biz kendimize zulmettik.",
  de: "Wir haben uns selbst Unrecht getan."
},

// 274. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ طَهِّرْ قَلْبِي",
  tr: "Allah’ım! Kalbimi temizle.",
  de: "O Allah, reinige mein Herz."
},

// 275. Gün — Kur’an (İbrahim 40)
{
  source: "KURAN",
  ar: "وَمِنْ ذُرِّيَّتِي",
  tr: "Soyumdan gelenleri de (namazı kılanlardan eyle).",
  de: "Und auch meine Nachkommen (zu Betenden mache)."
},

// 276. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْإِيمَانِ",
  tr: "Allah’ım! Beni iman ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Glaubens."
},

// 277. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَارْحَمْ",
  tr: "Merhamet et.",
  de: "Erbarme Dich."
},

// 278. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ دَابَّةٍ",
  tr: "Allah’ım! Yaratılmış her canlının şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel aller Geschöpfe."
},

// 279. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لِي",
  tr: "Beni bağışla.",
  de: "Vergib mir."
},

// 280. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي طَرِيقِي",
  tr: "Allah’ım! Yoluma nur ver.",
  de: "O Allah, gib meinem Weg Licht."
},

// 281. Gün — Kur’an (Baqarah 286)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تَحْمِلْ عَلَيْنَا إِصْرًا",
  tr: "Rabbimiz! Bize ağır yük yükleme.",
  de: "Unser Herr, lege uns keine schwere Last auf."
},

// 282. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ زَيِّنِّي بِزِينَةِ الصَّالِحِينَ",
  tr: "Allah’ım! Beni salih kullarının ziynetiyle süsle.",
  de: "O Allah, schmücke mich mit dem Schmuck der Rechtschaffenen."
},

// 283. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "وَإِن لَّمْ تَغْفِرْ لَنَا",
  tr: "Eğer bizi bağışlamazsan...",
  de: "Wenn Du uns nicht vergibst..."
},

// 284. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ طَهِّرْ نَفْسِي",
  tr: "Allah’ım! Nefsimi temizle.",
  de: "O Allah, reinige meine Seele."
},

// 285. Gün — Kur’an (İbrahim 40)
{
  source: "KURAN",
  ar: "رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
  tr: "Rabbimiz! Duamı kabul buyur.",
  de: "Unser Herr, nimm mein Gebet an."
},

// 286. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الصِّدْقِ",
  tr: "Allah’ım! Beni doğruluk ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Wahrhaftigkeit."
},

// 287. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ",
  tr: "Rabbim! Bağışla.",
  de: "Mein Herr, vergib."
},

// 288. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا فِي النَّفْسِ",
  tr: "Allah’ım! Nefsimdeki kötülüklerden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel in meiner Seele."
},

// 289. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَارْحَمْنَا",
  tr: "Bize merhamet et.",
  de: "Erbarme Dich unser."
},

// 290. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي قَلْبِي",
  tr: "Allah’ım! Kalbime nur ver.",
  de: "O Allah, gib meinem Herzen Licht."
},

// 291. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "إِنَّكَ تَعْلَمُ مَا نُخْفِي",
  tr: "Şüphesiz gizlediğimizi Sen bilirsin.",
  de: "Du weißt, was wir verbergen."
},

// 292. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ بَصَرِي وَقَلْبِي",
  tr: "Allah’ım! Gözümü ve kalbimi nurlandır.",
  de: "O Allah, erleuchte meinen Blick und mein Herz."
},

// 293. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Sen merhametlilerin en hayırlısısın.",
  de: "Du bist der Beste der Barmherzigen."
},

// 294. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الرَّحْمَةِ",
  tr: "Allah’ım! Beni merhamet ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Barmherzigkeit."
},

// 295. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لِي",
  tr: "Beni bağışla.",
  de: "Vergib mir."
},

// 296. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ",
  tr: "Allah’ım! Yaptığım kötülüklerin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel dessen, was ich getan habe."
},

// 297. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "مَا نُعْلِنُ",
  tr: "Açıkladığımızı da Sen bilirsin.",
  de: "Und was wir offenlegen."
},

// 298. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ النُّورِ",
  tr: "Allah’ım! Beni nur ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Lichts."
},

// 299. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ",
  tr: "Rabbim! Bağışla.",
  de: "Mein Herr, vergib."
},

// 300. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ وَجْهِي وَقَلْبِي",
  tr: "Allah’ım! Yüzümü ve kalbimi nurlandır.",
  de: "O Allah, erleuchte mein Gesicht und mein Herz."
},

// 301. Gün — Kur’an (Baqarah 286)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
  tr: "Rabbimiz! Unutur veya yanılırsak bizi sorumlu tutma.",
  de: "Unser Herr, belaste uns nicht, wenn wir vergessen oder einen Fehler machen."
},

// 302. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ زَيِّنِّي بِزِينَةِ الْإِيمَانِ",
  tr: "Allah’ım! Beni iman ziynetiyle süsle.",
  de: "O Allah, schmücke mich mit dem Schmuck des Glaubens."
},

// 303. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا",
  tr: "Eğer bizi bağışlamaz ve bize merhamet etmezsen...",
  de: "Wenn Du uns nicht vergibst und Dich unser nicht erbarmst..."
},

// 304. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ طَهِّرْ قَلْبِي وَنَفْسِي",
  tr: "Allah’ım! Kalbimi ve nefsimi temizle.",
  de: "O Allah, reinige mein Herz und meine Seele."
},

// 305. Gün — Kur’an (İbrahim 40)
{
  source: "KURAN",
  ar: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ",
  tr: "Rabbim! Beni namazı dosdoğru kılanlardan eyle.",
  de: "Mein Herr, mache mich zu denen, die das Gebet verrichten."
},

// 306. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْخَيْرِ",
  tr: "Allah’ım! Beni hayır ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Guten."
},

// 307. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَارْحَمْ",
  tr: "Merhamet et.",
  de: "Erbarme Dich."
},

// 308. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي",
  tr: "Allah’ım! Nefsimin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel meiner Seele."
},

// 309. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لِي",
  tr: "Beni bağışla.",
  de: "Vergib mir."
},

// 310. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي قَلْبِي",
  tr: "Allah’ım! Kalbime nur ver.",
  de: "O Allah, gib meinem Herzen Licht."
},

// 311. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "إِنَّكَ تَعْلَمُ مَا نُخْفِي",
  tr: "Şüphesiz gizlediğimizi Sen bilirsin.",
  de: "Du weißt, was wir verbergen."
},

// 312. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ بَصَرِي",
  tr: "Allah’ım! Gözümü nurlandır.",
  de: "O Allah, erleuchte meinen Blick."
},

// 313. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Sen merhametlilerin en hayırlısısın.",
  de: "Du bist der Beste der Barmherzigen."
},

// 314. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الرَّحْمَةِ",
  tr: "Allah’ım! Beni merhamet ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Barmherzigkeit."
},

// 315. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَارْحَمْنَا",
  tr: "Bize merhamet et.",
  de: "Erbarme Dich unser."
},

// 316. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ",
  tr: "Allah’ım! Yaptığım kötülüklerin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel dessen, was ich getan habe."
},

// 317. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "مَا نُعْلِنُ",
  tr: "Açıkladığımızı da Sen bilirsin.",
  de: "Und was wir offenlegen."
},

// 318. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ النُّورِ",
  tr: "Allah’ım! Beni nur ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Lichts."
},

// 319. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ",
  tr: "Rabbim! Bağışla.",
  de: "Mein Herr, vergib."
},

// 320. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ وَجْهِي",
  tr: "Allah’ım! Yüzümü nurlandır.",
  de: "O Allah, erleuchte mein Gesicht."
},

// 321. Gün — Kur’an (Baqarah 286)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا",
  tr: "Rabbimiz! Unutursak bizi sorumlu tutma.",
  de: "Unser Herr, belaste uns nicht, wenn wir vergessen."
},

// 322. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ زَيِّنِّي بِزِينَةِ الْإِيمَانِ",
  tr: "Allah’ım! Beni iman ziynetiyle süsle.",
  de: "O Allah, schmücke mich mit dem Schmuck des Glaubens."
},

// 323. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "ظَلَمْنَا أَنْفُسَنَا",
  tr: "Biz kendimize zulmettik.",
  de: "Wir haben uns selbst Unrecht getan."
},

// 324. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ طَهِّرْ قَلْبِي",
  tr: "Allah’ım! Kalbimi temizle.",
  de: "O Allah, reinige mein Herz."
},

// 325. Gün — Kur’an (İbrahim 40)
{
  source: "KURAN",
  ar: "وَمِنْ ذُرِّيَّتِي",
  tr: "Soyumdan gelenleri de (namazı kılanlardan eyle).",
  de: "Und auch meine Nachkommen (zu Betenden mache)."
},

// 326. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْإِيمَانِ",
  tr: "Allah’ım! Beni iman ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Glaubens."
},

// 327. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَارْحَمْ",
  tr: "Merhamet et.",
  de: "Erbarme Dich."
},

// 328. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ دَابَّةٍ",
  tr: "Allah’ım! Yaratılmış her canlının şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel aller Geschöpfe."
},

// 329. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لِي",
  tr: "Beni bağışla.",
  de: "Vergib mir."
},

// 330. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي طَرِيقِي",
  tr: "Allah’ım! Yoluma nur ver.",
  de: "O Allah, gib meinem Weg Licht."
},

// 331. Gün — Kur’an (Baqarah 286)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تَحْمِلْ عَلَيْنَا إِصْرًا",
  tr: "Rabbimiz! Bize ağır yük yükleme.",
  de: "Unser Herr, lege uns keine schwere Last auf."
},

// 332. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ زَيِّنِّي بِزِينَةِ الصَّالِحِينَ",
  tr: "Allah’ım! Beni salih kullarının ziynetiyle süsle.",
  de: "O Allah, schmücke mich mit dem Schmuck der Rechtschaffenen."
},

// 333. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "وَإِن لَّمْ تَغْفِرْ لَنَا",
  tr: "Eğer bizi bağışlamazsan...",
  de: "Wenn Du uns nicht vergibst..."
},

// 334. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ طَهِّرْ نَفْسِي",
  tr: "Allah’ım! Nefsimi temizle.",
  de: "O Allah, reinige meine Seele."
},

// 335. Gün — Kur’an (İbrahim 40)
{
  source: "KURAN",
  ar: "رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
  tr: "Rabbimiz! Duamı kabul buyur.",
  de: "Unser Herr, nimm mein Gebet an."
},

// 336. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الصِّدْقِ",
  tr: "Allah’ım! Beni doğruluk ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Wahrhaftigkeit."
},

// 337. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ",
  tr: "Rabbim! Bağışla.",
  de: "Mein Herr, vergib."
},

// 338. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا فِي النَّفْسِ",
  tr: "Allah’ım! Nefsimdeki kötülüklerden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel in meiner Seele."
},

// 339. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَارْحَمْنَا",
  tr: "Bize merhamet et.",
  de: "Erbarme Dich unser."
},

// 340. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي قَلْبِي",
  tr: "Allah’ım! Kalbime nur ver.",
  de: "O Allah, gib meinem Herzen Licht."
},

// 341. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "إِنَّكَ تَعْلَمُ مَا نُخْفِي",
  tr: "Şüphesiz gizlediğimizi Sen bilirsin.",
  de: "Du weißt, was wir verbergen."
},

// 342. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ بَصَرِي وَقَلْبِي",
  tr: "Allah’ım! Gözümü ve kalbimi nurlandır.",
  de: "O Allah, erleuchte meinen Blick und mein Herz."
},

// 343. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَأَنتَ خَيْرُ الرَّاحِمِينَ",
  tr: "Sen merhametlilerin en hayırlısısın.",
  de: "Du bist der Beste der Barmherzigen."
},

// 344. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الرَّحْمَةِ",
  tr: "Allah’ım! Beni merhamet ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen der Barmherzigkeit."
},

// 345. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لِي",
  tr: "Beni bağışla.",
  de: "Vergib mir."
},

// 346. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ",
  tr: "Allah’ım! Yaptığım kötülüklerin şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel dessen, was ich getan habe."
},

// 347. Gün — Kur’an (İbrahim 38)
{
  source: "KURAN",
  ar: "مَا نُعْلِنُ",
  tr: "Açıkladığımızı da Sen bilirsin.",
  de: "Und was wir offenlegen."
},

// 348. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ النُّورِ",
  tr: "Allah’ım! Beni nur ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Lichts."
},

// 349. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ",
  tr: "Rabbim! Bağışla.",
  de: "Mein Herr, vergib."
},

// 350. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ النُّورِ",
  tr: "Allah’ım! Beni nur ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Lichts."
},

// 351. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "رَبِّ اغْفِرْ",
  tr: "Rabbim! Bağışla.",
  de: "Mein Herr, vergib."
},

// 352. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ نَوِّرْ وَجْهِي وَقَلْبِي",
  tr: "Allah’ım! Yüzümü ve kalbimi nurlandır.",
  de: "O Allah, erleuchte mein Gesicht und mein Herz."
},

// 353. Gün — Kur’an (Baqarah 286)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا",
  tr: "Rabbimiz! Unutursak bizi sorumlu tutma.",
  de: "Unser Herr, belaste uns nicht, wenn wir vergessen."
},

// 354. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ زَيِّنِّي بِزِينَةِ الْإِيمَانِ",
  tr: "Allah’ım! Beni iman ziynetiyle süsle.",
  de: "O Allah, schmücke mich mit dem Schmuck des Glaubens."
},

// 355. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "ظَلَمْنَا أَنْفُسَنَا",
  tr: "Biz kendimize zulmettik.",
  de: "Wir haben uns selbst Unrecht getan."
},

// 356. Gün — Hadis (Müslim)
{
  source: "HADIS",
  ar: "اللَّهُمَّ طَهِّرْ قَلْبِي",
  tr: "Allah’ım! Kalbimi temizle.",
  de: "O Allah, reinige mein Herz."
},

// 357. Gün — Kur’an (İbrahim 40)
{
  source: "KURAN",
  ar: "وَمِنْ ذُرِّيَّتِي",
  tr: "Soyumdan gelenleri de (namazı kılanlardan eyle).",
  de: "Und auch meine Nachkommen (zu Betenden mache)."
},

// 358. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَهْلِ الْإِيمَانِ",
  tr: "Allah’ım! Beni iman ehli kullarından eyle.",
  de: "O Allah, mache mich zu den Menschen des Glaubens."
},

// 359. Gün — Kur’an (Müminun 118)
{
  source: "KURAN",
  ar: "وَارْحَمْ",
  tr: "Merhamet et.",
  de: "Erbarme Dich."
},

// 360. Gün — Hadis (Buhari)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ دَابَّةٍ",
  tr: "Allah’ım! Yaratılmış her canlının şerrinden Sana sığınırım.",
  de: "O Allah, ich suche Zuflucht bei Dir vor dem Übel aller Geschöpfe."
},

// 361. Gün — Kur’an (A’râf 151)
{
  source: "KURAN",
  ar: "وَاغْفِرْ لِي",
  tr: "Beni bağışla.",
  de: "Vergib mir."
},

// 362. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نُورًا فِي طَرِيقِي",
  tr: "Allah’ım! Yoluma nur ver.",
  de: "O Allah, gib meinem Weg Licht."
},

// 363. Gün — Kur’an (Baqarah 286)
{
  source: "KURAN",
  ar: "رَبَّنَا لَا تَحْمِلْ عَلَيْنَا إِصْرًا",
  tr: "Rabbimiz! Bize ağır yük yükleme.",
  de: "Unser Herr, lege uns keine schwere Last auf."
},

// 364. Gün — Hadis (Tirmizi)
{
  source: "HADIS",
  ar: "اللَّهُمَّ زَيِّنِّي بِزِينَةِ الصَّالِحِينَ",
  tr: "Allah’ım! Beni salih kullarının ziynetiyle süsle.",
  de: "O Allah, schmücke mich mit dem Schmuck der Rechtschaffenen."
},

// 365. Gün — Kur’an (A’râf 23)
{
  source: "KURAN",
  ar: "وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
  tr: "Eğer bizi bağışlamaz ve bize merhamet etmezsen, ziyana uğrayanlardan oluruz.",
  de: "Wenn Du uns nicht vergibst und Dich unser nicht erbarmst, werden wir zu den Verlierern gehören."
}
];

// ———————————————————————————————
// RAMAZAN KODLARI KALDIRILDI
// ———————————————————————————————

// Yılın kaçıncı günü olduğunu hesaplar
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.floor((now - start) / 86400000);
}

// Günlük duayı ekrana yazdırır
async function updateDailyDua(lang) {
  const arEl = document.getElementById("msg-ar");
  const subEl = document.getElementById("msg-sub");
  if (!arEl || !subEl) return;

  const idx = getDayOfYear();
  const dua = DAILY_DUAS[idx] || DAILY_DUAS[0];

  // Arapça üst satır
  arEl.textContent = dua.ar;

  // Alt satır: TR veya DE
  if (lang === "tr") {
    subEl.textContent = dua.tr;
  } else if (lang === "de") {
    subEl.textContent = dua.de;
  } else {
    subEl.textContent = "";
  }
}

return { updateDailyDua };
})();