// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. 2023
// SPDX-License-Identifier: Apache-2.0

export const DEFAULT_QUERY_HOPS = 0;

export const QUERY_ALL_ROOMS_AND_FLOORS = `
  SELECT floor, r1, e, r2, room
  FROM EntityGraph
  MATCH (building)<-[:isChildOf]-(floor)-[r1]-(e)-[r2]-(room), room.components AS c
  WHERE building.entityName = 'Seattle - The Summit'
  AND c.componentTypeId = 'com.amazon.iottwinmaker.parameters'`;

export function createQueryByRoom(entityId: string, hops = DEFAULT_QUERY_HOPS) {
  const normalizedHops = Math.max(0, hops);
  let selectString = '';
  let matchString = '';

  for (let i = 0; i <= normalizedHops; i++) {
    selectString += `, r${i}, e${i}`;
    matchString += `-[r${i}]-(e${i})`;
  }

  return `
    SELECT floor${selectString}
    FROM EntityGraph
    MATCH (building)<-[:isChildOf]-(floor)${matchString}
    WHERE building.entityName = 'Seattle - The Summit'
    AND r${normalizedHops}.relationshipName != 'isChildOf'
    AND e0.entityId = '${entityId}'`;
}

export function createQueryByFloor(entityId: string, hops = DEFAULT_QUERY_HOPS) {
  const normalizedHops = Math.max(0, hops);
  let selectString = '';
  let matchString = '';

  for (let i = 0; i < normalizedHops; i++) {
    selectString += `, r${i}, e${i}`;
    matchString += `-[r${i}]-(e${i})`;
  }

  return `
    SELECT floor{selectString}
    FROM EntityGraph
    MATCH (building)<-[:isChildOf]-(floor)${matchString}
    WHERE building.entityName = 'Seattle - The Summit'
    AND floor.entityId = '${entityId}'`;
}
