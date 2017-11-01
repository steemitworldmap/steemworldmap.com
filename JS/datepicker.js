/**
 * jquery-date-range-picker
 * @version v0.16.0
 * @link https://github.com/longbill/jquery-date-range-picker
 * @license MIT
 */
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("moment")) : e(jQuery, moment)
}(function (e, t) {
    "use strict";
    e.dateRangePickerLanguages = {
        default: {
            selected: "Selected:",
            day: "Day",
            days: "Days",
            apply: "Close",
            "week-1": "mo",
            "week-2": "tu",
            "week-3": "we",
            "week-4": "th",
            "week-5": "fr",
            "week-6": "sa",
            "week-7": "su",
            "week-number": "W",
            "month-name": ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
            shortcuts: "Shortcuts",
            "custom-values": "Custom Values",
            past: "Past",
            following: "Following",
            previous: "Previous",
            "prev-week": "Week",
            "prev-month": "Month",
            "prev-year": "Year",
            next: "Next",
            "next-week": "Week",
            "next-month": "Month",
            "next-year": "Year",
            "less-than": "Date range should not be more than %d days",
            "more-than": "Date range should not be less than %d days",
            "default-more": "Please select a date range longer than %d days",
            "default-single": "Please select a date",
            "default-less": "Please select a date range less than %d days",
            "default-range": "Please select a date range between %d and %d days",
            "default-default": "Please select a date range",
            time: "Time",
            hour: "Hour",
            minute: "Minute"
        },
        id: {
            selected: "Terpilih:",
            day: "Hari",
            days: "Hari",
            apply: "Tutup",
            "week-1": "sen",
            "week-2": "sel",
            "week-3": "rab",
            "week-4": "kam",
            "week-5": "jum",
            "week-6": "sab",
            "week-7": "min",
            "week-number": "W",
            "month-name": ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"],
            shortcuts: "Pintas",
            "custom-values": "Nilai yang ditentukan",
            past: "Yang Lalu",
            following: "Mengikuti",
            previous: "Sebelumnya",
            "prev-week": "Minggu",
            "prev-month": "Bulan",
            "prev-year": "Tahun",
            next: "Selanjutnya",
            "next-week": "Minggu",
            "next-month": "Bulan",
            "next-year": "Tahun",
            "less-than": "Tanggal harus lebih dari %d hari",
            "more-than": "Tanggal harus kurang dari %d hari",
            "default-more": "Jarak tanggal harus lebih lama dari %d hari",
            "default-single": "Silakan pilih tanggal",
            "default-less": "Jarak rentang tanggal tidak boleh lebih lama dari %d hari",
            "default-range": "Rentang tanggal harus antara %d dan %d hari",
            "default-default": "Silakan pilih rentang tanggal",
            time: "Waktu",
            hour: "Jam",
            minute: "Menit"
        },
        az: {
            selected: "Seçildi:",
            day: " gün",
            days: " gün",
            apply: "tətbiq",
            "week-1": "1",
            "week-2": "2",
            "week-3": "3",
            "week-4": "4",
            "week-5": "5",
            "week-6": "6",
            "week-7": "7",
            "month-name": ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
            shortcuts: "Qısayollar",
            past: "Keçmiş",
            following: "Növbəti",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "Öncəki həftə",
            "prev-month": "Öncəki ay",
            "prev-year": "Öncəki il",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "Növbəti həftə",
            "next-month": "Növbəti ay",
            "next-year": "Növbəti il",
            "less-than": "Tarix aralığı %d gündən çox olmamalıdır",
            "more-than": "Tarix aralığı %d gündən az olmamalıdır",
            "default-more": "%d gündən çox bir tarix seçin",
            "default-single": "Tarix seçin",
            "default-less": "%d gündən az bir tarix seçin",
            "default-range": "%d və %d gün aralığında tarixlər seçin",
            "default-default": "Tarix aralığı seçin"
        },
        bg: {
            selected: "Избрано:",
            day: "Ден",
            days: "Дни",
            apply: "Затвори",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "нд",
            "week-number": "С",
            "month-name": ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"],
            shortcuts: "Преки пътища",
            "custom-values": "Персонализирани стойности",
            past: "Минал",
            following: "Следващ",
            previous: "Предишен",
            "prev-week": "Седмица",
            "prev-month": "Месец",
            "prev-year": "Година",
            next: "Следващ",
            "next-week": "Седмица",
            "next-month": "Месец",
            "next-year": "Година",
            "less-than": "Периодът от време не трябва да е повече от %d дни",
            "more-than": "Периодът от време не трябва да е по-малко от %d дни",
            "default-more": "Моля изберете период по-дълъг от %d дни",
            "default-single": "Моля изберете дата",
            "default-less": "Моля изберете период по-къс от %d дни",
            "default-range": "Моля изберете период между %d и %d дни",
            "default-default": "Моля изберете период",
            time: "Време",
            hour: "Час",
            minute: "Минута"
        },
        cn: {
            selected: "已选择:",
            day: "天",
            days: "天",
            apply: "确定",
            "week-1": "一",
            "week-2": "二",
            "week-3": "三",
            "week-4": "四",
            "week-5": "五",
            "week-6": "六",
            "week-7": "日",
            "week-number": "周",
            "month-name": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            shortcuts: "快捷选择",
            past: "过去",
            following: "将来",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "上周",
            "prev-month": "上个月",
            "prev-year": "去年",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "下周",
            "next-month": "下个月",
            "next-year": "明年",
            "less-than": "所选日期范围不能大于%d天",
            "more-than": "所选日期范围不能小于%d天",
            "default-more": "请选择大于%d天的日期范围",
            "default-less": "请选择小于%d天的日期范围",
            "default-range": "请选择%d天到%d天的日期范围",
            "default-single": "请选择一个日期",
            "default-default": "请选择一个日期范围",
            time: "时间",
            hour: "小时",
            minute: "分钟"
        },
        cz: {
            selected: "Vybráno:",
            day: "Den",
            days: "Dny",
            apply: "Zavřít",
            "week-1": "po",
            "week-2": "út",
            "week-3": "st",
            "week-4": "čt",
            "week-5": "pá",
            "week-6": "so",
            "week-7": "ne",
            "month-name": ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
            shortcuts: "Zkratky",
            past: "po",
            following: "následující",
            previous: "předchozí",
            "prev-week": "týden",
            "prev-month": "měsíc",
            "prev-year": "rok",
            next: "další",
            "next-week": "týden",
            "next-month": "měsíc",
            "next-year": "rok",
            "less-than": "Rozsah data by neměl být větší než %d dnů",
            "more-than": "Rozsah data by neměl být menší než %d dnů",
            "default-more": "Prosím zvolte rozsah data větší než %d dnů",
            "default-single": "Prosím zvolte datum",
            "default-less": "Prosím zvolte rozsah data menší než %d dnů",
            "default-range": "Prosím zvolte rozsah data mezi %d a %d dny",
            "default-default": "Prosím zvolte rozsah data"
        },
        de: {
            selected: "Auswahl:",
            day: "Tag",
            days: "Tage",
            apply: "Schließen",
            "week-1": "mo",
            "week-2": "di",
            "week-3": "mi",
            "week-4": "do",
            "week-5": "fr",
            "week-6": "sa",
            "week-7": "so",
            "month-name": ["januar", "februar", "märz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember"],
            shortcuts: "Schnellwahl",
            past: "Vorherige",
            following: "Folgende",
            previous: "Vorherige",
            "prev-week": "Woche",
            "prev-month": "Monat",
            "prev-year": "Jahr",
            next: "Nächste",
            "next-week": "Woche",
            "next-month": "Monat",
            "next-year": "Jahr",
            "less-than": "Datumsbereich darf nicht größer sein als %d Tage",
            "more-than": "Datumsbereich darf nicht kleiner sein als %d Tage",
            "default-more": "Bitte mindestens %d Tage auswählen",
            "default-single": "Bitte ein Datum auswählen",
            "default-less": "Bitte weniger als %d Tage auswählen",
            "default-range": "Bitte einen Datumsbereich zwischen %d und %d Tagen auswählen",
            "default-default": "Bitte ein Start- und Enddatum auswählen",
            Time: "Zeit",
            hour: "Stunde",
            minute: "Minute"
        },
        es: {
            selected: "Seleccionado:",
            day: "Día",
            days: "Días",
            apply: "Cerrar",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "mi",
            "week-4": "ju",
            "week-5": "vi",
            "week-6": "sa",
            "week-7": "do",
            "month-name": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            shortcuts: "Accesos directos",
            past: "Pasado",
            following: "Siguiente",
            previous: "Anterior",
            "prev-week": "Semana",
            "prev-month": "Mes",
            "prev-year": "Año",
            next: "Siguiente",
            "next-week": "Semana",
            "next-month": "Mes",
            "next-year": "Año",
            "less-than": "El rango no debería ser mayor de %d días",
            "more-than": "El rango no debería ser menor de %d días",
            "default-more": "Por favor selecciona un rango mayor a %d días",
            "default-single": "Por favor selecciona un día",
            "default-less": "Por favor selecciona un rango menor a %d días",
            "default-range": "Por favor selecciona un rango entre %d y %d días",
            "default-default": "Por favor selecciona un rango de fechas."
        },
        fr: {
            selected: "Sélection:",
            day: "Jour",
            days: "Jours",
            apply: "Fermer",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "me",
            "week-4": "je",
            "week-5": "ve",
            "week-6": "sa",
            "week-7": "di",
            "month-name": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            shortcuts: "Raccourcis",
            past: "Passé",
            following: "Suivant",
            previous: "Précédent",
            "prev-week": "Semaine",
            "prev-month": "Mois",
            "prev-year": "Année",
            next: "Suivant",
            "next-week": "Semaine",
            "next-month": "Mois",
            "next-year": "Année",
            "less-than": "L'intervalle ne doit pas être supérieure à %d jours",
            "more-than": "L'intervalle ne doit pas être inférieure à %d jours",
            "default-more": "Merci de choisir une intervalle supérieure à %d jours",
            "default-single": "Merci de choisir une date",
            "default-less": "Merci de choisir une intervalle inférieure %d jours",
            "default-range": "Merci de choisir une intervalle comprise entre %d et %d jours",
            "default-default": "Merci de choisir une date"
        },
        hu: {
            selected: "Kiválasztva:",
            day: "Nap",
            days: "Nap",
            apply: "Ok",
            "week-1": "h",
            "week-2": "k",
            "week-3": "sz",
            "week-4": "cs",
            "week-5": "p",
            "week-6": "sz",
            "week-7": "v",
            "month-name": ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
            shortcuts: "Gyorsválasztó",
            past: "Múlt",
            following: "Következő",
            previous: "Előző",
            "prev-week": "Hét",
            "prev-month": "Hónap",
            "prev-year": "Év",
            next: "Következő",
            "next-week": "Hét",
            "next-month": "Hónap",
            "next-year": "Év",
            "less-than": "A kiválasztás nem lehet több %d napnál",
            "more-than": "A kiválasztás nem lehet több %d napnál",
            "default-more": "Válassz ki egy időszakot ami hosszabb mint %d nap",
            "default-single": "Válassz egy napot",
            "default-less": "Válassz ki egy időszakot ami rövidebb mint %d nap",
            "default-range": "Válassz ki egy %d - %d nap hosszú időszakot",
            "default-default": "Válassz ki egy időszakot"
        },
        it: {
            selected: "Selezionati:",
            day: "Giorno",
            days: "Giorni",
            apply: "Chiudi",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "me",
            "week-4": "gi",
            "week-5": "ve",
            "week-6": "sa",
            "week-7": "do",
            "month-name": ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
            shortcuts: "Scorciatoie",
            past: "Scorso",
            following: "Successivo",
            previous: "Precedente",
            "prev-week": "Settimana",
            "prev-month": "Mese",
            "prev-year": "Anno",
            next: "Prossimo",
            "next-week": "Settimana",
            "next-month": "Mese",
            "next-year": "Anno",
            "less-than": "L'intervallo non dev'essere maggiore di %d giorni",
            "more-than": "L'intervallo non dev'essere minore di %d giorni",
            "default-more": "Seleziona un intervallo maggiore di %d giorni",
            "default-single": "Seleziona una data",
            "default-less": "Seleziona un intervallo minore di %d giorni",
            "default-range": "Seleziona un intervallo compreso tra i %d e i %d giorni",
            "default-default": "Seleziona un intervallo di date"
        },
        ko: {
            selected: "기간:",
            day: "일",
            days: "일간",
            apply: "닫기",
            "week-1": "월",
            "week-2": "화",
            "week-3": "수",
            "week-4": "목",
            "week-5": "금",
            "week-6": "토",
            "week-7": "일",
            "week-number": "주",
            "month-name": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            shortcuts: "단축키들",
            past: "지난(오늘기준)",
            following: "이후(오늘기준)",
            previous: "이전",
            "prev-week": "1주",
            "prev-month": "1달",
            "prev-year": "1년",
            next: "다음",
            "next-week": "1주",
            "next-month": "1달",
            "next-year": "1년",
            "less-than": "날짜 범위는 %d 일보다 많을 수 없습니다",
            "more-than": "날짜 범위는 %d 일보다 작을 수 없습니다",
            "default-more": "날짜 범위를 %d 일보다 길게 선택해 주세요",
            "default-single": "날짜를 선택해 주세요",
            "default-less": "%d 일보다 작은 날짜를 선택해 주세요",
            "default-range": "%d와 %d 일 사이의 날짜 범위를 선택해 주세요",
            "default-default": "날짜 범위를 선택해 주세요",
            time: "시각",
            hour: "시",
            minute: "분"
        },
        no: {
            selected: "Valgt:",
            day: "Dag",
            days: "Dager",
            apply: "Lukk",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "lø",
            "week-7": "sø",
            "month-name": ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            shortcuts: "Snarveier",
            "custom-values": "Egendefinerte Verdier",
            past: "Over",
            following: "Følger",
            previous: "Forrige",
            "prev-week": "Uke",
            "prev-month": "Måned",
            "prev-year": "År",
            next: "Neste",
            "next-week": "Uke",
            "next-month": "Måned",
            "next-year": "År",
            "less-than": "Datoperioden skal ikkje være lengre enn %d dager",
            "more-than": "Datoperioden skal ikkje være kortere enn %d dager",
            "default-more": "Vennligst velg ein datoperiode lengre enn %d dager",
            "default-single": "Vennligst velg ein dato",
            "default-less": "Vennligst velg ein datoperiode mindre enn %d dager",
            "default-range": "Vennligst velg ein datoperiode mellom %d og %d dager",
            "default-default": "Vennligst velg ein datoperiode",
            time: "Tid",
            hour: "Time",
            minute: "Minutter"
        },
        nl: {
            selected: "Geselecteerd:",
            day: "Dag",
            days: "Dagen",
            apply: "Ok",
            "week-1": "ma",
            "week-2": "di",
            "week-3": "wo",
            "week-4": "do",
            "week-5": "vr",
            "week-6": "za",
            "week-7": "zo",
            "month-name": ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            shortcuts: "Snelkoppelingen",
            "custom-values": "Aangepaste waarden",
            past: "Verleden",
            following: "Komend",
            previous: "Vorige",
            "prev-week": "Week",
            "prev-month": "Maand",
            "prev-year": "Jaar",
            next: "Volgende",
            "next-week": "Week",
            "next-month": "Maand",
            "next-year": "Jaar",
            "less-than": "Interval moet langer dan %d dagen zijn",
            "more-than": "Interval mag niet minder dan %d dagen zijn",
            "default-more": "Selecteer een interval langer dan %dagen",
            "default-single": "Selecteer een datum",
            "default-less": "Selecteer een interval minder dan %d dagen",
            "default-range": "Selecteer een interval tussen %d en %d dagen",
            "default-default": "Selecteer een interval",
            time: "Tijd",
            hour: "Uur",
            minute: "Minuut"
        },
        ru: {
            selected: "Выбрано:",
            day: "День",
            days: "Дней",
            apply: "Применить",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "вс",
            "month-name": ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
            shortcuts: "Быстрый выбор",
            "custom-values": "Пользовательские значения",
            past: "Прошедшие",
            following: "Следующие",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "Неделя",
            "prev-month": "Месяц",
            "prev-year": "Год",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "Неделя",
            "next-month": "Месяц",
            "next-year": "Год",
            "less-than": "Диапазон не может быть больше %d дней",
            "more-than": "Диапазон не может быть меньше %d дней",
            "default-more": "Пожалуйста выберите диапазон больше %d дней",
            "default-single": "Пожалуйста выберите дату",
            "default-less": "Пожалуйста выберите диапазон меньше %d дней",
            "default-range": "Пожалуйста выберите диапазон между %d и %d днями",
            "default-default": "Пожалуйста выберите диапазон",
            time: "Время",
            hour: "Часы",
            minute: "Минуты"
        },
        pl: {
            selected: "Wybrany:",
            day: "Dzień",
            days: "Dni",
            apply: "Zamknij",
            "week-1": "pon",
            "week-2": "wt",
            "week-3": "śr",
            "week-4": "czw",
            "week-5": "pt",
            "week-6": "so",
            "week-7": "nd",
            "month-name": ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
            shortcuts: "Skróty",
            "custom-values": "Niestandardowe wartości",
            past: "Przeszłe",
            following: "Następne",
            previous: "Poprzednie",
            "prev-week": "tydzień",
            "prev-month": "miesiąc",
            "prev-year": "rok",
            next: "Następny",
            "next-week": "tydzień",
            "next-month": "miesiąc",
            "next-year": "rok",
            "less-than": "Okres nie powinien być dłuższy niż %d dni",
            "more-than": "Okres nie powinien być krótszy niż  %d ni",
            "default-more": "Wybierz okres dłuższy niż %d dni",
            "default-single": "Wybierz datę",
            "default-less": "Wybierz okres krótszy niż %d dni",
            "default-range": "Wybierz okres trwający od %d do %d dni",
            "default-default": "Wybierz okres",
            time: "Czas",
            hour: "Godzina",
            minute: "Minuta"
        },
        se: {
            selected: "Vald:",
            day: "dag",
            days: "dagar",
            apply: "godkänn",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "lö",
            "week-7": "sö",
            "month-name": ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"],
            shortcuts: "genvägar",
            "custom-values": "Anpassade värden",
            past: "över",
            following: "följande",
            previous: "förra",
            "prev-week": "vecka",
            "prev-month": "månad",
            "prev-year": "år",
            next: "nästa",
            "next-week": "vecka",
            "next-month": "måned",
            "next-year": "år",
            "less-than": "Datumintervall bör inte vara mindre än %d dagar",
            "more-than": "Datumintervall bör inte vara mer än %d dagar",
            "default-more": "Välj ett datumintervall längre än %d dagar",
            "default-single": "Välj ett datum",
            "default-less": "Välj ett datumintervall mindre än %d dagar",
            "default-range": "Välj ett datumintervall mellan %d och %d dagar",
            "default-default": "Välj ett datumintervall",
            time: "tid",
            hour: "timme",
            minute: "minut"
        },
        pt: {
            selected: "Selecionado:",
            day: "Dia",
            days: "Dias",
            apply: "Fechar",
            "week-1": "seg",
            "week-2": "ter",
            "week-3": "qua",
            "week-4": "qui",
            "week-5": "sex",
            "week-6": "sab",
            "week-7": "dom",
            "week-number": "N",
            "month-name": ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
            shortcuts: "Atalhos",
            "custom-values": "Valores Personalizados",
            past: "Passado",
            following: "Seguinte",
            previous: "Anterior",
            "prev-week": "Semana",
            "prev-month": "Mês",
            "prev-year": "Ano",
            next: "Próximo",
            "next-week": "Próxima Semana",
            "next-month": "Próximo Mês",
            "next-year": "Próximo Ano",
            "less-than": "O período selecionado não deve ser maior que %d dias",
            "more-than": "O período selecionado não deve ser menor que %d dias",
            "default-more": "Selecione um período superior a %d dias",
            "default-single": "Selecione uma data",
            "default-less": "Selecione um período inferior a %d dias",
            "default-range": "Selecione um período de %d a %d dias",
            "default-default": "Selecione um período",
            time: "Tempo",
            hour: "Hora",
            minute: "Minuto"
        },
        tc: {
            selected: "已選擇:",
            day: "天",
            days: "天",
            apply: "確定",
            "week-1": "一",
            "week-2": "二",
            "week-3": "三",
            "week-4": "四",
            "week-5": "五",
            "week-6": "六",
            "week-7": "日",
            "week-number": "周",
            "month-name": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            shortcuts: "快速選擇",
            past: "過去",
            following: "將來",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "上週",
            "prev-month": "上個月",
            "prev-year": "去年",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "下周",
            "next-month": "下個月",
            "next-year": "明年",
            "less-than": "所選日期範圍不能大於%d天",
            "more-than": "所選日期範圍不能小於%d天",
            "default-more": "請選擇大於%d天的日期範圍",
            "default-less": "請選擇小於%d天的日期範圍",
            "default-range": "請選擇%d天到%d天的日期範圍",
            "default-single": "請選擇一個日期",
            "default-default": "請選擇一個日期範圍",
            time: "日期",
            hour: "小時",
            minute: "分鐘"
        },
        ja: {
            selected: "選択しました:",
            day: "日",
            days: "日々",
            apply: "閉じる",
            "week-1": "月",
            "week-2": "火",
            "week-3": "水",
            "week-4": "木",
            "week-5": "金",
            "week-6": "土",
            "week-7": "日",
            "month-name": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            shortcuts: "クイック選択",
            past: "過去",
            following: "将来",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "先週、",
            "prev-month": "先月",
            "prev-year": "昨年",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "来週",
            "next-month": "来月",
            "next-year": "来年",
            "less-than": "日付の範囲は ％d 日以上にすべきではありません",
            "more-than": "日付の範囲は ％d 日を下回ってはいけません",
            "default-more": "％d 日よりも長い期間を選択してください",
            "default-less": "％d 日未満の期間を選択してください",
            "default-range": "％d と％ d日の間の日付範囲を選択してください",
            "default-single": "日付を選択してください",
            "default-default": "日付範囲を選択してください",
            time: "時間",
            hour: "時間",
            minute: "分"
        },
        da: {
            selected: "Valgt:",
            day: "Dag",
            days: "Dage",
            apply: "Luk",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "lö",
            "week-7": "sö",
            "month-name": ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"],
            shortcuts: "genveje",
            "custom-values": "Brugerdefinerede værdier",
            past: "Forbi",
            following: "Følgende",
            previous: "Forrige",
            "prev-week": "uge",
            "prev-month": "månad",
            "prev-year": "år",
            next: "Næste",
            "next-week": "Næste uge",
            "next-month": "Næste måned",
            "next-year": "Næste år",
            "less-than": "Dato interval bør ikke være med end %d dage",
            "more-than": "Dato interval bør ikke være mindre end %d dage",
            "default-more": "Vælg datointerval længere end %d dage",
            "default-single": "Vælg dato",
            "default-less": "Vælg datointerval mindre end %d dage",
            "default-range": "Vælg datointerval mellem %d og %d dage",
            "default-default": "Vælg datointerval",
            time: "tid",
            hour: "time",
            minute: "minut"
        },
        fi: {
            selected: "Valittu:",
            day: "Päivä",
            days: "Päivää",
            apply: "Sulje",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "ke",
            "week-4": "to",
            "week-5": "pe",
            "week-6": "la",
            "week-7": "su",
            "week-number": "V",
            "month-name": ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
            shortcuts: "Pikavalinnat",
            "custom-values": "Mukautetut Arvot",
            past: "Menneet",
            following: "Tulevat",
            previous: "Edellinen",
            "prev-week": "Viikko",
            "prev-month": "Kuukausi",
            "prev-year": "Vuosi",
            next: "Seuraava",
            "next-week": "Viikko",
            "next-month": "Kuukausi",
            "next-year": "Vuosi",
            "less-than": "Aikajakson tulisi olla vähemmän kuin %d päivää",
            "more-than": "Aikajakson ei tulisi olla vähempää kuin %d päivää",
            "default-more": "Valitse pidempi aikajakso kuin %d päivää",
            "default-single": "Valitse päivä",
            "default-less": "Valitse lyhyempi aikajakso kuin %d päivää",
            "default-range": "Valitse aikajakso %d ja %d päivän väliltä",
            "default-default": "Valitse aikajakso",
            time: "Aika",
            hour: "Tunti",
            minute: "Minuutti"
        },
        cat: {
            selected: "Seleccionats:",
            day: "Dia",
            days: "Dies",
            apply: "Tanca",
            "week-1": "Dl",
            "week-2": "Dm",
            "week-3": "Dc",
            "week-4": "Dj",
            "week-5": "Dv",
            "week-6": "Ds",
            "week-7": "Dg",
            "week-number": "S",
            "month-name": ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
            shortcuts: "Dreçeres",
            "custom-values": "Valors personalitzats",
            past: "Passat",
            following: "Futur",
            previous: "Anterior",
            "prev-week": "Setmana",
            "prev-month": "Mes",
            "prev-year": "Any",
            next: "Següent",
            "next-week": "Setmana",
            "next-month": "Mes",
            "next-year": "Any",
            "less-than": "El període no hauria de ser de més de %d dies",
            "more-than": "El període no hauria de ser de menys de %d dies",
            "default-more": "Perfavor selecciona un període més gran de %d dies",
            "default-single": "Perfavor selecciona una data",
            "default-less": "Perfavor selecciona un període de menys de %d dies",
            "default-range": "Perfavor selecciona un període d'entre %d i %d dies",
            "default-default": "Perfavor selecciona un període",
            time: "Temps",
            hour: "Hora",
            minute: "Minut"
        }
    }, e.fn.dateRangePicker = function (a) {
        function n(t, a) {
            return a.contains(t.target) || t.target == a || void 0 != a.childNodes && e.inArray(t.target, a.childNodes) >= 0
        }

        function r() {
            if (!a.inline) {
                var t = e(ue).offset();
                if ("relative" == e(a.container).css("position")) {
                    var n = e(a.container).offset(),
                        r = Math.max(0, t.left + ie.outerWidth() - e("body").width() + 16);
                    ie.css({
                        top: t.top - n.top + e(ue).outerHeight() + 4,
                        left: t.left - n.left - r
                    })
                } else t.left < 460 ? ie.css({
                    top: t.top + e(ue).outerHeight() + parseInt(e("body").css("border-top") || 0, 10),
                    left: t.left
                }) : ie.css({
                    top: t.top + e(ue).outerHeight() + parseInt(e("body").css("border-top") || 0, 10),
                    left: t.left + e(ue).width() - ie.width() - 16
                })
            }
        }

        function s(t) {
            F(), i(), a.customOpenAnimation ? a.customOpenAnimation.call(ie.get(0), function () {
                e(ue).trigger("datepicker-opened", {
                    relatedTarget: ie
                })
            }) : ie.slideDown(t, function () {
                e(ue).trigger("datepicker-opened", {
                    relatedTarget: ie
                })
            }), e(ue).trigger("datepicker-open", {
                relatedTarget: ie
            }), B(), d(), r()
        }

        function i() {
            var e = a.getValue.call(me),
                n = e ? e.split(a.separator) : "";
            if (n && (1 == n.length && a.singleDate || n.length >= 2)) {
                var r = a.format;
                r.match(/Do/) && (r = r.replace(/Do/, "D"), n[0] = n[0].replace(/(\d+)(th|nd|st)/, "$1"), n.length >= 2 && (n[1] = n[1].replace(/(\d+)(th|nd|st)/, "$1"))), le = !1, n.length >= 2 ? T(o(n[0], r, t.locale(a.language)), o(n[1], r, t.locale(a.language))) : 1 == n.length && a.singleDate && C(o(n[0], r, t.locale(a.language))), le = !0
            }
        }

        function o(e, a, n) {
            return t(e, a, n).isValid() ? t(e, a, n).toDate() : t().toDate()
        }

        function d() {
            var e = ie.find(".gap").css("margin-left");
            e && (e = parseInt(e));
            var t = ie.find(".month1").width(),
                a = ie.find(".gap").width() + (e ? 2 * e : 0),
                n = ie.find(".month2").width();
            ie.find(".month-wrapper").width(t + a + n)
        }

        function l(e, a) {
            ie.find("." + e + " input[type=range].hour-range").val(t(a).hours()), ie.find("." + e + " input[type=range].minute-range").val(t(a).minutes()), h(e, t(a).format("HH"), t(a).format("mm"))
        }

        function u(e, n) {
            a[e] = parseInt(t(parseInt(n)).startOf("day").add(t(a[e + "Time"]).format("HH"), "h").add(t(a[e + "Time"]).format("mm"), "m").valueOf())
        }

        function m() {
            l("time1", a.start), l("time2", a.end)
        }

        function h(e, n, r) {
            function s(e, t) {
                var s = t.format("HH"),
                    i = t.format("mm");
                a[e] = t.startOf("day").add(n || s, "h").add(r || i, "m").valueOf()
            }
            switch (n && ie.find("." + e + " .hour-val").text(n), r && ie.find("." + e + " .minute-val").text(r), e) {
                case "time1":
                    a.start && s("start", t(a.start)), s("startTime", t(a.startTime || t().valueOf()));
                    break;
                case "time2":
                    a.end && s("end", t(a.end)), s("endTime", t(a.endTime || t().valueOf()))
            }
            x(), M(), O()
        }

        function c(e) {
            var n = e;
            return "week-range" === a.batchMode ? n = "monday" === a.startOfWeek ? t(parseInt(e)).startOf("isoweek").valueOf() : t(parseInt(e)).startOf("week").valueOf() : "month-range" === a.batchMode && (n = t(parseInt(e)).startOf("month").valueOf()), n
        }

        function p(e) {
            var n = e;
            return "week-range" === a.batchMode ? n = "monday" === a.startOfWeek ? t(parseInt(e)).endOf("isoweek").valueOf() : t(parseInt(e)).endOf("week").valueOf() : "month-range" === a.batchMode && (n = t(parseInt(e)).endOf("month").valueOf()), n
        }

        function f(n) {
            if (!n.hasClass("invalid")) {
                var r = n.attr("time");
                if (n.addClass("checked"), a.singleDate ? (a.start = r, a.end = !1) : "week" === a.batchMode ? "monday" === a.startOfWeek ? (a.start = t(parseInt(r)).startOf("isoweek").valueOf(), a.end = t(parseInt(r)).endOf("isoweek").valueOf()) : (a.end = t(parseInt(r)).endOf("week").valueOf(), a.start = t(parseInt(r)).startOf("week").valueOf()) : "workweek" === a.batchMode ? (a.start = t(parseInt(r)).day(1).valueOf(), a.end = t(parseInt(r)).day(5).valueOf()) : "weekend" === a.batchMode ? (a.start = t(parseInt(r)).day(6).valueOf(), a.end = t(parseInt(r)).day(7).valueOf()) : "month" === a.batchMode ? (a.start = t(parseInt(r)).startOf("month").valueOf(), a.end = t(parseInt(r)).endOf("month").valueOf()) : a.start && a.end || !a.start && !a.end ? (a.start = c(r), a.end = !1) : a.start && (a.end = p(r), a.time.enabled && u("end", a.end)), a.time.enabled && (a.start && u("start", a.start), a.end && u("end", a.end)), !a.singleDate && a.start && a.end && a.start > a.end) {
                    var s = a.end;
                    a.end = p(a.start), a.start = c(s), a.time.enabled && a.swapTime && m()
                }
                a.start = parseInt(a.start), a.end = parseInt(a.end), y(), a.start && !a.end && (e(ue).trigger("datepicker-first-date-selected", {
                    date1: new Date(a.start)
                }), w(n)), k(r), x(), M(), O(), D()
            }
        }

        function v(e) {
            var n, r, s = parseInt(e.attr("data-start-time"), 10);
            a.startWeek ? (ie.find(".week-number-selected").removeClass("week-number-selected"), n = new Date(s < a.startWeek ? s : a.startWeek), r = new Date(s < a.startWeek ? a.startWeek : s), a.startWeek = !1, a.start = t(n).day("monday" == a.startOfWeek ? 1 : 0).valueOf(), a.end = t(r).day("monday" == a.startOfWeek ? 7 : 6).valueOf()) : (a.startWeek = s, e.addClass("week-number-selected"), n = new Date(s), a.start = t(n).day("monday" == a.startOfWeek ? 1 : 0).valueOf(), a.end = t(n).day("monday" == a.startOfWeek ? 7 : 6).valueOf()), k(), x(), M(), O(), D()
        }

        function g(e) {
            if (e = parseInt(e, 10), a.startDate && R(e, a.startDate) < 0) return !1;
            if (a.endDate && R(e, a.endDate) > 0) return !1;
            if (a.start && !a.end && !a.singleDate) {
                if (a.maxDays > 0 && S(e, a.start) > a.maxDays) return !1;
                if (a.minDays > 0 && S(e, a.start) < a.minDays) return !1;
                if (a.selectForward && e < a.start) return !1;
                if (a.selectBackward && e > a.start) return !1;
                if (a.beforeShowDay && "function" == typeof a.beforeShowDay) {
                    for (var t = !0, n = e; S(n, a.start) > 1;) {
                        if (!a.beforeShowDay(new Date(n))[0]) {
                            t = !1;
                            break
                        }
                        if (Math.abs(n - a.start) < 864e5) break;
                        n > a.start && (n -= 864e5), n < a.start && (n += 864e5)
                    }
                    if (!t) return !1
                }
            }
            return !0
        }

        function k() {
            return ie.find(".day.invalid.tmp").removeClass("tmp invalid").addClass("valid"), a.start && !a.end && ie.find(".day.toMonth.valid").each(function () {
                g(parseInt(e(this).attr("time"), 10)) ? e(this).addClass("valid tmp").removeClass("invalid") : e(this).addClass("invalid tmp").removeClass("valid")
            }), !0
        }

        function w(t) {
            var n = parseInt(t.attr("time")),
                r = "";
            if (t.hasClass("has-tooltip") && t.attr("data-tooltip")) r = '<span style="white-space:nowrap">' + t.attr("data-tooltip") + "</span>";
            else if (!t.hasClass("invalid"))
                if (a.singleDate) ie.find(".day.hovering").removeClass("hovering"), t.addClass("hovering");
                else if (ie.find(".day").each(function () {
                    var t = parseInt(e(this).attr("time"));
                    a.start, a.end;
                    t == n ? e(this).addClass("hovering") : e(this).removeClass("hovering"), a.start && !a.end && (a.start < t && n >= t || a.start > t && n <= t) ? e(this).addClass("hovering") : e(this).removeClass("hovering")
                }), a.start && !a.end) {
                var s = S(n, a.start);
                a.hoveringTooltip && ("function" == typeof a.hoveringTooltip ? r = a.hoveringTooltip(s, a.start, n) : !0 === a.hoveringTooltip && s > 1 && (r = s + " " + ne("days")))
            }
            if (r) {
                var i = t.offset(),
                    o = ie.offset(),
                    d = i.left - o.left,
                    l = i.top - o.top;
                d += t.width() / 2;
                var u = ie.find(".date-range-length-tip"),
                    m = u.css({
                        visibility: "hidden",
                        display: "none"
                    }).html(r).width(),
                    h = u.height();
                d -= m / 2, l -= h, setTimeout(function () {
                    u.css({
                        left: d,
                        top: l,
                        display: "block",
                        visibility: "visible"
                    })
                }, 10)
            } else ie.find(".date-range-length-tip").hide()
        }

        function y() {
            ie.find(".day.hovering").removeClass("hovering"), ie.find(".date-range-length-tip").hide()
        }

        function b(e) {
            var n = e.val(),
                r = e.attr("name"),
                s = e.parents("table").hasClass("month1") ? "month1" : "month2",
                i = "month1" === s ? "month2" : "month1",
                o = !!a.startDate && t(a.startDate),
                d = !!a.endDate && t(a.endDate),
                l = t(a[s])[r](n);
            o && l.isSameOrBefore(o) && (l = o.add("month2" === s ? 1 : 0, "month")), d && l.isSameOrAfter(d) && (l = d.add(a.singleMonth || "month1" !== s ? 0 : -1, "month")), z(l, s), "month1" === s ? (a.stickyMonths || t(l).isSameOrAfter(a[i], "month")) && z(t(l).add(1, "month"), i) : (a.stickyMonths || t(l).isSameOrBefore(a[i], "month")) && z(t(l).add(-1, "month"), i), B()
        }

        function D() {
            !0 === a.singleDate ? le && a.start && a.autoClose && L() : le && a.start && a.end && a.autoClose && L()
        }

        function x() {
            var e = Math.ceil((a.end - a.start) / 864e5) + 1;
            a.singleDate ? a.start && !a.end ? ie.find(".drp_top-bar").removeClass("error").addClass("normal") : ie.find(".drp_top-bar").removeClass("error").removeClass("normal") : a.maxDays && e > a.maxDays ? (a.start = !1, a.end = !1, ie.find(".day").removeClass("checked"), ie.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(ne("less-than").replace("%d", a.maxDays))) : a.minDays && e < a.minDays ? (a.start = !1, a.end = !1, ie.find(".day").removeClass("checked"), ie.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(ne("more-than").replace("%d", a.minDays))) : a.start || a.end ? ie.find(".drp_top-bar").removeClass("error").addClass("normal") : ie.find(".drp_top-bar").removeClass("error").removeClass("normal"), a.singleDate && a.start && !a.end || !a.singleDate && a.start && a.end ? ie.find(".apply-btn").removeClass("disabled") : ie.find(".apply-btn").addClass("disabled"), a.batchMode && (a.start && a.startDate && R(a.start, a.startDate) < 0 || a.end && a.endDate && R(a.end, a.endDate) > 0) && (a.start = !1, a.end = !1, ie.find(".day").removeClass("checked"))
        }

        function M(t, n) {
            ie.find(".start-day").html("..."), ie.find(".end-day").html("..."), ie.find(".selected-days").hide(), a.start && ie.find(".start-day").html(N(new Date(parseInt(a.start)))), a.end && ie.find(".end-day").html(N(new Date(parseInt(a.end))));
            var r;
            a.start && a.singleDate ? (ie.find(".apply-btn").removeClass("disabled"), r = N(new Date(a.start)), a.setValue.call(me, r, N(new Date(a.start)), N(new Date(a.end))), le && !n && e(ue).trigger("datepicker-change", {
                value: r,
                date1: new Date(a.start)
            })) : a.start && a.end ? (ie.find(".selected-days").show().find(".selected-days-num").html(S(a.end, a.start)), ie.find(".apply-btn").removeClass("disabled"), r = N(new Date(a.start)) + a.separator + N(new Date(a.end)), a.setValue.call(me, r, N(new Date(a.start)), N(new Date(a.end))), le && !n && e(ue).trigger("datepicker-change", {
                value: r,
                date1: new Date(a.start),
                date2: new Date(a.end)
            })) : t ? ie.find(".apply-btn").removeClass("disabled") : ie.find(".apply-btn").addClass("disabled")
        }

        function S(e, t) {
            return Math.abs(X(e) - X(t)) + 1
        }

        function T(e, t, n) {
            if (e.getTime() > t.getTime()) {
                var r = t;
                t = e, e = r, r = null
            }
            var s = !0;
            if (a.startDate && R(e, a.startDate) < 0 && (s = !1), a.endDate && R(t, a.endDate) > 0 && (s = !1), !s) return z(a.startDate, "month1"), z(E(a.startDate), "month2"), void B();
            a.start = e.getTime(), a.end = t.getTime(), a.time.enabled && (l("time1", e), l("time2", t)), (a.stickyMonths || R(e, t) > 0 && 0 === H(e, t)) && (a.lookBehind ? e = q(t) : t = E(e)), a.stickyMonths && !1 !== a.endDate && H(t, a.endDate) > 0 && (e = q(e), t = q(t)), a.stickyMonths || 0 === H(e, t) && (a.lookBehind ? e = q(t) : t = E(e)), z(e, "month1"), z(t, "month2"), B(), x(), M(!1, n), D()
        }

        function C(e) {
            var t = !0;
            a.startDate && R(e, a.startDate) < 0 && (t = !1), a.endDate && R(e, a.endDate) > 0 && (t = !1), t ? (a.start = e.getTime(), a.time.enabled && l("time1", e), z(e, "month1"), !0 !== a.singleMonth && z(E(e), "month2"), B(), M(), D()) : z(a.startDate, "month1")
        }

        function O() {
            (a.start || a.end) && (ie.find(".day").each(function () {
                var n = parseInt(e(this).attr("time")),
                    r = a.start,
                    s = a.end;
                a.time.enabled && (n = t(n).startOf("day").valueOf(), r = t(r || t().valueOf()).startOf("day").valueOf(), s = t(s || t().valueOf()).startOf("day").valueOf()), a.start && a.end && s >= n && r <= n || a.start && !a.end && t(r).format("YYYY-MM-DD") == t(n).format("YYYY-MM-DD") ? e(this).addClass("checked") : e(this).removeClass("checked"), a.start && t(r).format("YYYY-MM-DD") == t(n).format("YYYY-MM-DD") ? e(this).addClass("first-date-selected") : e(this).removeClass("first-date-selected"), a.end && t(s).format("YYYY-MM-DD") == t(n).format("YYYY-MM-DD") ? e(this).addClass("last-date-selected") : e(this).removeClass("last-date-selected")
            }), ie.find(".week-number").each(function () {
                e(this).attr("data-start-time") == a.startWeek && e(this).addClass("week-number-selected")
            }))
        }

        function z(e, n) {
            var r = j(e = t(e).toDate(), n),
                s = P(e, n);
            ie.find("." + n + " .month-name").html(r + " " + s), ie.find("." + n + " tbody").html(te(e)), a[n] = e, k(), A()
        }

        function j(e, n) {
            var r, s = !!a.startDate && t(a.startDate).add(a.singleMonth || "month2" !== n ? 0 : 1, "month"),
                i = !!a.endDate && t(a.endDate).add(a.singleMonth || "month1" !== n ? 0 : -1, "month");
            return e = t(e), !a.monthSelect || s && i && s.isSame(i, "month") ? '<div class="month-element">' + I(e.get("month")) + "</div>" : (r = [s && e.isSame(s, "year") ? s.get("month") : 0, i && e.isSame(i, "year") ? i.get("month") : 11])[0] === r[1] ? '<div class="month-element">' + I(e.get("month")) + "</div>" : Y("month", V(r, e.get("month"), function (e) {
                return I(e)
            }))
        }

        function P(e, n) {
            e = t(e);
            var r, s = !!a.startDate && t(a.startDate).add(a.singleMonth || "month2" !== n ? 0 : 1, "month"),
                i = !!a.endDate && t(a.endDate).add(a.singleMonth || "month1" !== n ? 0 : -1, "month"),
                o = e.get("year"),
                d = a.yearSelect && "function" == typeof a.yearSelect;
            return !a.yearSelect || s && i && s.isSame(t(i), "year") ? '<div class="month-element">' + o + "</div>" : (r = d ? a.yearSelect(o) : a.yearSelect.slice(), r = [s ? Math.max(r[0], s.get("year")) : Math.min(r[0], o), i ? Math.min(r[1], i.get("year")) : Math.max(r[1], o)], Y("year", V(r, o)))
        }

        function V(e, t, a) {
            var n = [];
            a = a || function (e) {
                return e
            };
            for (var r = e[0]; r <= e[1]; r++) n.push({
                value: r,
                text: a(r),
                isCurrent: r === t
            });
            return n
        }

        function Y(e, t) {
            for (var a, n = '<div class="select-wrapper"><select class="' + e + '" name="' + e + '">', r = 0, s = t.length; r < s; r++) n += '<option value="' + t[r].value + '"' + (t[r].isCurrent ? " selected" : "") + ">", n += t[r].text, n += "</option>", t[r].isCurrent && (a = t[r].text);
            return n += "</select>" + a + "</div>"
        }

        function A() {
            ie.find(".day").unbind("click").click(function (t) {
                f(e(this))
            }), ie.find(".day").unbind("mouseenter").mouseenter(function (t) {
                w(e(this))
            }), ie.find(".day").unbind("mouseleave").mouseleave(function (e) {
                ie.find(".date-range-length-tip").hide(), a.singleDate && y()
            }), ie.find(".week-number").unbind("click").click(function (t) {
                v(e(this))
            }), ie.find(".month").unbind("change").change(function (t) {
                b(e(this))
            }), ie.find(".year").unbind("change").change(function (t) {
                b(e(this))
            })
        }

        function W(e, t) {
            ie.find("." + t).append($()), l(t, e)
        }

        function I(e) {
            return ne("month-name")[e]
        }

        function N(e) {
            return t(e).format(a.format)
        }

        function B() {
            O();
            var e = parseInt(t(a.month1).format("YYYYMM")),
                n = parseInt(t(a.month2).format("YYYYMM")),
                r = Math.abs(e - n);
            r > 1 && 89 != r ? ie.addClass("has-gap").removeClass("no-gap").find(".gap").css("visibility", "visible") : ie.removeClass("has-gap").addClass("no-gap").find(".gap").css("visibility", "hidden");
            var s = ie.find("table.month1").height(),
                i = ie.find("table.month2").height();
            ie.find(".gap").height(Math.max(s, i) + 10)
        }

        function L() {
            if (!a.alwaysOpen) {
                var t = function () {
                    e(ue).data("date-picker-opened", !1), e(ue).trigger("datepicker-closed", {
                        relatedTarget: ie
                    })
                };
                a.customCloseAnimation ? a.customCloseAnimation.call(ie.get(0), t) : e(ie).slideUp(a.duration, t), e(ue).trigger("datepicker-close", {
                    relatedTarget: ie
                })
            }
        }

        function F() {
            z(a.month1, "month1"), z(a.month2, "month2")
        }

        function H(e, a) {
            var n = parseInt(t(e).format("YYYYMM")) - parseInt(t(a).format("YYYYMM"));
            return n > 0 ? 1 : 0 === n ? 0 : -1
        }

        function R(e, a) {
            var n = parseInt(t(e).format("YYYYMMDD")) - parseInt(t(a).format("YYYYMMDD"));
            return n > 0 ? 1 : 0 === n ? 0 : -1
        }

        function E(e) {
            return t(e).add(1, "months").toDate()
        }

        function q(e) {
            return t(e).add(-1, "months").toDate()
        }

        function $() {
            return "<div><span>" + ne("Time") + ': <span class="hour-val">00</span>:<span class="minute-val">00</span></span></div><div class="hour"><label>' + ne("Hour") + ': <input type="range" class="hour-range" name="hour" min="0" max="23"></label></div><div class="minute"><label>' + ne("Minute") + ': <input type="range" class="minute-range" name="minute" min="0" max="59"></label></div>'
        }

        function J() {
            var t = '<div class="date-picker-wrapper';
            a.extraClass && (t += " " + a.extraClass + " "), a.singleDate && (t += " single-date "), a.showShortcuts || (t += " no-shortcuts "), a.showTopbar || (t += " no-topbar "), a.customTopBar && (t += " custom-topbar "), t += '">', a.showTopbar && (t += '<div class="drp_top-bar">', a.customTopBar ? ("function" == typeof a.customTopBar && (a.customTopBar = a.customTopBar()), t += '<div class="custom-top">' + a.customTopBar + "</div>") : (t += '<div class="normal-top"><span style="color:#333">' + ne("selected") + ' </span> <b class="start-day">...</b>', a.singleDate || (t += ' <span class="separator-day">' + a.separator + '</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> ' + ne("days") + ")</i>"), t += "</div>", t += '<div class="error-top">error</div><div class="default-top">default</div>'), t += '<input type="button" class="apply-btn disabled' + K() + '" value="' + ne("apply") + '" />', t += "</div>");
            var n = a.showWeekNumbers ? 6 : 5,
                r = "&lt;";
            a.customArrowPrevSymbol && (r = a.customArrowPrevSymbol);
            var s = "&gt;";
            if (a.customArrowNextSymbol && (s = a.customArrowNextSymbol), t += '<div class="month-wrapper">   <table class="month1" cellspacing="0" border="0" cellpadding="0">       <thead>           <tr class="caption">               <th style="width:27px;">                   <span class="prev">' + r + '                   </span>               </th>               <th colspan="' + n + '" class="month-name">               </th>               <th style="width:27px;">' + (a.singleDate || !a.stickyMonths ? '<span class="next">' + s + "</span>" : "") + '               </th>           </tr>           <tr class="week-name">' + _() + "       </thead>       <tbody></tbody>   </table>", Z() && (t += '<div class="gap">' + U() + '</div><table class="month2" cellspacing="0" border="0" cellpadding="0">   <thead>   <tr class="caption">       <th style="width:27px;">' + (a.stickyMonths ? "" : '<span class="prev">' + r + "</span>") + '       </th>       <th colspan="' + n + '" class="month-name">       </th>       <th style="width:27px;">           <span class="next">' + s + '</span>       </th>   </tr>   <tr class="week-name">' + _() + "   </thead>   <tbody></tbody></table>"), t += '<div style="clear:both;height:0;font-size:0;"></div><div class="time"><div class="time1"></div>', a.singleDate || (t += '<div class="time2"></div>'), t += '</div><div style="clear:both;height:0;font-size:0;"></div></div>', t += '<div class="footer">', a.showShortcuts) {
                t += '<div class="shortcuts"><b>' + ne("shortcuts") + "</b>";
                var i = a.shortcuts;
                if (i) {
                    var o;
                    if (i["prev-days"] && i["prev-days"].length > 0) {
                        t += '&nbsp;<span class="prev-days">' + ne("past");
                        for (d = 0; d < i["prev-days"].length; d++) o = i["prev-days"][d], o += ne(i["prev-days"][d] > 1 ? "days" : "day"), t += ' <a href="javascript:;" shortcut="day,-' + i["prev-days"][d] + '">' + o + "</a>";
                        t += "</span>"
                    }
                    if (i["next-days"] && i["next-days"].length > 0) {
                        t += '&nbsp;<span class="next-days">' + ne("following");
                        for (d = 0; d < i["next-days"].length; d++) o = i["next-days"][d], o += ne(i["next-days"][d] > 1 ? "days" : "day"), t += ' <a href="javascript:;" shortcut="day,' + i["next-days"][d] + '">' + o + "</a>";
                        t += "</span>"
                    }
                    if (i.prev && i.prev.length > 0) {
                        t += '&nbsp;<span class="prev-buttons">' + ne("previous");
                        for (d = 0; d < i.prev.length; d++) o = ne("prev-" + i.prev[d]), t += ' <a href="javascript:;" shortcut="prev,' + i.prev[d] + '">' + o + "</a>";
                        t += "</span>"
                    }
                    if (i.next && i.next.length > 0) {
                        t += '&nbsp;<span class="next-buttons">' + ne("next");
                        for (d = 0; d < i.next.length; d++) o = ne("next-" + i.next[d]), t += ' <a href="javascript:;" shortcut="next,' + i.next[d] + '">' + o + "</a>";
                        t += "</span>"
                    }
                }
                if (a.customShortcuts)
                    for (d = 0; d < a.customShortcuts.length; d++) t += '&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">' + a.customShortcuts[d].name + "</a></span>";
                t += "</div>"
            }
            if (a.showCustomValues && (t += '<div class="customValues"><b>' + (a.customValueLabel || ne("custom-values")) + "</b>", a.customValues))
                for (var d = 0; d < a.customValues.length; d++) {
                    var l = a.customValues[d];
                    t += '&nbsp;<span class="custom-value"><a href="javascript:;" custom="' + l.value + '">' + l.name + "</a></span>"
                }
            return t += "</div></div>", e(t)
        }

        function K() {
            var e = "";
            return !0 === a.autoClose && (e += " hide"), "" !== a.applyBtnClass && (e += " " + a.applyBtnClass), e
        }

        function _() {
            var e = a.showWeekNumbers ? "<th>" + ne("week-number") + "</th>" : "";
            return "monday" == a.startOfWeek ? e + "<th>" + ne("week-1") + "</th><th>" + ne("week-2") + "</th><th>" + ne("week-3") + "</th><th>" + ne("week-4") + "</th><th>" + ne("week-5") + "</th><th>" + ne("week-6") + "</th><th>" + ne("week-7") + "</th>" : e + "<th>" + ne("week-7") + "</th><th>" + ne("week-1") + "</th><th>" + ne("week-2") + "</th><th>" + ne("week-3") + "</th><th>" + ne("week-4") + "</th><th>" + ne("week-5") + "</th><th>" + ne("week-6") + "</th>"
        }

        function G(e) {
            return e = t(e), !(!a.startDate || !e.endOf("month").isBefore(a.startDate)) || !(!a.endDate || !e.startOf("month").isAfter(a.endDate))
        }

        function U() {
            for (var e = ['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'], t = 0; t < 20; t++) e.push('<div class="gap-line"><div class="gap-1"></div><div class="gap-2"></div><div class="gap-3"></div></div>');
            return e.push("</div>"), e.join("")
        }

        function Z() {
            return !a.singleMonth
        }

        function Q(t, a, n) {
            var r = e.extend(!0, {}, t);
            e.each(a, function (e, t) {
                var a = t(n);
                for (var s in a) r.hasOwnProperty(s) ? r[s] += a[s] : r[s] = a[s]
            });
            var s = "";
            for (var i in r) r.hasOwnProperty(i) && (s += i + '="' + r[i] + '" ');
            return s
        }

        function X(e) {
            return Math.floor(ee(e) / 864e5)
        }

        function ee(e) {
            return t.isMoment(e) && (e = e.toDate().getTime()), "object" == typeof e && e.getTime && (e = e.getTime()), "string" != typeof e || e.match(/\d{13}/) || (e = t(e, a.format).toDate().getTime()), e = parseInt(e, 10) - 60 * (new Date).getTimezoneOffset() * 1e3
        }

        function te(e) {
            var n = [];
            e.setDate(1);
            new Date(e.getTime() - 864e5);
            var r = new Date,
                s = e.getDay();
            0 === s && "monday" === a.startOfWeek && (s = 7);
            var i, o;
            if (s > 0)
                for (l = s; l > 0; l--) o = g((h = new Date(e.getTime() - 864e5 * l)).getTime()), a.startDate && R(h, a.startDate) < 0 && (o = !1), a.endDate && R(h, a.endDate) > 0 && (o = !1), n.push({
                    date: h,
                    type: "lastMonth",
                    day: h.getDate(),
                    time: h.getTime(),
                    valid: o
                });
            for (var d = e.getMonth(), l = 0; l < 40; l++) o = g((i = t(e).add(l, "days").toDate()).getTime()), a.startDate && R(i, a.startDate) < 0 && (o = !1), a.endDate && R(i, a.endDate) > 0 && (o = !1), n.push({
                date: i,
                type: i.getMonth() == d ? "toMonth" : "nextMonth",
                day: i.getDate(),
                time: i.getTime(),
                valid: o
            });
            for (var u = [], m = 0; m < 6 && "nextMonth" != n[7 * m].type; m++) {
                u.push("<tr>");
                for (var h = 0; h < 7; h++) {
                    i = n[7 * m + ("monday" == a.startOfWeek ? h + 1 : h)];
                    var c = t(i.time).format("L") == t(r).format("L");
                    if (i.extraClass = "", i.tooltip = "", i.valid && a.beforeShowDay && "function" == typeof a.beforeShowDay) {
                        var p = a.beforeShowDay(t(i.time).toDate());
                        i.valid = p[0], i.extraClass = p[1] || "", i.tooltip = p[2] || "", "" !== i.tooltip && (i.extraClass += " has-tooltip ")
                    }
                    var f = {
                        time: i.time,
                        "data-tooltip": i.tooltip,
                        class: "day " + i.type + " " + i.extraClass + " " + (i.valid ? "valid" : "invalid") + " " + (c ? "real-today" : "")
                    };
                    0 === h && a.showWeekNumbers && u.push('<td><div class="week-number" data-start-time="' + i.time + '">' + a.getWeekNumber(i.date) + "</div></td>"), u.push("<td " + Q({}, a.dayTdAttrs, i) + "><div " + Q(f, a.dayDivAttrs, i) + ">" + ae(i.time, i.day) + "</div></td>")
                }
                u.push("</tr>")
            }
            return u.join("")
        }

        function ae(e, t) {
            return a.showDateFilter && "function" == typeof a.showDateFilter ? a.showDateFilter(e, t) : t
        }

        function ne(t) {
            var a = t.toLowerCase(),
                n = t in de ? de[t] : a in de ? de[a] : null,
                r = e.dateRangePickerLanguages.default;
            return null == n && (n = t in r ? r[t] : a in r ? r[a] : ""), n
        }

        function re() {
            var e = a.defaultTime ? a.defaultTime : new Date;
            return a.lookBehind ? (a.startDate && H(e, a.startDate) < 0 && (e = E(t(a.startDate).toDate())), a.endDate && H(e, a.endDate) > 0 && (e = t(a.endDate).toDate())) : (a.startDate && H(e, a.startDate) < 0 && (e = t(a.startDate).toDate()), a.endDate && H(E(e), a.endDate) > 0 && (e = q(t(a.endDate).toDate()))), a.singleDate && (a.startDate && H(e, a.startDate) < 0 && (e = t(a.startDate).toDate()), a.endDate && H(e, a.endDate) > 0 && (e = t(a.endDate).toDate())), e
        }

        function se(e) {
            e || (e = re()), a.lookBehind ? (z(q(e), "month1"), z(e, "month2")) : (z(e, "month1"), z(E(e), "month2")), a.singleDate && z(e, "month1"), O(), B()
        }
        a || (a = {}), (a = e.extend(!0, {
            autoClose: !1,
            format: "YYYY-MM-DD",
            separator: " to ",
            language: "auto",
            startOfWeek: "sunday",
            getValue: function () {
                return e(this).val()
            },
            setValue: function (t) {
                e(this).attr("readonly") || e(this).is(":disabled") || t == e(this).val() || e(this).val(t)
            },
            startDate: !1,
            endDate: !1,
            time: {
                enabled: !1
            },
            minDays: 0,
            maxDays: 0,
            showShortcuts: !1,
            shortcuts: {},
            customShortcuts: [],
            inline: !1,
            container: "body",
            alwaysOpen: !1,
            singleDate: !1,
            lookBehind: !1,
            batchMode: !1,
            duration: 200,
            stickyMonths: !1,
            dayDivAttrs: [],
            dayTdAttrs: [],
            selectForward: !1,
            selectBackward: !1,
            applyBtnClass: "",
            singleMonth: "auto",
            hoveringTooltip: function (e, t, a) {
                return e > 1 ? e + " " + ne("days") : ""
            },
            showTopbar: !0,
            swapTime: !1,
            showWeekNumbers: !1,
            getWeekNumber: function (e) {
                return t(e).format("w")
            },
            customOpenAnimation: null,
            customCloseAnimation: null,
            customArrowPrevSymbol: null,
            customArrowNextSymbol: null,
            monthSelect: !1,
            yearSelect: !1
        }, a)).start = !1, a.end = !1, a.startWeek = !1, a.isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints, a.isTouchDevice && (a.hoveringTooltip = !1), "auto" == a.singleMonth && (a.singleMonth = e(window).width() < 480), a.singleMonth && (a.stickyMonths = !1), a.showTopbar || (a.autoClose = !0), a.startDate && "string" == typeof a.startDate && (a.startDate = t(a.startDate, a.format).toDate()), a.endDate && "string" == typeof a.endDate && (a.endDate = t(a.endDate, a.format).toDate()), a.yearSelect && "boolean" == typeof a.yearSelect && (a.yearSelect = function (e) {
            return [e - 5, e + 5]
        });
        var ie, oe, de = function () {
                if ("auto" == a.language) {
                    var t = navigator.language ? navigator.language : navigator.browserLanguage;
                    return t && (t = t.toLowerCase()) in e.dateRangePickerLanguages ? e.dateRangePickerLanguages[t] : e.dateRangePickerLanguages.default
                }
                return a.language && a.language in e.dateRangePickerLanguages ? e.dateRangePickerLanguages[a.language] : e.dateRangePickerLanguages.default
            }(),
            le = !1,
            ue = this,
            me = e(ue).get(0);
        return e(this).unbind(".datepicker").bind("click.datepicker", function (e) {
                ie.is(":visible") || s(a.duration)
            }).bind("change.datepicker", function (e) {
                i()
            }).bind("keyup.datepicker", function () {
                try {
                    clearTimeout(oe)
                } catch (e) {}
                oe = setTimeout(function () {
                    i()
                }, 2e3)
            }),
            function () {
                function s(t) {
                    var n = e(t).parents("table").hasClass("month2"),
                        r = n ? a.month2 : a.month1;
                    r = E(r), !a.singleMonth && !a.singleDate && !n && H(r, a.month2) >= 0 || G(r) || (z(r, n ? "month2" : "month1"), B())
                }

                function i(e) {
                    var t = E(a.month1),
                        n = E(a.month2);
                    G(n) || !a.singleDate && H(t, n) >= 0 || (z(t, "month1"), z(n, "month2"), O())
                }

                function o(t) {
                    var n = e(t).parents("table").hasClass("month2"),
                        r = n ? a.month2 : a.month1;
                    r = q(r), n && H(r, a.month1) <= 0 || G(r) || (z(r, n ? "month2" : "month1"), B())
                }

                function l(e) {
                    var t = q(a.month1),
                        n = q(a.month2);
                    G(t) || !a.singleDate && H(n, t) <= 0 || (z(n, "month2"), z(t, "month1"), O())
                }
                var u = this;
                if (e(this).data("date-picker-opened")) L();
                else {
                    e(this).data("date-picker-opened", !0), (ie = J().hide()).append('<div class="date-range-length-tip"></div>'), e(a.container).append(ie), a.inline ? ie.addClass("inline-wrapper") : r(), a.alwaysOpen && ie.find(".apply-btn").hide();
                    var m = re();
                    if (se(m), a.time.enabled)
                        if (a.startDate && a.endDate || a.start && a.end) W(t(a.start || a.startDate).toDate(), "time1"), W(t(a.end || a.endDate).toDate(), "time2");
                        else {
                            var c = a.defaultEndTime ? a.defaultEndTime : m;
                            W(m, "time1"), W(c, "time2")
                        }
                    var p = "";
                    p = ne(a.singleDate ? "default-single" : a.minDays && a.maxDays ? "default-range" : a.minDays ? "default-more" : a.maxDays ? "default-less" : "default-default"), ie.find(".default-top").html(p.replace(/\%d/, a.minDays).replace(/\%d/, a.maxDays)), a.singleMonth ? ie.addClass("single-month") : ie.addClass("two-months"), setTimeout(function () {
                        d(), le = !0
                    }, 0), ie.click(function (e) {
                        e.stopPropagation()
                    }), e(document).bind("click.datepicker", function (e) {
                        n(e, u[0]) || ie.is(":visible") && L()
                    }), ie.find(".next").click(function () {
                        a.stickyMonths ? i() : s(this)
                    }), ie.find(".prev").click(function () {
                        a.stickyMonths ? l() : o(this)
                    }), ie.attr("unselectable", "on").css("user-select", "none").bind("selectstart", function (e) {
                        return e.preventDefault(), !1
                    }), ie.find(".apply-btn").click(function () {
                        L();
                        var t = N(new Date(a.start)) + a.separator + N(new Date(a.end));
                        e(u).trigger("datepicker-apply", {
                            value: t,
                            date1: new Date(a.start),
                            date2: new Date(a.end)
                        })
                    }), ie.find("[custom]").click(function () {
                        var t = e(this).attr("custom");
                        a.start = !1, a.end = !1, ie.find(".day.checked").removeClass("checked"), a.setValue.call(me, t), x(), M(!0), O(), a.autoClose && L()
                    }), ie.find("[shortcut]").click(function () {
                        var t, n = e(this).attr("shortcut"),
                            r = new Date,
                            s = !1;
                        if (-1 != n.indexOf("day")) {
                            var i = parseInt(n.split(",", 2)[1], 10);
                            s = new Date((new Date).getTime() + 864e5 * i), r = new Date(r.getTime() + 864e5 * (i > 0 ? 1 : -1))
                        } else if (-1 != n.indexOf("week")) {
                            var o;
                            for (o = 1 == (t = -1 != n.indexOf("prev,") ? -1 : 1) ? "monday" == a.startOfWeek ? 1 : 0 : "monday" == a.startOfWeek ? 0 : 6, r = new Date(r.getTime() - 864e5); r.getDay() != o;) r = new Date(r.getTime() + 864e5 * t);
                            s = new Date(r.getTime() + 864e5 * t * 6)
                        } else if (-1 != n.indexOf("month"))(s = 1 == (t = -1 != n.indexOf("prev,") ? -1 : 1) ? E(r) : q(r)).setDate(1), (r = E(s)).setDate(1), r = new Date(r.getTime() - 864e5);
                        else if (-1 != n.indexOf("year")) t = -1 != n.indexOf("prev,") ? -1 : 1, (s = new Date).setFullYear(r.getFullYear() + t), s.setMonth(0), s.setDate(1), r.setFullYear(r.getFullYear() + t), r.setMonth(11), r.setDate(31);
                        else if ("custom" == n) {
                            var d = e(this).html();
                            if (a.customShortcuts && a.customShortcuts.length > 0)
                                for (var l = 0; l < a.customShortcuts.length; l++) {
                                    var u = a.customShortcuts[l];
                                    if (u.name == d) {
                                        var m = [];
                                        if ((m = u.dates.call()) && 2 == m.length && (s = m[0], r = m[1]), m && 1 == m.length) {
                                            var h = m[0];
                                            z(h, "month1"), z(E(h), "month2"), B()
                                        }
                                        break
                                    }
                                }
                        }
                        s && r && (T(s, r), x())
                    }), ie.find(".time1 input[type=range]").bind("change touchmove", function (t) {
                        var a = t.target;
                        h("time1", "hour" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0, "minute" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0)
                    }), ie.find(".time2 input[type=range]").bind("change touchmove", function (t) {
                        var a = t.target;
                        h("time2", "hour" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0, "minute" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0)
                    })
                }
            }.call(this), a.alwaysOpen && s(0), e(this).data("dateRangePicker", {
                setStart: function (e) {
                    return "string" == typeof e && (e = t(e, a.format).toDate()), a.end = !1, C(e), this
                },
                setEnd: function (e, n) {
                    var r = new Date;
                    return r.setTime(a.start), "string" == typeof e && (e = t(e, a.format).toDate()), T(r, e, n), this
                },
                setDateRange: function (e, n, r) {
                    "string" == typeof e && "string" == typeof n && (e = t(e, a.format).toDate(), n = t(n, a.format).toDate()), T(e, n, r)
                },
                clear: function () {
                    a.start = !1, a.end = !1, ie.find(".day.checked").removeClass("checked"), ie.find(".day.last-date-selected").removeClass("last-date-selected"), ie.find(".day.first-date-selected").removeClass("first-date-selected"), a.setValue.call(me, ""), x(), M(), O()
                },
                close: L,
                open: s,
                redraw: F,
                getDatePicker: function () {
                    return ie
                },
                resetMonthsView: se,
                destroy: function () {
                    e(ue).unbind(".datepicker"), e(ue).data("dateRangePicker", ""), e(ue).data("date-picker-opened", null), ie.remove(), e(window).unbind("resize.datepicker", r), e(document).unbind("click.datepicker", L)
                }
            }), e(window).bind("resize.datepicker", r), this
    }
});
