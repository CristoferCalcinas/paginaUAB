import { AppRouter } from "./routes/AppRouter";

export const UabApp = () => {
  return (
    // para congelar la aplicacion en una sola pagina
    // <div className="h-screen overflow-hidden">
    <>
      <AppRouter />
    </>
  );
};
