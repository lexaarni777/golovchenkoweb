import Reaсt from 'react'
import classes from './Qualification.module.scss'
import { FaCalendarAlt } from "react-icons/fa";


const Qualification = () =>{
    let qualificationList = [
        { name: 'Архитектурный<br />факультет', districr: 'Волгоград<br />ВолГасу', date: '2009-2014' },
        { name: 'Курс «Веб-программирование»', districr: 'Санкт-Петербург<br />ИТМО', date: '2018' },
        { name: 'Курс «Node.js.<br />Полное руководство» от ИТМО', districr: 'Санкт-Петербург<br />ИТМО', date: '2018-2019' },
        { name: 'Курс «Node.js. Полное руководство» ', districr: 'Санкт-Петербург<br />WebForMySelf и Владилен Минин', date: '2020-2021' },
        { name: 'Курс «ReactJS с нуля до профи»', districr: 'Санкт-Петербург<br />WebForMySelf и Владилен Минин', date: '2020-2021' },
        { name: 'Участие в 15 митапах»', districr: 'Санкт-Петербург<br />PiterJS', date: '2018-2024' },
    ];

    const toQualificationList = (qualification) => {
        return qualification.map((qual, index) => (
            index % 2 ?
                <div className={classes.QualificationBox} key={index}>
                    <div className={classes.QualificationNone}></div>
                    <div className={classes.QualificationCenter}>
                        <div className={classes.Circle}></div>
                        <div className={classes.Line}></div>
                    </div>
                    <div className={classes.QualificationText}>
                        <p className={classes.QualificationTextTitle}>
                            {qual.name.split('<br />').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </p>
                        <p className={classes.QualificationTextDesc}>
                            {qual.districr.split('<br />').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </p>
                        <p className={classes.QualificationTextDate}>
                            <FaCalendarAlt color='#43434d' /> {qual.date}
                        </p>
                    </div>
                </div>
                :
                <div className={classes.QualificationBox} key={index}>
                    <div className={classes.QualificationText}>
                        <p className={classes.QualificationTextTitle}>
                            {qual.name.split('<br />').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </p>
                        <p className={classes.QualificationTextDesc}>
                            {qual.districr.split('<br />').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </p>
                        <p className={classes.QualificationTextDate}>
                            <FaCalendarAlt color='#43434d' /> {qual.date}
                        </p>
                    </div>
                    <div className={classes.QualificationCenter}>
                        <div className={classes.Circle}></div>
                        <div className={classes.Line}></div>
                    </div>
                    <div className={classes.QualificationNone}></div>
                </div>
        ));
    };


    return(
        <div id='Qualification' className={classes.Qualification}>
            <div className={classes.Heading}>
                <p className={classes.HeadingTop}>Qualification</p>
                <p className={classes.HeadingBot}>My personal journey</p>
            </div>
            {toQualificationList(qualificationList)}

        </div>
    )
}


export default Qualification;