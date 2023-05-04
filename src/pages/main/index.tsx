import "../../App.css"
import {Link} from "react-router-dom";
import Povor from "../../assets/Povor.png"
import VK from "../../assets/VK.png"
import Inst from "../../assets/Inst.png"
import Telega from "../../assets/Telega.png"
const MainPage = () => {
  return (
    <div>
      <div className="main">
        <div className="greetings">
          <div className="greetings__body">
            <div className="greetings__title"> Быстрое обслуживание, <br/>
              лучшие повара <br/>
              высокое качество
            </div>
            <div className="greetings__text">
              Если вы ищете вкусные блюда и быстрое обслуживание,
              хорошее качество и разумные цены,
              вы найдете его здесь.
            </div>
            <Link to={"/"}>
              <button className="greetings__button">
                На главную
              </button>
            </Link>
          </div>
          <div className="greetings__image">
            <img src={Povor} alt="Повор"/>
          </div>
        </div>

        <div className="navigation">
          <div className="navigation__body">
            <div className="navigation__title">
              Отслеживать
              где угодно, <br/>
              в любое время.
            </div>
            <div className="navigation__text">
              Мы всегда готовы помочь вам
              и вашим просьбам
            </div>
          </div>
          <div className="navigation__image">
            <Link to={"https://vk.com/sk_withlove"} className={"nav-item-1"}>
              <img src={VK} alt="Вконтакте"/>
            </Link>
            <Link className="nav-item-2" to={"https://instagram.com/svoya_kompaniya_official?igshid=YmMyMTA2M2Y="}>
              <img
                src={Inst} alt="Инстаграм"/>
            </Link>
            <Link className="nav-item-3" to={"https://vk.com/sk_withlove"}>
              <img src={Telega}
                   alt="Телеграм"/>
            </Link>
          </div>
        </div>

        <div className="article">
          <div className="article-body">
            <h1 className="article-h1">«Своя Компания» – сеть мягких ресторанов в Уфе</h1>
            <p className="article-p">
              Встречи с семьей или друзьями, торжества, романтические свидания – это чудесные, волшебные и
              запоминающиеся
              моменты, которые хочется провести в приятной атмосфере.
              Если вы ищете заведение в Уфе, где можно вкусно поужинать вдвоем, пообедать или отметить праздник в
              компании, то сеть ресторанов
              «Своя Компания» – лучшее место, где вы познакомитесь с вкусами разных кухонь мира и изысканными авторскими
              блюдам, хорошо проведете время.
              Мы делаем все возможное, чтобы вы чувствовали себя комфортно, наслаждались каждой минутой встречи.
            </p>
            <h1 className="article-h1">«Своя Компания» – сеть уютных, семейных ресторанов с детской комнатой</h1>
            <p className="article-p">
              Многие хотят отдохнуть на выходных всей семьей в красивой обстановке и попробовать вкусные блюда. Для
              маленьких гостей в наших ресторанах предусмотрено детское меню и специально оборудованные комнаты с
              игрушками. Пока вы обедаете и общаетесь, ваши дети будут весело играть под присмотром.
            </p>

          </div>


          <div className="article-body">
            <h1 className="article-h1">Лучшее место, чтобы поужинать в Уфе</h1>
            <p className="article-p">
              Привлекательный интерьер, приятная музыка, расслабляющая атмосфера, мягкая мебель – мы создали все условия
              для незабываемого романтического ужина, свадебного банкета, корпоративного фуршета или любого торжества.
            </p>
            <br/>
            <p className="article-p">
              Добавьте к этому первоклассное обслуживание, изысканное меню, доступные цены и вы получите идеальное
              место,
              где вам гарантировано отличное настроение и приятные впечатления. Это и есть «Своя Компания» – сеть уютных
              ресторанов для лучших моментов вашей жизни.
            </p>
            <br/>
            <p className="article-p">
              Секрет отличного вкуса наших блюд – использование отборных, свежих, натуральных продуктов, соблюдение
              технологий и рецептур нашими поварами. В нашем богатом меню каждый найдет что-то для себя – мы подаем
              горячее, салаты, роллы, пиццу, закуски, десерты, которые также можем доставить на дом или в офис.
            </p>
          </div>

        </div>

        <div className="space"></div>
      </div>
    </div>
  );
};

export default MainPage;
