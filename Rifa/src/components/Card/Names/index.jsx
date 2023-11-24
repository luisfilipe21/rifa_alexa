import style from "./style.module.scss";

export const Names = ({ isOpen }) => {
    return (
        <>
        
            {isOpen ? <ul>
                <div className={style.grid}>
                    <li id="1">Amanda</li>
                    <li id="2">Bruno</li>
                    <li id="3">Cássio</li>
                    <li id="4">Davidson</li>
                    <li id="5">Eustáquio</li>
                    <li id="6">Felipe</li>
                    <li id="7">Gustavo</li>
                    <li id="8">Heitor</li>
                    <li id="9">Ícaro</li>
                    <li id="10">Jonas</li>
                    <li id="11">Luis</li>
                    <li id="12">Marcos</li>
                    <li id="13">Natália</li>
                    <li id="14">Otávio</li>
                    <li id="15">Pedro</li>
                    <li id="16">Theo</li>
                    <li id="17">Rosana</li>
                    <li id="18">Stéphany</li>
                    <li id="19">Tiago</li>
                    <li id="20">Ulisses</li>
                    <li id="21">Victor</li>
                    <li id="22">Wadson</li>
                    <li id="23">Xande</li>
                    <li id="24">Bernardo</li>
                    <li id="25">Carlos</li>
                    <li id="26">Alexandre</li>
                    <li id="27">Lucas</li>
                    <li id="28">Fernanda</li>
                    <li id="29">Abílio</li>
                    <li id="30">Erasmo</li>
                    <li id="31">Igor</li>
                    <li id="32">Marina</li>
                    <li id="33">Éric</li>
                    <li id="34">Marcelo</li>
                    <li id="35">Carlos</li>
                    <li id="36">Francisco</li>
                    <li id="37">Laura</li>
                    <li id="38">Danusa</li>
                    <li id="39">Irís</li>
                    <li id="40">Denise</li>
                    <li id="41">Sara</li>
                    <li id="42">Júlio</li>
                    <li id="43">Eduardo</li>
                    <li id="44">Maíra</li>
                    <li id="42">Melissa</li>
                    <li id="46">Alana</li>
                    <li id="47">Ana</li>
                    <li id="48">Desireé</li>
                    <li id="49">Diego</li>
                    <li id="50">Priscila</li>
                </div>
            </ul>
                : null}

        </>
    )
}