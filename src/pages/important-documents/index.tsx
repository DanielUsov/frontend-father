import { ImportantDocument } from '../../components/important-document';
import './style.css';

export const ImportantDocuments = () => {
  const title: string = 'Welcome to the Proscom';
  const des: string =
    'В этом документе описано то, ради чего существует Proscom и какую ценность мы приносим миру. Это наш основной стержень, вокруг которого мы принимаем все наши стратегические и операционные решения. Мы живем со смыслом и создаем его.';

  return (
    <div className="important-documents-container">
      <h1 id="important-document-title">Важные документы</h1>
      <ImportantDocument title={title} description={des} />
    </div>
  );
};
