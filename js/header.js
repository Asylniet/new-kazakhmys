class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const transparent = this.classList.contains('transparent');
        const widthCheck = window.innerWidth >= 690;
        this.innerHTML = `
        <header class="flex column">
            <div class="header-top-wrapper">
                <div class="header-top">
                    <div class="flex spb small-nav">
                        <a href="/">
                            <img src="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/images/logo.png" alt="Small logo">
                        </a>
                        <div class="language-top-holder"></div>
                        <button class="hamburger-wrapper">
                            <div class="hamburger"></div>
                        </button>
                    </div>
                    <div class="actual-header-top">
                    <div class="locationWrapper">
                        <div class="flex g10 locationLink">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00033 1.33325C6.59503 1.33318 5.2465 1.88776 4.24782 2.87645C3.24915 3.86513 2.68105 5.20803 2.66699 6.61325C2.66699 10.2666 7.36699 14.3333 7.56699 14.5066C7.68775 14.6099 7.84142 14.6666 8.00033 14.6666C8.15923 14.6666 8.3129 14.6099 8.43366 14.5066C8.66699 14.3333 13.3337 10.2666 13.3337 6.61325C13.3196 5.20803 12.7515 3.86513 11.7528 2.87645C10.7542 1.88776 9.40562 1.33318 8.00033 1.33325ZM8.00033 13.0999C6.88699 12.0399 4.00033 9.09992 4.00033 6.61325C4.00033 5.55239 4.42175 4.53497 5.1719 3.78482C5.92204 3.03468 6.93946 2.61325 8.00033 2.61325C9.06119 2.61325 10.0786 3.03468 10.8288 3.78482C11.5789 4.53497 12.0003 5.55239 12.0003 6.61325C12.0003 9.07992 9.11366 12.0399 8.00033 13.0999Z" fill="white"/>
                                <path d="M8.00033 4C7.53884 4 7.08771 4.13685 6.704 4.39324C6.32028 4.64963 6.02121 5.01404 5.84461 5.44041C5.668 5.86677 5.6218 6.33592 5.71183 6.78854C5.80186 7.24117 6.02409 7.65693 6.35041 7.98325C6.67673 8.30957 7.09249 8.5318 7.54512 8.62183C7.99774 8.71186 8.46689 8.66566 8.89325 8.48905C9.31962 8.31245 9.68403 8.01338 9.94042 7.62966C10.1968 7.24595 10.3337 6.79482 10.3337 6.33333C10.3337 5.71449 10.0878 5.121 9.65024 4.68342C9.21266 4.24583 8.61917 4 8.00033 4ZM8.00033 7.33333C7.80255 7.33333 7.60921 7.27468 7.44476 7.1648C7.28031 7.05492 7.15213 6.89874 7.07645 6.71602C7.00076 6.53329 6.98096 6.33222 7.01954 6.13824C7.05813 5.94426 7.15337 5.76608 7.29322 5.62623C7.43307 5.48637 7.61126 5.39113 7.80524 5.35255C7.99922 5.31396 8.20028 5.33377 8.38301 5.40945C8.56574 5.48514 8.72192 5.61331 8.8318 5.77776C8.94168 5.94221 9.00033 6.13555 9.00033 6.33333C9.00033 6.59855 8.89497 6.8529 8.70743 7.04044C8.5199 7.22798 8.26554 7.33333 8.00033 7.33333Z" fill="white"/>
                            </svg>
                            <a href="https://yandex.kz/maps/org/6322348238/?ll=74.981621%2C46.838819&utm_source=share&z=18" target="_blank" rel="noreferrer-noopener">
                                РК, Карагандинская область, г. Балхаш, ул. Абая, 36
                            </a>
                        </div>
                    </div>
                        <div class="flex g20 additionalLinksWrapper">
                            <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/staff/index.html" class="additionalLink">Педагогический состав</a>
                            <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/projects/index.html" class="additionalLink">Проекты</a>
                            <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/divisions/index.html" class="additionalLink">Подразделения</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-middle">
                <a href="/" class="logo-image-link">
                    <img src="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/images/logo.png" alt="logo" class="logo-image">
                </a>
                <div class="header-middle-info contact1">
                    <img src="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/icons/phone${transparent && widthCheck ? '-white' : ''}.svg" alt="phone">
                    <span>Приемная:</span>
                    <a href="tel:87103668407" class="underline-hover">+7 (710) 366-84-07</a>
                </div>
                <div class="header-middle-info contact2">
                    <img src="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/icons/phone${transparent && widthCheck ? '-white' : ''}.svg" alt="phone2">
                    <span>Телефон доверия:</span>
                    <a href="tel:87103675003" class="underline-hover">+7 (710) 367-50-03</a>
                </div>
                <div class="contact3-wrapper">
                    <div class="header-middle-info contact3">
                        <img src="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/icons/email${transparent && widthCheck ? '-white' : ''}.svg" alt="mail" class="mailIcon">
                        <a href="mailto:ptk_balhash@mail.ru" class="underline-hover inline mailLink">ptk_balhash@mail.ru</a>
                    </div>
                </div>
                <div class="language-middle-holder">
                    <div class="language-options selectable" selected="РУС">
                        <div class="selected">
                            <span class="language-option">РУС</span>
                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.00012 4.33329C3.91239 4.3338 3.82541 4.31698 3.74419 4.28381C3.66296 4.25063 3.58908 4.20175 3.52679 4.13996L0.860124 1.47329C0.797965 1.41113 0.748658 1.33734 0.715017 1.25613C0.681377 1.17491 0.664063 1.08787 0.664062 0.999961C0.664062 0.912054 0.681377 0.825009 0.715017 0.743794C0.748658 0.662579 0.797965 0.588786 0.860124 0.526627C0.922283 0.464468 0.996076 0.415161 1.07729 0.381521C1.15851 0.34788 1.24555 0.330566 1.33346 0.330566C1.42136 0.330566 1.50841 0.34788 1.58962 0.381521C1.67084 0.415161 1.74463 0.464468 1.80679 0.526627L4.00012 2.73329L6.20012 0.613294C6.26145 0.545101 6.33619 0.490295 6.41966 0.452304C6.50314 0.414313 6.59356 0.393955 6.68526 0.392502C6.77696 0.39105 6.86798 0.408533 6.95261 0.44386C7.03725 0.479188 7.11369 0.531599 7.17714 0.597815C7.2406 0.664031 7.28971 0.742629 7.32141 0.828691C7.35311 0.914754 7.3667 1.00643 7.36135 1.09799C7.356 1.18955 7.33181 1.27901 7.2903 1.3608C7.2488 1.44258 7.19086 1.51492 7.12012 1.57329L4.45346 4.14663C4.33154 4.26417 4.16946 4.33091 4.00012 4.33329Z" fill="#262729"/>
                            </svg>
                        </div>
                        <div class="options-holder">
                            <div class="options">
                                <span class="language-option">ҚАЗ</span>
                                <span class="language-option">ENG</span> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search">
                    <input type="text" placeholder="Поиск по сайту">
                    <button type="submit">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5325 12.4675L10.9825 9.925C11.8052 8.87684 12.2517 7.58249 12.25 6.25C12.25 5.06331 11.8981 3.90328 11.2388 2.91658C10.5795 1.92989 9.64246 1.16085 8.5461 0.706725C7.44975 0.2526 6.24335 0.13378 5.07946 0.365291C3.91558 0.596802 2.84648 1.16825 2.00736 2.00736C1.16825 2.84648 0.596802 3.91558 0.365291 5.07946C0.13378 6.24335 0.2526 7.44975 0.706725 8.5461C1.16085 9.64246 1.92989 10.5795 2.91658 11.2388C3.90328 11.8981 5.06331 12.25 6.25 12.25C7.58249 12.2517 8.87684 11.8052 9.925 10.9825L12.4675 13.5325C12.5372 13.6028 12.6202 13.6586 12.7116 13.6967C12.803 13.7347 12.901 13.7544 13 13.7544C13.099 13.7544 13.197 13.7347 13.2884 13.6967C13.3798 13.6586 13.4628 13.6028 13.5325 13.5325C13.6028 13.4628 13.6586 13.3798 13.6967 13.2884C13.7347 13.197 13.7544 13.099 13.7544 13C13.7544 12.901 13.7347 12.803 13.6967 12.7116C13.6586 12.6202 13.6028 12.5372 13.5325 12.4675ZM1.75 6.25C1.75 5.35999 2.01392 4.48996 2.50839 3.74994C3.00286 3.00992 3.70566 2.43314 4.52793 2.09254C5.35019 1.75195 6.25499 1.66284 7.12791 1.83647C8.00082 2.0101 8.80265 2.43869 9.43198 3.06802C10.0613 3.69736 10.4899 4.49918 10.6635 5.3721C10.8372 6.24501 10.7481 7.14981 10.4075 7.97208C10.0669 8.79435 9.49009 9.49715 8.75007 9.99162C8.01005 10.4861 7.14002 10.75 6.25 10.75C5.05653 10.75 3.91194 10.2759 3.06802 9.43198C2.22411 8.58807 1.75 7.44348 1.75 6.25Z" fill="#6F6F6F"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="header-bottom-wrapper">
                <div class="header-bottom">
                    <div class="selectable">
                        <div class="selected">
                            <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/about/index.html">О колледже</a>
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00017 6.20834C4.87953 6.20904 4.75994 6.18591 4.64826 6.1403C4.53657 6.09468 4.43499 6.02746 4.34934 5.94251L0.68267 2.27584C0.597201 2.19037 0.529404 2.08891 0.483149 1.97724C0.436894 1.86557 0.413086 1.74588 0.413086 1.62501C0.413086 1.50414 0.436894 1.38445 0.483149 1.27278C0.529404 1.16111 0.597201 1.05964 0.68267 0.974173C0.768139 0.888705 0.869605 0.820907 0.981275 0.774652C1.09295 0.728397 1.21263 0.70459 1.3335 0.70459C1.45437 0.70459 1.57406 0.728397 1.68573 0.774652C1.7974 0.820907 1.89887 0.888705 1.98434 0.974173L5.00017 4.00834L8.02517 1.09334C8.1095 0.999575 8.21226 0.924217 8.32704 0.871979C8.44182 0.819742 8.56614 0.79175 8.69223 0.789752C8.81832 0.787754 8.94347 0.811794 9.05984 0.860369C9.17622 0.908944 9.28132 0.98101 9.36857 1.07206C9.45583 1.1631 9.52336 1.27118 9.56694 1.38951C9.61052 1.50785 9.62921 1.6339 9.62186 1.7598C9.6145 1.88569 9.58124 2.00871 9.52417 2.12116C9.4671 2.23361 9.38744 2.33308 9.29017 2.41334L5.6235 5.95167C5.45587 6.1133 5.23301 6.20506 5.00017 6.20834Z" fill="#262729"/>
                            </svg>
                        </div>
                        <div class="options-holder">
                            <div class="options">
                                <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/about/management.html" class="header-bottom-option">Руководство колледжа</a>
                                <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/about/rating.html" class="header-bottom-option">Колледж в рейтингах</a> 
                                <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/about/antikor.html" class="header-bottom-option">Противодействие коррупции</a> 
                                <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/about/smi.html" class="header-bottom-option">СМИ о нас</a> 
                                <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/about/feedback.html" class="header-bottom-option">Отзывы</a> 
                                <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/about/contacts.html" class="header-bottom-option">Контакты</a> 
                            </div>
                        </div>
                    </div>
                    <div class="selectable">
                        <div class="selected">
                            <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/enrollee/index.html">Абитуриенту</a>
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00017 6.20834C4.87953 6.20904 4.75994 6.18591 4.64826 6.1403C4.53657 6.09468 4.43499 6.02746 4.34934 5.94251L0.68267 2.27584C0.597201 2.19037 0.529404 2.08891 0.483149 1.97724C0.436894 1.86557 0.413086 1.74588 0.413086 1.62501C0.413086 1.50414 0.436894 1.38445 0.483149 1.27278C0.529404 1.16111 0.597201 1.05964 0.68267 0.974173C0.768139 0.888705 0.869605 0.820907 0.981275 0.774652C1.09295 0.728397 1.21263 0.70459 1.3335 0.70459C1.45437 0.70459 1.57406 0.728397 1.68573 0.774652C1.7974 0.820907 1.89887 0.888705 1.98434 0.974173L5.00017 4.00834L8.02517 1.09334C8.1095 0.999575 8.21226 0.924217 8.32704 0.871979C8.44182 0.819742 8.56614 0.79175 8.69223 0.789752C8.81832 0.787754 8.94347 0.811794 9.05984 0.860369C9.17622 0.908944 9.28132 0.98101 9.36857 1.07206C9.45583 1.1631 9.52336 1.27118 9.56694 1.38951C9.61052 1.50785 9.62921 1.6339 9.62186 1.7598C9.6145 1.88569 9.58124 2.00871 9.52417 2.12116C9.4671 2.23361 9.38744 2.33308 9.29017 2.41334L5.6235 5.95167C5.45587 6.1133 5.23301 6.20506 5.00017 6.20834Z" fill="#262729"/>
                            </svg>
                        </div>
                        <div class="options-holder">
                            <div class="options">
                                <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/enrollee/admission.html" class="header-bottom-option">Правила приема</a>
                                <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/enrollee/specialities.html" class="header-bottom-option">Специальности</a> 
                                <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/enrollee/requisites.html" class="header-bottom-option">Наши реквизиты</a> 
                                <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/enrollee/document.html" class="header-bottom-option">Перечень документов</a> 
                            </div>
                        </div>
                    </div>
                    <div class="selectable">
                        <div class="selected">
                            <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/index.html">Студенту</a>
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00017 6.20834C4.87953 6.20904 4.75994 6.18591 4.64826 6.1403C4.53657 6.09468 4.43499 6.02746 4.34934 5.94251L0.68267 2.27584C0.597201 2.19037 0.529404 2.08891 0.483149 1.97724C0.436894 1.86557 0.413086 1.74588 0.413086 1.62501C0.413086 1.50414 0.436894 1.38445 0.483149 1.27278C0.529404 1.16111 0.597201 1.05964 0.68267 0.974173C0.768139 0.888705 0.869605 0.820907 0.981275 0.774652C1.09295 0.728397 1.21263 0.70459 1.3335 0.70459C1.45437 0.70459 1.57406 0.728397 1.68573 0.774652C1.7974 0.820907 1.89887 0.888705 1.98434 0.974173L5.00017 4.00834L8.02517 1.09334C8.1095 0.999575 8.21226 0.924217 8.32704 0.871979C8.44182 0.819742 8.56614 0.79175 8.69223 0.789752C8.81832 0.787754 8.94347 0.811794 9.05984 0.860369C9.17622 0.908944 9.28132 0.98101 9.36857 1.07206C9.45583 1.1631 9.52336 1.27118 9.56694 1.38951C9.61052 1.50785 9.62921 1.6339 9.62186 1.7598C9.6145 1.88569 9.58124 2.00871 9.52417 2.12116C9.4671 2.23361 9.38744 2.33308 9.29017 2.41334L5.6235 5.95167C5.45587 6.1133 5.23301 6.20506 5.00017 6.20834Z" fill="#262729"/>
                            </svg>
                        </div>
                        <div class="options-holder">
                            <div class="student-options options flex g20">
                                <div class="forStudent">
                                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/parlament.html" class="header-bottom-option">Студенческий парламент колледжа</a>
                                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/education-portal.html" class="header-bottom-option">Портал дистанционного обучения</a> 
                                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/rules.html" class="header-bottom-option">Правила внутреннего распорядка</a> 
                                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/schedule-personal.html" class="header-bottom-option">Расписание</a> 
                                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/sports.html" class="header-bottom-option">Спортивные секции</a> 
                                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/social-service.html" class="header-bottom-option">Социально-психологическая помощь</a> 
                                </div>
                                <div class="forStudent">
                                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/clinic.html" class="header-bottom-option">Мед.пункт</a> 
                                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/library.html" class="header-bottom-option">Библиотека</a> 
                                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/schedule.html" class="header-bottom-option">График учебного процесса</a> 
                                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/attestation.html" class="header-bottom-option">Аттестация</a> 
                                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/mugs.html" class="header-bottom-option">Кружки</a> 
                                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/student/profession.html" class="header-bottom-option">Получение рабочей <br> профессии</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="selectable">
                        <div class="selected">
                            <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/employment/index.html">Трудоустройство</a>
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00017 6.20834C4.87953 6.20904 4.75994 6.18591 4.64826 6.1403C4.53657 6.09468 4.43499 6.02746 4.34934 5.94251L0.68267 2.27584C0.597201 2.19037 0.529404 2.08891 0.483149 1.97724C0.436894 1.86557 0.413086 1.74588 0.413086 1.62501C0.413086 1.50414 0.436894 1.38445 0.483149 1.27278C0.529404 1.16111 0.597201 1.05964 0.68267 0.974173C0.768139 0.888705 0.869605 0.820907 0.981275 0.774652C1.09295 0.728397 1.21263 0.70459 1.3335 0.70459C1.45437 0.70459 1.57406 0.728397 1.68573 0.774652C1.7974 0.820907 1.89887 0.888705 1.98434 0.974173L5.00017 4.00834L8.02517 1.09334C8.1095 0.999575 8.21226 0.924217 8.32704 0.871979C8.44182 0.819742 8.56614 0.79175 8.69223 0.789752C8.81832 0.787754 8.94347 0.811794 9.05984 0.860369C9.17622 0.908944 9.28132 0.98101 9.36857 1.07206C9.45583 1.1631 9.52336 1.27118 9.56694 1.38951C9.61052 1.50785 9.62921 1.6339 9.62186 1.7598C9.6145 1.88569 9.58124 2.00871 9.52417 2.12116C9.4671 2.23361 9.38744 2.33308 9.29017 2.41334L5.6235 5.95167C5.45587 6.1133 5.23301 6.20506 5.00017 6.20834Z" fill="#262729"/>
                            </svg>
                        </div>
                        <div class="options-holder">
                            <div class="options">
                                <a href="#" class="header-bottom-option">Наши выпускники</a>
                                <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/employment/practice.html" class="header-bottom-option">Практика</a> 
                                <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/employment/vacancies.html" class="header-bottom-option">Вакансии</a> 
                            </div>
                        </div>
                    </div>
                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/education/index.html" class="just-link">Обучение</a>
                    <a href="/ptk-kazakhmys.edu.kz/wp-content/themes/ptk-kazakhmys/assets/pages/directors-blog/index.html" class="just-link">Блог Директора</a>
                </div>
            </div>
        </header>
    `;
    }
}

customElements.define("header-component", Header);