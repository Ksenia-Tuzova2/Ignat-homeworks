import React from 'react'
import s from './Message.module.css'
type Message = {
    avatar: string;
    name: string;
    message: string,
    time: string,
}
function Message(props: Message) {
    return (
        <div className={s.mainwrap}>
            <div className={s.tail}></div>
            <div className={s.wrapper}>


                <img className={s.img}
                    src={props.avatar}></img>

                <div className={s.name_time_mes}>
                    <div className={s.name_time}>
                        <a className={s.name}>{props.name}</a>
                        <span className={s.time}>{props.time}</span>
                    </div>

                    {props.message}
                </div>


            </div>

        </div>
    )
}

export default Message
