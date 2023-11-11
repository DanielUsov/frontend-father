import './docu.css'

export const ImportantDocument = ({ title, description }: any) => {
  return (
    <>
      <div className="docu-container">
        <h1 id="docu-title">{title}</h1>
        <p id="docu-description">{description}</p>
        <button id="docu-link" type="button">
          Скачать
        </button>
      </div>
    </>
  );
};
