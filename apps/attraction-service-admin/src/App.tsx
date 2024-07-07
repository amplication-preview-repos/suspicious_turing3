import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CityList } from "./city/CityList";
import { CityCreate } from "./city/CityCreate";
import { CityEdit } from "./city/CityEdit";
import { CityShow } from "./city/CityShow";
import { AttractionList } from "./attraction/AttractionList";
import { AttractionCreate } from "./attraction/AttractionCreate";
import { AttractionEdit } from "./attraction/AttractionEdit";
import { AttractionShow } from "./attraction/AttractionShow";
import { AudioGuideFileList } from "./audioGuideFile/AudioGuideFileList";
import { AudioGuideFileCreate } from "./audioGuideFile/AudioGuideFileCreate";
import { AudioGuideFileEdit } from "./audioGuideFile/AudioGuideFileEdit";
import { AudioGuideFileShow } from "./audioGuideFile/AudioGuideFileShow";
import { MapInfoList } from "./mapInfo/MapInfoList";
import { MapInfoCreate } from "./mapInfo/MapInfoCreate";
import { MapInfoEdit } from "./mapInfo/MapInfoEdit";
import { MapInfoShow } from "./mapInfo/MapInfoShow";
import { AttractionGuideList } from "./attractionGuide/AttractionGuideList";
import { AttractionGuideCreate } from "./attractionGuide/AttractionGuideCreate";
import { AttractionGuideEdit } from "./attractionGuide/AttractionGuideEdit";
import { AttractionGuideShow } from "./attractionGuide/AttractionGuideShow";
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
        title={"AttractionService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="City"
          list={CityList}
          edit={CityEdit}
          create={CityCreate}
          show={CityShow}
        />
        <Resource
          name="Attraction"
          list={AttractionList}
          edit={AttractionEdit}
          create={AttractionCreate}
          show={AttractionShow}
        />
        <Resource
          name="AudioGuideFile"
          list={AudioGuideFileList}
          edit={AudioGuideFileEdit}
          create={AudioGuideFileCreate}
          show={AudioGuideFileShow}
        />
        <Resource
          name="MapInfo"
          list={MapInfoList}
          edit={MapInfoEdit}
          create={MapInfoCreate}
          show={MapInfoShow}
        />
        <Resource
          name="AttractionGuide"
          list={AttractionGuideList}
          edit={AttractionGuideEdit}
          create={AttractionGuideCreate}
          show={AttractionGuideShow}
        />
      </Admin>
    </div>
  );
};

export default App;
