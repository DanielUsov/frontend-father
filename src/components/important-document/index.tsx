export const ImportantDocument = ({ title, description }: any) => {
  return (
    <>
      <div className="document-container">
        <h1 id="document-title">{title}</h1>
        <p id="document-description">{description}</p>
        <button id="document-link" type="button">
          Скачать
        </button>
      </div>
    </>
  );
};
