/* tslint:disable */
/* eslint-disable */
/**
 * Upstream Sensor Storage
 * Sensor Storage for Upstream data
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { GetCampaignResponseGeometry } from './GetCampaignResponseGeometry';
import {
    GetCampaignResponseGeometryFromJSON,
    GetCampaignResponseGeometryFromJSONTyped,
    GetCampaignResponseGeometryToJSON,
    GetCampaignResponseGeometryToJSONTyped,
} from './GetCampaignResponseGeometry';

/**
 * 
 * @export
 * @interface StationItemWithSummary
 */
export interface StationItemWithSummary {
    /**
     * 
     * @type {number}
     * @memberof StationItemWithSummary
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StationItemWithSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StationItemWithSummary
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StationItemWithSummary
     */
    contactName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StationItemWithSummary
     */
    contactEmail?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof StationItemWithSummary
     */
    active?: boolean | null;
    /**
     * 
     * @type {Date}
     * @memberof StationItemWithSummary
     */
    startDate?: Date | null;
    /**
     * 
     * @type {GetCampaignResponseGeometry}
     * @memberof StationItemWithSummary
     */
    geometry?: GetCampaignResponseGeometry | null;
    /**
     * 
     * @type {number}
     * @memberof StationItemWithSummary
     */
    sensorCount: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof StationItemWithSummary
     */
    sensorTypes: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof StationItemWithSummary
     */
    sensorVariables: Array<string>;
}

/**
 * Check if a given object implements the StationItemWithSummary interface.
 */
export function instanceOfStationItemWithSummary(value: object): value is StationItemWithSummary {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('sensorCount' in value) || value['sensorCount'] === undefined) return false;
    if (!('sensorTypes' in value) || value['sensorTypes'] === undefined) return false;
    if (!('sensorVariables' in value) || value['sensorVariables'] === undefined) return false;
    return true;
}

export function StationItemWithSummaryFromJSON(json: any): StationItemWithSummary {
    return StationItemWithSummaryFromJSONTyped(json, false);
}

export function StationItemWithSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): StationItemWithSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'contactName': json['contact_name'] == null ? undefined : json['contact_name'],
        'contactEmail': json['contact_email'] == null ? undefined : json['contact_email'],
        'active': json['active'] == null ? undefined : json['active'],
        'startDate': json['start_date'] == null ? undefined : (new Date(json['start_date'])),
        'geometry': json['geometry'] == null ? undefined : GetCampaignResponseGeometryFromJSON(json['geometry']),
        'sensorCount': json['sensor_count'],
        'sensorTypes': json['sensor_types'],
        'sensorVariables': json['sensor_variables'],
    };
}

export function StationItemWithSummaryToJSON(json: any): StationItemWithSummary {
    return StationItemWithSummaryToJSONTyped(json, false);
}

export function StationItemWithSummaryToJSONTyped(value?: StationItemWithSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'contact_name': value['contactName'],
        'contact_email': value['contactEmail'],
        'active': value['active'],
        'start_date': value['startDate'] == null ? undefined : ((value['startDate'] as any).toISOString()),
        'geometry': GetCampaignResponseGeometryToJSON(value['geometry']),
        'sensor_count': value['sensorCount'],
        'sensor_types': value['sensorTypes'],
        'sensor_variables': value['sensorVariables'],
    };
}

