import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RecommendationList } from "./recommendation/RecommendationList";
import { RecommendationCreate } from "./recommendation/RecommendationCreate";
import { RecommendationEdit } from "./recommendation/RecommendationEdit";
import { RecommendationShow } from "./recommendation/RecommendationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RecommendationsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Recommendation"
          list={RecommendationList}
          edit={RecommendationEdit}
          create={RecommendationCreate}
          show={RecommendationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
