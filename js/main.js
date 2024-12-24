const jsonData = {
    "generators": [
        {
            "id": 1,
            "title": "GPT",
            "img": "chatgpt.png",
            "content": "מודל שפה גדול ואחד מכלי הבינה המלאכותית היוצרת הבולטים.",
            "link": "https://chat.openai.com/",
            "tag": "טקסט",
            "prompt": "כתוב סיכום קצר על נושא מסוים בשפה פשוטה."
        },
        {
            "id": 2,
            "title": "DALL-E",
            "img": "dall-e.png",
            "content": "תוכנת בינה מלאכותית שיוצרת תמונות מתיאורים טקסטואליים.",
            "link": "https://labs.openai.com/",
            "tag": "תמונה",
            "prompt": "צור תמונה של עיר עתידנית עם שמיים סגולים ורכבים מעופפים."
        },
        {
            "id": 3,
            "title": "Elicit",
            "img": "elicit.png",
            "content": "כלי מקוון המשמש כעוזר מחקר מבוסס בינה מלאכותית.",
            "link": "https://elicit.com/",
            "tag": "טקסט",
            "prompt": "מצא לי מאמרים מדעיים על שינויי אקלים."
        },
        {
            "id": 4,
            "title": "Claude",
            "img": "claude.png",
            "content": "בוט שיחה מבוסס בינה מלאכותית מבית Anthropic.",
            "link": "https://claude.ai/login",
            "tag": "טקסט",
            "prompt": "הסבר לי על ההיסטוריה של האינטרנט בקצרה."
        },
        {
            "id": 5,
            "title": "Google Bard",
            "img": "bard.png",
            "content": "בוט שיחה מבוסס בינה מלאכותית מבית Google.",
            "link": "https://bard.google.com/chat",
            "tag": "טקסט",
            "prompt": "תן לי רעיונות למתכונים עם תפוחי אדמה."
        },
        {
            "id": 6,
            "title": "Segment Anything",
            "img": "segmentanything.png",
            "content": "שירות מבית Meta המנתח תמונות לגזירה של חלקים מובחנים.",
            "link": "https://segment-anything.com/",
            "tag": "תמונה",
            "prompt": "זהה והפרד את כל האנשים שבתמונה."
        },
        {
            "id": 7,
            "title": "Palette",
            "img": "palettefm.png",
            "content": "שירות מקוון לצביעה של תמונות בשחור לבן.",
            "link": "https://palette.fm/",
            "tag": "תמונה",
            "prompt": "צבע תמונה ישנה של משפחה בשחור לבן לצבעים טבעיים."
        },
        {
            "id": 8,
            "title": "Runway",
            "img": "runway.png",
            "content": "פלטפורמת בינה מלאכותית לעריכת וידאו, אנימציה ותוכן יצירתי.",
            "link": "https://runwayml.com/",
            "tag": "וידאו",
            "prompt": "הפוך סרטון בן דקה לסגנון ציורי כמו ואן גוך."
        },
        {
            "id": 9,
            "title": "MidJourney",
            "img": "midjourney.png",
            "content": "כלי ליצירת תמונות אמנותיות מתיאורי טקסט, תוך שימוש בבינה מלאכותית.",
            "link": "https://www.midjourney.com/",
            "tag": "תמונה",
            "prompt": "צור איור של יער קסום בלילה עם עצים זוהרים ופיות מעופפות."
        },
        {
            "id": 10,
            "title": "OpenArt",
            "img": "OpenArt.png",
            "content": "מודל יצירת תמונות מתקדם ואפקטיבי ליצירת גרפיקה אמנותית.",
            "link": "https://openart.ai/home?utm_source=google&utm_medium=pmax&utm_campaign=Performance_Max_High_End_Computer_Aficionados&utm_source=google&utm_medium=pmax&utm_campaign=21319042947&utm_term=&gad_source=1&gclid=CjwKCAiA34S7BhAtEiwACZzv4cobiNqR1JHHukANc7Ge9zGe_6vIdAAkqAZ2PcvCQQxejRXL8fwGFxoC8BsQAvD_BwE",
            "tag": "תמונה",
            "prompt": "צור פוסטר רטרו של רובוטים משנות ה-80 בסגנון קומיקס."
        }

    ]
};


// לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function () {
    const itemContainer = document.getElementById('itemContainer');
    itemContainer.classList.add("row", "row-cols-1", "row-cols-md-2", "row-cols-lg-3", "g-4");

    // יצירת כרטיסיות
    jsonData.generators.forEach(generator => {
        const myCard = document.createElement("div");
        myCard.classList.add("card", "shadow-md", "p-2", "border-0", "rounded");

        // יצירת תמונה
        const myImg = document.createElement("img");
        myImg.setAttribute("src", `img/${generator.img}`);
        myImg.setAttribute("alt", generator.title);
        myImg.classList.add("img-fluid");
        myCard.appendChild(myImg);

        // גוף הכרטיסייה
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "text-center");

        // כותרת
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title", "fw-bold");
        cardTitle.textContent = generator.title;
        cardBody.appendChild(cardTitle);

        // תיאור
        const cardContent = document.createElement("p");
        cardContent.classList.add("card-text");
        cardContent.textContent = generator.content;
        cardBody.appendChild(cardContent);

        // פרומפט מומלץ
        const cardPrompt = document.createElement("p");
        cardPrompt.classList.add("card-text", "text-light", "fw-bold");
        cardPrompt.textContent = "פרומפט מומלץ: " + generator.prompt;
        cardBody.appendChild(cardPrompt);

        // כפתור "Learn More"
        const cardLink = document.createElement("a");
        cardLink.classList.add("btn", "btn-primary", "d-flex", "align-items-center", "justify-content-center");
        cardLink.setAttribute("href", generator.link);
        cardLink.setAttribute("target", "_blank");
        cardLink.innerHTML = `<span>Learn More</span> <i class="ms-2 fas fa-arrow-right"></i>`;
        cardBody.appendChild(cardLink);

        // כפתור מועדפים
        const favoriteButton = document.createElement("button");
        favoriteButton.classList.add("btn", "btn-outline-warning", "mt-3");
        favoriteButton.textContent = "⭐ הוסף למועדפים";
        favoriteButton.addEventListener("click", function () {
            this.textContent = this.textContent.includes('⭐') ? '🌟 במועדפים' : '⭐ הוסף למועדפים';
        });
        cardBody.appendChild(favoriteButton);

        // הוספת גוף הכרטיס לכרטיס
        myCard.appendChild(cardBody);

        // הוספת כרטיס למכולה
        itemContainer.appendChild(myCard);
    });

    // פונקציית חיפוש
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('#itemContainer .card');

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) ? '' : 'none';
        });
    });
});
