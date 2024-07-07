import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FileUploadList } from "./fileUpload/FileUploadList";
import { FileUploadCreate } from "./fileUpload/FileUploadCreate";
import { FileUploadEdit } from "./fileUpload/FileUploadEdit";
import { FileUploadShow } from "./fileUpload/FileUploadShow";
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
        title={"FilesService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FileUpload"
          list={FileUploadList}
          edit={FileUploadEdit}
          create={FileUploadCreate}
          show={FileUploadShow}
        />
      </Admin>
    </div>
  );
};

export default App;
