// Variables to store DOM elements
const toggleButton = document.getElementById("toggle-lang");
const elements = {
    title1: document.getElementById("title1"),
    parg1: document.getElementById("parg1"),
    title2: document.getElementById("title2"),
    parg2: document.getElementById("parg2"),
    title3: document.getElementById("title3"),
    parg3: document.getElementById("parg3"),
    title4: document.getElementById("title4"),
    parg4: document.getElementById("parg4"),
    footer: document.getElementById("footer"),
    footerPrag: document.getElementById("footer-prag"),
};

// Language content
const content = {
    english: {
        title1: "Programming",
        parg1: "Now you can enjoy a unique experience to develop your professional skills through advanced courses.",
        title2: "Data Encryption",
        parg2: "Keep your data secure with our encryption website.",
        title3: "Code Editor",
        parg3: "Write and test your code through our platform.",
        title4: "Radio",
        parg4: "Listen to your favorite radio stations easily.",
        footer: "El-Husseiny",
        footerPrag: "I'm Dreaming TO developing something new that benefits the whole world.",
    },
    arabic: {
        title1: "البرمجيات",
        parg1: "استفد الآن من تجربة فريدة لتطوير مهاراتك المهنية، من خلال الاستفادة من كورسات متقدمة تعزز من خبراتك.",
        title2: "تشفير البيانات",
        parg2: "حافظ على خصوصية معلوماتك باستخدام تقنيات التشفير المتقدمة من خلال موقعنا.",
        title3: "كتابة الأكواد",
        parg3: "اكتب أكوادك البرمجية وجربها مباشرة عبر منصتنا الإلكترونية.",
        title4: "الراديو",
        parg4: "استمع بسهولة إلى محطات الراديو المفضلة لديك، أينما كنت.",
        footer: "الحسيني للبرمجيات",
        footerPrag: "اسعى جاهدا لتطوير حلول مبتكرة تسهم في تقدم العالم بشكل إيجابي."
    }

};

// Update language content and page direction
function setLanguage(language) {
    const selectedContent = content[language];
    for (const key in selectedContent) {
        if (elements[key]) {
            elements[key].innerHTML = selectedContent[key];
        }
    }

    // Update <html> attributes
    const htmlElement = document.documentElement;
    if (language === "english") {
        htmlElement.lang = "en"; // Change language to English
        htmlElement.dir = "ltr"; // Change direction to left-to-right
        toggleButton.innerText = "Ar"; // Update button text
    } else if (language === "arabic") {
        htmlElement.lang = "ar"; // Change language to Arabic
        htmlElement.dir = "rtl"; // Change direction to right-to-left
        toggleButton.innerText = "En"; // Update button text
    }

    // Save language in local storage
    localStorage.setItem("lang", language);
}

// Toggle language
toggleButton.onclick = () => {
    const currentLanguage = localStorage.getItem("lang") || "arabic";
    const newLanguage = currentLanguage === "english" ? "arabic" : "english";
    setLanguage(newLanguage);
};

// On page load
window.onload = () => {
    const savedLanguage = localStorage.getItem("lang") || "arabic";
    setLanguage(savedLanguage);
};