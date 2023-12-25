import starfield from "../../assets/GamePageImg/Starfield_2022.png";
import sp2 from "../../assets/GamePageImg/SP2.jpg";
import MW3 from "../../assets/GamePageImg/MW3.jpg";
import aw2 from "../../assets/GamePageImg/AlanWake2.jpg";
import pl from "../../assets/GamePageImg/PhantonLiberty.jpg";
import payday3 from "../../assets/GamePageImg/Payday_3.jpg";
import asm from "../../assets/GamePageImg/Assassin’s_Creed_Mirage_logo.jpeg";
import alone from "../../assets/GamePageImg/alone.jpg";
import lotf from "../../assets/GamePageImg/lordsofthefallen.jpg";
import dota2 from "../../assets/GamePageImg/Dota_2.jpg";
const Games = [
  {
    title: "Starfield",
    img: starfield,
    year: "6 сентября 2023 г.",
    janres: "Открытый мир, Шутер, Action/RPG, Action-adventure, Нелинейность",
    studio: "Bethesda Softworks",
    platforms: "XBOX, PC",
    age: "16+",
    desc: "Starfield — компьютерная игра в жанре action/RPG с открытым миром, разработанная Bethesda Game Studios и изданная Bethesda Softworks 6 сентября 2023 года на платформах Windows и Xbox Series X/S.",
  },
  {
    title: "Call of Duty Modern Warfare 3",
    img: MW3,
    year: "10 ноября 2023 г.",
    janres: "Шутер от первого лица",
    studio: "Activision",
    platforms:
      "PlayStation 5, PlayStation 4, Xbox One, Xbox Series X|S, Windows",
    age: "18+",
    desc: "Call of Duty: Modern Warfare III — -компьютерная игра в жанре шутер от первого лица, разрабатываемая компанией Sledgehammer Games, издателем выступит Activision. Это триквел Call of Duty: Modern Warfare 2019 года, а также двадцатая часть в серии.",
  },
  {
    title: "Spider-Man 2",
    img: sp2,
    year: "20 октября 2023 г.",
    janres: "Файтинг, Action-adventure, Платформер",
    studio: "Sony Interactive Entertainment",
    platforms: "PlayStation 5",
    age: "14+",
    desc: "Marvel’s Spider-Man 2 — компьютерная игра в жанре приключенческого боевика, разрабатываемая Insomniac Games в сотрудничестве с Marvel Games и издаваемая Sony Interactive Entertainment.",
  },
  {
    title: "Alan Wake 2",
    img: aw2,
    year: "27 октября 2023 г.",
    janres: "Survival horror, Приключенческая игра, Шутер от третьего лица",
    studio: "Epic Games",
    platforms: "PlayStation 5, Xbox Series X|S, Windows",
    age: "18+",
    desc: "Alan Wake 2 — это компьютерная игра в жанре survival horror, разрабатываемая Remedy Entertainment и готовящаяся к релизу Epic Games Publishing. Игра является прямым продолжением Alan Wake, вышедшей в 2010 году. Игра будет выпущена для платформ Microsoft Windows, PlayStation 5 и Xbox Series X/S в 2023 году.",
  },
  {
    title: "Cyberpunk 2077: Phantom Liberty",
    img: pl,
    year: "26 сентября 2023 г.",
    janres: "Компьютерная ролевая игра, Приключенческая игра, Шутер, Файтинг",
    studio: "CD Projekt",
    platforms: "PlayStation 5, Xbox Series X|S, Windows",
    age: "18+",
    desc: "Призрачная свобода» — это сюжетное дополнение, привносящее элементы шпионского триллера в игру Cyberpunk 2077. Вернитесь к роли кибернетически усовершенствованного наёмника Ви и станьте шпионом НСША, чтобы спасти саму главу государства. Найдите союзников в Пёсьем городе, самом опасном районе Найт-Сити, чтобы распутать клубок шпионских и политических интриг. Сможете ли вы выполнить задание, от которого зависит ваша жизнь?",
  },
  {
    title: "Payday 3",
    img: payday3,
    year: "2023 г.",
    janres: "Шутер, Adventure",
    studio: "Deep Silver, Prime Matter, Koch Media",
    platforms:
      "PlayStation 5, Xbox Series X|S, Xbox Cloud Gaming, GeForce Now, Windows",
    age: "18+",
    desc: "Payday 3 — компьютерная игра в жанре шутера от первого лица, разработанная студией Starbreeze Studios и изданная компанией Deep Silver.",
  },
  {
    title: "Assassin’s Creed Mirage",
    img: asm,
    year: "5 октября 2023 г.",
    janres: "Стелс, Action-adventure, Файтинг, Платформер",
    studio: "Ubisoft, OWO",
    platforms:
      "PlayStation 5, PlayStation 4, Xbox One, Xbox Series X|S, iOS, Windows",
    age: "16+",
    desc: "Assassin’s Creed Mirage — компьютерная игра в жанре action-adventure, разрабатываемая студией Ubisoft Bordeaux и изданная Ubisoft. Является тринадцатой крупной частью серии Assassin’s Creed и преемником игры Assassin’s Creed Valhalla.",
  },
  {
    title: "Alone in the Dark",
    img: alone,
    year: "16 января 2024 г.",
    janres: "Survival horror",
    studio: "THQ Nordic",
    platforms: "PlayStation 5, Windows, Xbox Series X|S",
    age: "18+",
    desc: "Alone in the Dark — компьютерная игра, в жанре survival horror разрабатываемая Pieces Interactive и издаваемая THQ Nordic. Выход игры анонсирован на платформах PlayStation 5, Xbox Series X/S и Windows. Является седьмой игрой франшизы Alone in the Dark, следуя за Alone in the Dark: Illumination.",
  },
  {
    title: "The Lords of the Fallen",
    img: lotf,
    year: "13 октября 2023 г.",
    janres: "Action/RPG, Приключенческая игра, Файтинг, Adventure",
    studio: "CI Games",
    platforms:
      "PlayStation 5, PlayStation 4, Xbox One, Xbox Series X|S, Windows",
    age: "16+",
    desc: "Lords of the Fallen — ролевая видеоигра, разработанная Hexworks и изданная CI Games.",
  },
  {
    title: "Dota 2",
    img: dota2,
    year: "9 июля 2013 г.",
    janres: "MOBA, Action/RPG",
    studio: "Valve",
    platforms: "Windows, macOS, Linux, GeForce Now, Классическая Mac OS",
    age: "16+",
    desc: "Dota 2 — многопользовательская командная компьютерная игра в жанре MOBA, разработанная и изданная корпорацией Valve. Игра является продолжением DotA — пользовательской карты-модификации для игры Warcraft III: Reign of Chaos и дополнения к ней Warcraft III: The Frozen Throne.",
  },
];

export default Games;
