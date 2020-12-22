import {VersionMapper} from "./VersionMapper";
import {VersionDto} from "./VersionDto";

export namespace VersionApi {
  const API_URL = '/Versions';

  export const getVersion = (): Promise<VersionDto> => {
    const URL = '/current';
    return platformApiClient
      .get(`${API_URL}${URL}`)
      .then((response) => VersionMapper.mapFromVersionDto(response.data))
      .catch((error) => {
        throw error;
      });
  };
}
