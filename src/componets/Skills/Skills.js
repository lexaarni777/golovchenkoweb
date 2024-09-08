import React, { useState } from 'react'; // Импортируем useState
import classes from './Skills.module.scss';
import { BsBraces } from "react-icons/bs";
import Arrow from '../UI/Arrow/Arrow';

import { SiExcalidraw } from "react-icons/si";

const Skills = () => {

    const [isDisplayLeft, setIsDisplayLeft] = useState(true); // Состояние для отслеживания поворота
    const [isDisplayRight, setIsDisplayRight] = useState(true); // Состояние для отслеживания поворота

    const toggleDisplayLeft = () => {
        console.log(isDisplayLeft)
        setIsDisplayLeft(!isDisplayLeft); // Переключаем состояние
        
    };
    const toggleDisplayRight = () => {
        console.log(isDisplayRight)
        setIsDisplayRight(!isDisplayRight); // Переключаем состояние
        
    };

    let skillsFrontend = [
        {name: 'HTML',bar: '95'},
        {name: 'CSS/SCSS',bar: '95'},
        {name: 'JavaScript(ES6)',bar: '95'},
        {name: 'React', bar: '60'},
        {name: 'React(Redux)',bar: '60'},
        {name: 'React(Toolkit)',bar: '60'},
        {name: 'TypeSkript',bar: '40'},
        {name: 'Firebase (Authentication)',bar: '60'},
        {name: 'Firebase (Realtime Database)',bar: '60'},
        {name: 'Firebase (Storage)',bar: '60'},
    ]
    let skillsDesigner = [
        {name: 'Photoshop',bar: '90'},
        {name: 'AutoCad', bar: '90'},
        {name: 'CoralDraw', bar: '10'},
        {name: 'PlaygrounAi', bar: '40'},
        {name: 'Dalli 3 Ai', bar: '40'},
    ]

    const toCollect = (skills) => {
        return skills.map((skill) => ( // Используем map вместо forEach
            <div className={classes.SkillsListBoxText} key={skill.name}> {/* Добавляем ключ для каждого элемента */}
                <div className={classes.BoxTextTitle}>
                    <p>{skill.name}</p>
                    <span>{skill.bar}%</span>
                </div>
                <div className={classes.SkillsBar}>
                    <div className={classes.SkillsBarPr} style={{ width: skill.bar+'%'}}></div>
                </div>
            </div>
        ));
    };

    return (
        <div id='Skills' className={classes.Skills}>
            <div className={classes.Heading}>
                <p className={classes.HeadingTop}>Skills</p>
                <p className={classes.HeadingBot}>My technical level</p>
            </div>
            <div className={classes.SkillsBox}>
                <div className={classes.SkillsBoxLeft}>
                    <div className={classes.SkillsBoxTitle}>
                        <div className={classes.SkillsBoxTitleLeft}>
                            <BsBraces color='#FF6F61' size='48px'
                                
                            />
                        </div>
                        <div className={classes.Heading}>
                            <p className={classes.HeadingTop}>Frontend</p>
                            <p className={classes.HeadingBot}>More than 5 years</p>
                        </div>
                        <div className={classes.SkillsBoxTittleRight}
                            onClick={toggleDisplayLeft}>
                            <Arrow/>
                        </div>
                    </div>
                    <div className={isDisplayLeft?classes.isDisplayLeft:classes.SkillsListBox}>
                        {toCollect(skillsFrontend)}
                    </div>
                </div>
                <div className={classes.SkillsBoxRight}>
                    <div className={classes.SkillsBoxTitle}>
                        <div className={classes.SkillsBoxTitleLeft}>
                            <SiExcalidraw color='#FF6F61' size='35px' />
                        </div>
                        <div className={classes.Heading}>
                            <p className={classes.HeadingTop}>Designer</p>
                            <p className={classes.HeadingBot}>More than 5 years</p>
                        </div>
                        <div className={classes.SkillsBoxTittleRight}
                            onClick={toggleDisplayRight}>
                            <Arrow/>
                        </div>
                    </div>
                    <div className={isDisplayRight?classes.isDisplayRight:classes.SkillsListBox}>
                        {toCollect(skillsDesigner)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;