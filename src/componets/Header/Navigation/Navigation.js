import React, { useEffect, useState } from 'react'; // Импортируем React и хуки useEffect и useState
import classes from './Navigation.module.css'; // Импортируем стили из CSS

const Navigation = () => {
    // Состояние для хранения текущего активного пункта меню
    const [activeSection, setActiveSection] = useState('Home');

    // Функция для обработки события прокрутки
    const handleScroll = () => {
        // Массив с названиями секций
        const sections = ['Home', 'About', 'Skills', 'Qualification', 'Portfolio', 'Contact Me'];
        const scrollPosition = window.scrollY; // Получаем текущую позицию прокрутки

        // Проходим по каждой секции
        sections.forEach((section) => {
            const element = document.getElementById(section); // Получаем элемент по ID
            if (element) {
                const offsetTop = element.offsetTop; // Получаем верхнюю позицию элемента
                const offsetHeight = element.offsetHeight; // Получаем высоту элемента
                console.log(
                    'scrollPosition:',scrollPosition,
                    'offsetTop:',offsetTop,
                    'offsetHeight:',offsetHeight


                )

                // Проверяем, находится ли текущая позиция прокрутки в пределах элемента
                if (scrollPosition >= offsetTop -80 && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section); // Устанавливаем активный пункт меню
                }
            }
        });
    };

    // Используем useEffect для добавления обработчика события прокрутки
    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Добавляем обработчик прокрутки
        return () => {
            window.removeEventListener('scroll', handleScroll); // Удаляем обработчик при размонтировании
        };
    }, []); // Пустой массив зависимостей, чтобы эффект сработал только один раз

    // Функция для прокрутки к нужной секции
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId); // Получаем элемент по ID
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Получаем позицию элемента относительно документа
            window.scrollTo({
                top: elementPosition - 79, // Уменьшаем позицию на 80 пикселей
                behavior: 'smooth' // Плавная прокрутка
            });
        }
    };

    return (
        <nav className={classes.Navigation}> {/* Основной элемент навигации */}
            <ul>
                {/* Проходим по массиву секций и создаем пункт меню для каждой секции */}
                {['Home', 'About', 'Skills', 'Qualification', 'Portfolio', 'Contact Me'].map((section) => (
                    <li 
                        key={section} 
                        className={activeSection === section ? classes.active : ''} // Условно добавляем класс active
                        onClick={() => scrollToSection(section)} // Прокручиваем при клике
                    >
                        {section} {/* Название пункта меню */}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation; // Экспортируем компонент для использования в других частях приложения