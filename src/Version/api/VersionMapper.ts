import {VersionModel} from "../model/VersionModel";
import {VersionDto} from "./VersionDto";
export namespace VersionMapper {

    export const mapFromVersionDto = (VersionDto :VersionDto): VersionModel =>
        ({...VersionDto});
}