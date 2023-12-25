import { FC, useState } from "react";
import "./paymentPage.css";
import ApplyBtn from "../../components/ApplyBtn/ApplyBtn";
import DatePicker from "react-datepicker";
const PaymentPage: FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <div className="PaymentPage">
      <div className="payment__params">
        <div className="payment__params-number">
          <p>Номер карты</p>
          <input className="long" type="number" />
        </div>
        <div className="payment__params-flex">
          <div className="payment__params-code">
            <p>Срок действия карты</p>
            <DatePicker
              dateFormat="MM/yy"
              showMonthYearPicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
          </div>
          <div className="payment__params-code">
            <p>CVV код</p>
            <input className="cvv" type="number" />
          </div>
        </div>
        <div className="payment__params-name">
          <p>Имя владельца</p>
          <input className="long" type="text" />
        </div>
        <div className="payment__params-btn">
          <ApplyBtn
            onClick={() => alert("Оплачено! Вы можете вернуться на сайт.")}
            text="Оплатить"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
