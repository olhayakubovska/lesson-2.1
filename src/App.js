import { useState } from "react";
import styles from "./app.module.css";

export const App = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [list, setList] = useState([]);

  const [isValueValid, setIsValueValid] = useState(false);

  const onInputButtonClick = () => {
    const promptValue = prompt("Введите значение:");

    if (promptValue.length < 3) {
      setError("Ошибка!");
    }

    setValue(promptValue);
    console.log(promptValue);

    setIsValueValid(true);
  };

  const onAddButtonClick = () => {
    const updatedList = [...list, { id: Date.now(), value }];
    setList(updatedList);
    console.log(list);
  };

  return (
    <div className={styles.app}>
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <>
          <h1>ВВОД ЗНАЧЕНИЯ </h1>
          <h3>
            Текущее значение: <output className={styles.text}>{value}</output>
          </h3>
          <div className={styles.buttons}>
            <button onClick={onInputButtonClick}> Ввести новое</button>
            <button disabled={!isValueValid} onClick={onAddButtonClick}>
              Добавить в список
            </button>
          </div>
          <h2> Список</h2>
          {list.length > 0 ? (
            list.map((item) => (
              <div className={styles.text} key={item.id}>
                {" "}
                {item.value}
              </div>
            ))
          ) : (
            <div className={styles.emptiness}>Нет добавленных элементов </div>
          )}
        </>
      )}
    </div>
  );
};
