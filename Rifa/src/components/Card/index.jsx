import { useState } from "react";
import { Names } from "./Names";
import style from "./style.module.scss";

export const Card = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openTable = () => {
        if(isOpen) {
        setIsOpen(false);
        }else{
            setIsOpen(true)
        }
    }

    return (
        <section className={style.container}>
            <div className={style.divBox}>
                <div className={style.img}>
                    
                </div>

                <div className={style.title}>
                    <h1>Alexa 5° geração</h1>
                </div>

                <div className={style.text}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, officia! Hic dolorum quaerat iusto voluptas dicta iure dolore provident? Modi recusandae eos quisquam temporibus fugiat, ducimus provident! Optio, dignissimos quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus voluptates ipsum sequi aperiam, qui, quod distinctio dolores ad inventore ex est veritatis! Dicta cupiditate sapiente modi dolorem porro? Officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id expedita eligendi modi earum, delectus eos reiciendis possimus ullam sed tempora, nostrum atque sit, porro exercitationem deleniti animi tempore perferendis!</p>

                </div>

                <Names isOpen={isOpen} />
                
                <button onClick={openTable}>Participar</button>
            </div>
        </section>
    )
}