// Note(tyrus): This logic was generated from documentation on this page:
// website: https://cs2.poggu.me/dumped-data/game-events/. I found the current collection 
// of available events by utilizing the `demoparser2` library and the `listGameEvents` function.
// These definitions are not going to be correct due to these being found via versus engineering
// Since the package exposes the `listGameEvents` function, we could validate our underlying types 
// but running them again actual raw game ticks

export type DemoEventMap = {
    "server_spawn": ServerSpawnEvent
    "server_pre_shutdown": ServerPreShutdownEvent
    "server_shutdown": ServerShutdownEvent
    "server_message": ServerMessageEvent
    "server_cvar": ServerCvarEvent
    "player_activate": PlayerActivateEvent
    "player_connect_full": PlayerConnectFullEvent
    "player_full_update": PlayerFullUpdateEvent
    "player_connect": PlayerConnectEvent
    "player_disconnect": PlayerDisconnectEvent
    "player_info": PlayerInfoEvent
    "player_spawn": PlayerSpawnEvent
    "player_team": PlayerTeamEvent
    "local_player_team": LocalPlayerTeamEvent
    "local_player_controller_team": LocalPlayerControllerTeamEvent
    "player_changename": PlayerChangenameEvent
    "player_hurt": PlayerHurtEvent
    "player_chat": PlayerChatEvent
    "local_player_pawn_changed": LocalPlayerPawnChangedEvent
    "teamplay_broadcast_audio": TeamplayBroadcastAudioEvent
    "finale_start": FinaleStartEvent
    "player_stats_updated": PlayerStatsUpdatedEvent
    "user_data_downloaded": UserDataDownloadedEvent
    "ragdoll_dissolved": RagdollDissolvedEvent
    "team_info": TeamInfoEvent
    "team_score": TeamScoreEvent
    "hltv_cameraman": HltvCameramanEvent
    "hltv_chase": HltvChaseEvent
    "hltv_rank_camera": HltvRankCameraEvent
    "hltv_rank_entity": HltvRankEntityEvent
    "hltv_fixed": HltvFixedEvent
    "hltv_message": HltvMessageEvent
    "hltv_status": HltvStatusEvent
    "hltv_title": HltvTitleEvent
    "hltv_chat": HltvChatEvent
    "hltv_versioninfo": HltvVersioninfoEvent
    "hltv_replay": HltvReplayEvent
    "demo_start": DemoStartEvent
    "demo_stop": DemoStopEvent
    "demo_skip": DemoSkipEvent
    "map_shutdown": MapShutdownEvent
    "map_transition": MapTransitionEvent
    "hostname_changed": HostnameChangedEvent
    "difficulty_changed": DifficultyChangedEvent
    "game_message": GameMessageEvent
    "game_newmap": GameNewmapEvent
    "round_start": RoundStartEvent
    "warmup_end": WarmupEndEvent
    "round_end": RoundEndEvent
    "round_start_pre_entity": RoundStartPreEntityEvent
    "round_start_post_nav": RoundStartPostNavEvent
    "round_freeze_end": RoundFreezeEndEvent
    "teamplay_round_start": TeamplayRoundStartEvent
    "player_death": PlayerDeathEvent
    "player_footstep": PlayerFootstepEvent
    "player_hintmessage": PlayerHintmessageEvent
    "break_breakable": BreakBreakableEvent
    "break_prop": BreakPropEvent
    "entity_killed": EntityKilledEvent
    "door_close": DoorCloseEvent
    "vote_started": VoteStartedEvent
    "vote_failed": VoteFailedEvent
    "vote_passed": VotePassedEvent
    "vote_changed": VoteChangedEvent
    "vote_cast_yes": VoteCastYesEvent
    "vote_cast_no": VoteCastNoEvent
    "achievement_event": AchievementEventEvent
    "achievement_earned": AchievementEarnedEvent
    "achievement_write_failed": AchievementWriteFailedEvent
    "bonus_updated": BonusUpdatedEvent
    "spec_target_updated": SpecTargetUpdatedEvent
    "spec_mode_updated": SpecModeUpdatedEvent
    "entity_visible": EntityVisibleEvent
    "gameinstructor_draw": GameinstructorDrawEvent
    "gameinstructor_nodraw": GameinstructorNodrawEvent
    "flare_ignite_npc": FlareIgniteNpcEvent
    "helicopter_grenade_punt_miss": HelicopterGrenadePuntMissEvent
    "physgun_pickup": PhysgunPickupEvent
    "inventory_updated": InventoryUpdatedEvent
    "cart_updated": CartUpdatedEvent
    "store_pricesheet_updated": StorePricesheetUpdatedEvent
    "item_schema_initialized": ItemSchemaInitializedEvent
    "drop_rate_modified": DropRateModifiedEvent
    "event_ticket_modified": EventTicketModifiedEvent
    "gc_connected": GcConnectedEvent
    "instructor_start_lesson": InstructorStartLessonEvent
    "instructor_close_lesson": InstructorCloseLessonEvent
    "instructor_server_hint_create": InstructorServerHintCreateEvent
    "clientside_lesson_closed": ClientsideLessonClosedEvent
    "dynamic_shadow_light_changed": DynamicShadowLightChangedEvent
    "gameui_hidden": GameuiHiddenEvent
    "items_gifted": ItemsGiftedEvent
    "player_score": PlayerScoreEvent
    "player_shoot": PlayerShootEvent
    "game_init": GameInitEvent
    "game_start": GameStartEvent
    "game_end": GameEndEvent
    "round_announce_match_point": RoundAnnounceMatchPointEvent
    "round_announce_final": RoundAnnounceFinalEvent
    "round_announce_last_round_half": RoundAnnounceLastRoundHalfEvent
    "round_announce_match_start": RoundAnnounceMatchStartEvent
    "round_announce_warmup": RoundAnnounceWarmupEvent
    "round_end_upload_stats": RoundEndUploadStatsEvent
    "round_officially_ended": RoundOfficiallyEndedEvent
    "round_time_warning": RoundTimeWarningEvent
    "ugc_map_info_received": UgcMapInfoReceivedEvent
    "ugc_map_unsubscribed": UgcMapUnsubscribedEvent
    "ugc_map_download_error": UgcMapDownloadErrorEvent
    "ugc_file_download_finished": UgcFileDownloadFinishedEvent
    "ugc_file_download_start": UgcFileDownloadStartEvent
    "begin_new_match": BeginNewMatchEvent
    "dm_bonus_weapon_start": DmBonusWeaponStartEvent
    "survival_announce_phase": SurvivalAnnouncePhaseEvent
    "broken_breakable": BrokenBreakableEvent
    "player_decal": PlayerDecalEvent
    "set_instructor_group_enabled": SetInstructorGroupEnabledEvent
    "instructor_server_hint_stop": InstructorServerHintStopEvent
    "read_game_titledata": ReadGameTitledataEvent
    "write_game_titledata": WriteGameTitledataEvent
    "reset_game_titledata": ResetGameTitledataEvent
    "weaponhud_selection": WeaponhudSelectionEvent
    "vote_ended": VoteEndedEvent
    "vote_cast": VoteCastEvent
    "vote_options": VoteOptionsEvent
    "endmatch_mapvote_selecting_map": EndmatchMapvoteSelectingMapEvent
    "endmatch_cmm_start_reveal_items": EndmatchCmmStartRevealItemsEvent
    "client_loadout_changed": ClientLoadoutChangedEvent
    "add_player_sonar_icon": AddPlayerSonarIconEvent
    "add_bullet_hit_marker": AddBulletHitMarkerEvent
    "other_death": OtherDeathEvent
    "item_purchase": ItemPurchasedEvent
    "bomb_beginplant": BombBeginplantEvent
    "bomb_abortplant": BombAbortplantEvent
    "bomb_planted": BombPlantedEvent
    "bomb_defused": BombDefusedEvent
    "bomb_exploded": BombExplodedEvent
    "bomb_dropped": BombDroppedEvent
    "bomb_pickup": BombPickupEvent
    "defuser_dropped": DefuserDroppedEvent
    "defuser_pickup": DefuserPickupEvent
    "announce_phase_end": AnnouncePhaseEndEvent
    "cs_intermission": CsIntermissionEvent
    "bomb_begindefuse": BombBegindefuseEvent
    "bomb_abortdefuse": BombAbortdefuseEvent
    "hostage_follows": HostageFollowsEvent
    "hostage_hurt": HostageHurtEvent
    "hostage_killed": HostageKilledEvent
    "hostage_rescued": HostageRescuedEvent
    "hostage_stops_following": HostageStopsFollowingEvent
    "hostage_rescued_all": HostageRescuedAllEvent
    "hostage_call_for_help": HostageCallForHelpEvent
    "vip_escaped": VipEscapedEvent
    "vip_killed": VipKilledEvent
    "player_radio": PlayerRadioEvent
    "bomb_beep": BombBeepEvent
    "weapon_fire": WeaponFireEvent
    "weapon_fire_on_empty": WeaponFireOnEmptyEvent
    "grenade_thrown": GrenadeThrownEvent
    "weapon_outofammo": WeaponOutofammoEvent
    "weapon_reload": WeaponReloadEvent
    "weapon_zoom": WeaponZoomEvent
    "silencer_detach": SilencerDetachEvent
    "inspect_weapon": InspectWeaponEvent
    "weapon_zoom_rifle": WeaponZoomRifleEvent
    "player_spawned": PlayerSpawnedEvent
    "item_pickup": ItemPickupEvent
    "item_pickup_slerp": ItemPickupSlerpEvent
    "item_pickup_failed": ItemPickupFailedEvent
    "item_remove": ItemRemoveEvent
    "ammo_pickup": AmmoPickupEvent
    "item_equip": ItemEquipEvent
    "enter_buyzone": EnterBuyzoneEvent
    "exit_buyzone": ExitBuyzoneEvent
    "buytime_ended": BuytimeEndedEvent
    "enter_bombzone": EnterBombzoneEvent
    "exit_bombzone": ExitBombzoneEvent
    "enter_rescue_zone": EnterRescueZoneEvent
    "exit_rescue_zone": ExitRescueZoneEvent
    "silencer_off": SilencerOffEvent
    "silencer_on": SilencerOnEvent
    "buymenu_open": BuymenuOpenEvent
    "buymenu_close": BuymenuCloseEvent
    "round_prestart": RoundPrestartEvent
    "round_poststart": RoundPoststartEvent
    "grenade_bounce": GrenadeBounceEvent
    "hegrenade_detonate": HegrenadeDetonateEvent
    "flashbang_detonate": FlashbangDetonateEvent
    "smokegrenade_detonate": SmokegrenadeDetonateEvent
    "smokegrenade_expired": SmokegrenadeExpiredEvent
    "molotov_detonate": MolotovDetonateEvent
    "decoy_detonate": DecoyDetonateEvent
    "decoy_started": DecoyStartedEvent
    "tagrenade_detonate": TagrenadeDetonateEvent
    "inferno_startburn": InfernoStartburnEvent
    "inferno_expire": InfernoExpireEvent
    "inferno_extinguish": InfernoExtinguishEvent
    "decoy_firing": DecoyFiringEvent
    "bullet_impact": BulletImpactEvent
    "player_jump": PlayerJumpEvent
    "player_blind": PlayerBlindEvent
    "player_falldamage": PlayerFalldamageEvent
    "door_moving": DoorMovingEvent
    "mb_input_lock_success": MbInputLockSuccessEvent
    "mb_input_lock_cancel": MbInputLockCancelEvent
    "nav_blocked": NavBlockedEvent
    "nav_generate": NavGenerateEvent
    "achievement_info_loaded": AchievementInfoLoadedEvent
    "hltv_changed_mode": HltvChangedModeEvent
    "cs_game_disconnected": CsGameDisconnectedEvent
    "cs_round_final_beep": CsRoundFinalBeepEvent
    "cs_round_start_beep": CsRoundStartBeepEvent
    "cs_win_panel_round": CsWinPanelRoundEvent
    "cs_win_panel_match": CsWinPanelMatchEvent
    "cs_match_end_restart": CsMatchEndRestartEvent
    "cs_pre_restart": CsPreRestartEvent
    "show_deathpanel": ShowDeathpanelEvent
    "hide_deathpanel": HideDeathpanelEvent
    "player_avenged_teammate": PlayerAvengedTeammateEvent
    "achievement_earned_local": AchievementEarnedLocalEvent
    "repost_xbox_achievements": RepostXboxAchievementsEvent
    "match_end_conditions": MatchEndConditionsEvent
    "round_mvp": RoundMvpEvent
    "show_survival_respawn_status": ShowSurvivalRespawnStatusEvent
    "client_disconnect": ClientDisconnectEvent
    "gg_killed_enemy": GgKilledEnemyEvent
    "switch_team": SwitchTeamEvent
    "write_profile_data": WriteProfileDataEvent
    "trial_time_expired": TrialTimeExpiredEvent
    "update_matchmaking_stats": UpdateMatchmakingStatsEvent
    "player_reset_vote": PlayerResetVoteEvent
    "enable_restart_voting": EnableRestartVotingEvent
    "sfuievent": SfuieventEvent
    "start_vote": StartVoteEvent
    "player_given_c4": PlayerGivenC4Event
    "tr_player_flashbanged": TrPlayerFlashbangedEvent
    "tr_mark_complete": TrMarkCompleteEvent
    "tr_mark_best_time": TrMarkBestTimeEvent
    "tr_exit_hint_trigger": TrExitHintTriggerEvent
    "bot_takeover": BotTakeoverEvent
    "tr_show_finish_msgbox": TrShowFinishMsgboxEvent
    "tr_show_exit_msgbox": TrShowExitMsgboxEvent
    "jointeam_failed": JointeamFailedEvent
    "teamchange_pending": TeamchangePendingEvent
    "material_default_complete": MaterialDefaultCompleteEvent
    "cs_prev_next_spectator": CsPrevNextSpectatorEvent
    "nextlevel_changed": NextlevelChangedEvent
    "seasoncoin_levelup": SeasoncoinLevelupEvent
    "tournament_reward": TournamentRewardEvent
    "start_halftime": StartHalftimeEvent
    "ammo_refill": AmmoRefillEvent
    "parachute_pickup": ParachutePickupEvent
    "parachute_deploy": ParachuteDeployEvent
    "dronegun_attack": DronegunAttackEvent
    "drone_dispatched": DroneDispatchedEvent
    "loot_crate_visible": LootCrateVisibleEvent
    "loot_crate_opened": LootCrateOpenedEvent
    "open_crate_instr": OpenCrateInstrEvent
    "smoke_beacon_paradrop": SmokeBeaconParadropEvent
    "survival_paradrop_spawn": SurvivalParadropSpawnEvent
    "survival_paradrop_break": SurvivalParadropBreakEvent
    "drone_cargo_detached": DroneCargoDetachedEvent
    "drone_above_roof": DroneAboveRoofEvent
    "choppers_incoming_warning": ChoppersIncomingWarningEvent
    "firstbombs_incoming_warning": FirstbombsIncomingWarningEvent
    "dz_item_interaction": DzItemInteractionEvent
    "survival_teammate_respawn": SurvivalTeammateRespawnEvent
    "survival_no_respawns_warning": SurvivalNoRespawnsWarningEvent
    "survival_no_respawns_final": SurvivalNoRespawnsFinalEvent
    "player_ping": PlayerPingEvent
    "player_ping_stop": PlayerPingStopEvent
    "player_sound": PlayerSoundEvent
    "guardian_wave_restart": GuardianWaveRestartEvent
    "team_intro_start": TeamIntroStartEvent
    "team_intro_end": TeamIntroEndEvent
    "bullet_flight_resolution": BulletFlightResolutionEvent
    "door_break": DoorBreakEvent
    "door_closed": DoorClosedEvent
    "door_open": DoorOpenEvent
    "game_phase_changed": GamePhaseChangedEvent
    "hltv_replay_status": HltvReplayStatusEvent
    "chat_message": ChatMessageEvent
}

export type DemoEventName = keyof DemoEventMap
export type DemoEvent = DemoEventMap[DemoEventName]

export interface DemoEventCommon {
    round: number
    tick: number
}

// Event Interfaces
interface ServerCvarEvent extends DemoEventCommon {
    event_name: "server_cvar"
    cvarname: string
    cvarvalue: string
}

interface PlayerDisconnectEvent extends DemoEventCommon {
    event_name: "player_disconnect"
    userid: string
    reason: number
    name: string
    networkid: string
    xuid: string
    PlayerID: number
}

interface HegrenadeDetonateEvent extends DemoEventCommon {
    event_name: "hegrenade_detonate"
    userid: string
    entityid: number
    x: number
    y: number
    z: number
}

interface RoundAnnounceFinalEvent extends DemoEventCommon {
    event_name: "round_announce_final"
}

interface SmokegrenadeExpiredEvent extends DemoEventCommon {
    event_name: "smokegrenade_expired"
    userid: string
    entityid: number
    x: number
    y: number
    z: number
}

interface PlayerConnectEvent extends DemoEventCommon {
    event_name: "player_connect"
    name: string
    userid: string
    networkid: string
    xuid: string
    address: string
    bot: boolean
}

interface ChatMessageEvent extends DemoEventCommon {
    event_name: "chat_message"
    teamonly: boolean
    userid: number
    text: string
}

interface InfernoStartburnEvent extends DemoEventCommon {
    event_name: "inferno_startburn"
    entityid: number
    x: number
    y: number
    z: number
}

interface HltvChaseEvent extends DemoEventCommon {
    event_name: "hltv_chase"
    target1: string
    target2: string
    distance: number
    theta: number
    phi: number
    inertia: number
    ineye: number
}

interface PlayerFootstepEvent extends DemoEventCommon {
    event_name: "player_footstep"
    userid: string
}

interface BombExplodedEvent extends DemoEventCommon {
    event_name: "bomb_exploded"
    userid: string
    site: number
}

interface RoundTimeWarningEvent extends DemoEventCommon {
    event_name: "round_time_warning"
}

interface RoundAnnounceMatchStartEvent extends DemoEventCommon {
    event_name: "round_announce_match_start"
}

interface OtherDeathEvent extends DemoEventCommon {
    event_name: "other_death"
    otherid: number
    othertype: string
    attacker: number
    weapon: string
    weapon_itemid: string
    weapon_fauxitemid: string
    weapon_originalowner_xuid: string
    headshot: boolean
    penetrated: number
    noscope: boolean
    thrusmoke: boolean
    attackerblind: boolean
}

interface CsWinPanelMatchEvent extends DemoEventCommon {
    event_name: "cs_win_panel_match"
}

interface PlayerSpawnEvent extends DemoEventCommon {
    event_name: "player_spawn"
    userid: string
}

interface RoundAnnounceLastRoundHalfEvent extends DemoEventCommon {
    event_name: "round_announce_last_round_half"
}

interface WeaponReloadEvent extends DemoEventCommon {
    event_name: "weapon_reload"
    userid: string
}

interface CsRoundFinalBeepEvent extends DemoEventCommon {
    event_name: "cs_round_final_beep"
}

interface CsRoundStartBeepEvent extends DemoEventCommon {
    event_name: "cs_round_start_beep"
}

interface BombDroppedEvent extends DemoEventCommon {
    event_name: "bomb_dropped"
    userid: string
    entindex: number
}

interface CsPreRestartEvent extends DemoEventCommon {
    event_name: "cs_pre_restart"
}

interface RoundAnnounceWarmupEvent extends DemoEventCommon {
    event_name: "round_announce_warmup"
}

interface BombBeginplantEvent extends DemoEventCommon {
    event_name: "bomb_beginplant"
    userid: string
    site: number
}

interface RoundPrestartEvent extends DemoEventCommon  {
    event_name: "round_prestart"
}

interface InfernoExpireEvent extends DemoEventCommon {
    event_name: "inferno_expire"
    entityid: number
    x: number
    y: number
    z: number
}

interface BombDefusedEvent extends DemoEventCommon {
    event_name: "bomb_defused"
    userid: string
    site: number
}

interface BuytimeEndedEvent extends DemoEventCommon {
    event_name: "buytime_ended"
}

interface PlayerConnectFullEvent extends DemoEventCommon {
    event_name: "player_connect_full"
    userid: string
}

interface AnnouncePhaseEndEvent extends DemoEventCommon {
    event_name: "announce_phase_end"
}

interface PlayerDeathEvent extends DemoEventCommon {
    event_name: "player_death"
    userid: string
    attacker_name: string
    attacker_steamid: string
    attackerblind: boolean
    attackerinair: boolean
    assister: string
    assistedflash: boolean
    weapon: string
    weapon_itemid: string
    weapon_fauxitemid: string
    weapon_originalowner_xuid: string
    headshot: boolean
    dominated: number
    revenge: number
    wipe: number
    penetrated: number
    noreplay: boolean
    noscope: boolean
    thrusmoke: boolean
    distance: number
    dmg_health: number
    dmg_armor: number
    hitgroup: number
}

interface ItemEquipEvent extends DemoEventCommon {
    event_name: "item_equip"
    userid: string
    item: string
    defindex: number
    canzoom: boolean
    hassilencer: boolean
    issilenced: boolean
    hastracers: boolean
    weptype: number
    ispainted: boolean
}

interface WeaponZoomEvent extends DemoEventCommon {
    event_name: "weapon_zoom"
    userid: string
}

interface WeaponFireEvent extends DemoEventCommon {
    event_name: "weapon_fire"
    userid: string
    weapon: string
    silenced: boolean
}

interface RoundFreezeEndEvent extends DemoEventCommon {
    event_name: "round_freeze_end"
}

interface FlashbangDetonateEvent extends DemoEventCommon {
    event_name: "flashbang_detonate"
    userid: string
    entityid: number
    x: number
    y: number
    z: number
}

interface ItemPickupEvent extends DemoEventCommon {
    event_name: "item_pickup"
    userid: string
    item: string
    silent: boolean
    defindex: number
}

interface PlayerJumpEvent extends DemoEventCommon {
    event_name: "player_jump"
    userid: string
}

interface BombPickupEvent extends DemoEventCommon {
    event_name: "bomb_pickup"
}

interface ShowSurvivalRespawnStatusEvent extends DemoEventCommon {
    event_name: "show_survival_respawn_status"
    loc_token: string
    duration: number
    userid: string
}

interface RoundOfficiallyEndedEvent extends DemoEventCommon {
    event_name: "round_officially_ended"
}

interface BeginNewMatchEvent extends DemoEventCommon {
    event_name: "begin_new_match"
}

interface PlayerHurtEvent extends DemoEventCommon {
    event_name: "player_hurt"
    userid: string
    attacker: string
    health: number
    armor: number
    weapon: string
    dmg_health: number
    dmg_armor: number
    hitgroup: number
}

interface RoundPoststartEvent extends DemoEventCommon {
    event_name: "round_poststart"
}

interface HltvFixedEvent extends DemoEventCommon {
    event_name: "hltv_fixed"
    posx: number
    posy: number
    posz: number
    theta: number
    phi: number
    offset: number
    fov: number
    target: string
}

interface SmokegrenadeDetonateEvent extends DemoEventCommon {
    event_name: "smokegrenade_detonate"
    userid: string
    entityid: number
    x: number
    y: number
    z: number
}

interface PlayerBlindEvent extends DemoEventCommon {
    event_name: "player_blind"
    userid: string
    attacker: string
    entityid: number
    blind_duration: number
}

interface PlayerTeamEvent extends DemoEventCommon {
    event_name: "player_team"
    userid: string
    team: number
    oldteam: number
    disconnect: boolean
    silent: boolean
    isbot: boolean
}

interface BombPlantedEvent extends DemoEventCommon {
    event_name: "bomb_planted"
    userid: string
    site: number
}

interface BombBegindefuseEvent extends DemoEventCommon {
    event_name: "bomb_begindefuse"
    userid: string
    haskit: boolean
}

interface ItemPurchasedEvent extends DemoEventCommon {
    event_name: "item_purchase"
    cost: number
    inventory_slot: number
    item_name: string
    paint_seed: unknown
    skin: unknown
    skin_id: unknown
    stickers: unknown[]
    weapon: string
    userid: string
    team: number
    was_sold: boolean
}

interface ServerSpawnEvent extends DemoEventCommon {
    event_name: "server_spawn"
    hostname: string
    address: string
    port: number
    game: string
    mapname: string
    addonname: string
    maxplayers: number
    os: string
    dedicated: boolean
    password: boolean
}

interface ServerPreShutdownEvent extends DemoEventCommon {
    event_name: "server_pre_shutdown"
    reason: string
}

interface ServerShutdownEvent extends DemoEventCommon {
    event_name: "server_shutdown"
    reason: string
}

interface ServerMessageEvent extends DemoEventCommon {
    event_name: "server_message"
    text: string
}

interface PlayerActivateEvent extends DemoEventCommon {
    event_name: "player_activate"
    userid: string
}

interface PlayerFullUpdateEvent extends DemoEventCommon {
    event_name: "player_full_update"
    userid: string
    count: number
}

interface PlayerInfoEvent extends DemoEventCommon {
    event_name: "player_info"
    name: string
    userid: string
    steamid: string
    bot: boolean
}

interface LocalPlayerTeamEvent extends DemoEventCommon {
    event_name: "local_player_team"
}

interface LocalPlayerControllerTeamEvent extends DemoEventCommon {
    event_name: "local_player_controller_team"
}

interface PlayerChangenameEvent extends DemoEventCommon {
    event_name: "player_changename"
    userid: string
    oldname: string
    newname: string
}

interface PlayerChatEvent extends DemoEventCommon {
    event_name: "player_chat"
    teamonly: boolean
    userid: number
    text: string
}

interface LocalPlayerPawnChangedEvent extends DemoEventCommon {
    event_name: "local_player_pawn_changed"
}

interface TeamplayBroadcastAudioEvent extends DemoEventCommon {
    event_name: "teamplay_broadcast_audio"
    team: number
    sound: string
}

interface FinaleStartEvent extends DemoEventCommon {
    event_name: "finale_start"
    rushes: number
}

interface PlayerStatsUpdatedEvent extends DemoEventCommon {
    event_name: "player_stats_updated"
    forceupload: boolean
}

interface UserDataDownloadedEvent extends DemoEventCommon {
    event_name: "user_data_downloaded"
}

interface RagdollDissolvedEvent extends DemoEventCommon {
    event_name: "ragdoll_dissolved"
    entindex: number
}

interface TeamInfoEvent extends DemoEventCommon {
    event_name: "team_info"
    teamid: number
    teamname: string
}

interface TeamScoreEvent extends DemoEventCommon {
    event_name: "team_score"
    teamid: number
    score: number
}

interface HltvCameramanEvent extends DemoEventCommon {
    event_name: "hltv_cameraman"
    userid: string
}

interface HltvRankCameraEvent extends DemoEventCommon {
    event_name: "hltv_rank_camera"
    index: number
    rank: number
    target: string
}

interface HltvRankEntityEvent extends DemoEventCommon {
    event_name: "hltv_rank_entity"
    userid: string
    rank: number
    target: string
}

interface HltvMessageEvent extends DemoEventCommon {
    event_name: "hltv_message"
    text: string
}

interface HltvStatusEvent extends DemoEventCommon {
    event_name: "hltv_status"
    clients: number
    slots: number
    proxies: number
    master: string
}

interface HltvTitleEvent extends DemoEventCommon {
    event_name: "hltv_title"
    text: string
}

interface HltvChatEvent extends DemoEventCommon {
    event_name: "hltv_chat"
    text: string
    steamID: string
}

interface HltvVersioninfoEvent extends DemoEventCommon {
    event_name: "hltv_versioninfo"
    version: number
}

interface HltvReplayEvent extends DemoEventCommon {
    event_name: "hltv_replay"
    delay: number
    reason: number
}

interface DemoStartEvent extends DemoEventCommon {
    event_name: "demo_start"
}

interface DemoStopEvent extends DemoEventCommon {
    event_name: "demo_stop"
}

interface DemoSkipEvent extends DemoEventCommon {
    event_name: "demo_skip"
    playback_tick: number
    skipto_tick: number
}

interface MapShutdownEvent extends DemoEventCommon {
    event_name: "map_shutdown"
}

interface MapTransitionEvent extends DemoEventCommon {
    event_name: "map_transition"
}

interface HostnameChangedEvent extends DemoEventCommon {
    event_name: "hostname_changed"
    hostname: string
}

interface DifficultyChangedEvent extends DemoEventCommon {
    event_name: "difficulty_changed"
    newDifficulty: number
    oldDifficulty: number
    strDifficulty: string
}

interface GameMessageEvent extends DemoEventCommon {
    event_name: "game_message"
    target: number
    text: string
}

interface GameNewmapEvent extends DemoEventCommon {
    event_name: "game_newmap"
    mapname: string
}

interface RoundStartEvent extends DemoEventCommon {
    event_name: "round_start"
    timelimit: number
    fraglimit: number
    objective: string
}

interface WarmupEndEvent extends DemoEventCommon {
    event_name: "warmup_end"
}

interface RoundEndEvent extends DemoEventCommon {
    event_name: "round_end"
    winner: number
    reason: number
    message: string
    legacy: number
    player_count: number
    nomusic: number
}

interface RoundStartPreEntityEvent extends DemoEventCommon {
    event_name: "round_start_pre_entity"
}

interface RoundStartPostNavEvent extends DemoEventCommon {
    event_name: "round_start_post_nav"
}

interface TeamplayRoundStartEvent extends DemoEventCommon {
    event_name: "teamplay_round_start"
    full_reset: boolean
}

interface PlayerHintmessageEvent extends DemoEventCommon {
    event_name: "player_hintmessage"
    hintmessage: string
}

interface BreakBreakableEvent extends DemoEventCommon {
    event_name: "break_breakable"
    entindex: number
    material: number
}

interface BreakPropEvent extends DemoEventCommon {
    event_name: "break_prop"
    entindex: number
}

interface EntityKilledEvent extends DemoEventCommon {
    event_name: "entity_killed"
    entindex_killed: number
    entindex_attacker: number
    entindex_inflictor: number
    damagebits: number
}

interface DoorCloseEvent extends DemoEventCommon {
    event_name: "door_close"
    checkpoint: boolean
}

interface VoteStartedEvent extends DemoEventCommon {
    event_name: "vote_started"
    issue: string
    param1: string
    team: number
    initiator: number
}

interface VoteFailedEvent extends DemoEventCommon {
    event_name: "vote_failed"
    team: number
}

interface VotePassedEvent extends DemoEventCommon {
    event_name: "vote_passed"
    details: string
    param1: string
    team: number
}

interface VoteChangedEvent extends DemoEventCommon {
    event_name: "vote_changed"
    vote_option1: number
    vote_option2: number
    vote_option3: number
    vote_option4: number
    vote_option5: number
    potentialVotes: number
}

interface VoteCastYesEvent extends DemoEventCommon {
    event_name: "vote_cast_yes"
    team: number
    entityid: number
}

interface VoteCastNoEvent extends DemoEventCommon {
    event_name: "vote_cast_no"
    team: number
    entityid: number
}

interface AchievementEventEvent extends DemoEventCommon {
    event_name: "achievement_event"
    achievement_name: string
    cur_val: number
    max_val: number
}

interface AchievementEarnedEvent extends DemoEventCommon {
    event_name: "achievement_earned"
    player: string
    achievement: number
}

interface AchievementWriteFailedEvent extends DemoEventCommon {
    event_name: "achievement_write_failed"
}

interface BonusUpdatedEvent extends DemoEventCommon {
    event_name: "bonus_updated"
    numadvanced: number
    numbronze: number
    numsilver: number
    numgold: number
}

interface SpecTargetUpdatedEvent extends DemoEventCommon {
    event_name: "spec_target_updated"
    userid: string
    target: number
}

interface SpecModeUpdatedEvent extends DemoEventCommon {
    event_name: "spec_mode_updated"
    userid: string
}

interface EntityVisibleEvent extends DemoEventCommon {
    event_name: "entity_visible"
    userid: string
    subject: number
    classname: string
    entityname: string
}

interface GameinstructorDrawEvent extends DemoEventCommon {
    event_name: "gameinstructor_draw"
}

interface GameinstructorNodrawEvent extends DemoEventCommon {
    event_name: "gameinstructor_nodraw"
}

interface FlareIgniteNpcEvent extends DemoEventCommon {
    event_name: "flare_ignite_npc"
    entindex: number
}

interface HelicopterGrenadePuntMissEvent extends DemoEventCommon {
    event_name: "helicopter_grenade_punt_miss"
}

interface PhysgunPickupEvent extends DemoEventCommon {
    event_name: "physgun_pickup"
    target: number
}

interface InventoryUpdatedEvent extends DemoEventCommon {
    event_name: "inventory_updated"
}

interface CartUpdatedEvent extends DemoEventCommon {
    event_name: "cart_updated"
}

interface StorePricesheetUpdatedEvent extends DemoEventCommon {
    event_name: "store_pricesheet_updated"
}

interface ItemSchemaInitializedEvent extends DemoEventCommon {
    event_name: "item_schema_initialized"
}

interface DropRateModifiedEvent extends DemoEventCommon {
    event_name: "drop_rate_modified"
}

interface EventTicketModifiedEvent extends DemoEventCommon {
    event_name: "event_ticket_modified"
}

interface GcConnectedEvent extends DemoEventCommon {
    event_name: "gc_connected"
}

interface InstructorStartLessonEvent extends DemoEventCommon {
    event_name: "instructor_start_lesson"
    userid: string
    hint_name: string
    hint_target: number
    vr_movement_type: number
    vr_single_controller: boolean
    vr_controller_type: number
}

interface InstructorCloseLessonEvent extends DemoEventCommon {
    event_name: "instructor_close_lesson"
    userid: string
    hint_name: string
}

interface InstructorServerHintCreateEvent extends DemoEventCommon {
    event_name: "instructor_server_hint_create"
    userid: string
    hint_name: string
    hint_replace_key: string
    hint_target: number
    hint_activator_userid: string
    hint_timeout: number
    hint_icon_onscreen: string
    hint_icon_offscreen: string
    hint_caption: string
    hint_activator_caption: string
    hint_color: string
    hint_icon_offset: number
    hint_range: number
    hint_flags: number
    hint_binding: string
    hint_gamepad_binding: string
    hint_allow_nodraw_target: boolean
    hint_nooffscreen: boolean
    hint_forcecaption: boolean
    hint_local_player_only: boolean
}

interface ClientsideLessonClosedEvent extends DemoEventCommon {
    event_name: "clientside_lesson_closed"
    lesson_name: string
}

interface DynamicShadowLightChangedEvent extends DemoEventCommon {
    event_name: "dynamic_shadow_light_changed"
}

interface GameuiHiddenEvent extends DemoEventCommon {
    event_name: "gameui_hidden"
}

interface ItemsGiftedEvent extends DemoEventCommon {
    event_name: "items_gifted"
    player: string
    itemdef: number
    numgifts: number
    giftidx: number
    accountid: number
}

interface PlayerScoreEvent extends DemoEventCommon {
    event_name: "player_score"
    userid: string
    kills: number
    deaths: number
    score: number
}

interface PlayerShootEvent extends DemoEventCommon {
    event_name: "player_shoot"
    userid: string
    weapon: number
    mode: number
}

interface GameInitEvent extends DemoEventCommon {
    event_name: "game_init"
}

interface GameStartEvent extends DemoEventCommon {
    event_name: "game_start"
    roundslimit: number
    timelimit: number
    fraglimit: number
    objective: string
}

interface GameEndEvent extends DemoEventCommon {
    event_name: "game_end"
    winner: number
}

interface RoundAnnounceMatchPointEvent extends DemoEventCommon {
    event_name: "round_announce_match_point"
}

interface RoundEndUploadStatsEvent extends DemoEventCommon {
    event_name: "round_end_upload_stats"
}

interface UgcMapInfoReceivedEvent extends DemoEventCommon {
    event_name: "ugc_map_info_received"
    published_file_id: string
}

interface UgcMapUnsubscribedEvent extends DemoEventCommon {
    event_name: "ugc_map_unsubscribed"
    published_file_id: string
}

interface UgcMapDownloadErrorEvent extends DemoEventCommon {
    event_name: "ugc_map_download_error"
    published_file_id: string
    error_code: number
}

interface UgcFileDownloadFinishedEvent extends DemoEventCommon {
    event_name: "ugc_file_download_finished"
    hcontent: string
}

interface UgcFileDownloadStartEvent extends DemoEventCommon {
    event_name: "ugc_file_download_start"
    hcontent: string
    published_file_id: string
}

interface DmBonusWeaponStartEvent extends DemoEventCommon {
    event_name: "dm_bonus_weapon_start"
    time: number
    Pos: number
}

interface SurvivalAnnouncePhaseEvent extends DemoEventCommon {
    event_name: "survival_announce_phase"
    phase: number
}

interface BrokenBreakableEvent extends DemoEventCommon {
    event_name: "broken_breakable"
    entindex: number
    material: number
}

interface PlayerDecalEvent extends DemoEventCommon {
    event_name: "player_decal"
}

interface SetInstructorGroupEnabledEvent extends DemoEventCommon {
    event_name: "set_instructor_group_enabled"
    group: string
    enabled: number
}

interface InstructorServerHintStopEvent extends DemoEventCommon {
    event_name: "instructor_server_hint_stop"
    hint_name: string
}

interface ReadGameTitledataEvent extends DemoEventCommon {
    event_name: "read_game_titledata"
    controllerId: number
}

interface WriteGameTitledataEvent extends DemoEventCommon {
    event_name: "write_game_titledata"
    controllerId: number
}

interface ResetGameTitledataEvent extends DemoEventCommon {
    event_name: "reset_game_titledata"
    controllerId: number
}

interface WeaponhudSelectionEvent extends DemoEventCommon {
    event_name: "weaponhud_selection"
    userid: string
    mode: number
    entindex: number
}

interface VoteEndedEvent extends DemoEventCommon {
    event_name: "vote_ended"
}

interface VoteCastEvent extends DemoEventCommon {
    event_name: "vote_cast"
    vote_option: number
    team: number
    userid: string
}

interface VoteOptionsEvent extends DemoEventCommon {
    event_name: "vote_options"
    count: number
    option1: string
    option2: string
    option3: string
    option4: string
    option5: string
}

interface EndmatchMapvoteSelectingMapEvent extends DemoEventCommon {
    event_name: "endmatch_mapvote_selecting_map"
    count: number
    slot1: number
    slot2: number
    slot3: number
    slot4: number
    slot5: number
    slot6: number
    slot7: number
    slot8: number
    slot9: number
    slot10: number
}

interface EndmatchCmmStartRevealItemsEvent extends DemoEventCommon {
    event_name: "endmatch_cmm_start_reveal_items"
}

interface ClientLoadoutChangedEvent extends DemoEventCommon {
    event_name: "client_loadout_changed"
}

interface AddPlayerSonarIconEvent extends DemoEventCommon {
    event_name: "add_player_sonar_icon"
    userid: string
    pos_x: number
    pos_y: number
    pos_z: number
}

interface AddBulletHitMarkerEvent extends DemoEventCommon {
    event_name: "add_bullet_hit_marker"
    userid: string
    bone: number
    pos_x: number
    pos_y: number
    pos_z: number
    ang_x: number
    ang_y: number
    ang_z: number
    start_x: number
    start_y: number
    start_z: number
    hit: boolean
}

interface BombAbortplantEvent extends DemoEventCommon {
    event_name: "bomb_abortplant"
    userid: string
    site: number
}

interface DefuserDroppedEvent extends DemoEventCommon {
    event_name: "defuser_dropped"
    entityid: number
}

interface DefuserPickupEvent extends DemoEventCommon {
    event_name: "defuser_pickup"
    entityid: number
    userid: string
}

interface CsIntermissionEvent extends DemoEventCommon {
    event_name: "cs_intermission"
}

interface BombAbortdefuseEvent extends DemoEventCommon {
    event_name: "bomb_abortdefuse"
    userid: string
}

interface HostageFollowsEvent extends DemoEventCommon {
    event_name: "hostage_follows"
    userid: string
    hostage: number
}

interface HostageHurtEvent extends DemoEventCommon {
    event_name: "hostage_hurt"
    userid: string
    hostage: number
}

interface HostageKilledEvent extends DemoEventCommon {
    event_name: "hostage_killed"
    userid: string
    hostage: number
}

interface HostageRescuedEvent extends DemoEventCommon {
    event_name: "hostage_rescued"
    userid: string
    hostage: number
    site: number
}

interface HostageStopsFollowingEvent extends DemoEventCommon {
    event_name: "hostage_stops_following"
    userid: string
    hostage: number
}

interface HostageRescuedAllEvent extends DemoEventCommon {
    event_name: "hostage_rescued_all"
}

interface HostageCallForHelpEvent extends DemoEventCommon {
    event_name: "hostage_call_for_help"
    hostage: number
}

interface VipEscapedEvent extends DemoEventCommon {
    event_name: "vip_escaped"
    userid: string
}

interface VipKilledEvent extends DemoEventCommon {
    event_name: "vip_killed"
    userid: string
    attacker: string
}

interface PlayerRadioEvent extends DemoEventCommon {
    event_name: "player_radio"
    userid: string
    slot: number
}

interface BombBeepEvent extends DemoEventCommon {
    event_name: "bomb_beep"
    entindex: number
}

interface WeaponFireOnEmptyEvent extends DemoEventCommon {
    event_name: "weapon_fire_on_empty"
    userid: string
    weapon: string
}

interface GrenadeThrownEvent extends DemoEventCommon {
    event_name: "grenade_thrown"
    userid: string
    weapon: string
}

interface WeaponOutofammoEvent extends DemoEventCommon {
    event_name: "weapon_outofammo"
    userid: string
}

interface SilencerDetachEvent extends DemoEventCommon {
    event_name: "silencer_detach"
    userid: string
}

interface InspectWeaponEvent extends DemoEventCommon {
    event_name: "inspect_weapon"
    userid: string
}

interface WeaponZoomRifleEvent extends DemoEventCommon {
    event_name: "weapon_zoom_rifle"
    userid: string
}

interface PlayerSpawnedEvent extends DemoEventCommon {
    event_name: "player_spawned"
    userid: string
    inrestart: boolean
}

interface ItemPickupSlerpEvent extends DemoEventCommon {
    event_name: "item_pickup_slerp"
    userid: string
    index: number
    behavior: number
}

interface ItemPickupFailedEvent extends DemoEventCommon {
    event_name: "item_pickup_failed"
    userid: string
    item: string
    reason: number
    limit: number
}

interface ItemRemoveEvent extends DemoEventCommon {
    event_name: "item_remove"
    userid: string
    item: string
    defindex: number
}

interface AmmoPickupEvent extends DemoEventCommon {
    event_name: "ammo_pickup"
    userid: string
    item: string
    index: number
}

interface EnterBuyzoneEvent extends DemoEventCommon {
    event_name: "enter_buyzone"
    userid: string
    canbuy: boolean
}

interface ExitBuyzoneEvent extends DemoEventCommon {
    event_name: "exit_buyzone"
    userid: string
    canbuy: boolean
}

interface EnterBombzoneEvent extends DemoEventCommon {
    event_name: "enter_bombzone"
    userid: string
    hasbomb: boolean
    isplanted: boolean
}

interface ExitBombzoneEvent extends DemoEventCommon {
    event_name: "exit_bombzone"
    userid: string
    hasbomb: boolean
    isplanted: boolean
}

interface EnterRescueZoneEvent extends DemoEventCommon {
    event_name: "enter_rescue_zone"
    userid: string
}

interface ExitRescueZoneEvent extends DemoEventCommon {
    event_name: "exit_rescue_zone"
    userid: string
}

interface SilencerOffEvent extends DemoEventCommon {
    event_name: "silencer_off"
    userid: string
}

interface SilencerOnEvent extends DemoEventCommon {
    event_name: "silencer_on"
    userid: string
}

interface BuymenuOpenEvent extends DemoEventCommon {
    event_name: "buymenu_open"
    userid: string
}

interface BuymenuCloseEvent extends DemoEventCommon {
    event_name: "buymenu_close"
    userid: string
}

interface GrenadeBounceEvent extends DemoEventCommon {
    event_name: "grenade_bounce"
    userid: string
}

interface MolotovDetonateEvent extends DemoEventCommon {
    event_name: "molotov_detonate"
    userid: string
    x: number
    y: number
    z: number
}

interface DecoyDetonateEvent extends DemoEventCommon {
    event_name: "decoy_detonate"
    userid: string
    entityid: number
    x: number
    y: number
    z: number
}

interface DecoyStartedEvent extends DemoEventCommon {
    event_name: "decoy_started"
    entityid: number
    x: number
    y: number
    z: number
}

interface TagrenadeDetonateEvent extends DemoEventCommon {
    event_name: "tagrenade_detonate"
    userid: string
    entityid: number
    x: number
    y: number
    z: number
}

interface InfernoExtinguishEvent extends DemoEventCommon {
    event_name: "inferno_extinguish"
    entityid: number
    x: number
    y: number
    z: number
}

interface DecoyFiringEvent extends DemoEventCommon {
    event_name: "decoy_firing"
    userid: string
    entityid: number
    x: number
    y: number
    z: number
}

interface BulletImpactEvent extends DemoEventCommon {
    event_name: "bullet_impact"
    userid: string
    x: number
    y: number
    z: number
}

interface PlayerFalldamageEvent extends DemoEventCommon {
    event_name: "player_falldamage"
    userid: string
    damage: number
}

interface DoorMovingEvent extends DemoEventCommon {
    event_name: "door_moving"
    userid: string
    entindex: number
}

interface MbInputLockSuccessEvent extends DemoEventCommon {
    event_name: "mb_input_lock_success"
}

interface MbInputLockCancelEvent extends DemoEventCommon {
    event_name: "mb_input_lock_cancel"
}

interface NavBlockedEvent extends DemoEventCommon {
    event_name: "nav_blocked"
    area: number
    blocked: boolean
}

interface NavGenerateEvent extends DemoEventCommon {
    event_name: "nav_generate"
}

interface AchievementInfoLoadedEvent extends DemoEventCommon {
    event_name: "achievement_info_loaded"
}

interface HltvChangedModeEvent extends DemoEventCommon {
    event_name: "hltv_changed_mode"
    oldmode: number
    newmode: number
    obs_target: number
}

interface CsGameDisconnectedEvent extends DemoEventCommon {
    event_name: "cs_game_disconnected"
}

interface CsWinPanelRoundEvent extends DemoEventCommon {
    event_name: "cs_win_panel_round"
    show_timer_defend: boolean
    show_timer_attack: boolean
    timer_time: number
    final_event: number
    funfact_token: string
    funfact_player: string
    funfact_data1: number
    funfact_data2: number
    funfact_data3: number
}

interface CsMatchEndRestartEvent extends DemoEventCommon {
    event_name: "cs_match_end_restart"
}

interface ShowDeathpanelEvent extends DemoEventCommon {
    event_name: "show_deathpanel"
    victim: string
    killer: number
    killer_controller: string
    hits_taken: number
    damage_taken: number
    hits_given: number
    damage_given: number
}

interface HideDeathpanelEvent extends DemoEventCommon {
    event_name: "hide_deathpanel"
}

interface PlayerAvengedTeammateEvent extends DemoEventCommon {
    event_name: "player_avenged_teammate"
    avenger_id: string
    avenged_player_id: string
}

interface AchievementEarnedLocalEvent extends DemoEventCommon {
    event_name: "achievement_earned_local"
    achievement: number
    splitscreenplayer: number
}

interface RepostXboxAchievementsEvent extends DemoEventCommon {
    event_name: "repost_xbox_achievements"
    splitscreenplayer: number
}

interface MatchEndConditionsEvent extends DemoEventCommon {
    event_name: "match_end_conditions"
    frags: number
    max_rounds: number
    win_rounds: number
    time: number
}

interface RoundMvpEvent extends DemoEventCommon {
    event_name: "round_mvp"
    userid: string
    reason: number
    value: number
    musickitmvps: number
    nomusic: number
    musickitid: number
}

interface ClientDisconnectEvent extends DemoEventCommon {
    event_name: "client_disconnect"
}

interface GgKilledEnemyEvent extends DemoEventCommon {
    event_name: "gg_killed_enemy"
    victimid: string
    attackerid: string
    dominated: number
    revenge: number
    bonus: boolean
}

interface SwitchTeamEvent extends DemoEventCommon {
    event_name: "switch_team"
    numPlayers: number
    numSpectators: number
    avg_rank: number
    numTSlotsFree: number
    numCTSlotsFree: number
}

interface WriteProfileDataEvent extends DemoEventCommon {
    event_name: "write_profile_data"
}

interface TrialTimeExpiredEvent extends DemoEventCommon {
    event_name: "trial_time_expired"
    userid: string
}

interface UpdateMatchmakingStatsEvent extends DemoEventCommon {
    event_name: "update_matchmaking_stats"
}

interface PlayerResetVoteEvent extends DemoEventCommon {
    event_name: "player_reset_vote"
    userid: string
    vote: boolean
}

interface EnableRestartVotingEvent extends DemoEventCommon {
    event_name: "enable_restart_voting"
    enable: boolean
}

interface SfuieventEvent extends DemoEventCommon {
    event_name: "sfuievent"
    action: string
    data: string
    slot: number
}

interface StartVoteEvent extends DemoEventCommon {
    event_name: "start_vote"
    userid: string
    type: number
    vote_parameter: number
}

interface PlayerGivenC4Event extends DemoEventCommon {
    event_name: "player_given_c4"
    userid: string
}

interface TrPlayerFlashbangedEvent extends DemoEventCommon {
    event_name: "tr_player_flashbanged"
    userid: string
}

interface TrMarkCompleteEvent extends DemoEventCommon {
    event_name: "tr_mark_complete"
    complete: number
}

interface TrMarkBestTimeEvent extends DemoEventCommon {
    event_name: "tr_mark_best_time"
    time: number
}

interface TrExitHintTriggerEvent extends DemoEventCommon {
    event_name: "tr_exit_hint_trigger"
}

interface BotTakeoverEvent extends DemoEventCommon {
    event_name: "bot_takeover"
    userid: string
    botid: string
}

interface TrShowFinishMsgboxEvent extends DemoEventCommon {
    event_name: "tr_show_finish_msgbox"
}

interface TrShowExitMsgboxEvent extends DemoEventCommon {
    event_name: "tr_show_exit_msgbox"
}

interface JointeamFailedEvent extends DemoEventCommon {
    event_name: "jointeam_failed"
    userid: string
    reason: number
}

interface TeamchangePendingEvent extends DemoEventCommon {
    event_name: "teamchange_pending"
    userid: string
    toteam: number
}

interface MaterialDefaultCompleteEvent extends DemoEventCommon {
    event_name: "material_default_complete"
}

interface CsPrevNextSpectatorEvent extends DemoEventCommon {
    event_name: "cs_prev_next_spectator"
    next: boolean
}

interface NextlevelChangedEvent extends DemoEventCommon {
    event_name: "nextlevel_changed"
    nextlevel: string
    mapgroup: string
    skirmishmode: string
}

interface SeasoncoinLevelupEvent extends DemoEventCommon {
    event_name: "seasoncoin_levelup"
    userid: string
    category: number
    rank: number
}

interface TournamentRewardEvent extends DemoEventCommon {
    event_name: "tournament_reward"
    defindex: number
    totalrewards: number
    accountid: number
}

interface StartHalftimeEvent extends DemoEventCommon {
    event_name: "start_halftime"
}

interface AmmoRefillEvent extends DemoEventCommon {
    event_name: "ammo_refill"
    userid: string
    success: boolean
}

interface ParachutePickupEvent extends DemoEventCommon {
    event_name: "parachute_pickup"
    userid: string
}

interface ParachuteDeployEvent extends DemoEventCommon {
    event_name: "parachute_deploy"
    userid: string
}

interface DronegunAttackEvent extends DemoEventCommon {
    event_name: "dronegun_attack"
    userid: string
}

interface DroneDispatchedEvent extends DemoEventCommon {
    event_name: "drone_dispatched"
    userid: string
    priority: number
    drone_dispatched: number
}

interface LootCrateVisibleEvent extends DemoEventCommon {
    event_name: "loot_crate_visible"
    userid: string
    subject: number
    type: string
}

interface LootCrateOpenedEvent extends DemoEventCommon {
    event_name: "loot_crate_opened"
    userid: string
    type: string
}

interface OpenCrateInstrEvent extends DemoEventCommon {
    event_name: "open_crate_instr"
    userid: string
    subject: number
    type: string
}

interface SmokeBeaconParadropEvent extends DemoEventCommon {
    event_name: "smoke_beacon_paradrop"
    userid: string
    paradrop: number
}

interface SurvivalParadropSpawnEvent extends DemoEventCommon {
    event_name: "survival_paradrop_spawn"
    entityid: number
}

interface SurvivalParadropBreakEvent extends DemoEventCommon {
    event_name: "survival_paradrop_break"
    entityid: number
}

interface DroneCargoDetachedEvent extends DemoEventCommon {
    event_name: "drone_cargo_detached"
    userid: string
    cargo: number
    delivered: boolean
}

interface DroneAboveRoofEvent extends DemoEventCommon {
    event_name: "drone_above_roof"
    userid: string
    cargo: number
}

interface ChoppersIncomingWarningEvent extends DemoEventCommon {
    event_name: "choppers_incoming_warning"
    global: boolean
}

interface FirstbombsIncomingWarningEvent extends DemoEventCommon {
    event_name: "firstbombs_incoming_warning"
    global: boolean
}

interface DzItemInteractionEvent extends DemoEventCommon {
    event_name: "dz_item_interaction"
    userid: string
    subject: number
    type: string
}

interface SurvivalTeammateRespawnEvent extends DemoEventCommon {
    event_name: "survival_teammate_respawn"
    userid: string
}

interface SurvivalNoRespawnsWarningEvent extends DemoEventCommon {
    event_name: "survival_no_respawns_warning"
    userid: string
}

interface SurvivalNoRespawnsFinalEvent extends DemoEventCommon {
    event_name: "survival_no_respawns_final"
    userid: string
}

interface PlayerPingEvent extends DemoEventCommon {
    event_name: "player_ping"
    userid: string
    entityid: number
    x: number
    y: number
    z: number
    urgent: boolean
}

interface PlayerPingStopEvent extends DemoEventCommon {
    event_name: "player_ping_stop"
    entityid: number
}

interface PlayerSoundEvent extends DemoEventCommon {
    event_name: "player_sound"
    userid: string
    radius: number
    duration: number
    step: boolean
}

interface GuardianWaveRestartEvent extends DemoEventCommon {
    event_name: "guardian_wave_restart"
}

interface TeamIntroStartEvent extends DemoEventCommon {
    event_name: "team_intro_start"
}

interface TeamIntroEndEvent extends DemoEventCommon {
    event_name: "team_intro_end"
}

interface BulletFlightResolutionEvent extends DemoEventCommon {
    event_name: "bullet_flight_resolution"
    userid: string
    pos_x: number
    pos_y: number
    pos_z: number
    ang_x: number
    ang_y: number
    ang_z: number
    start_x: number
    start_y: number
    start_z: number
}

interface DoorBreakEvent extends DemoEventCommon {
    event_name: "door_break"
    entindex: number
    dmgstate: number
}

interface DoorClosedEvent extends DemoEventCommon {
    event_name: "door_closed"
    entindex: number
}

interface DoorOpenEvent extends DemoEventCommon {
    event_name: "door_open"
    entindex: number
}

interface GamePhaseChangedEvent extends DemoEventCommon {
    event_name: "game_phase_changed"
    new_phase: number
}

interface HltvReplayStatusEvent extends DemoEventCommon {
    event_name: "hltv_replay_status"
    reason: number
}


