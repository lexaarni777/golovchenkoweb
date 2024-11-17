import React, { useState } from 'react';
import classes from './Portfolio.module.scss';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import sportpit from '../../media/myprojekt/sportpit.jpg';
import honey from '../../media/myprojekt/honey-react-app.jpg';
import flats from '../../media/myprojekt/flatsbot.jpg';
import ProjectDetail from '../UI/ProjectDetail/ProjectDetail'; // Импортируем новый компонент
import sportpit1 from '../../media/myprojekt/sportpit/1.jpg'
import sportpit2 from '../../media/myprojekt/sportpit/2.jpg'
import sportpit3 from '../../media/myprojekt/sportpit/3.jpg'
import sportpit4 from '../../media/myprojekt/sportpit/4.jpg'
import sportpit5 from '../../media/myprojekt/sportpit/5.jpg'
import HRA1 from '../../media/myprojekt/HRA/1.jpg'
import HRA2 from '../../media/myprojekt/HRA/2.jpg'
import HRA3 from '../../media/myprojekt/HRA/3.jpg'
import HRA4 from '../../media/myprojekt/HRA/4.jpg'
import HRA5 from '../../media/myprojekt/HRA/5.jpg'
import HRA6 from '../../media/myprojekt/HRA/6.jpg'
import HRA7 from '../../media/myprojekt/HRA/7.jpg'
import BTA1 from '../../media/myprojekt/BTA/1.jpg'
import BTA2 from '../../media/myprojekt/BTA/2.jpg'

const texthoney = () =>{
    return(
        <div>
        <h1>Описание проекта</h1>

<p>Это веб-приложение, разработанное с использованием <strong>React</strong> и <strong>Redux</strong>, которое демонстрирует навыки в создании интерактивных пользовательских интерфейсов и управлении состоянием приложения. Проект включает в себя:</p>

<h2>Ключевые особенности:</h2>
<ul>
    <li><strong>Структурированная архитектура:</strong> Использование компонентов, контейнеров и хуков для организации кода и повышения его читаемости.</li>
    <li><strong>Управление состоянием:</strong> Применение Redux и Redux Toolkit для централизованного управления состоянием, что позволяет эффективно обрабатывать данные и обновлять интерфейс в реальном времени.</li>
    <li><strong>Адаптивный дизайн:</strong> Интуитивно понятный и отзывчивый интерфейс, обеспечивающий удобство использования на различных устройствах.</li>
    <li><strong>Компоненты UI:</strong> Реализация различных пользовательских интерфейсов, таких как карточки продуктов, корзина и формы для добавления и обновления товаров.</li>
    <li><strong>Работа с базой данных:</strong> Использование Firebase для хранения и управления данными приложения.</li>
</ul>

<h2>Используемые библиотеки:</h2>
<ul>
    <li><strong>React:</strong> Библиотека для построения пользовательских интерфейсов.</li>
    <li><strong>Redux и Redux Toolkit:</strong> Библиотеки для управления состоянием приложения и упрощения работы с Redux.</li>
    <li><strong>React Router:</strong> Для маршрутизации и навигации между страницами.</li>
    <li><strong>Axios:</strong> Для выполнения HTTP-запросов к API.</li>
    <li><strong>Styled Components или CSS Modules:</strong> Для стилизации компонентов и обеспечения модульности стилей.</li>
    <li><strong>Firebase:</strong> Для работы с базой данных и аутентификацией пользователей.</li>
</ul>
</div>
    )
}

const textSportPit = () =>{
    return(
        <div>
        <p><strong>Описание:</strong> Этот проект — статическое веб-приложение для онлайн-продажи спортивного питания. В нем представлены несколько HTML-страниц, каждая из которых посвящена различным продуктам и услугам.</p>

<h2>Ключевые особенности:</h2>
<ul>
    <li><strong>Навигация:</strong> Удобная структура с разделами для каталога продуктов, доставки и отзывов.</li>
    <li><strong>Адаптивный дизайн:</strong> Приложение хорошо отображается на различных устройствах, включая компьютеры и мобильные телефоны.</li>
</ul>

<h2>Технологии:</h2>
<ul>
    <li><strong>HTML/CSS:</strong> Основные технологии для создания страниц и стилей.</li>
</ul>
</div>
    )
}

const textTelegramBot = () =>{
    return(
        <div>
<p><strong>Описание:</strong> Этот проект представляет собой Telegram-бота, разработанного для предоставления информации о квартирах на платформе Avito. Бот использует библиотеку <code>node-telegram-bot-api</code> и реализует следующие функции:</p>

<h2>Основные функции:</h2>
<ul>
    <li><strong>Основное меню:</strong> Пользователю предлагается выбрать из нескольких вариантов квартир.</li>
    <li><strong>Интерактивные кнопки:</strong> Возможность взаимодействовать через кнопки для получения дополнительной информации о каждой квартире.</li>
    <li><strong>Обработка запросов:</strong> Бот обрабатывает текстовые сообщения и реагирует на них.</li>
    <li><strong>Отправка фотографий:</strong> Бот отправляет фотографии для визуального представления предложений.</li>
</ul>
</div>
    )
}

const projects = [
    {
        image: sportpit,
        title: 'Интернет магазин спортивного питания',
        titleDescription: 'Первое знакомство с WEB началось в 2013 году с написания статичного сайта интернет магазина по продаже спортивного питсания с использованем толко HTML и CSS, запущенного на бесплатной платформе www.ucoz.ru',
        description: textSportPit(),
        githubLink: 'https://github.com/lexaarni777/sportpit', // Добавьте ссылку на GitHub
        imageGalery: [sportpit1,sportpit2,sportpit3,sportpit4,sportpit5]
    },
    {
        image: honey,
        title: 'Single-page application интернет-магазин',
        titleDescription: 'Интернет-магазин с правами администратора для добавления и редактирования товаров, регистрацией новых пользователей, корзиной и оформлением заказов (не реализована только оплата).',
        description: texthoney(),
        githubLink: 'hhttps://github.com/lexaarni777/honey-react-redux' , // Добавьте ссылку на GitHub
        imageGalery: [HRA1,HRA2,HRA3,HRA4,HRA5,HRA6,HRA7]
    },
    {
        image: flats,
        title: 'Telegram bot',
        titleDescription: 'Телеграмм бот для получения информации об обектах посуточной аренды',
        description: textTelegramBot(),
        githubLink: 'https://github.com/lexaarni777/bot-telegram-avito' , // Добавьте ссылку на GitHub
        imageGalery: [BTA1,BTA2]
    }
];

const Portfolio = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const updateProject = () => {
        return projects[currentProjectIndex];
    };

    const nextProject = () => {
        setCurrentProjectIndex((currentProjectIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProjectIndex((currentProjectIndex - 1 + projects.length) % projects.length);
    };

    const currentProject = updateProject();

    const openDetailed = () => {
        setIsDetailOpen(true);
    };

    const closeDetail = () => {
        setIsDetailOpen(false);
    };

    return (
        <div id='Portfolio' className={classes.Portfolio}>
            <div className={classes.Heading}>
                <h2 className={classes.HeadingTop}>Portfolio</h2>
                <p className={classes.HeadingBot}>Most recent work</p>
            </div>

            <div className={classes.GalleryBox}>
                <div className={classes.GalleryContent}>
                   
                        <IoIosArrowBack className={classes.navButton} onClick={prevProject} color='#FF6F61' />
                   

                    <div className={classes.projectInfo}>
                        <div className={classes.projectContent}>
                            <div className={classes.projectImage}>
                                <img src={currentProject.image} alt={currentProject.title} />
                            </div>
                            <div className={classes.projectDescription}>
                                <p className={classes.title}>{currentProject.title}</p>
                                <p className={classes.titleDescription}>{currentProject.titleDescription}</p>
                                <button className={classes.onDetailed} onClick={openDetailed}>DETAIL</button>
                            </div>
                        </div>
                    </div>
                   
                        <IoIosArrowForward className={classes.navButton} onClick={nextProject} color='#FF6F61' />
                   
                </div>

                <div className={classes.Pagination}>
                    {projects.map((_, index) => (
                        <span key={index} className={`${classes.dot} ${index === currentProjectIndex ? classes.active : ''}`}></span>
                    ))}
                </div>
            </div>

            {isDetailOpen && <ProjectDetail project={currentProject} onClose={closeDetail} />}
        </div>
    );
};

export default Portfolio;