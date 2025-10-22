export interface DemoHeader {
  /** addons */
  addons: unknown;
  /** server_name */
  server_name: unknown;
  /** demo_file_stamp */
  demo_file_stamp: unknown;
  /** network_protocol */
  network_protocol: unknown;
  /** map_name */
  map_name: unknown;
  /** fullpackets_version */
  fullpackets_version: unknown;
  /** allow_clientside_entities */
  allow_clientside_entities: unknown;
  /** allow_clientside_particles */
  allow_clientside_particles: unknown;
  /** demo_version_name */
  demo_version_name: unknown;
  /** demo_version_guid */
  demo_version_guid: unknown;
  /** client_name */
  client_name: unknown;
  /** game_directory */
  game_directory: unknown;
}

export type DemoHeaderProperties = keyof DemoHeader

