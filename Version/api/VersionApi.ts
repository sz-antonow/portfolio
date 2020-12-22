import { platformApiClient } from 'common/src/api/platformApiClient';
import { VersionDto } from 'common/src/module/Version/api/VersionDto';

export namespace VersionApi {
  const API_URL = '/Versions';

  export const getVersion = (): Promise<VersionDto> => {
    const URL = '/current';
    return platformApiClient
      .get(`${API_URL}${URL}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };
}
