// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. 2023
// SPDX-License-Identifier: Apache-2.0

import type { ValueOf } from 'type-fest';

import type { EntityData } from '@/lib/types';

const DATA_PROPERTY_NAME_1 = 'Property_a967bfe9-3f49-4d45-a81e-c4790b41ad0f'; //Humidity
const DATA_PROPERTY_NAME_2 = 'Property_77646663-072d-4e6f-9a8b-d0904deedd59'; //Temperature
const DATA_PROPERTY_NAME_3 = 'Property_607b875c-049f-4d02-9ab8-03e076ad899f'; //Occupant Count

export const ALARM_PROPERTY_NAME = 'Property_1dbca363-8b9c-4288-9af7-1447b4311e5c'; //Status

const FLOOR_DATA_PROPERTY_NAME_1 = 'Property_6f27f3cb-74ee-41e9-8ed2-8f698966c9f2'; //Almost Available
const FLOOR_DATA_PROPERTY_NAME_2 = 'Property_648f1301-deea-4f58-a3ca-99c051d1034c'; //AvgTemperature

export const FLOOR_ALARM_PROPERTY_NAME = 'Property_247d0866-bb9b-4205-bb23-8cc35d95520f'; //Available

export const COMPONENT_NAMES = {
  relationship: 'relationships',
  sitewise: 'sitewiseBase'
};

export const ENTITY_TYPES = {
  Room: 'Room',
  Floor: 'Floor'
};


const FLOOR_ENTITY_DATA: EntityData[] = [
  {
    entityId: 'fef37a5a-92b4-4e6e-ab49-ae2ea8a9e6dd',
    componentName: COMPONENT_NAMES.sitewise,
    name: '6th Floor',
    properties: getFloorProperties(),
    type: ENTITY_TYPES.Floor
  },
  {
    entityId: '73f4630d-25e7-41dd-8d33-9dc4ed6eb99f',
    componentName: COMPONENT_NAMES.sitewise,
    name: '7th Floor',
    properties: getFloorProperties(),
    type: ENTITY_TYPES.Floor
  }
];

const ROOM_ENTITY_DATA: EntityData[] = [
  {
    entityId: '0873e2f2-c22d-4fef-b3f5-95f409486401',
    componentName: COMPONENT_NAMES.sitewise,
    name: '07.305',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room,
    //isRoot: true,
  },
  {
    entityId: '09a7af3b-3190-4df3-99ca-608043a69166',
    componentName: COMPONENT_NAMES.sitewise,
    name: '06.101',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: '28220a3e-fdb1-4fed-8441-21c68e7b3f6d',
    componentName: COMPONENT_NAMES.sitewise,
    name: '07.302',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: '3f1e2b34-3904-41e8-af50-a868a396269d',
    componentName: COMPONENT_NAMES.sitewise,
    name: '07.304',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: '4c34c153-3f56-4bd2-900f-fbbf21847516',
    componentName: COMPONENT_NAMES.sitewise,
    name: '07.201',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: '4fd66cfe-ee48-45b9-b8a8-9dce5633c367',
    componentName: COMPONENT_NAMES.sitewise,
    name: '07.100',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: '666b7f77-f596-4ba9-8357-c248bd138fdc',
    componentName: COMPONENT_NAMES.sitewise,
    name: '06.202',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: '669f5d08-d590-4929-8b16-1a8a622c4208',
    componentName: COMPONENT_NAMES.sitewise,
    name: '06.401',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: '779e8b19-706d-4158-ac0d-faf9ff049c60',
    componentName: COMPONENT_NAMES.sitewise,
    name: '06.304',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: '855f1aa8-e34a-4885-a97f-2d117c2c9d55',
    componentName: COMPONENT_NAMES.sitewise,
    name: '06.201',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: '96a09c22-8bbd-45a3-9236-b0a94bb000ab',
    componentName: COMPONENT_NAMES.sitewise,
    name: '07.200',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: 'b00673e7-746f-453d-a179-91b01e2f241c',
    componentName: COMPONENT_NAMES.sitewise,
    name: '06.302',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: 'c33b2d24-e2d7-4f6a-a788-502e8d379e83',
    componentName: COMPONENT_NAMES.sitewise,
    name: '06.100',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: 'ce518afa-b14a-4464-b2d7-648f85c9d87c',
    componentName: COMPONENT_NAMES.sitewise,
    name: '06.400',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: 'd91ec317-e178-44fc-b0d3-8bb87aeb7bf0',
    componentName: COMPONENT_NAMES.sitewise,
    name: '06.303',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  },
  {
    entityId: 'ff66ddcd-696f-4320-8100-6963925b2906',
    componentName: COMPONENT_NAMES.sitewise,
    name: '07.303',
    properties: getRoomProperties(),
    type: ENTITY_TYPES.Room
  }
];

//export const ENTITY_DATA: EntityData[] = [...ROOM_ENTITY_DATA, ...FLOOR_ENTITY_DATA];

export const ENTITY_DATA: EntityData[] = [...ROOM_ENTITY_DATA, ...FLOOR_ENTITY_DATA];


export const IGNORED_ENTITY_IDS: string[] = [];

function getRoomProperties(): ValueOf<EntityData, 'properties'> {
  return [
    {
      propertyQueryInfo: {
        propertyName: ALARM_PROPERTY_NAME,
        refId: crypto.randomUUID()
      },
      type: 'alarm'
    },
    {
      propertyQueryInfo: {
        propertyName: DATA_PROPERTY_NAME_1,
        refId: crypto.randomUUID()
      },
      threshold: { upper: 80, lower: 20 },
      type: 'data',
      unit: '%'
    },
    {
      propertyQueryInfo: {
        propertyName: DATA_PROPERTY_NAME_2,
        refId: crypto.randomUUID()
      },
      threshold: { upper: 80, lower: 60 },
      type: 'data',
      unit: '°F'
    },
    {
      propertyQueryInfo: {
        propertyName: DATA_PROPERTY_NAME_3,
        refId: crypto.randomUUID()
      },
      threshold: { upper: 0, lower: 15 },
      type: 'data',
      unit: 'people'
    },
  ];
}
  
function getFloorProperties(): ValueOf<EntityData, 'properties'> {
  return [
    {
      propertyQueryInfo: {
        propertyName: FLOOR_ALARM_PROPERTY_NAME,
        refId: crypto.randomUUID()
      },
      threshold: { upper: 15, lower: 0 },
      type: 'data',
      unit: 'Count'
    },
    {
      propertyQueryInfo: {
        propertyName: FLOOR_DATA_PROPERTY_NAME_1,
        refId: crypto.randomUUID()
      },
      threshold: { upper: 15, lower: 0 },
      type: 'data',
      unit: 'Count'
    },
    {
      propertyQueryInfo: {
        propertyName: FLOOR_DATA_PROPERTY_NAME_2,
        refId: crypto.randomUUID()
      },
      threshold: { upper: 80, lower: 60 },
      type: 'data',
      unit: '°F'
    }
  ];
}
