import { FC, KeyboardEvent, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { Theme } from "emoji-picker-react";
import { EmojiClickData } from "emoji-picker-react";
import "./chat.css";
import emojiPic from "./smiley_icon_172891.png";
import { useAcc } from "../../hooks/useAcc";

const Chat: FC = () => {
  const { userName } = useAcc();
  const [value, setValue] = useState<string>("");
  const throwNewMessage = (value: string) => {
    const messages = document.querySelector(".Chat__messages");
    const p = document.createElement("p");
    const pText = document.createTextNode(`${userName}: ${value}`);
    p.appendChild(pText);
    setValue("");
    setOpen(false);
    if (value === "") return null;
    return messages?.appendChild(p);
  };
  const enterClick = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode == 13) {
      document.querySelector<HTMLButtonElement>(".Chat__btn")?.click();
    }
  };
  const getEmoji = (emoji: string) => {
    const input = document.querySelector<HTMLInputElement>(".Chat__input");
    setValue(input?.value + emoji);
  };
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="Chat">
        <div className="Chat__controls">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => enterClick(e)}
            className="Chat__input"
            type="text"
            placeholder="Введите сообщение"
          />
          <div className="emojis">
            <img
              src={emojiPic}
              alt="test"
              onClick={() => setOpen(open ? false : true)}
            />
          </div>
          <button onClick={() => throwNewMessage(value)} className="Chat__btn">
            S
          </button>
        </div>
        <div className="Chat__messages"></div>
      </div>
      <div className={open ? "" : "none"}>
        <EmojiPicker
          autoFocusSearch={false}
          onEmojiClick={(emoji: EmojiClickData) => getEmoji(emoji.emoji)}
          theme={Theme.DARK}
          height={400}
          width={300}
        />
      </div>
    </div>
  );
};

export default Chat;
