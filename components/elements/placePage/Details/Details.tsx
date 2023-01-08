import s from './Details.module.css'
import {FC} from "react";
import {IPlace} from "../../../../types/place";
interface IDetails {
    place:IPlace
}
const Details:FC<IDetails> = ({place}) =>{
    return(
        <div className={s.Details}>
            <div className={s.info}>
                <div className={s.location}>
                    <span className="material-icons-outlined">place</span>
                    {place.location.city}, {place.location.country}
                </div>
                <span className={s.description}>{place.description}</span>
                <div className={s.info_under}>
                    <div className={s.rating}>
                        <span className="material-icons-outlined">star</span>
                        {place.rating} / 5
                    </div>
                    <div className={s.duration}>
                        <span className="material-icons-outlined">calendar_month</span>
                        {place.duration} Days
                    </div>
                </div>
            </div>
            <div className={s.map}>
                <div className={s.distance}>
                    <span className="material-icons-outlined" style={{fontSize:".8rem"}}>place</span>
                    <span className={s.count}>{place.distance} KM</span>
                </div>
            </div>
        </div>
    )
}
export default Details