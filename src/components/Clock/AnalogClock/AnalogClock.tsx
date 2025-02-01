import React, {useEffect, useRef} from "react";
import {Clock} from "../Clock";
import './AnalogClock.css'

type AnalogClockProps = {};

export const AnalogClock: React.FC<AnalogClockProps> = (props) => {
    const hrRef = useRef<HTMLDivElement | null>(null);
    const mnRef = useRef<HTMLDivElement | null>(null);
    const scRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const deg = 6;

        const intervalID = setInterval(() => {
            const day = new Date();
            const hh = day.getHours() * 30; // 360° / 12 часов
            const mm = day.getMinutes() * deg; // 360° / 60 минут
            const ss = day.getSeconds() * deg; // 360° / 60 секунд

            if (hrRef.current && mnRef.current && scRef.current) {
                hrRef.current.style.transform = `rotateZ(${hh + mm / 12}deg)`; // Учитываем минуты для часов
                mnRef.current.style.transform = `rotateZ(${mm}deg`;
                scRef.current.style.transform = `rotateZ(${ss}deg`;
            }
        }, 1000); // Обновление каждую секунду

        return () => clearInterval(intervalID); // Очистка интервала по размонтированию
    }, []); // Пустой массив зависимостей, чтобы интервал запустился только один раз при монтировании

    return (
        <div className="bodyClock">
            <div className="clock">
                <div className="hour">
                    <div className="hr" ref={hrRef}></div>
                </div>
                <div className="min">
                    <div className="mn" ref={mnRef}></div>
                </div>
                <div className="sec">
                    <div className="sc" ref={scRef}></div>
                </div>
            </div>
            <div className="digitalClock"><Clock/></div>
        </div>
    );
};
