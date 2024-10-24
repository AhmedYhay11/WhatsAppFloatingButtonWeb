class WhatsAppFloatingButton {
    // إعداد الرسائل حسب اللغة
    static messages = {
        en: {
            help: "I can assist you.",
            helpText: "How can I assist you?",
            greeting: "Hello 👋",
            typeHere: "Type your message here...",
            online: "Online",
            send: "Send",
        },
        ar: {
            help: "يمكنني مساعدتك.",
            helpText: "كيف يمكنني مساعدك؟",
            greeting: "مرحبًا 👋",
            typeHere: "اكتب رسالتك هنا...",
            online: "متصل",
            send: "إرسال",
        }
    };

    // دالة init لإنشاء واجهة الدردشة
    static init(parentElement, phoneNumber, appName, image, lang = 'en') {
        const container = document.querySelector(parentElement);
        if (!container) return;

        const currentLang = this.messages[lang];
        this.createChatHTML(container, currentLang, appName, image);
        this.setupEventListeners(phoneNumber);
        WhatsAppFloatingButton.runAnimationCycle(container.querySelector('.box-whatsapp'), container.querySelector('.box-message'), 2000);
    }

    // دالة لإنشاء HTML واجهة الدردشة
    static createChatHTML(container, messages, appName, image) {
        container.innerHTML = `
        <div class="box-whatsapp" dir="${messages === this.messages.ar ? 'rtl' : 'ltr'}">
            <svg class="icon-whatsapp click" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            <div class="box-message hide">
                <span>${messages.help}</span>
            </div>
            <div class="whatsApp-poems"><span>1</span></div>
            <div class="box-chat">
                <div class="header-chat">
                    <div class="close-box-chat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    <div class="profile-img">
                        <img loading="lazy" src="${image}" alt="${appName}">
                    </div>
                    <div class="info-chat" style="margin: 0;">
                        <p>${appName}</p>
                        <span>${messages.online}</span>
                    </div>
                </div>
                <div class="main-chat">
                    <div class="box-message-chat">
                        <div class="content-message">
                            <p>${messages.greeting}</p>
                            <div class="footer-message-content">
                                <p>${messages.helpText}</p>
                                <span class="time-message-send">12:00</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17"
                            fill="currentColor" class="BubbleDetail__StyledSvg-sc-1otb0pb-0 lpbmsP">
                            <path d="M0.772965 3.01404C-0.0113096 1.68077 0.950002 0 2.49683 0H9V17L0.772965 3.01404Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <div class="footer-chat">
                    <div class="input-message">
                        <textarea type="text" name="message-text" id="message-text"
                            placeholder="${messages.typeHere}"></textarea>
                        <button type="button" name="button" id="send">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" class="injected-svg" loading="lazy">
                                <path
                                    d="M9.166 7.5a.714.714 0 0 0-.998.83l1.152 4.304a.571.571 0 0 0 .47.418l5.649.807c.163.023.163.26 0 .283l-5.648.806a.572.572 0 0 0-.47.418l-1.153 4.307a.714.714 0 0 0 .998.83l12.284-5.857a.715.715 0 0 0 0-1.29L9.166 7.5Z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
    }

    // دالة لتجهيز مستمعي الأحداث
    static setupEventListeners(phoneNumber) {
        const sendButton = document.querySelector('#send');
        sendButton.addEventListener('click', function () {
            const message = document.querySelector('#message-text').value.trim();
            if (message) { // التحقق من وجود رسالة
                WhatsAppChat.sendMessage(phoneNumber, message);
                document.querySelector('#message-text').value = ''; // مسح حقل الإدخال بعد الإرسال
            }
        });

        const clickButton = document.querySelector('.click');
        const closeButton = document.querySelector('.close-box-chat');
        const boxChat = document.querySelector('.box-chat');

        clickButton.addEventListener("click", () => {
            boxChat.classList.toggle('show');
        });

        closeButton.addEventListener("click", () => {
            boxChat.classList.toggle('show');
        });
    }

    // دالة لإرسال الرسالة عبر WhatsApp
    static sendMessage(phoneNumber, message) {
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    }

    // دالة لتبديل حالة الرسوم المتحركة
    static toggleAnimation(state, boxWhatsApp, boxMessage) {
        if (state === 'running') {
            boxWhatsApp.classList.remove('paused');
            boxMessage.classList.remove('hide');
        } else if (state === 'paused') {
            boxWhatsApp.classList.add('paused');
            boxMessage.classList.add('hide');
        }
    }
    
    // دالة لتشغيل الرسوم المتحركة
    static runAnimationCycle(boxWhatsApp, boxMessage, animationDuration) {
        WhatsAppFloatingButton.toggleAnimation('paused', boxWhatsApp, boxMessage);
        setTimeout(() => {
            console.log(4 * animationDuration + 150);
            WhatsAppFloatingButton.toggleAnimation('running', boxWhatsApp, boxMessage);
            setTimeout(() => WhatsAppFloatingButton.runAnimationCycle(boxWhatsApp, boxMessage, animationDuration), 8500);
        }, 4 * animationDuration + 500);
    }
}
