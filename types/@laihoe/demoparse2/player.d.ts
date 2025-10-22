export type DemoPlayerState = {
  /** m_vec + m_cell */
  X: unknown;
  /** m_vec + m_cell */
  Y: unknown;
  /** m_vec + m_cell */
  Z: unknown;
  /** m_iHealth */
  health: unknown;
  /** m_iScore */
  score: unknown;
  /** m_iMVPs */
  mvps: unknown;
  /** m_bPawnIsAlive */
  is_alive: unknown;
  /** m_iAccount */
  balance: unknown;
  /** _ */
  inventory: unknown;
  /** - */
  inventory_as_ids: unknown;
  /** m_lifeState */
  life_state: unknown;
  /** m_angEyeAngles[0] */
  pitch: unknown;
  /** m_angEyeAngles[1] */
  yaw: unknown;
  /** m_bHasCommunicationAbuseMute */
  is_auto_muted: unknown;
  /** m_szCrosshairCodes */
  crosshair_code: string;
  /** m_iPendingTeamNum */
  pending_team_num: unknown;
  /** m_iCompTeammateColor */
  player_color: unknown;
  /** m_bEverPlayedOnTeam */
  ever_played_on_team: unknown;
  /** m_iCoachingTeam */
  is_coach_team: unknown;
  /** m_iCompetitiveRanking */
  rank: unknown;
  /** m_iCompetitiveRankingPredicted_Win */
  rank_if_win: unknown;
  /** m_iCompetitiveRankingPredicted_Loss */
  rank_if_loss: unknown;
  /** m_iCompetitiveRankingPredicted_Tie */
  rank_if_tie: unknown;
  /** m_iCompetitiveWins */
  comp_wins: unknown;
  /** m_iCompetitiveRankType */
  comp_rank_type: unknown;
  /** m_bControllingBot */
  is_controlling_bot: unknown;
  /** m_bHasControlledBotThisRound */
  has_controlled_bot_this_round: unknown;
  /** m_bCanControlObservedBot */
  can_control_bot: unknown;
  /** m_bPawnHasDefuser */
  has_defuser: unknown;
  /** m_bPawnHasHelmet */
  has_helmet: unknown;
  /** m_iPawnLifetimeStart */
  spawn_time: unknown;
  /** m_iPawnLifetimeEnd */
  death_time: unknown;
  /** net_tick */
  game_time: unknown;
  /** m_iConnected */
  is_connected: unknown;
  /** m_iszPlayerName */
  player_name: unknown;
  /** m_steamID */
  player_steamid: unknown;
  /** m_iDesiredFOV */
  fov: unknown;
  /** m_iStartAccount */
  start_balance: unknown;
  /** m_iTotalCashSpent */
  total_cash_spent: unknown;
  /** m_iCashSpentThisRound */
  cash_spent_this_round: unknown;
  /** m_unMusicID */
  music_kit_id: unknown;
  /** m_nPersonaDataPublicCommendsLeader */
  leader_honors: unknown;
  /** m_nPersonaDataPublicCommendsTeacher */
  teacher_honors: unknown;
  /** m_nPersonaDataPublicCommendsFriendly */
  friendly_honors: unknown;
  /** m_iPing */
  ping: unknown;
  /** m_MoveCollide */
  move_collide: unknown;
  /** m_MoveType */
  move_type: unknown;
  /** m_iTeamNum */
  team_num: unknown;
  /** m_hActiveWeapon */
  active_weapon: unknown;
  /** m_bIsLookingAtWeapon */
  looking_at_weapon: unknown;
  /** m_bIsHoldingLookAtWeapon */
  holding_look_at_weapon: unknown;
  /** m_flNextAttack */
  next_attack_time: unknown;
  /** m_nDuckTimeMsecs */
  duck_time_ms: unknown;
  /** m_flMaxspeed */
  max_speed: unknown;
  /** m_flMaxFallVelocity */
  max_fall_velo: unknown;
  /** m_flDuckAmount */
  duck_amount: unknown;
  /** m_flDuckSpeed */
  duck_speed: unknown;
  /** m_bDuckOverride */
  duck_overrdie: unknown;
  /** m_bOldJumpPressed */
  old_jump_pressed: unknown;
  /** m_flJumpUntil */
  jump_until: unknown;
  /** m_flJumpVel */
  jump_velo: unknown;
  /** m_flFallVelocity */
  fall_velo: unknown;
  /** m_bInCrouch */
  in_crouch: unknown;
  /** m_nCrouchState */
  crouch_state: unknown;
  /** m_bDucked */
  ducked: unknown;
  /** m_bDucking */
  ducking: unknown;
  /** m_bInDuckJump */
  in_duck_jump: unknown;
  /** m_bAllowAutoMovement */
  allow_auto_movement: unknown;
  /** m_nJumpTimeMsecs */
  jump_time_ms: unknown;
  /** m_flLastDuckTime */
  last_duck_time: unknown;
  /** m_bIsRescuing */
  is_rescuing: unknown;
  /** m_iWeaponPurchasesThisMatch */
  weapon_purchases_this_match: unknown;
  /** m_iWeaponPurchasesThisRound */
  weapon_purchases_this_round: unknown;
  /** m_bSpotted */
  spotted: unknown;
  /** m_bSpottedByMask */
  approximate_spotted_by: unknown;
  /** m_flTimeOfLastInjury */
  time_last_injury: unknown;
  /** m_nRelativeDirectionOfLastInjury */
  direction_last_injury: unknown;
  /** m_iPlayerState */
  player_state: unknown;
  /** m_passiveItems */
  passive_items: unknown;
  /** m_bIsScoped */
  is_scoped: unknown;
  /** m_bIsWalking */
  is_walking: unknown;
  /** m_bResumeZoom */
  resume_zoom: unknown;
  /** m_bIsDefusing */
  is_defusing: unknown;
  /** m_bIsGrabbingHostage */
  is_grabbing_hostage: unknown;
  /** m_iBlockingUseActionInProgress */
  blocking_use_in_progess: unknown;
  /** m_fMolotovDamageTime */
  molotov_damage_time: unknown;
  /** m_bHasMovedSinceSpawn */
  moved_since_spawn: unknown;
  /** m_bInBombZone */
  in_bomb_zone: unknown;
  /** m_bInBuyZone */
  in_buy_zone: unknown;
  /** m_bInNoDefuseArea */
  in_no_defuse_area: unknown;
  /** m_bKilledByTaser */
  killed_by_taser: unknown;
  /** m_iMoveState */
  move_state: unknown;
  /** m_nWhichBombZone */
  which_bomb_zone: unknown;
  /** m_bInHostageRescueZone */
  in_hostage_rescue_zone: unknown;
  /** m_flStamina */
  stamina: unknown;
  /** m_iDirection */
  direction: unknown;
  /** m_iShotsFired */
  shots_fired: unknown;
  /** m_ArmorValue */
  armor_value: unknown;
  /** m_flVelocityModifier */
  velo_modifier: unknown;
  /** m_flGroundAccelLinearFracLastTime */
  ground_accel_linear_frac_last_time: unknown;
  /** m_flFlashDuration */
  flash_duration: unknown;
  /** m_flFlashMaxAlpha */
  flash_max_alpha: unknown;
  /** m_bWaitForNoAttack */
  wait_for_no_attack: unknown;
  /** m_szLastPlaceName */
  last_place_name: unknown;
  /** m_bStrafing */
  is_strafing: unknown;
  /** m_unRoundStartEquipmentValue */
  round_start_equip_value: unknown;
  /** m_unCurrentEquipmentValue */
  current_equip_value: unknown;
  /** - */
  velocity: unknown;
  /** - */
  velocity_X: unknown;
  /** - */
  velocity_Y: unknown;
  /** - */
  velocity_Z: unknown;
  /** - */
  agent_skin: unknown;
  /** - */
  user_id: unknown;
  /** - */
  entity_id: unknown;
  /** m_hGroundEntity */
  is_airborne: unknown;
  /** CCSPlayerPawn.m_aimPunchAngle */
  aim_punch_angle: unknown;
  /** CCSPlayerPawn.m_aimPunchAngleVel */
  aim_punch_angle_vel: unknown;
  /** - */
  glove_paint_id: unknown;
  /** - */
  glove_paint_seed: unknown;
  /** - */
  glove_paint_float: unknown;
  /** - */
  glove_item_idx: unknown;
} & DemoAggregatedPlayerState

export type DemoPlayerStateProperties = keyof DemoPlayerState

type DemoAggregatedPlayerState = {
  /** m_iKills */
  kills_total: unknown;
  /** m_iDeaths */
  deaths_total: unknown;
  /** m_iAssists */
  assists_total: unknown;
  /** m_iLiveTime */
  alive_time_total: unknown;
  /** m_iHeadShotKills */
  headshot_kills_total: unknown;
  /** m_iEnemy5Ks */
  ace_rounds_total: unknown;
  /** m_iEnemy4Ks */
  "4k_rounds_total": unknown;
  /** m_iEnemy3Ks */
  "3k_rounds_total": unknown;
  /** m_iDamage */
  damage_total: unknown;
  /** m_iObjective */
  objective_total: unknown;
  /** m_iUtilityDamage */
  utility_damage_total: unknown;
  /** m_iEnemiesFlashed */
  enemies_flashed_total: unknown;
  /** m_iEquipmentValue */
  equipment_value_total: unknown;
  /** m_iMoneySaved */
  money_saved_total: unknown;
  /** m_iKillReward */
  kill_reward_total: unknown;
  /** - */
  cash_earned_total: unknown;
}